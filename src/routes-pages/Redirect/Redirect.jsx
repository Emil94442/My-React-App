import React , {useState , useMemo , useEffect , useRef} from 'react'
import './Redirect.scss'

const Redirect = () => {

  {/*First observer*/}
  const [isVisible , setIsVisible] = useState(false)
  const Reference = useRef()

  const callback = entries => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  const options = useMemo(() => {
      return {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
      }
  } , [])

  useEffect(() => {
     const observer = new IntersectionObserver(callback , options)
     const currentRef = Reference.current
     if (currentRef) observer.observe(currentRef)

     return () => {
      if (currentRef) observer.unobserve(currentRef)
     }
  } , [])

  {/* Second observer */}
  const [isVisibleTwo , setIsVisibleTwo] = useState(false)
  const ReferenceTwo = useRef()

  const callbackTwo = entries => {
    const [entry] = entries
    setIsVisibleTwo(entry.isIntersecting)
  }

  const optionsTwo = useMemo(() => {
      return {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
      }
  } , [])

  useEffect(() => {
     const observer = new IntersectionObserver(callbackTwo , optionsTwo)
     const currentRef = ReferenceTwo.current
     if (currentRef) observer.observe(currentRef)

     return () => {
      if (currentRef) observer.unobserve(currentRef)
     }
  } , [])

  return (
    <div className='Redirect'>
      <div className="observer" ref={Reference}>s</div>
      <div className="Redirect-content">
        <div className="h1-content">
           <h1 className={isVisible ? 'h1-teg visible' : 'h1-teg'}>Всем <span className="span-for-h1-teg">привет!</span></h1>
           <div className="line"></div>
        </div>
        <div className="about-content">
           <div className="about-words">
             <p className={isVisible ? 'about-center visible' : 'about-center'}>В этом разделе я расскажу как происходило моё изучение React JS</p> 
             <ul className={isVisibleTwo ? 'about-ul visible' : 'about-ul'}>
               <li className="about-li">с какими трудностями я сталикавался</li>
               <li className="about-li">что мне сложнее всего было понять</li>
               <li className="about-li">где и как учился</li>
               <li className="about-li">советы</li>
             </ul>
             <div className={isVisibleTwo ? 'second-observer visible' : 'second-observer'} ref={ReferenceTwo}>v</div>
           </div>
        </div>
      </div>
      <h1 className={isVisibleTwo ? 'Redirect-End visible' : 'Redirect-End'}>Made by Emil on the ReactJS!</h1>
    </div>
  )
}

export default Redirect