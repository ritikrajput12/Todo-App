import { useState } from 'react';

function TodoInput({ onAddTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onAddTodo(trimmed);
    setValue('');
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Capture a task..."
        aria-label="Add a new todo"
      />
      <button type="submit" aria-label="Add todo">
        Add
      </button>
    </form>
  );
}

export default TodoInput;









