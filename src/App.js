import React from 'react';
import './App.css';

import AddTask from './components/AddTask';

function App() {
  return (
    <div className="App todo">
      <header className="todo-header">
        <AddTask />
      </header>
    </div>
  );
}

export default App;
