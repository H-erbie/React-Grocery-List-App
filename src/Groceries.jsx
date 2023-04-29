import React, { useState } from 'react'
import {FaEdit, FaTrash} from 'react-icons/fa'
const Groceries = ({items, deleteItem, editItem}) => {
    
  return (
    <div className='grocery-list'>
        {
            items.map((item, index) => {
                const {id, title} = item;
                return <article key={id} className='grocery-item'>
                    <p className='title'>{title}</p>
                    <div className="btns">
                        <button className='icon edit' onClick={() => editItem(title, index)}><FaEdit/></button>
                        <button className='icon trash' onClick={() => deleteItem(id)}><FaTrash/></button>
                    </div>
                </article>
            })
        }
    </div>
  )
}

export default Groceries