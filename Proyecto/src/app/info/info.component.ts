import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Output()enviarPersona=new EventEmitter<string>()
  @Output()enviarEdad=new EventEmitter<number>()
   enviarInvitado(nombre:string,edad:string){
   this.enviarPersona.emit(nombre)
   this.enviarEdad.emit(parseInt(edad))
 }
  constructor() { }

  ngOnInit(): void {
  }

}
