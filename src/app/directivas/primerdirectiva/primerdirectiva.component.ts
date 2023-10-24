import { Component } from '@angular/core';

@Component({
  selector: 'app-primerdirectiva',
  templateUrl: './primerdirectiva.component.html',
  styleUrls: ['./primerdirectiva.component.css']
})
export class PrimerdirectivaComponent {
  color:boolean = true;
  border:boolean = true;

  Lista: Array<string> = ['Argentina', 'Brasil', 'Chile', 'España', 'Mexico'];
  Edad :number = 50;

  Fecha:Date = new Date();
}
