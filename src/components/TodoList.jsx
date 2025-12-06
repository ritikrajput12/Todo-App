import TodoItem from './TodoItem.jsx';

function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  if (!todos.length) {
    return (
      <div className="empty-state" role="status" aria-live="polite">
        Nothing here yet—add your first todo!
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;









