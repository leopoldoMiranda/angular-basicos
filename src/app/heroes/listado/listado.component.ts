import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['spiderman','ironman','thor','capital america'];
  heroeBorrado: string = '';
  num1: number = 1;
  num2: number = 2;

  borrarHeroe() {
    const heroeBorrado = this.heroes.shift() || '';
    this.heroeBorrado = heroeBorrado;
        
  }

}
