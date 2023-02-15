import TodoListItem from "./TodoListItem";


const TodoList = ({list, remove, update}) => {
  return (
    <>
      {list?.length > 0 ? (
        <div className="todo-list">
          {list.map((entry, index) => (
            <TodoListItem key={index} entry={entry} onEdit={update} onDelete={remove}/>
          ))}
        </div>
      ) : (
        <div className="empty">
          <p>No task found</p>
        </div>
      )}
    </>
  );
};

export default TodoList;
