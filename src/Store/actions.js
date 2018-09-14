import crypto from 'crypto';
import moment from 'moment';

// the action is function that have the state and the todo to add
// and from the state we take the todos we using ES6 destructure feature
// and return a new state of todos 
// function addTodo(state, todo) 
// function addTodo({todos}, todo)

export default {
    changeText: ({ text }, actions, newText) => ({
        text: newText
    }),
    addTodo: ({ text, todos }) => ({
        todos: [
            ...todos,
            {
                id: crypto.randomBytes(16).toString("hex"),
                text: text,
                date: moment().format("DD/MM/YYYY")
            }
        ]
    }),
    removeTodo: ({ todos }, actions, id) => {
        let todosArr = todos.concat();
        let index = todosArr.findIndex(todo => id === todo.id);
        todosArr.splice(index, 1)
        return { todos: todosArr }
    }
}