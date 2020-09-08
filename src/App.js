import React, { Component } from 'react';
import './scss/common.scss';
import { Provider } from 'react-redux';
import store from "./js/store/index";

import AddTask from './components/AddTask';
import TasksList from './components/TasksList';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          title: 'Task 1',
          complete: false
        },
        {
          id: 2,
          title: 'Task 2',
          complete: false
        },
        {
          id: 3,
          title: 'Task 3',
          complete: false
        }
      ]
    }
  }

  addTask = (title) => {
    let todosLength = this.state.todos.length;
    const newTask = {
      id: todosLength + 1,
      title: title
    }
    this.setState({ todos: [...this.state.todos, newTask] });
  }

  render() {
    return (
      <Provider store={store}>
        <div className="todo">
          <header className="todo-header">
            <h1>Todo React Redux</h1>
            <AddTask todos={this.state.todos} addTask={this.addTask} />
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
