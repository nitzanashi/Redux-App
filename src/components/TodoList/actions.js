import * as actionTypes from './action-types';
let nextTodoId = 0;
export const addTodo = (text) => ({
    type: actionTypes.ADD_TODO,
    text,
    id: nextTodoId++
});

export const toggleTodo = (id) => ({
    type: actionTypes.TOGGLE_TODO,
    id,
});
