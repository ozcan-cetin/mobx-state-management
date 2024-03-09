// src/stores/ModalStore.js
import { makeAutoObservable } from "mobx";

class ModalStore {
  isOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }
}

const modalStore = new ModalStore();
export default modalStore;
