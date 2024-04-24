import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Item } from '../../models/item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  public order: Item[];

  public constructor (private orderService: OrderService) {
    this.order = orderService.order;
  }

  public deleteItem (i:number) {
    this.orderService.deleteItem(i);
  }

}
