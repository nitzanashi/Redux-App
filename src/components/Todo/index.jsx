import * as styles from './index.module.css';
import React from "react";
import {connect} from "react-redux";
import cx from 'classnames';

const Todo = (props) => (
  <li
      onClick={props.onClick}
      className={cx(styles.todo,
          {[styles.completed]: props.completed})}
      >
      {props.text}
  </li>
);

export default connect()(Todo);
