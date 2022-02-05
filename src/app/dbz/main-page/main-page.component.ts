import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  personajes: Personaje[] = [

    {
      nombre: 'Goku',
      poder: 18000
    },

    {
      nombre: 'Krilin',
      poder: 100
    },

    {
      nombre: 'Vegueta',
      poder: 11000
    }

  ];

  nuevo : Personaje = {
    nombre : '',
    poder : 0
  }


  
}
