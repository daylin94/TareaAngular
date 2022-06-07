import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  resultado:boolean=true
  gustos:Array<string>=["Dormir","Viajar","Comer","Ir a el gym","Salir con amigos","Caminar"]
  edad:number=22

  Ocultar(){
    this.resultado=!this.resultado
  }
}
