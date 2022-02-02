import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes: String[] = [
    'spiderman',
    'thor',
    'ironman',
    'blackwidow',
    'hulk',
    'capitan america',
  ];


  heroeeliminado: String = '';

  borrarHeroe():any {

    this.heroeeliminado = this.heroes.shift()!; //Le estas prometiendo a typeScript que this.heroes.shift() nunca será nulo o undefined
  }
}
