import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../../models/item';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  //susikuriame objekto atributus ir priskiriame defaultines reiksmes
  public name: string | null = null;
  public quantity: number | null = 1;

  public order: Item[];

  // private orderService: OrderService | null = null;

   public constructor(private orderService: OrderService) {
    this.order = orderService.order;
  }

  // public constructor(orderService: OrderService) {
  //   this.orderService = orderService;
  // }

  public addItem() {
    if (this.name != null && this.quantity != null) {
        this.orderService.addItem({
          name: this.name,
          quantity: this.quantity
        })
      }
      console.log(this.order);
      this.name = null;
      this.quantity = null;
  }

  
}
