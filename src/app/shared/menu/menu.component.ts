import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de angular',
        icon: ' pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            routerLink: '/numeros'
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
            routerLink: '/noComunes'
          },
        ],
      },
      {
        label: 'Pipes de personalizados',
        icon: ' pi pi-cog',
        routerLink: 'ordenar'
      }
    ];
  }
}
