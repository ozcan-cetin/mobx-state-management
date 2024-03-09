import { makeAutoObservable } from "mobx";

class UserStore {
  users = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchUsers() {
    try {
      this.isLoading = true;
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      this.users = data;
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      this.isLoading = false;
    }
  }
}

const userStore = new UserStore();
export default userStore;
