import React from "react";


// This file exports both the List and ListItem components

export function List({ children }) {
    return (
        <span className="list-overflow-container">
            <ul className="list-group">{children}</ul>
        </span>
    );
}

export function ListItem({ children }) {
    return <li className="list-group-item">{children}</li>;
}
