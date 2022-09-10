import React from 'react'
import './HalfButton.scss'

const HalfButton = (
  {result , setResult , forResult , setForResult ,
  forPlus , resultTwo , setResultTwo , half , 
  setHalf , halfTwo , setHalfTwo , resultBoss
  
  }) => {

    const halfFunction = () => {
        if (forResult === '0') {
          setResult(result + '.')
          setHalf(true)
          setForResult('1')
        }
        if (forResult === '1' && half) {
            setResult(result)
        }
        if (forResult === '1' && !half) {
          setResult(result + '.')
      }
        if (forResult === '1' && result > 0) {
          setResult(result + '.')
          setHalf(true)
        }
        if (forResult === '1' && result > 0 && half) {
          setResult(result)
        }
        if (forPlus === 'stop' && forResult === '2' && !resultTwo) {
          setResult(result)
          setResultTwo(resultTwo)
        }
        if (forPlus === 'stop' && forResult === '2' && resultTwo || resultTwo === 0) {
          setResult(result)
          setResultTwo(resultTwo + '.')
          setHalfTwo(true)
        }
        if (forPlus === 'stop' && forResult === '2' && halfTwo) {
          setResult(result)
          setResultTwo(resultTwo)
        }
        if (resultBoss) {
          setResult(result)
          setResultTwo(resultTwo)
        }
      }

  return (
    <button className='calculator__HalfButton' onClick={halfFunction}>.</button>
  )
}

export default HalfButton