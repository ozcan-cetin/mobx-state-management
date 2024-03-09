import { useState } from "react";
import { observer } from "mobx-react-lite";
import todoStore from "../stores/TodoStore";

const TodoList = observer(() => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if(newTodo.length > 0){
        todoStore.addTodo(newTodo);
        setNewTodo("");
    }else{
        alert("Lütfen birşeyler yazın")
    }
  };

  const handleRemoveTodo = todo => {
    todoStore.removeTodo(todo);
  };

  const handleAllRemoveTodo = ()=>{
    todoStore.allRemoveTodo()
  }

  return (
    <div>
      <h1>Todo List</h1>
      <div style={{display:`${todoStore.todos.length < 2 ? "none" : "block"}`}}>
      <button onClick={handleAllRemoveTodo}>Remove All</button>
      </div>
      <input
        type="text"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        placeholder="Enter a new todo..."
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todoStore.todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(todo)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default TodoList;

