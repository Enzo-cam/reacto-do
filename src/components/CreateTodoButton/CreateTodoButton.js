import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props) {
    const click = () => {
        props.setModal(!props.modal)
    }
    return(
        <button className="CreateTodoButton"
            onClick={click}
        >
            +
        </button>
    )

}

export {CreateTodoButton}