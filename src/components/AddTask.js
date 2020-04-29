import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddTask extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    addTaskChild = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.title);
        this.setState({title: ""});
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
                        
                    <button onClick={this.addTaskChild}>+</button>
                </div>
            </form>
        )
    }
}

export default AddTask;
