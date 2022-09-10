import React, { useState , useRef , useMemo , useEffect} from 'react'
import BlueGrug from '../../UI/BlueGrug/BlueGrug'
import './travel.scss'
import '../../UI/BlueGrug/BlueGrug.scss'

const Travel = () => {
  const [isVisible, setIsVisible] = useState(false)
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
  }, [])
  
  {/*v1*/}
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)
    const currentRef = Reference.current
    if (currentRef) observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  const [isVisibleTwo, setIsVisibleTwo] = useState(false)
  const RefTwo = useRef()

  const callbackTwo = entries => {
    const [entry] = entries
    setIsVisibleTwo(entry.isIntersecting)
  }

  const optionsTwo = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }
  }, [])


  {/*v2*/}
  useEffect(() => {
    const observer = new IntersectionObserver(callbackTwo, optionsTwo)
    const currentTwo = RefTwo.current
    if (currentTwo) observer.observe(currentTwo)

    return () => {
      if (currentTwo) observer.unobserve(currentTwo)
    }
  }, [])
   

  
  const [isVisibleThree, setIsVisibleThree] = useState(false)
  const RefThree = useRef()

  const callbackThree = entries => {
    const [entry] = entries
    setIsVisibleThree(entry.isIntersecting)
  }

  const optionsThree = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px',
      threshold: 0.4
    }
  }, [])

  {/*v3*/}
  useEffect(() => {
    const observer = new IntersectionObserver(callbackThree, optionsThree)
    const currentThree = RefThree.current
    if (currentThree) observer.observe(currentThree)

    return () => {
      if (currentThree) observer.unobserve(currentThree)
    }
  }, [])

  
  const MouseOver = () => {
    const link_Ulbi = document.querySelector('.ulbi-TV-link')
    link_Ulbi.classList.add('to')
  }

  return (
    <div className='travel'>
      <div className="travel-react">
        <img src="images/react-icon-28.png" alt="" className='react-img'/>
      </div>
      <div className="travel-studing">
        <div className="studing-reg">
          <h1 className="h1-reg">Минимальные навыки при котором я начал изучать ReactJS</h1>
        </div>
        <ul className="studing-ul">
          <li className='studing-li'>HTML & CSS</li>
          <li className='studing-li'>Основы JavaScript'а от курса Владилена Минина (6 часов)</li>
          <li className='studing-li'>Понимание самых простых концерции Git'a</li>
        </ul>
        <div className='studing-begin'>
          <h2 className="h2-begin">Начал 2 февраля 2022 года</h2>
        </div>
      </div>
      <div className="My-history">
        <h1 className="first-way">Певрый этап изучение</h1>
        <div className="text-of-history">
          <a href="https://www.youtube.com/c/itgid" target='_blank' className='link-history'>
            <img src="images/AL.jpg" alt="" className={isVisible ? 'AL visible' : 'AL'}/>
          </a>
          <p className="p-history">И так начинал я изучать эту технологию самостоятельно на канале Алексея Лущенко на ютубе. Обучался всего 1-2 неделю на этом этапе , это относительно не большое количество времени , но я приобрёл некоторые навыки:</p>
        </div>
        <div className={isVisible ? 'observer visible' : 'observer'} ref={Reference}>p</div>
        <div className="div-skills">
          <ul className="ul-skills">
            <li className="li-skills">Создания первого веб-приложения на реакте</li>
            <li className="li-skills">Компоненты в реакте</li>
          </ul>
        </div>
        <div className="second-history">
          <h1 className="second-way">Второй этап обучение</h1>
          <p className="p-second-history">После первого этапа обучение я сделал паузу и всё таки решил улучшить свои знания ReactJS спустя 1 месяц и этот этап стал более существенным в обучении . Обучался я также самостоятельно и на ютубе только теперь на канале Ulbi TV , рекомендую всем </p>
          <div className='observer-v2'></div>
          <div className={isVisibleTwo ? 'observer-two visible' : 'observer-two'} ref={RefTwo}>s</div>
          <div className={isVisibleTwo ? 'dynamic-show visible' : 'dynamic-show'}>
          <div className="ulbi">
            <h1 className='ulbi-this'>Ulbi <span>TV</span></h1>
            <div className="ulbi-images">
              <img src="images/arrow-for-ulbi.png" alt="стрелка на Тимура" className="ulbi-arrow" />
              <a className='ulbi-TV-link' href="https://www.youtube.com/c/UlbiTV" target='_blank' >
                <img src="images/ulbi.jpg" alt="стрелка на Тимура" className="ulbi-TV" />
              </a>
              <h2 className='click-ulbi-warning'>(Нажмите на <span className='span-for-click-ulbi'>иконку)</span></h2>
            </div>
          </div>
          <div className="BlueGrugs">
            <BlueGrug>1</BlueGrug>
            <BlueGrug>2</BlueGrug>
            <div className='BL'>
              <div className='BlueGrug'>
                <div className="BlueGrug-details">
                  <p className='BlueGrug-paragraf'>3</p>
                </div>
              </div>
            </div>
          </div>
          <div className="steps">
            <h2 className="steps-h2">Посмотреть <span className="span-steps">на иконку</span></h2>
            <h2 className="steps-h2-v2">Перейте на канал <span className="steps-h2-v2-span">(Нажмите на иконку)</span></h2>
          </div>
          <img src="images/arrow-for-num.png" alt="" className='arrow-ulbi-mobile'/>
          </div>
          <div className="second-begin">
            <h2 className="second-h1">Второй этап начался 18 марта 2022 года</h2>
          </div>
          <div className="learning-container">
            <div className={isVisibleThree ? "learning-outside-center visible" : 'learning-outside-center'} ref={RefThree}>
              <div className="learning-outside">
                <div className="learning-process">Процесс</div>
              </div>
            </div>
            <div className="learning-text">Проходил я курс довольно долго , он 3-часовой по React'у и каждый абзац , часть я делил на 20 минут и пересматривал их по 5 раз затем закреплял на практике и это довольно тяжело было , но мой уровень владением React'ом сильно вырос. И я научился реализовать такие вещи , которые раньше не мог бы</div>
            <div className="learning-end">Проходил курс от 18-марта до 14-мая (~почти 2 месяца)</div>
            <div className="skills-who-i-get">
              <div className="skills-get-text">Практические навыки , которые я приобрёл в ходе курса</div>
              <div className="green-line"></div>
              <div className="skills-get-div">
                <ol className="skills-get-ol">
                  <li className="skills-get-li">Добавление и удаление элементов</li>
                  <div className="orange-line"></div>
                  <li className="skills-get-li">Сортировка элементов по значению</li>
                  <div className="orange-line"></div>
                  <li className="skills-get-li">Поисковик запросов</li>
                  <div className="orange-line"></div>
                  <li className="skills-get-li">Модальное окно</li>
                  <div className="orange-line"></div>
                  <li className="skills-get-li">Маршрутизация (React-router)</li>
                  <div className="orange-line"></div>
                  <li className="skills-get-li">Показ элементов при зоны видимости наблюдаемого элемента</li>
                  <div className="orange-line-v2"></div>
                </ol>
              </div>
            </div>
          </div>
          <div className="lesson-for-react">
            <h1 className="h1-for-lesson">Ссылка на курс</h1>
            <img src="images/arrow-down.png" alt="" className='arrow-down' />
            <a href="https://www.youtube.com/watch?v=GNrdg3PzpJQ" target='_blank'>
              <img src="images/react-ulbi.jpg" alt="" className='react-lesson-by-Ulbi' />
            </a>
          </div>
          <div className="travel-end">
            <div className="end-line"></div>
            <h1 className="travel-text">Спасибо за внимания!</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Travel