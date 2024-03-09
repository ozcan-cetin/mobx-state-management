// src/stores/AuthStore.js
import { makeAutoObservable } from "mobx";

class AuthStore {
  isAuthenticated = false;
  user = null;
  errorMessage = "";

  constructor() {
    makeAutoObservable(this);
  }

  login(username, password) {
    if (username.trim() === "" || password.trim() === "") {
      this.errorMessage = "Username and password are required.";
      return;
    }

    // Diğer giriş doğrulama kontrolleri

    // Başarılı giriş durumunda
    this.isAuthenticated = true;
    this.user = { username };
    this.errorMessage = "";
  }

  logout() {
    this.isAuthenticated = false;
    this.user = null;
    this.errorMessage = "";
  }
}

const authStore = new AuthStore();
export default authStore;
