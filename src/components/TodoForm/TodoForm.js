import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoForm.css';
import { useContext } from 'react';
import { useState } from 'react';


function TodoForm(){
    const [newTodo, setNewTodo] = useState('')

    const {
        addTodo,
        setModal
    } = useContext(TodoContext)

    
    const onCancel = () => {
        setModal(false)
    }
    const onChange = (event) => {
        setNewTodo(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodo)
        setModal(false)
    }

    return(
        <form onSubmit={onSubmit}>
            <label>....</label>
            <textarea 
                value={newTodo}
                onChange={onChange}
                placeholder='Escriba su nuevo To-Do'
            />

            <div className='TodoForm-buttonContainer'>
                <button
                    className='TodoForm-button TodoForm-button-cancel'
                    type='button'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className='TodoForm-button TodoForm-button-add'
                    type='submit'
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm}