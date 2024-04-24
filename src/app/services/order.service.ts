import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public order: Item[] = [];

  constructor() {
    let s = localStorage.getItem("order");
    if (s != null) {
      this.order = JSON.parse(s);
    }
  }

  private save() {
    localStorage.setItem("order", JSON.stringify(this.order));
  }

  public addItem(item: Item) {
    this.order.push(item);
    this.save();
  }

  public deleteItem(i: number) {
    this.order.splice(i, 1);
    this.save();
  }
}
