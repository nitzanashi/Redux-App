import * as actionTypes from "./action-types";

export const showAll = () => ({
    type: actionTypes.SHOW_ALL
});

export const setVisibilityFilter = (filter) => ({
    type: actionTypes.SET_VISIBILITY_FILTER,
    filter,
});
