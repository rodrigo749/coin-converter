import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  titleCanadian = 'Dólar Canadense';
  titleArgentino = 'Peso Argentino';
  titleLibra = 'Libra Esterlina'
  valueCanadian: any;
  arraySize: any;
  arrayValues: any;

  
  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.http.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').subscribe((data) => {
      console.log(data);

      // const valores = Object.values(data);
      // console.log(valores);
      // this.arrayValues = valores;

      // const chaves = Object.keys(data);
      // console.log(chaves)
      // this.arraySize = chaves;
    });
  }
  

}
