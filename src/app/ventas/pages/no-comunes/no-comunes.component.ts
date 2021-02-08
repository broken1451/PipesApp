import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.scss'],
})
export class NoComunesComponent implements OnInit {
  // i18nSelect
  public nombre: string = 'Adrian';
  public genero: string = 'masculino';
  public gender: boolean = true;
  public invitacionMapping = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // i18nplural
  public clientes: string[] = [
    'maria',
    'pedro',
    'juan',
    'eduardo',
    'carmen',
    'juan',
  ];
  public clientesMapping = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': ' tenemos un cliente esperando',
    '=2': ' tenemos 2 cliente esperando',
    other: ' tenemos # cliente esperando',
  };

  // key value pipe para objetos literales
  public persona = {
    nombre: 'Adrian',
    edad: 28,
    direccion: 'Santiago, Chile',
  };

  // json pipe
  public heroe: any[] = [
    {
      nombre: 'Thor',
      vuela: true,
    },
    {
      nombre: 'Iron man',
      vuela: true,
    },
    {
      nombre: 'Spiderman',
      vuela: false,
    },
  ];

  // async pipe
  public miObservable$: Observable<number> = interval(2000).pipe(
    tap((val)=> console.log('Intervalo ', val))
  );
  public miPromesa: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Tenemos data de promesa');
    }, 3500);
  })

  constructor() {}

  ngOnInit(): void {}

  cambiarCliente(): void {
    if (this.gender) {
      this.nombre = 'Maria';
      this.genero = 'femenino';
      this.gender = false;
    } else {
      this.nombre = 'Adrian';
      this.genero = 'masculino';
      this.gender = true;
    }
  }

  borrarCliente(): void {
    this.clientes.pop();
  }
}
