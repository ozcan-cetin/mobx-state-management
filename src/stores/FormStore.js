import { makeAutoObservable } from "mobx";

class FormStore {
  username = "";
  email = "";

  constructor() {
    makeAutoObservable(this);
  }

  setUsername(username) {
    this.username = username;
  }

  setEmail(email) {
    this.email = email;
  }
}

const formStore = new FormStore();
export default formStore;