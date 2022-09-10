import React from 'react'
import './UserContent.scss'

const UserContent = ({user}) => {
  
  return (
    <div className='UserContent'>
        <div className="UserContent__About-user">About user — {user.username}</div>
        <div className="UserContent__line"></div>
        <div className="UserContent__contact contact">
            <div className="contact__title">Contact</div>
            <div className="contact__line-center">
                <div className="contact__line"></div>
            </div>
            <div className="contact__name">name — <span className="contact__span">{user.name}</span></div>
            <div className="contact__email">email — <span className="contact__span">{user.email}</span></div>
            <div className="contact__phone">phone — <span className="contact__span">{user.phone}</span></div>
            <div className="contact__website">website — <span className="contact__span">{user.website}</span></div>
        </div>
    </div>
  )
}

export default UserContent