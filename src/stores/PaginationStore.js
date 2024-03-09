import { makeAutoObservable } from "mobx";

class PaginationStore {
  itemsPerPage = 5;
  currentPage = 1;
  totalItems = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setTotalItems(total) {
    this.totalItems = total;
  }

  setPage(page) {
    this.currentPage = page;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get totalPages() {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get startIndex() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex() {
    return Math.min(this.startIndex + this.itemsPerPage - 1, this.totalItems - 1);
  }
}

const paginationStore = new PaginationStore();
export default paginationStore;
