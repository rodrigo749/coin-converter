import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  titleCanadian = 'Dólar Canadense';
  valueCanadian = 'R$ 4,37';
  


  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.http.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').subscribe((data) => {
      console.log(data);
    });
  }
  

}
