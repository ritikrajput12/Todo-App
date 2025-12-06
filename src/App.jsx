import { useEffect, useMemo, useState } from 'react';
import TodoInput from './components/TodoInput.jsx';
import TodoList from './components/TodoList.jsx';

const STORAGE_KEY = 'modern-todo-list';

const createTodo = (text) => ({
  id: crypto.randomUUID(),
  text,
  completed: false,
  createdAt: Date.now()
});

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setTodos(parsed);
        }
      }
    } catch (error) {
      console.error('Failed to load todos', error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.error('Failed to save todos', error);
    }
  }, [todos]);

  const handleAddTodo = (text) => {
    if (!text.trim()) return;
    setTodos((prev) => [createTodo(text.trim()), ...prev]);
  };

  const handleToggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const counters = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter((todo) => todo.completed).length;
    const remaining = total - completed;
    return { total, completed, remaining };
  }, [todos]);

  return (
    <div className="app">
      <div className="card">
        <header className="card-header">
          <h1>My Tasks</h1>
          <p>Plan, track, and celebrate your progress.</p>
        </header>
        <TodoInput onAddTodo={handleAddTodo} />

        <section className="stats">
          <div className="stat-pill">
            <span className="stat-label">Total</span>
            <span className="stat-value">{counters.total}</span>
          </div>
          <div className="stat-pill">
            <span className="stat-label">Completed</span>
            <span className="stat-value">{counters.completed}</span>
          </div>
          <div className="stat-pill">
            <span className="stat-label">Remaining</span>
            <span className="stat-value">{counters.remaining}</span>
          </div>
        </section>

        <TodoList
          todos={todos}
          onToggleTodo={handleToggleTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </div>
    </div>
  );
}

export default App;









