import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Nombrre del componente
  templateUrl: './app.component.html', //nos permite crear una pagina principal
  styleUrls: ['./app.component.css'] // Hojas de estilo
})
export class AppComponent {
  title = 'ejemplo-Angular';
  nombre: string = 'Jasiel'
  escuela: string = 'UTL'

}
