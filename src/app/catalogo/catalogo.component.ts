import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {

  mycontador : number = 0;

  texto = '';

  @Output() enviar = new EventEmitter<string>();

  agregar():void {
    this.mycontador++;
  }

  enviartxt() {
    console.log(this.texto)
    this.enviar.emit( this.texto.toUpperCase() );
  }

}
