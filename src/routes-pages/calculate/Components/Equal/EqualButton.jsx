import React from 'react'
import './EqualButton.scss'

const EqualButton = (
  {setEqual , forPlusResult , forMinusResult , forMultiplyResult ,
   forDivideResult , result , resultTwo , setResultBoss
  
  }) => {

    const equalFunction = () => {
        setEqual(true)
        if (forPlusResult) {
          setResultBoss(parseFloat(result) + parseFloat(resultTwo))
        } 
        if (forMinusResult) {
          setResultBoss(parseFloat(result) - parseFloat(resultTwo))
        }
        if (forMultiplyResult) {
          setResultBoss(parseFloat(result) * parseFloat(resultTwo))
        }
        if (forDivideResult) {
          setResultBoss(resultTwo > 0 ? parseFloat(result) / parseFloat(resultTwo) : 'На ноль делить нельзя')
        }
        if (resultTwo.length < 1) {
          setResultBoss(result)
        }
    }

  return (
    <button className='calculator__EqualButton' onClick={equalFunction}>=</button>
  )
}

export default EqualButton