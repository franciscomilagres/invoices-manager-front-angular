import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ImCustomer } from "../shared/models/customer.model";

const CUSTOMERS_API = '/api/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private http = inject(HttpClient);

  listAll(): Observable<ImCustomer[]> {
    return this.http.get<ImCustomer[]>(CUSTOMERS_API);
  }
}