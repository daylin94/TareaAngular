import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  @Input()nombresPersonas:Array<string>=[]
  @Input()edadesPersona:Array<number>=[]

  constructor() { }

  ngOnInit(): void {
  }

}
