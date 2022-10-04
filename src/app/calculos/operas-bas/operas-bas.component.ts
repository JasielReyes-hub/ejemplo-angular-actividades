import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent implements OnInit {
  resultado: number = 0;
  operacion2: string = ''

  num1: string = ''
  num2: string = ''
  // num3: string = ''


  constructor() { }
  operacion3(): void{
    if (this.operacion2 == "+")
    {
      this.sumar();
    }
    else if (this.operacion2 == "-"){
      this.restar();
    }
    else if (this.operacion2 == "*"){
      this.multiplicar();
    }
    else if (this.operacion2 == "/"){
      this.dividir();
    }
  }
  
  sumar(): void {
    this.resultado = parseInt(this.num1) + parseInt(this.num2);
  }
  restar(): void {
    this.resultado = parseInt(this.num1) - parseInt(this.num2);
  }
  multiplicar(): void {
    this.resultado = parseInt(this.num1) * parseInt(this.num2);
  }
  dividir(): void {
    this.resultado = parseInt(this.num1) / parseInt(this.num2);
  }

  ngOnInit(): void {
    
  }




}
