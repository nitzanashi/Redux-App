import React from 'react';
import { connect } from 'react-redux'
import * as styles from './index.module.css';

const mapStateToProps = state => ({
    filter: state.visibilityFilter
});

const Header = (props) => {
    return(
        <header className={styles.header}>
            Current Filter is: {props.filter}
        </header>
    )
};


export default connect(
    mapStateToProps,
)(Header)
