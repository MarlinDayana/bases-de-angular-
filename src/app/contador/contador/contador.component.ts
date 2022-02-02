import {Component} from '@angular/core'

@Component({
   selector: 'app-contador',
   template: `
    <h1> {{ title }} </h1>

    <h3>La base del acumulador es: <strong>{{ base }}</strong></h3>

    <button (click)="acumular(+base)">+{{ base }}</button>

    <span> {{ numero }}</span>

    <button (click)="acumular(-base)">-{{ base }}</button>
   `
})
export class ContadorComponent{

  title : String = 'Contador App';
  numero : number = 10;

  base: number =5

  acumular(valor : number=this.base){
    this.numero += valor;
  }


}
