import { observer } from "mobx-react-lite";
import listStore from "../stores/ListStore";

const ItemList = observer(() => {
  const handleSortChange = e => {
    listStore.setSortBy(e.target.value);
  };

  const handleFilterChange = e => {
    listStore.setFilterBy(e.target.value);
  };

  return (
    <div>
      <h1>Item List</h1>
      <div>
        <label>
          Sort by:
          <select value={listStore.sortBy} onChange={handleSortChange}>
            <option value="">None</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Filter by:
          <input type="text" value={listStore.filterBy} onChange={handleFilterChange} />
        </label>
      </div>
      <ul>
        {listStore.sortedItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
});

export default ItemList;
