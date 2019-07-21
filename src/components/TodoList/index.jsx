import React from "react";
import Todo from '../Todo';
import * as styles from './index.module.css';

const TodoList = (props) => {

    return(
  <ul
    className={styles.todo_list}
  >
      {props.todos.map(todo => (
          <Todo
              {...todo}
              key={todo.id}
              onClick={() => props.toggleTodo(todo.id)}
          />
      ))}
  </ul>
)
};

export default TodoList
