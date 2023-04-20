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
  titlePound = 'Libra Esterlina'

  valueCanadian: any;
  variationCanadian: any;
  dateCanadian: any;

  valueArgentine: any;
  variationArgentine: any;
  dateArgentine: any;

  valuePound: any;
  variationPound: any;
  datePound: any;

  
  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.canadianValues();
    this.argentineValues();
    this.poundValues();

  }

  canadianValues() {
    this.http.get('https://economia.awesomeapi.com.br/last/CAD-BRL').subscribe((data) => {
      const valores = Object.values(data);

      const ask = valores.map((num) => num.ask);
      this.valueCanadian = ask;

      const canadianVariation = valores.map((num) => num.varBid * 100);
      this.variationCanadian = canadianVariation;

      const canadianUpdate = valores.map((num) => num.timestamp);

      const dateToString = canadianUpdate.toString();
  
      const dateToInt = parseInt(dateToString)
      
      const date = new Date(dateToInt);  

      const dataHora = date.toLocaleString('pt-BR', { timeStyle: 'medium' });  

      this.dateCanadian = dataHora;
    });
  }

  argentineValues() {
    this.http.get('https://economia.awesomeapi.com.br/last/ARS-BRL').subscribe((data) => {
      const valores = Object.values(data);

      const ask = valores.map((num) => num.ask);
      this.valueArgentine = ask;

      const argentineVariation = valores.map((num) => num.varBid * 100);
      this.variationArgentine = argentineVariation;

      const argentineUpdate = valores.map((num) => num.timestamp);

      const dateToString = argentineUpdate.toString();
  
      const dateToInt = parseInt(dateToString)
      
      const date = new Date(dateToInt);  

      const dataHora = date.toLocaleString('pt-BR', { timeStyle: 'medium' });  

      this.dateArgentine = dataHora;
    });
  }

  poundValues() {
    this.http.get('https://economia.awesomeapi.com.br/last/GBP-BRL').subscribe((data) => {
      const valores = Object.values(data);

      const ask = valores.map((num) => num.ask);
      this.valuePound = ask;

      const poundVariation = valores.map((num) => num.varBid * 100);
      this.variationPound = poundVariation;

      const poundUpdate = valores.map((num) => num.timestamp);

      const dateToString = poundUpdate.toString();
  
      const dateToInt = parseInt(dateToString)
      
      const date = new Date(dateToInt);  

      const dataHora = date.toLocaleString('pt-BR', { timeStyle: 'medium' });  

      this.datePound = dataHora;
    });
  }


  

}
