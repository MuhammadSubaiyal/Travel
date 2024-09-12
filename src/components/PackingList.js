import React from 'react';
import  Item  from './Item';

export default function PackingList({ item, onDeleteItem, onToggleitem }) {
    return (
        <div className="list">
            <ul>
                {item.map((item) => (<Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleitem={onToggleitem} />
                ))}
            </ul>
        </div>
    );
}
