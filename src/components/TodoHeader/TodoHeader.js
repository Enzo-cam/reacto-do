import React from 'react';
import './TodoHeader.css'

function TodoHeader({ children }) {
    return (
        <header className="app-header">
            <h1 className="TodoTitle">ReacTo-Do</h1>
            {React.Children
                    .toArray(children)
                    .map(child => React.cloneElement(child))
            }
        </header>
    );
}

export { TodoHeader };