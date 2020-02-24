import React, { Component } from 'react'

class AddTask extends Component {
    render() {
        return (
            <form>
                <div>
                    <input type="text" />
                    <button>+</button>
                </div>
            </form>
        )
    }
}

export default AddTask;
