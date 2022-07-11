import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import './TodoCounter.css'

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext)
    return(
        <h2 className="TodoCounter">Completaste {completedTodos} de {totalTodos} Todo's</h2>
    )
}

export {TodoCounter}