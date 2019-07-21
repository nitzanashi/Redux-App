import * as actionTypes from "./action-types";

export const visibilityFilter = (
    state = actionTypes.SHOW_ALL,
    action
) => {
    switch (action.type) {
        case actionTypes.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};
