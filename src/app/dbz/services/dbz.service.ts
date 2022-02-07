import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [

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

  get personajes(): Personaje[] {
      return [...this._personajes];
  }

  constructor(){  }

  agregarPersonaje(personaje: Personaje){
    this._personajes.push(personaje)
  }

}
