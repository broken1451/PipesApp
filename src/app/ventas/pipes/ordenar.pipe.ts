import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(heroes: Heroe[], ordenarPor: string = 'sin valor'): Heroe[] {
    switch (ordenarPor) {
      case 'nombre':
        return (heroes = heroes.sort((a, b): any => {
          if (a.nombre > b.nombre) {
            return 1;
          } else {
            return -1;
          }
        }));
      case 'vuela':
        return (heroes = heroes.sort((a, b): any => {
          if (a.vuela > b.vuela) {
            return -1;
          } else {
            return 1;
          }
        }));
      case 'color':
        return (heroes = heroes.sort((a, b): any => {
          if (a.color > b.color) {
            return 1;
          } else {
            return -1;
          }
        }));
      default:
        return heroes;
    }

    // if (ordenarPor === 'sin valor') {
    //   return heroes;
    // } else {
    // heroes = heroes.sort((a, b): any => {
    //   if (a.nombre > b.nombre) {
    //     return 1;
    //   } else {
    //     return -1;
    //   }
    // });
    // }
    // return heroes;
  }
}
