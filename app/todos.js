import React from 'react';
import Todo from './todo';
import AddTodo from './add-todo';

import {
  toggleDone,
  addTodo,
  deleteTodo
} from './state-functions';

export default class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, name: 'Make a React app', done: false },
        { id: 2, name: 'Add tests', done: false },
        { id: 3, name: 'Pass 401 and get job', done: false },
      ]
    }
  }

  toggleDone(id) {
    this.setState(toggleDone(this.state, id));
  }

  addTodo(todo) {
    this.setState(addTodo(this.state, todo));
  }

  deleteTodo(id) {
    this.setState(deleteTodo(this.state, id));
  }

  renderTodos() {
    return this.state.todos.map((todo) => {
      return (
        <li key={todo.id}>
          <Todo
            todo={todo}
            doneChange={(id) => this.toggleDone(id)}
            deleteTodo={(id) => this.deleteTodo(id)} />
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <p> An ok todo app </p>
        <h1> Things to do: </h1>
        <ul className="todos-list"> { this.renderTodos() }</ul>
        <AddTodo onNewTodo={(todo) => this.addTodo(todo)} />
      </div>
    )
  }
}
