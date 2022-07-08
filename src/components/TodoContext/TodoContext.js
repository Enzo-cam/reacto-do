import React from "react";

const TodoContext = React.createContext()

function TodoContext(props){
    return(
        <TodoContext.Provider value={{
            
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}