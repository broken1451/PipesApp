import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public nombre: string = 'Adrian jose BraVO ViLoRia';
  public valor: number = 1000;
  public obj: object = {
    nombre: 'Adrian',
  };

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  mostrarNombre(): void {
    console.log(this.nombre);
    console.log(this.valor);
  }
}
