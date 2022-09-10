import React from 'react'
import './MyButtonOrange.scss'

const MyButtonOrange = ({children , ...props}) => {
  return (
    <button {...props} className='MyButtonOrange'>
        {children}
    </button>
  )
}

export default MyButtonOrange