import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero',
  templateUrl: './numero.component.html',
  styleUrls: ['./numero.component.scss'],
})
export class NumeroComponent implements OnInit {
  public ventasNetas: number = 226543286.5488;
  public porcentaje: number = 0.4848548;

  constructor() {}

  ngOnInit(): void {}
}
