import { makeAutoObservable } from "mobx";

class TodoStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todo) {
    this.todos = this.todos.filter(t => t !== todo);
  }

  allRemoveTodo() {
    this.todos = [];
  }
}

const todoStore = new TodoStore();
export default todoStore;
