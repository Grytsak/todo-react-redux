import React from 'react';
import './scss/common.scss';

import AddTask from './features/tasks/AddTask';
import TasksList from './features/tasks/TasksList';
import TaskFilters from './features/tasks/TaskFilters';


function App() {
  return (
    <>
      <div className="todo">
        <header className="todo-header">
          <h1>Todo React Redux</h1>
          <AddTask />
          <TaskFilters />
        </header>
        <ul className="todo-list">
          <TasksList />
        </ul>
      </div>
    </>
  )
}

export default App;
