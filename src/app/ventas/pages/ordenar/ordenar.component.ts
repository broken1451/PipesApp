import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.scss'],
})
export class OrdenarComponent implements OnInit {
  public enMayuscula: boolean;
  public ordenarPor: string;
  public heroes: Heroe[] = [
    {
      nombre: 'SuperMan',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Spiderman',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Iroman',
      vuela: true,
      color: Color.verde,
    },
    {
      nombre: 'Vision',
      vuela: true,
      color: Color.rojo,
    },
  ];

  constructor() {
    this.enMayuscula = true;
    this.ordenarPor = '';
  }

  ngOnInit(): void {}

  toggle(): void {
    this.enMayuscula = !this.enMayuscula;
  }

  cambiarOrden(valor: string): void{
    this.ordenarPor = valor;
  }
}
