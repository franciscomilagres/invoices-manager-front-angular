
import { Component, input } from '@angular/core';
import { ImCustomer } from '../../../shared/models/customer.model';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatButtonModule, RouterModule],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.scss',
})
export class CustomerList {
  customers = input<ImCustomer[]>([]);
}
