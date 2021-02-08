import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {

  public nombreLower: string = 'Adrian';
  public nombreUper: string = 'ADRIAN';
  public nombreCompleto: string = 'adRiAN JoSe BRAvo vIlOrIa';
  public fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
