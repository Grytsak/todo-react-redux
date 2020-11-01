import React, { Component } from 'react';

export default class AddTask extends Component {
    state = {
        // id: null,
        title: '',
        // completed: false
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    addTask = (e) => {
        e.preventDefault();
        if (this.state.title) {
            this.props.addNewTask(this.state.title);
            this.setState({title: ""});
        } else {
            alert('Task title must not be empty');
        }
        
    }

    render() {
        return (
            <form>
                <div>
                    <input
                        type="text"  
                        name="title"
                        value={this.state.title}
                        placeholder="Add new task..."
                        onChange={this.onChange}
                        />
                        
                    <button onClick={this.addTask}>+</button>
                </div>
            </form>
        )
    }
}
