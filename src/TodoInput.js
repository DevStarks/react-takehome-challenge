import {useState} from "react";

const TodoInput = ({addTodo}) => {
  const [content, setContent] = useState("");
  const onAdd = () => {
    addTodo(content);
    setContent("")
  }
  
  return (
    <div className="input-wrapper">
      <input
        type="text"
        name="todo"
        value={content}
        placeholder="Create a new todo"
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button className="add-button" onClick={onAdd}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
