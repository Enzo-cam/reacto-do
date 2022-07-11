import React from "react";
import { useState } from "react";


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

export {useStorage}