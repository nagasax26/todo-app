import React, { Component } from 'react';
import { connect, actions } from '../../Store';
import moment from 'moment';

const Todo = ({ id, text, date }) => {
    return (
        <div >
            <div>{text} - {date}</div>
            <button onClick={() => actions.removeTodo(id)}>remove</button>
        </div>
    )
}


class TodoList extends Component {
    render() {
        const todosByDate = this.props.todos.sort((todo1, todo2) => {
            let day1 = moment(todo1.date, "DD/MM/YYYY");
            let day2 = moment(todo2.date, "DD/MM/YYYY");
            return day1 > day2;
        });
        return (
            <div>
                {todosByDate.map(todo => <Todo key={todo.id} {...todo} />)}
            </div >
        )
    }
}

export default connect(state => state)(TodoList);
