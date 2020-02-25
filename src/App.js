import React from 'react';
import './App.css';

import AddTask from './components/AddTask';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className="todo">
      <header className="todo-header">
        <h1>Todo React Redux</h1>
        <AddTask />
      </header>
      <ul className="todo-list">
       <TasksList />
      </ul>
    </div>
  );
}

export default App;
