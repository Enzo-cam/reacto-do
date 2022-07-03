import React from "react";
import './styles/TodoCounter.css'

function TodoCounter({total, completedTodos}) {
    return(
        <h2 className="TodoCounter">Completaste {completedTodos} de {total} Todo's</h2>
    )
}

export {TodoCounter}