// src/components/ItemList.js
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import paginationStore from "../stores/PaginationStore";

const ProductList = observer(({ items }) => {
  useEffect(() => {
    paginationStore.setTotalItems(items.length);
  }, [items]);

  return (
    <div>
      <h1>Item List</h1>
      {items.length === 0 ? (
        <p>No items to display.</p>
      ) : (
        <>
          <ul>
            {items.slice(paginationStore.startIndex, paginationStore.endIndex + 1).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button onClick={() => paginationStore.prevPage()}>Prev</button>
          <button onClick={() => paginationStore.nextPage()}>Next</button>
          <p>
            Page {paginationStore.currentPage} of {paginationStore.totalPages}
          </p>
        </>
      )}
    </div>
  );
});

export default ProductList;
