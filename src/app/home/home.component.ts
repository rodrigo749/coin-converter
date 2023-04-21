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

  isBlue: boolean = false;;
  isGreen: boolean = false;
  isRed: boolean = false;

  cachedData = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.canadianValues();
    this.argentineValues();
    this.poundValues();
    this.fetchData();
    setTimeout(this.fetchData, 3 * 60 * 1000);
  }


  canadianValues() {
    this.http.get('https://economia.awesomeapi.com.br/last/CAD-BRL').subscribe((data) => {
      const valores = Object.values(data);

      const ask = valores.map((num) => num.ask);
      this.valueCanadian = ask;
      this.valueCanadian = parseFloat(this.valueCanadian);

      const canadianVariation = valores.map((num) => num.varBid * 100);
      this. variationCanadian = canadianVariation;
      const variantionToInt = parseFloat(this.variationCanadian);
      this.variationCanadian = variantionToInt;

      const canadianUpdate = valores.map((num) => num.timestamp);
      const dateToString = canadianUpdate.toString();
      const dateToInt = parseInt(dateToString);
      const date = new Date(dateToInt);  
      const dataHora = date.toLocaleString('pt-BR', { timeStyle: 'medium' });  
      this.dateCanadian = dataHora;

      this.isGreen = true;
    });
  }

  argentineValues() {
    this.http.get('https://economia.awesomeapi.com.br/last/ARS-BRL').subscribe((data) => {
      const valores = Object.values(data);

      const ask = valores.map((num) => num.ask);
      this.valueArgentine = ask;  
      this.valueArgentine = parseFloat(this.valueArgentine);

      const argentineVariation = valores.map((num) => num.varBid * 100);
      this.variationArgentine = argentineVariation;
      const variantionToInt = parseFloat(this.variationArgentine);
      this.variationArgentine = variantionToInt;

      const argentineUpdate = valores.map((num) => num.timestamp);
      const dateToString = argentineUpdate.toString();
      const dateToInt = parseInt(dateToString)
      const date = new Date(dateToInt);  
      const dataHora = date.toLocaleString('pt-BR', { timeStyle: 'medium' });  
      this.dateArgentine = dataHora;

      this.isRed = true;
    });
  }

  poundValues() {
    this.http.get('https://economia.awesomeapi.com.br/last/GBP-BRL').subscribe((data) => {
      const valores = Object.values(data);

      const ask = valores.map((num) => num.ask);
      this.valuePound = ask;
      this.valuePound = parseFloat(this.valuePound);

      const poundVariation = valores.map((num) => num.varBid * 100);
      this.variationPound = poundVariation;
      const variantionToInt = parseFloat(this.variationPound);
      this.variationPound = variantionToInt;

      const poundUpdate = valores.map((num) => num.timestamp);
      const dateToString = poundUpdate.toString();
      const dateToInt = parseInt(dateToString)
      const date = new Date(dateToInt);  
      const dataHora = date.toLocaleString('pt-BR', { timeStyle: 'medium' });  
      this.datePound = dataHora;

      this.isBlue = true;
    });
  } 

  fetchData() {
    // Faz a requisição usando fetch ou uma biblioteca como axios
    fetch('https://economia.awesomeapi.com.br/last/CAD-BRL,ARS-BRL,GBP-BRL')
      .then(response => response.json())
      .then(data => {
        // Armazena os dados em cache
        this.cachedData = data;
        console.log(this.cachedData);
        
        // Agendando a atualização do cache após 3 minutos
       
      });
  }
  
  // Função que retorna os dados em cache ou faz uma nova requisição caso não haja dados em cache
   getData() {
    if (this.cachedData) {
      console.log(this.cachedData)
      return Promise.resolve(this.cachedData);
      ;
      
    } else {
      return this.fetchData();
    }
  }
  

}
