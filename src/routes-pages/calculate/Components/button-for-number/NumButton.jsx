import React from 'react'
import './NumButton.scss'

const NumButton = (
    {num , result , setResult , forResult , 
    setForResult , forPlus , resultTwo, setResultTwo , 
    resultBoss
    
    }) => {

    

    const ButtonFunction = () => {
        if (forResult === '0') {
          setResult(num)
          setForResult('1')
        }
        if (forResult === '1') {
          setResult(result + num)
        }
        if (forPlus === 'stop' && forResult === '2') {
          setResult(result)
          setResultTwo(resultTwo + num)
        }
        if (resultBoss) {
          setResult(result)
          setResultTwo(resultTwo)
        }
      }

  return (
    <button className='NumButton' onClick={ButtonFunction}>{num}</button>
  )
}

export default NumButton