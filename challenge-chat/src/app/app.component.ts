import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalaComponent } from './components/sala/sala.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SalaComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'challenge-chat';
}
