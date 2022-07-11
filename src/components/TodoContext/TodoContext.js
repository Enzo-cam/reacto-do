import React from "react";
import { useStorage } from "./useStorage";
import { useState } from "react";

const TodoContext = React.createContext()

function TodoProvider(props){
    const {item: todos,
        saveItem: saveTodos,
        loading,
        error
        } = useStorage('TODOS_V1', []);

        // UseState's
        const [searchVal, setSearchVal] = useState('');

        //Cantidad de ToDo's completados y el total de los mismos
        const completedTodos = todos.filter(todo => todo.completed).length;
        const totalTodos = todos.length;

        // Filtrar los todos segun lo que buscamos
        const todosFiltered = todos.filter(todo => todo.text.toLowerCase().includes(searchVal.toLowerCase())); 

        // Fuction to mark complete a to do
        const completeTodos = (text) => {
            const todoIndex = todos.findIndex(todo => todo.text === text)
            const newTodos = [...todos]
            newTodos[todoIndex].completed = !todos[todoIndex].completed;
            saveTodos(newTodos)
        }
        
        // Fuction to mark delete a to do
        const deleteTodo = (text) => {
            const todoIndex = todos.findIndex(todo => todo.text === text)
            const newTodos = [...todos]
            newTodos.splice(todoIndex, 1);
            saveTodos(newTodos)
        }
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchVal,
            setSearchVal,
            todosFiltered,
            completeTodos,
            deleteTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}