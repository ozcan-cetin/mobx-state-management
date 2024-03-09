import { makeAutoObservable } from "mobx";

class ListStore {
  items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Another Item" }
  ];
  sortBy = "";
  filterBy = "";

  constructor() {
    makeAutoObservable(this);
  }

  setSortBy(value) {
    this.sortBy = value;
  }

  setFilterBy(value) {
    this.filterBy = value;
  }

  //! Aşağıdakiler hesaplanmış özellik  (computed property) olarak tanmlanır.

  get filteredItems() {
    return this.items.filter(item => item.name.toLowerCase().includes(this.filterBy.toLowerCase()));
  }

  get sortedItems() {
    return this.filteredItems.slice().sort((a, b) => {
      if (this.sortBy === "asc") {
        return a.name.localeCompare(b.name);
      } else if (this.sortBy === "desc") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });
  }
}

const listStore = new ListStore();
export default listStore;
