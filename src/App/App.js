import { useState } from 'react';
import './App.css';
import TodoList from '../TodoList/TodoList';

function App() {
  const [item, setItem] = useState('');
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState('');
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const today = days[currentDate.getDay()];
  const handleChange = (e) => {
    setItem(e.target.value);
    setMessage('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (item === '') {
      setMessage('⚠️ Please enter a task');
      return;
    }
    setTodos([...todos, item]);
    e.target.reset();
    setItem('');
  };
  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-body">
          <p className="meta">👋🏻 It's {today}</p>
          {message && <p className="message">{message}</p>}
          <form className="todo-form" onSubmit={handleSubmit}>
            <input className="form-input" type="text" placeholder="What's your todo?" data-testid="form-input" onChange={handleChange} />
            <input className="form-button" data-testid="form-button" type="submit" value="➕" />
          </form>
          <TodoList item={todos} delete={handleDelete} />
        </div>
      </header>
    </div>
  );
}

export default App;
