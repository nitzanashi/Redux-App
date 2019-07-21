import React from 'react';
import Button from '../Button';
import * as ButtonColors from '../Button/colors';
import * as actions from './actions';
import * as actionTypes from './action-types';
import {connect} from "react-redux";

const VisibilityFilter = (props) => {

    const setVisibilityFilter = (action) => {
        props.dispatch(actions.setVisibilityFilter(action));
    };

    return (
        <div>
            <Button
                color={ButtonColors.SECONDARY}
                text="Show All"
                value={actionTypes.SHOW_ALL}
                onClick={() => setVisibilityFilter(actionTypes.SHOW_ALL)}
            />
            <Button
            color={ButtonColors.SECONDARY}
            text="Show Active"
            value={actionTypes.SHOW_ACTIVE}
            onClick={() => setVisibilityFilter(actionTypes.SHOW_ACTIVE)}
            />
            <Button
                color={ButtonColors.SECONDARY}
                text="Show Completed"
                value={actionTypes.SHOW_COMPLETED}
                onClick={() => setVisibilityFilter(actionTypes.SHOW_COMPLETED)}
            />
        </div>
    );
};

export default connect()(VisibilityFilter);
