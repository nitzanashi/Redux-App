import * as actionTypes from './action-types';

const todo = (state, action) => {
  switch (action.type) {
      case actionTypes.ADD_TODO:
          return {
              id: action.id,
              text: action.text,
              completed: false
          };
      case actionTypes.TOGGLE_TODO:
          if(state.id !== action.id){
              return state;
          }

          return {
              ...state,
              completed: !state.completed
          };
      default:
          return state;
  }
};

export const todos = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ];
        case actionTypes.TOGGLE_TODO:
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};
