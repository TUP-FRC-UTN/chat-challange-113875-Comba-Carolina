import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css'],
  standalone: true,
  imports: [UsuarioComponent, FormsModule, CommonModule]
})
export class SalaComponent{
  mensajesPepe: string[] = [];
  mensajesMaria: string[] = [];

  recibirMensaje(mensaje: string, usuario: string) {
    const horaActual = new Date().toLocaleTimeString();
    const mensajeConHora = `[${horaActual}] - ${mensaje}`;
    if (usuario === 'Pepe') {
      this.mensajesPepe.push(mensajeConHora);
    }
    
    if (usuario === 'María') {
      this.mensajesMaria.push(mensajeConHora);
    }
  }
}