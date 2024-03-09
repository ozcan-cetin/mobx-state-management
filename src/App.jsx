import './App.css'
import AuthComponent from './components/AuthComponent'
import CounterComponent from './components/CounterComponents'
import FormComponent from './components/FormComponents'
import ItemList from './components/ItemList'
import ModalComponent from './components/ModalComponent'
import PreferenceComponent from './components/PreferenceComponent'
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'
import TodoList from './components/TodoList'
import UserListComponent from './components/UserListComponent'

function App() {
  const items = Array.from({ length: 25 }, (_, i) => `Item ${i + 1}`);
  console.log(items);
  return (
    <>
    <div className="App">
      <ShoppingCart/>
      {/* <AuthComponent /> */}
      {/* <PreferenceComponent/> */}
      {/* <ProductList items={items}/> */}
    {/* <ItemList /> */}
      {/* <UserListComponent/>
    <ModalComponent />
    <FormComponent />
      <CounterComponent />
      <TodoList /> */}
    </div>
    </>
  )
}

export default App
