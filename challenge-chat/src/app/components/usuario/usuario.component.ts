import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  imports: [FormsModule, CommonModule],
  standalone: true
})
export class UsuarioComponent {
  @Input() nombre: string = "";
  mensaje: string = "";
  @Output() mensajeEnviar = new EventEmitter<string>();

  enviar(){
    this.mensajeEnviar.emit(this.mensaje);
    this.mensaje = "";
  }
}