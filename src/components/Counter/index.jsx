import React from 'react';
import {connect} from 'react-redux';

import Button from '../Button';
import * as colors from '../Button/colors';

import * as counterActions from './actions';

const mapStateToProps = (state) => {
    return {
        counter : state.counter,
    };
};


const Counter = (props) => {

    const increment = () => {
        props.dispatch(counterActions.increment());
    };
    const decrement = () => {
        props.dispatch(counterActions.decrement());
    };

    return(
    <div >
        <div>
            Counter is: {props.counter}
        </div>
        <div>
            <Button
                onClick={increment}
                value="Increment"
                text="+"
                color={colors.PRIMARY}
            />
            <Button
                onClick={decrement}
                value="Decrement"
                text="-"
                color={colors.PRIMARY}
            />
        </div>
    </div>
    )
};

const connectedCounter = connect(mapStateToProps)(Counter);
export {connectedCounter as Counter};
