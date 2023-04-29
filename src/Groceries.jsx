import React, { useState } from 'react'

const Groceries = ({items, deleteItem, editItem}) => {
    
  return (
    <div className='grocery-list'>
        {
            items.map((item, index) => {
                const {id, title} = item;
                return <article key={id} className='grocery-item'>
                    <p className='title'>{title}</p>
                    <div className="btns">
                        <button onClick={() => editItem(title, index)}>Edit</button>
                        <button onClick={() => deleteItem(id)}>Del</button>
                    </div>
                </article>
            })
        }
    </div>
  )
}

export default Groceries