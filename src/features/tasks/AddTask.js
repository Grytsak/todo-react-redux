import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewTask } from './tasksSlice';

const mapStateToProps = state => {
    return { tasks: state.tasks };
};

function mapDispatchToProps(dispatch) {
    return {
        addNewTask: taskId => dispatch(addNewTask(taskId))
    }
}

class AddTask extends Component {
    state = {
        id: null,
        title: '',
        completed: false
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    addTask = (e) => {
        e.preventDefault();
        this.state.id = this.props.tasks.length + 1;
        this.props.addNewTask(this.state);
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
                        
                    <button onClick={this.addTask}>+</button>
                </div>
            </form>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
