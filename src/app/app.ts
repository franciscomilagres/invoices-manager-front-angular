import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, RouterOutlet } from '@angular/router';
import { InitialPageDemo } from './pages/initial-page-demo/initial-page-demo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, CommonModule, RouterModule, InitialPageDemo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('invoices-manager-front-angular');
}
