
import { Component, inject, OnInit, signal } from '@angular/core';
import { CustomerList } from '../../../components/customers/customer-list/customer-list';
import { ImCustomer } from '../../../shared/models/customer.model';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-list-all-customers',
  standalone: true,
  imports: [CustomerList, MatButtonModule, CommonModule, RouterModule],
  templateUrl: './list-all-customers.html',
  styleUrl: './list-all-customers.scss',
})
export class ListAllCustomers implements OnInit {
  private customerService = inject(CustomerService);

  customers = signal<ImCustomer[]>([])


  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService.listAll().subscribe((data: ImCustomer[]) => {
      this.customers.set(data);
    })
  }
}

