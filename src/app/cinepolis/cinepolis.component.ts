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


  // Varibles para operaciones
  boletosPer: number = 0;
  Cliente: string = '';
  PrecioTotal: number = 0;
  costoU: number = 0;
  boletosP: number = 0;
  Namecomprador: string = '';
  porcentaje15: number = 0;
  porcentaje10: number = 0;

  constructor() {}

  procesar(): void {
    this.costoU = parseInt(this.BoletosCantidad) * 12;
    this.boletosP = parseInt(this.comprados) * 7;
    this.boletosPer = parseInt(this.BoletosCantidad);

    // porcentaje
    this.porcentaje10 = (this.costoU * 10) / 100;
    this.porcentaje15 = (this.costoU * 15) / 100;

    if (this.boletosPer <= this.boletosP) {
      if (
        this.BoletosCantidad == '3' ||
        this.BoletosCantidad == '4' ||
        this.BoletosCantidad == '5'
      ) {
        this.Namecomprador = this.comprador1;
        this.PrecioTotal = this.costoU - this.porcentaje10;
      } else if (this.BoletosCantidad == '1' || this.BoletosCantidad == '2') {
        this.Namecomprador = this.comprador1;
        this.PrecioTotal = this.costoU;
      } else {
        this.Namecomprador = this.comprador1;
        this.PrecioTotal = this.costoU - this.porcentaje15;
      }
      if (this.PagoTarjeta == 'si') {
        this.PrecioTotal = this.PrecioTotal - this.porcentaje10;
      } 
      if (this.PagoTarjeta == 'no') {
        this.PrecioTotal
      } 
    }
  }
}
