import React from 'react'
import './LetDelButton.scss'

const LetDelButton = (
  {result , setResult , setForResult , plus , 
  resultTwo , setResultTwo , resultBoss , setHalf , setHalfTwo ,
  setPlus , setForPlus , setMinus , minus , multiply ,
  setMultiply , divide , setDivide , setResultBoss
  
  }) => {

    const letterDelFunction = () => {
        if (result.length > 1 && !plus) {
          setResult(result.slice(0 , -1))
          if (result.includes('.')) {
            setHalf(false)
          }
        }
        if (result.length === 1) {
          setResult('0')
          setForResult('0')
        }
        if (plus && resultTwo.length === 0) {
          setResult(result)
          setForPlus('step')
          setForResult('1')
          setPlus(false)
        }
        if (minus && resultTwo.length === 0) {
          setResult(result)
          setForPlus('step')
          setForResult('1')
          setMinus(false)
        }
        if (multiply && resultTwo.length === 0) {
          setResult(result)
          setForPlus('step')
          setForResult('1')
          setMultiply(false)
        }
        if (divide && resultTwo.length === 0) {
          setResult(result)
          setForPlus('step')
          setForResult('1')
          setDivide(false)
        }
        if (resultTwo && !resultBoss && plus) {
          setResult(result)
          setPlus(true)
          setResultTwo(resultTwo.slice(0 , -1))
          if (resultTwo.includes('.')) {
            setHalfTwo(false)
          }
        }
        if (resultTwo && !resultBoss && minus) {
          setResult(result)
          setMinus(true)
          setResultTwo(resultTwo.slice(0 , -1))
          if (resultTwo.includes('.')) {
            setHalfTwo(false)
          }
        }
        if (resultTwo && !resultBoss && multiply) {
          setResult(result)
          setMultiply(true)
          setResultTwo(resultTwo.slice(0 , -1))
          if (resultTwo.includes('.')) {
            setHalfTwo(false)
          }
        }
        if (resultTwo && !resultBoss && divide) {
          setResult(result)
          setDivide(true)
          setResultTwo(resultTwo.slice(0 , -1))
          if (resultTwo.includes('.')) {
            setHalfTwo(false)
          }
        }
        if (resultBoss && plus) {
          setResult(result)
          setPlus(true)
          setResultBoss(resultBoss)
        }
        if (resultBoss && minus) {
          setResult(result)
          setMinus(true)
          setResultBoss(resultBoss)
        }
        if (resultBoss && multiply) {
          setResult(result)
          setMultiply(true)
          setResultBoss(resultBoss)
        }
        if (resultBoss && divide) {
          setResult(result)
          setDivide(true)
          setResultBoss(resultBoss)
        }
        if (resultBoss) {
          setResult(result)
          setResultBoss(resultBoss)
        }
  }

  return (
    <button className='calculator__LetDelButton' onClick={letterDelFunction}>c</button>
  )
}

export default LetDelButton