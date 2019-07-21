import React, {useEffect} from 'react';
import * as styles from './App.module.css';
import {Counter} from './components/Counter';
import AddTodo from "./components/AddTodo";
import VisibilityFilter from './components/VisibilityFilter'
import VisbilityTodos from './components/TodoList/HOC';
import WindowWidth from "./components/WindowWidth";
import Header from "./components/Header";

const App = () => {
    useEffect(() => {
       document.title = 'Redux App';
    });

    return (
        <div className={styles.App}>
            <Header/>
            <div className={styles.body}>
                <WindowWidth/>
                <Counter/>
                <VisibilityFilter/>
                <AddTodo/>
                <VisbilityTodos/>
            </div>
        </div>
    )
};
export default App;
