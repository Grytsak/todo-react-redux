import React, { Component } from 'react';

export default class AddTask extends Component {
    state = {
        name: '',
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    addTask = (e) => {
        e.preventDefault();
        if (this.state.name) {
            this.props.addNewTask({name: this.state.name})
            this.setState({name: ""})
        } else {
            alert('Task name must not be empty');
        }
        
    }

    render() {
        return (
            <form>
                <div>
                    <input
                        type="text"  
                        name="name"
                        value={this.state.name}
                        placeholder="Add new task..."
                        onChange={this.onChange}
                        />
                        
                    <button onClick={this.addTask}>+</button>
                </div>
            </form>
        )
    }
}
