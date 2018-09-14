import React, { Component } from 'react';
import { connect, actions } from '../../Store';

class AddTodo extends Component {

    handleChange = (event) => {
        actions.changeText(event.target.value);
    }
    handleClick = () => {
        if (this.props.text !== "") {
            actions.addTodo();
        }
    }
    render() {
        return (
            <div>
                <input placeholder="add todo" onChange={this.handleChange} type="text" value={this.props.text} />
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}

export default connect(state => ({ text: state.text }))(AddTodo)
