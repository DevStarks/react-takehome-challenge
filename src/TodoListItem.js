import {useState} from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function TodoListItem({entry, onEdit, onDelete}) {
  const [content, setContent] = useState(entry.content)
  const [dueDate, setDueDate] = useState(entry.dueDate ? new Date(entry.dueDate) : null);
  const [isEditing, setIsEditing] = useState(false)

  const isOverdue = () => dueDate && dueDate < new Date();

  const editTodo = (newAttrs) => {
    onEdit(entry.id, {...entry, ...newAttrs})
    setIsEditing(false)
  }

  const onConfirm = () => editTodo({content, dueDate});

  const onToggleDone = () => {
    editTodo({done: !entry.done})
  }

  const onEditCancel = () => {
    setContent(entry.content)
    setIsEditing(false)
  }

  const renderEditor = () => (
    <div>
      <input type="text"
             name="todo"
             value={content}
             placeholder="Edit your todo"
             onChange={(e) => setContent(e.currentTarget.value)}
      />
      <DatePicker placeholderText='Select a due date'
                  showIcon
                  selected={dueDate}
                  onChange={(date) => setDueDate(date)}/>
      <button onClick={onConfirm}>Confirm</button>
      <button onClick={onEditCancel}>Cancel</button>
    </div>
  )

  return (
    <div className="todo">
      {isEditing ? renderEditor() :
        <>
          <div className="todo-info">
            <div className="todo-info-statuses">
              <span>{entry.done ? '(done)' : ''}</span>
              <span>{isOverdue() ? '(overdue)' : ''}</span>
            </div>
            <div className="todo-entry">{content}</div>
          </div>
          <div className="todo-buttons">
            <button className="edit-button" onClick={onToggleDone}>
              Mark {entry.done ? 'undone' : 'done'}
            </button>
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="delete-button" onClick={() => onDelete(entry.id)}>
              Delete
            </button>
          </div>
        </>
      }
    </div>
  )
}

export default TodoListItem;
