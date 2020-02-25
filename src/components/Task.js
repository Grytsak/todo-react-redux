import React, { Component } from 'react'

class Task extends Component {
    render() {
        const { id, title } = this.props.todo;
        return (
            <p>{title}</p>
        )
    }
}

export default Task
