import React, { Component } from 'react';
import './scss/common.scss';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

import AddTask from './components/AddTask';
import TasksList from './components/TasksList';

const store = configureStore({
  reducer: rootReducer
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="todo">
          <header className="todo-header">
            <h1>Todo React Redux</h1>
            <AddTask />
          </header>
          <ul className="todo-list">
            <TasksList />
          </ul>
        </div>
      </Provider>
    );
  }
}

export default App;
