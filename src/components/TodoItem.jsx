function TodoItem({ todo, onToggleTodo, onDeleteTodo }) {
  const handleToggle = () => onToggleTodo(todo.id);
  const handleDelete = () => onDeleteTodo(todo.id);

  return (
    <li className={`todo-item${todo.completed ? ' is-complete' : ''}`}>
      <button
        type="button"
        className={`checkbox${todo.completed ? ' checked' : ''}`}
        onClick={handleToggle}
        aria-pressed={todo.completed}
        aria-label={`Mark "${todo.text}" as ${todo.completed ? 'incomplete' : 'complete'}`}
      >
        <span className="checkbox-icon">{todo.completed ? '✓' : ''}</span>
      </button>
      <span className="todo-text">{todo.text}</span>
      <button
        type="button"
        className="delete-button"
        onClick={handleDelete}
        aria-label={`Delete ${todo.text}`}
      >
        ×
      </button>
    </li>
  );
}

export default TodoItem;









