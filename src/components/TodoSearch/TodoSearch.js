import React from "react";
import './TodoSearch.css';


function TodoSearch({searchVal, setSearchVal}) {
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