import React, { Component } from 'react';
import './scss/common.scss';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

import AddTask from './features/tasks/AddTask';
import TasksList from './features/tasks/TasksList';
import Filters from './features/filters/Filters';

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
            <Filters />
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
