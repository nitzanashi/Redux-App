import * as styles from './index.module.css';
import * as colors from './colors';
import cx from 'classnames';
import React from 'react';

const Button = (props) => {
    return (
        <button
            className={cx({
                [styles.btn_primary]: props.color === colors.PRIMARY,
                [styles.btn_secondary]: props.color === colors.SECONDARY,
            }, props.className, styles.btn, 'btn',)}
            type={props.type}
            value={props.value}
            onClick={props.onClick}
            onChange={props.onChange}
            name={props.name}
        >
            <span className={styles.btn_text}>
                {props.text}
            </span>
        </button>

    );
};

export default Button;
