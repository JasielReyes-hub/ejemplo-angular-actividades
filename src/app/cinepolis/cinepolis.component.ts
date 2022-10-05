import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})


export class CinepolisComponent {
  comprador1: string = '';
  comprados: string = '';
  PagoTarjeta: string = '';
  BoletosCantidad: string = '';
  Aviso: string;
  MensajeActivar: boolean;



  
  boletosPer: number = 0;
  Cliente: string = '';
  PrecioTotal: number = 0;
  costoU: number = 0;
  boletosP: number = 0;
  Namecomprador: string = '';
  porcentaje15: number = 0;
  porcentaje10: number = 0;
  activar1:boolean;

  constructor() {}

  procesar(): void {

    //Operaciones a realizar
    this.costoU = parseInt(this.BoletosCantidad) * 12;
    this.boletosP = parseInt(this.comprados) * 7;
    this.boletosPer = parseInt(this.BoletosCantidad);

   //Porcentajes a realizar
    this.porcentaje10 = (this.costoU * 10) / 100;
    this.porcentaje15 = (this.costoU * 15) / 100;



    if (this.boletosPer <= this.boletosP) {
      if (
        this.BoletosCantidad == '3' ||
        this.BoletosCantidad == '4' ||
        this.BoletosCantidad == '5' 
        
      ) {
        this.activar1=true;
        this.MensajeActivar = false;
        this.Namecomprador = this.comprador1;
        this.PrecioTotal = this.costoU - this.porcentaje10;
        this.Aviso = '';

      } else if (this.BoletosCantidad == '1' || this.BoletosCantidad == '2') {
        this.MensajeActivar = false;
        this.activar1=true;
        this.Namecomprador = this.comprador1;
        this.PrecioTotal = this.costoU;
        this.Aviso = '';
      } else {
        this.MensajeActivar = false;
        this.activar1=true;
        this.Namecomprador = this.comprador1;
        this.PrecioTotal = this.costoU - this.porcentaje15;
        this.Aviso = '';
      }
      
      if (this.PagoTarjeta == 'si') {
        this.PrecioTotal = this.PrecioTotal - (this.PrecioTotal * .10);
      } 
      if (this.PagoTarjeta == 'no') {
        this.PrecioTotal
      } 

    }
    else{
      this.Aviso= ("Recuerda que solo se puede comprar 7 boletos por persona");
      this.MensajeActivar = true;
      this.activar1=false;
    }
  }
}
