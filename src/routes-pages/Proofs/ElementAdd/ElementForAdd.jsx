import React from 'react'
import {FiDelete} from 'react-icons/fi'
import './ElementForAdd.scss'

const ElementForAdd = ({text , index , remove}) => {

  return (
    <div className='ElementForAdd'>
        <div className="list-content">
          {index}. {text.text.length < 20 ? text.text : 'List length: ' + text.text.length} <FiDelete className='FiDelete' onClick={() => remove(text)}/>
        </div>
    </div>
  )
}

export default ElementForAdd