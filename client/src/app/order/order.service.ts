import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { IOrder } from "../shared/models/order";

@Injectable({
  providedIn: "root",
})
export class OrderService  {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}


  getOrders() {
    return this.http.get<IOrder[]>(this.baseUrl + "orders");
  }

  getOrder(id: number) {
   return this.http.get<IOrder>(this.baseUrl + "orders/" + id);
  }
}
