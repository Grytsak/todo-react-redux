import React, { Component } from 'react';
import './scss/common.scss';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

import AddTaskContainer from './features/tasks/AddTaskContainer';
import TasksListContainer from './features/tasks/TaskListContainer';
import FiltersContainer from './features/filters/FiltersContainer';

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
            <AddTaskContainer />
            <FiltersContainer />
          </header>
          <ul className="todo-list">
            <TasksListContainer />
          </ul>
        </div>
      </Provider>
    );
  }
}

export default App;
