import React from "react";
import './App.css'

import { TodoItem } from '../components/TodoItem/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoHeader } from '../components/TodoHeader/TodoHeader';
import { ToFooter } from '../components/ToFooter/ToFooter';

function AppUI({totalTodos,
    loading,
    error,
    completedTodos,
    searchVal,
    setSearchVal,
    todosFiltered,
    completeTodos,
    deleteTodo}){
    return(    
        <div className='container'> {/*Evitamos estar enviando div's todo el rato.*/}
            <TodoHeader>
                <TodoCounter 
                    total={totalTodos}
                    completedTodos={completedTodos}
                />
            
                <TodoSearch 
                    searchVal={searchVal}
                    setSearchVal={setSearchVal}
                />
            </TodoHeader>
            
            <TodoList>
                {/* Mostramos un error */}
                {error && <p>Tenemos un error...{error}</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                
                {(!loading && !todosFiltered.length) && <p>¡Crea tu primer TODO!</p>}

                {todosFiltered.map(todo => (
                <TodoItem 
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete = {() => completeTodos(todo.text)}
                    onDelete = {() => deleteTodo(todo.text)}
                />
                ))}
            </TodoList>
        
            <CreateTodoButton />
            <ToFooter />
        </div>
    )
}

export {AppUI}