
import { Component } from '@angular/core';
import { CustomerList } from '../../../components/customers/customer-list/customer-list';
import { ImCustomer } from '../../../shared/models/customer.model';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-all-customers',
  standalone: true,
  imports: [CustomerList, MatButtonModule, CommonModule, RouterModule],
  templateUrl: './list-all-customers.html',
  styleUrl: './list-all-customers.scss',
})
export class ListAllCustomers {
  customers: ImCustomer[] = [
    { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com' },
  ];
}

