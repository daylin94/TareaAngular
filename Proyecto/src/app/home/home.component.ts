import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  nombresRecibidos:Array<string>=['']
  edadRecibidas:Array<number>=[]

  agregarNombreRecibido(nombreRecibido:string){
    this.nombresRecibidos.push(nombreRecibido)
  }
  agregarEdadRecibida(edadRecibida:number){
    this.edadRecibidas.push(edadRecibida)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
