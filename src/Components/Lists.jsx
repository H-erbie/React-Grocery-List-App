import React from 'react'

const Lists = ({people}) => {
  return (
    <div className='lists'>
      {people.map((user) => {
        const {id, name, img, age} = user;
        return(
        <div className='list' key={id}>
        <div className='userImg'><img  src={img}/></div> 
        <div className='userInfo'>
          <p className='userName'>{name}</p>
          <p className='userAge'>{age}</p>
        </div>
      
      </div>
      )})}
    </div>
  )
}

export default Lists