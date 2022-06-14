import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-tarjeta-invitado',
  templateUrl: './tarjeta-invitado.component.html',
  styleUrls: ['./tarjeta-invitado.component.css']
})
export class TarjetaInvitadoComponent implements OnInit {
  @Input()nombre='Jaime'
  @Input()edad=20
  

  constructor() { }

  ngOnInit(): void {
  }

}
