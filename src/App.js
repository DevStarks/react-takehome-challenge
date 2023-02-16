import {useState} from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./App.css";
import {v4 as uuidv4} from 'uuid';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (content) => {
    const todo = {
      id: uuidv4(),
      content,
      done: false,
    }
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const update = (id, payload) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodo = {...todos[todoIndex], ...payload}
    const newTodos = [...todos]

    newTodos[todoIndex] = newTodo
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <h1>React Todo App</h1>
      <TodoInput addTodo={addTodo}/>
      <TodoList list={todos} remove={deleteTodo} update={update}/>
    </div>
  );
};

export default App;
