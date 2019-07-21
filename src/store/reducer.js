import {combineReducers} from 'redux';
import {counter} from '../components/Counter/reducer';
import {todos} from "../components/TodoList/reducer";
import {visibilityFilter} from "../components/VisibilityFilter/reducer";

const index = combineReducers({
    counter,
    todos,
    visibilityFilter,
});

export default index;
