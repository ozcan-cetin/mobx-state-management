import { observer } from "mobx-react-lite";
import counterStore from "../stores/CounterStore";

const CounterComponent = observer(() => {
  const handleIncrement = () => {
    counterStore.increment();
  };

  const handleDecrement = () => {
    counterStore.decrement();
  };

  return (
    <div>
      <h1>Counter: {counterStore.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
});

export default CounterComponent;
