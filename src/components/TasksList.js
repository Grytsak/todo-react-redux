import React, { Component } from 'react'
import Task from './Task';

class TasksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {   id: 1,   
                    title: 'Task 1'
                },
                {   id: 2,
                    title: 'Task 2'
                },
                {   id: 3,
                    title: 'Task 3'
                }
            ]
        }
      }

    render() {
       return this.state.todos.map(todo => (
            <li key={todo.id} className="todo-list-item"><Task todo={todo} /></li>
       ));
    }
}

export default TasksList
