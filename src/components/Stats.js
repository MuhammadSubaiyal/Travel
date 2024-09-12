import React from 'react';

export default function Stats({ item }) {
    if (!item.length)
        return (
            <p className='stats'><em>Start adding some items to your packing list 🚀</em></p>);
    const numItem = item.length;
    const packitem = item.filter(item => item.packed).length;
    const percentage = numItem === 0 ? 0 : parseInt(Math.round((packitem / numItem) * 100)); return (
        <footer className='stats'>
            <em>{percentage === 100 ? `You got everything! Ready to go ✈` : `💼 You have ${numItem} items on your list, and you already packed ${packitem} (${percentage}%)`}</em>
        </footer>);
}
