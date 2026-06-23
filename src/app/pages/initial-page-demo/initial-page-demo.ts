import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-initial-page-demo',
  imports: [MatButtonModule, RouterModule],
  templateUrl: './initial-page-demo.html',
  styleUrl: './initial-page-demo.scss',
})
export class InitialPageDemo {}
