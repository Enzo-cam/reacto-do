import React from 'react';
import './App.css';

import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoList } from './components/TodoList';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';

const todos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Terminar la app de TODOs', completed: false},
  {text: 'Curarme del hombro', completed: false}
]


function App() {
  return (
    <React.Fragment> {/*Evitamos estar enviando div's todo el rato.*/}
      <TodoCounter />
  
      <TodoSearch />
      <input placeholder='Cebollita' />
  
      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
          />
        ))}
      </TodoList>
  
      <CreateTodoButton />
    </React.Fragment> //
  )
}

export default App;
