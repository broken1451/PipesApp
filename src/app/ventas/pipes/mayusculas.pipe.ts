import { Pipe, PipeTransform } from '@angular/core';
import { Validators } from '@angular/forms';

@Pipe({ name: 'mayuscula' })
export class MayusculasPipe implements PipeTransform {
//   transform(value: string, enMayuscula: boolean= true): string {
  transform(value: string, enMayuscula?: boolean): string {
    // if (enMayuscula) {
    //   return value.toLocaleUpperCase();
    // } else {
    //   return value.toLowerCase();
    // }
    return (enMayuscula) ? value.toLocaleUpperCase() : value.toLowerCase();
  }
}
