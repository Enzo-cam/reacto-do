import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import './TodoSearch.css';


function TodoSearch() {
    const {searchVal, setSearchVal} = React.useContext(TodoContext)
    const onSearch = (event) => {
        console.log(event.target.value)
        setSearchVal(event.target.value)
    }

    return (
        <input 
            className="TodoSearch" 
            placeholder="Busque su tarea" 
            value= {searchVal}
            onChange={onSearch}
        /> 
    );
}

export {TodoSearch}