import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './header.scss'
import '../../routes-pages/Proofs/Proofs.scss'

const Header = () => {

  const navigate = useNavigate()

  const [mobileMenu , setMobileMenu] = useState(false)
  
  const MobileMenuNavigate = (route) => {
      if (mobileMenu) {
        setMobileMenu(false)
        navigate(route)
      }
  }

  const OpenOrCloseMobileMenu = () => {

     const body = document.querySelector('body')

     if (!mobileMenu) {
       setMobileMenu(true)
       body.classList.add('lock')
     } else {
       setMobileMenu(false)
       body.classList.remove('lock')
     }
  }

  return (
    <div>
        <header className='header'>
          <div className="header-logo">
            <button className='exit' onClick={() => navigate('/*')}>Назад</button>
            <img src="images/react-icon-29.jpg" alt="" className='react-icon'/>
            <img src="images/react-text.png" alt="" className='react-text'/>
            <h1 className='react-text-for-mobile'>react <span className="span-for-mobile-text">-</span> <span className="span-word"> learn</span></h1>
          </div>
      <div className="header-link">
        <ul className="header-ul">
          <li className="header-li" onClick={() => navigate('/travel')}>Мой путь и <span className="span-li-one">развития</span></li>
          <li className="header-li-two" onClick={() => navigate('/proofs')}>Доказательство на <span className="span-li-two">практике</span></li>
        </ul>
        <div className={mobileMenu ? 'burger-stripes opened' : 'burger-stripes'} onClick={OpenOrCloseMobileMenu}>
            <div className="burger-stripe-one"></div>
            <div className="burger-stripe-two"></div>
            <div className="burger-stripe-three"></div>
        </div>
      </div>
    </header>
      <div className={mobileMenu ? 'header-mobile-menu visible' : 'header-mobile-menu'}>
          <ul className="mobile-ul">
            <li className="mobile-li" onClick={() => MobileMenuNavigate('/travel')}>Мой путь и развитие</li>
            <hr />
            <li className="mobile-li" onClick={() => MobileMenuNavigate('/proofs')}>Доказательство на примере</li>
            <hr />
            <li className="mobile-li" onClick={() => MobileMenuNavigate('/*')}>выйти</li>
          </ul>
      </div>
    </div>
  )
}

export default Header