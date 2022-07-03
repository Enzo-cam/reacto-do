import React, { useState } from 'react';
import './components/styles/App.css'

import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoList } from './components/TodoList';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoHeader } from './components/TodoHeader';
import { ToFooter } from './components/ToFooter';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Terminar la app de TODOs', completed: false},
  {text: 'Curarme del hombro', completed: false},
  {text: 'Fortalecer el pie', completed: false}
]


function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchVal, setSearchVal] = useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const todosFiltered = todos.filter(todo => todo.text.toLowerCase().includes(searchVal.toLowerCase()));

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true;
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos)
  }

  return (
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

export default App;
