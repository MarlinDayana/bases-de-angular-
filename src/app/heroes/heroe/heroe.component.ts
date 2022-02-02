import {Component} from '@angular/core'

@Component({
  selector:'app-heroe',
  templateUrl:'heroe.component.html'
})
export class HeroeComponent {

  nombre: String = 'ironman'

  edad:number= 45

  obtenerDatos():String{
      return (`${this.nombre} - ${this.edad}`)

  }

  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }

  cambiarNombre(){
    this.nombre='Thor'
  }

  cambiarEdad(){
    this.edad=167
  }

}

