import React, { useState } from 'react';
import { AppUI } from './AppUI';

function useStorage(itemName, initialValue){
  const [item, setItem] = useState(initialValue);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
         const storageItem = localStorage.getItem(itemName) //Obtenemos el item del localStorage
        let parsedItem;

        if(!storageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue)) //Creamos nuestro item como un array vacio en el local storage.
          parsedItem = initialValue; //Asignamos un array vacio, q se va a pasar en el useState.
        }else{
          parsedItem = JSON.parse(storageItem)//De haber un item, lo igualamos para que sea pasado al useState.
        }

        setItem(parsedItem);
        setloading(false)
      } catch (error) {
        setError(error)
      }
    }, 1000);
    
  })
  //Function to save todo in the local storage.
  const saveItem = (newItem) => {
    const stringItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringItem);
    setItem(newItem)
  }
  
  return {item, saveItem, loading}
}

function App() {
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

  return (
    <AppUI
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchVal={searchVal}
      setSearchVal={setSearchVal}
      todosFiltered={todosFiltered}
      completeTodos={completeTodos}
      deleteTodo={deleteTodo}
    />
  )
}

export default App;
