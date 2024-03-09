import { makeAutoObservable } from 'mobx';

class ShoppingCartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }

  get totalPrice() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

const shoppingCartStore = new ShoppingCartStore();
export default shoppingCartStore;