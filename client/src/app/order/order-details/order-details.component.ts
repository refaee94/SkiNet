import { Component, OnInit } from "@angular/core";
import { IOrder } from "src/app/shared/models/order";
import { ActivatedRoute } from "@angular/router";
import { BreadcrumbService } from "xng-breadcrumb";
import { OrderService } from "../order.service";

@Component({
  selector: "app-order-detailed",
  templateUrl: "./order-details.component.html",
  styleUrls: ["./order-details.component.scss"],
})
export class OrderDetailsComponent implements OnInit {
  order: IOrder;

  constructor(
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private ordersService: OrderService
  ) {
    this.breadcrumbService.set("@orderDetails", "");
  }

  ngOnInit() {
    this.ordersService
      .getOrder(+this.route.snapshot.paramMap.get("id"))
      .subscribe(
        (order: IOrder) => {
          this.order = order;
          this.breadcrumbService.set(
            "@orderDetails",
            `Order# ${order.id} - ${order.status}`
          );
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
