import { makeAutoObservable } from "mobx";

class CounterStore {
  count = 5;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

const counterStore = new CounterStore();
export default counterStore;
