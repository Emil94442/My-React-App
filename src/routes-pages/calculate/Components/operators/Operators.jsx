import React from 'react'
import './Operators.scss'

const Operators = (
     {setPlus , setMultiply , setMinus , setDivide , 
      setForMinusResult , setForMultiplyResult , setForPlusResult , 
      setForPlus , setForResult , setForDivideResult
     
     }) => {

    const plusFunction = () => {
        setPlus(true)
        setMultiply(false)
        setMinus(false)
        setDivide(false)
        setForMinusResult(false)
        setForMultiplyResult(false)
        setForDivideResult(false)
        setForPlusResult(true)
        setForPlus('stop')
        setForResult('2')
    }
    

  
    const minusFunction = () => {
         setMinus(true)
         setMultiply(false)
         setDivide(false)
         setForPlus('stop')
         setForResult('2')
         setPlus(false)
         setForMinusResult(true)
         setForMultiplyResult(false)
         setForDivideResult(false)
    }
  
    const multiplyFunction = () => {
         setMultiply(true)
         setMinus(false)
         setDivide(false)
         setPlus(false)
         setForMultiplyResult(true)
         setForDivideResult(false)
         setForPlus('stop')
         setForResult('2')
    }
  
    const divideFunction = () => {
         setMultiply(false)
         setMinus(false)
         setPlus(false)
         setDivide(true)
         setForPlus('stop')
         setForResult('2')
         setForDivideResult(true)
    }

  return (
    <div className='calculator__operators'>
        <button className='calculator__operatorButton' onClick={plusFunction}>+</button>
        <button className='calculator__operatorButton' onClick={minusFunction}>-</button>
        <button className='calculator__operatorButton' onClick={multiplyFunction}>*</button>
        <button className='calculator__operatorButton' onClick={divideFunction}>/</button>
    </div>
  )
}

export default Operators