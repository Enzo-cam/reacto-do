import React from "react";
import './styles/TodoItem.css'
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

function TodoItem(props) {
    // const onComplete = ( ) => {
    //     alert('Completaste el ToDo ' + props.text)
    // }
    const onDelete = ( ) => {
        alert('Completaste el ToDo ' + props.text)

    }


    return(
        <li className="TodoItem">
            <AiFillCheckCircle 
                className={`TodoCheck ${props.completed && 'IconCheck-active'}`}
                onClick={props.onComplete}
            />

            <p 
                className={`${props.completed && 'TodoItem-completed'}`}>{props.text}
            </p>

            <AiFillCloseCircle 
                className="deleteTodo"
                onClick={props.onDelete}
            />
        </li>
    )
}

export {TodoItem}