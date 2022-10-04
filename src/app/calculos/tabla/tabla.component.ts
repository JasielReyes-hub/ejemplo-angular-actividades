import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  num:number;
  resultado:string[]=[];

  constructor() { }
  
  generador():void{
    let resultado:string[]=[];
    let v:number=1;

    while(v<=10){
      resultado.push(this.num+"x"+v+"="+(this.num*v));
      this.resultado=resultado;

      v++;
    }
  }

  ngOnInit(): void {
  }

}
