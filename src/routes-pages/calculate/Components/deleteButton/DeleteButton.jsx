import React from 'react'
import './DeleteButton.scss'

const DeleteButton = (
  {setResult , setForResult , setPlus , setForPlus , 
   setResultTwo , setEqual , setResultBoss , setMinus , setMultiply ,
   setForMultiplyResult , setDivide , setForDivideResult ,
   setHalf , setHalfTwo
  
  }) => {

  const deleteFunction = () => {
      setResult('0')
      setForResult('0')
      setPlus(false)
      setForPlus('step')
      setResultTwo('')
      setEqual(false)
      setResultBoss('')
      setMinus(false)
      setMultiply(false)
      setForMultiplyResult(false)
      setDivide(false)
      setForDivideResult(false)
      setHalf(false)
      setHalfTwo(false)
  }

  return (
    <button className='calculator__DeleteButton' onClick={deleteFunction}>Убрать</button>
  )
}

export default DeleteButton