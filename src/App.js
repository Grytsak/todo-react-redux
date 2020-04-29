import React, { Component } from 'react';
import './scss/common.scss';
import { Provider } from 'react-redux';

import AddTask from './components/AddTask';
import TasksList from './components/TasksList';

import { createStore } from 'redux';



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
    this.setState({todos: [...this.state.todos, newTask]});
  }

  deleteTask = (id) => {
    this.setState({todos: [...this.state.todos.filter((todo) => todo.id !== id)]});
  }

  markDone = (id) => {
    const todos = [...this.state.todos];

    todos.map(task => {
      if (task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    })

    this.setState({todos: todos});
  }

  render() {
    return (
      // <Provider store={store}>
      <div className="todo">
        <header className="todo-header">
          <h1>Todo React Redux</h1>
          <AddTask todos={this.state.todos} addTask={this.addTask} />
        </header>
        <ul className="todo-list">
          <TasksList todos={this.state.todos} deleteTask={this.deleteTask} markDone={this.markDone} />
        </ul>
      </div>
      // </Provider>
    );
  }
}

export default App;
