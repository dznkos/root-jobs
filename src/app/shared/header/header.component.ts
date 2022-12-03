import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // ingreso data  - child
  @Input() contador: number = 0;
  @Output() reinicio = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  reiniciar(){
    this.contador = 0;
    this.reinicio.emit(this.contador)
  }

}
