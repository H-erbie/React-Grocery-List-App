import React, { useEffect } from 'react'

const Alert = ({type, msg, removeAlert, groceryTxt}) => {
    useEffect(()=> {
        const timeout = setTimeout(() => {
            removeAlert()
        }, 3000)
        return () => clearTimeout(timeout)
    }, [groceryTxt])
    
    
  return (
    <div className='alert-container'>
        <h2 className={`alert alert-${type}`}>{msg}</h2>
    </div>
  )
}

export default Alert