import { observer } from 'mobx-react';
import shoppingCartStore from '../stores/ShoppingStore';

const ShoppingCart = observer(() => {
  const handleAddItem = () => {
    const newItem = { name: `Product ${shoppingCartStore.items.length + 1}`, price: Math.random() * 100 };
    shoppingCartStore.addItem(newItem);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {shoppingCartStore.items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => shoppingCartStore.removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${shoppingCartStore.totalPrice.toFixed(2)}</p>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
});

export default ShoppingCart;
