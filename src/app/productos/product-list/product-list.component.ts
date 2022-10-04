import { Component, OnInit } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imageWidth: number = 50;
  ImageMargin: number = 2;
  muestraImg:boolean = true;
  listFilter:string = '';

  productos: IProducto [] = [
   {
    "ProductosID": 1,
    "Modelo": "Sentra",
    "Descripcion": "Auto 4 Puertas",
    "Marca" : "Nissan",
    "Year" : "Febrero 3 2020",
    "Precio" : 25550,
    "Puntos" : 3.3,
    "ImagenUrl" : "https://img.remediosdigitales.com/453ca3/nissan-sentra-2020-portada/1366_2000.jpg"

   },
   {
    "ProductosID": 2,
    "Modelo": "K10",
    "Descripcion": "Auto 4 Puertas",
    "Marca" : "KLA",
    "Year" : "Febrero 5 2020",
    "Precio" : 25550,
    "Puntos" : 4.5,
    "ImagenUrl" : "https://static.retail.autofact.cl/blog/c_img_740x370.1aqcsb1k70s0p2z.jpg"

   },
   {
    "ProductosID": 3,
    "Modelo": "Spark",
    "Descripcion": "Auto 4 Puertas",
    "Marca" : "Nissa",
    "Year" : "Febrero 7 2020",
    "Precio" : 2555212,
    "Puntos" : 3.5,
    "ImagenUrl" : "https://img.autosblogmexico.com/2019/09/24/WaxDrR2x/2020-spark-activ-01-0b86.jpg"

   }  
  ]

  constructor() { }

  ShowImagen():void{
    this.muestraImg =! this.muestraImg;
  }

  ngOnInit(): void {
  }

}
