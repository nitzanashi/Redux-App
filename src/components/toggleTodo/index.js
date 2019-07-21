const tooggleTodo = (todo) => {
    // return Object.assign({}, todo, {
    //     completed: !todo.completed
    // });

    return {
        ...todo,
        completed: !todo.completed
    }
};
