import React from 'react'
import { useState } from 'react'
import './Calculator.scss'
import NumButton from './Components/button-for-number/NumButton'
import HalfButton from './Components/button-half/HalfButton'
import ZeroButton from './Components/button-zero/ZeroButton'
import DeleteButton from './Components/deleteButton/DeleteButton'
import EqualButton from './Components/Equal/EqualButton'
import LetDelButton from './Components/let-del-button/LetDelButton'
import Operators from './Components/operators/Operators'


const Calculator = () => {

  const [plus , setPlus] = useState(false)
  const [minus , setMinus] = useState(false)
  const [multiply , setMultiply] = useState(false)
  const [divide , setDivide] = useState(false)
  const [equal , setEqual] = useState(false)
  const [half , setHalf] = useState(false)
  const [halfTwo , setHalfTwo] = useState(false)
  const [forPlus , setForPlus] = useState('step')
  const [forPlusResult , setForPlusResult] = useState(false)
  const [forMinusResult , setForMinusResult] = useState(false)
  const [forMultiplyResult , setForMultiplyResult] = useState(false)
  const [forDivideResult , setForDivideResult] = useState(false)
  const [forResult , setForResult] = useState('0')
  const [result , setResult] = useState(forResult)
  const [resultTwo , setResultTwo] = useState('')
  const [resultBoss , setResultBoss] = useState()
  
  const NumbersForCalculator = ['7', '8', '9', '4', '5', '6', '1', '2', '3']



  return (
    <div className='boss'>
       <div className="calculator-content calculator">
            <div className="calculator__titleContent">
                  <div className="calculator__title">Calculator</div>
            </div>
            <div className="calculator__for-result">
                <h1 className='calculator__result'>
                  {result}
                  {plus && '+'}{minus && '-'}{multiply && '*'}{divide && '/'}
                  {forPlus === 'stop' && resultTwo}
                  {equal && '='}{resultBoss}
                </h1>
            </div>
            <div className="calculator__for-options">
            <div className="calculator__DeleterButtons">
                    <DeleteButton
                      setResult={setResult}
                      setForResult={setForResult}
                      setPlus={setPlus}
                      setForPlus={setForPlus}
                      setResultTwo={setResultTwo}
                      setEqual={setEqual}
                      setResultBoss={setResultBoss}
                      setMinus={setMinus}
                      setMultiply={setMultiply}
                      setForMultiplyResult={setForMultiplyResult}
                      setDivide={setDivide}
                      setForDivideResult={setForDivideResult}
                      setHalf={setHalf}
                      setHalfTwo={setHalfTwo}
                      />
                    <LetDelButton
                      result={result}          
                      setResult={setResult}
                      forResult={forResult}
                      setForResult={setForResult}
                      plus={plus}
                      setPlus={setPlus}
                      setForPlus={setForPlus}
                      minus={minus}
                      setMinus={setMinus}
                      multiply={multiply}
                      setMultiply={setMultiply}
                      divide={divide}
                      setDivide={setDivide}
                      forPlus={forPlus}
                      resultTwo={resultTwo} 
                      setResultTwo={setResultTwo}
                      setHalf={setHalf}
                      setHalfTwo={setHalfTwo}
                      resultBoss={resultBoss}
                      setResultBoss={setResultBoss}
                />    
              </div>
              <div className="calculator__NumberButtons">
                  {NumbersForCalculator.map(num =>
                      <NumButton 
                        key={num}
                        num={num}
                        result={result} 
                        setResult={setResult} 
                        forResult={forResult}
                        setForResult={setForResult}
                        forPlus={forPlus}
                        resultTwo={resultTwo}
                        setResultTwo={setResultTwo}
                        resultBoss={resultBoss}
                      />
                    )}
              </div>
                <ZeroButton
                  result={result}
                  setResult={setResult}
                  forResult={forResult}
                  setForResult={setForResult}
                  forPlus={forPlus}
                  resultTwo={resultTwo} 
                  setResultTwo={setResultTwo}
                  half={half}
                  halfTwo={halfTwo}
                  resultBoss={resultBoss}
                />
                <HalfButton
                  result={result}
                  setResult={setResult}
                  forResult={forResult} 
                  setForResult={setForResult} 
                  forPlus={forPlus}
                  resultTwo={resultTwo} 
                  setResultTwo={setResultTwo} 
                  half={half} 
                  halfTwo={halfTwo} 
                  setHalf={setHalf}
                  setHalfTwo={setHalfTwo}
                  resultBoss={resultBoss}
                />
                <div className="calculator__OperatorButtons">
                    <Operators
                       setPlus={setPlus}
                       setMultiply={setMultiply}
                       setMinus={setMinus}
                       setDivide={setDivide} 
                       setForMinusResult={setForMinusResult}
                       setForMultiplyResult={setForMultiplyResult}
                       setForPlusResult={setForPlusResult}
                       setForPlus={setForPlus}
                       setForResult={setForResult} 
                       setForDivideResult={setForDivideResult}
                    />
                    <EqualButton
                      setEqual={setEqual}
                      forPlusResult={forPlusResult} 
                      forMinusResult={forMinusResult} 
                      forMultiplyResult={forMultiplyResult} 
                      forDivideResult={forDivideResult}
                      result={result} 
                      resultTwo={resultTwo} 
                      setResultBoss={setResultBoss}
                    />
                </div>
            </div> 
       </div>
    </div>
  )
}

export default Calculator