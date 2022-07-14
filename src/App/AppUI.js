import React from "react";
import './App.css'

import { TodoContext } from "../components/TodoContext/TodoContext";
import { TodoItem } from '../components/TodoItem/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoHeader } from '../components/TodoHeader/TodoHeader';
import { ToFooter } from '../components/ToFooter/ToFooter';
import { TodoForm } from "../components/TodoForm/TodoForm";
import { Modal } from "../components/Modal/Modal";

function AppUI(){
    const {
        error,
        loading,
        todosFiltered,
        completeTodos,
        deleteTodo,
        modal,
        setModal
        } = React.useContext(TodoContext)

    return(    
        <div className='container'> {/*Evitamos estar enviando div's todo el rato.*/}
            <TodoHeader>
                <TodoCounter />
                <TodoSearch/>
            </TodoHeader>
            
                <TodoList>
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

                {!!modal && (
                    <Modal>
                        <TodoForm/>
                    </Modal>
                )}

            <CreateTodoButton 
                setModal={setModal}
                modal={modal}
            />
            <ToFooter />
        </div>
    )
}

export {AppUI}