import React, { useState } from 'react'
import  Logo  from './Logo';
import  Form  from './Form';
import  PackingList  from './PackingList';
import  Stats  from './Stats';



function App() {
  const [item, setitems] = useState([]);

  function handleitems(item) {
    setitems((items) => [...items, item])

  }

  function handleDeleteitem(id) {
    setitems(items => items.filter(item => item.id !== id))
  }

  function handleToggleitem(id) {
    setitems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAdditems={handleitems} />
      <PackingList item={item} onDeleteItem={handleDeleteitem} onToggleitem={handleToggleitem} />
      <Stats item={item} />

    </div>
  )
}

export default App