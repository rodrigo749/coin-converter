import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  titleCanadian = 'Dólar Canadense';
  titleArgentine = 'Peso Argentino';
  titleLibra = 'Libra Esterlina'
  valueCanadian: any;
  valueArgentine: any;
  variationCanadian: any;
  updateCanadian: any;
  dateCanadian: any;
  arraySize: any;
  arrayValues: any;

  
  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.canadianValues();

  }

  canadianValues() {
    this.http.get('https://economia.awesomeapi.com.br/last/CAD-BRL').subscribe((data) => {
      console.log(data);
      const valores = Object.values(data);
      console.log(valores);

      const ask = valores.map((num) => num.ask);
      this.valueCanadian = ask;

      const canadianVariation = valores.map((num) => num.varBid * 100);
      this.variationCanadian = canadianVariation;

      const canadianUpdate = valores.map((num) => num.timestamp);
      console.log(canadianUpdate);
      const canadianTimeStamp = canadianUpdate;
      this.updateCanadian = canadianUpdate;
      //console.log('updateCanadian', this.updateCanadian);

      const timestamp = 1618882123000; 
      const date = new Date(timestamp);  
      //console.log('teste', date);
      const dataHora = date.toLocaleString('pt-BR', { timeStyle: 'full' });  

      //console.log(dataHora); 
      this.dateCanadian = dataHora;
    });
    
  }


  

}
