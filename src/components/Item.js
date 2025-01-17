import React from 'react';

export default function Item({ item, onDeleteItem, onToggleitem }) {
    return (<li>
        <input type='checkbox' value={item.packed} onChange={() => onToggleitem(item.id)} />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
            {item.description} {item.quantity}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>);
}
