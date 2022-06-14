import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  @Input() titulo:string='lorem'
  @Input() info:string='Hola hola hola'
  @Input() imagen:string='assets/comeme.png'
  

  constructor() { }

  ngOnInit(): void {
  }

}
