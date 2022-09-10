import React from 'react'
import './BlueGrug.scss'

const BlueGrug = ({children}) => {
  return (
    <div className='BL'>
      <div className='BlueGrug'>
        <div className="BlueGrug-details">
            <p className='BlueGrug-paragraf'>{children}</p>
        </div>
      </div>
      <img src="images/arrow-for-num.png" alt="" className='arrow-blue'/>
    </div>
  )
}

export default BlueGrug