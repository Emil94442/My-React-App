import React from 'react'
import './ZeroButton.scss'

const ZeroButton = (
  {result , setResult , forResult , setForResult , 
   forPlus , resultTwo , setResultTwo , half , halfTwo , 
   resultBoss
  
  }) => {

    const forZeroButton = () => {
        if (forResult === '0') {
          setResult('0')
          setForResult('0')
        }
        if (half) {
          setResult(result + 0)
        }
        if (result > 0) {
            setResult(result + 0)
          }
        if (forPlus === 'stop' && forResult === '2') {
          setResult(result)
          if (!resultTwo) {
            setResultTwo(0)
          }
          if (resultTwo > 0) {
            setResultTwo(resultTwo + 0)
          }
        }
        if (forPlus === 'stop' && forResult === '2' && half) {
          setResult(result)
          setResultTwo(resultTwo + 0)
        }
        if (forPlus === 'stop' && forResult === '2' && halfTwo) {
          setResult(result)
          setResultTwo(resultTwo + 0)
        }
        if (resultBoss) {
          setResult(result)
          setResultTwo(resultTwo)
        }
      }
    

  return (
      <button className='ZeroButton' onClick={forZeroButton}>0</button>
  )
}

export default ZeroButton