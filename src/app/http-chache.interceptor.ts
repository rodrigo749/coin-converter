import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpCacheInterceptor implements HttpInterceptor {

  private cache = new Map<string, [Date, HttpResponse<any>]>(); // Cache de dados

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Verifica se a solicitação é cacheável
    if (req.method !== 'GET') {
      return next.handle(req);
    }

    // Verifica se a resposta está em cache
    const cachedResponse = this.cache.get(req.urlWithParams);
    if (cachedResponse) {
      // Verifica se a resposta está dentro do tempo de cache
      const [expiry, response] = cachedResponse;
      if (expiry.getTime() > Date.now()) {
        return of(response.clone());
      }
      // Remove a resposta expirada do cache
      this.cache.delete(req.urlWithParams);
    }

    // Solicita os dados ao servidor
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          // Armazena a resposta em cache por 3 minutos
          this.cache.set(req.urlWithParams, [new Date(Date.now() + 3 * 60 * 1000), event.clone()]);
        }
      })
    );
  }

}
