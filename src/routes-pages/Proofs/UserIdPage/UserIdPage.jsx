import React from 'react'
import UserContent from './UserContent/UserContent'
import './UserIdPage.scss'

const UserIdPage = ({user , loading}) => {
  
  return (
    <div className='UserIdPage'>
       <div className="UserIdPage__PostId PostId">
            PostId - <span className="PostId__span">{user.id}</span>
       </div>
       <div className='UserIdPage__loading-content'>
          {loading 
          ? <h1>...Loading</h1> 
          : <UserContent user={user}/>
          }
       </div>
       <div className="UserIdPage__content content">
          <div className="content__address address">
              <div className="address__title">address</div>
              <div className="address__line"></div>
              <div className="address__content">
                <div className="address__street street">
                  street: <span className="street__span">{user.address && user.address["street"]}</span>
                </div>
                <div className="address__suite suite">
                  suite: <span className="suite__span">{user.address && user.address["suite"]}</span>
                </div>
                <div className="address__city city">
                  city: <span className="city__span">{user.address && user.address["city"]}</span>
                </div>
                <div className="address__zipcode zipcode">
                  zipcode: <span className="zipcode__span">{user.address && user.address["zipcode"]}</span>
                </div>
                <div className="address__geo geo">
                  <span className="geo__text">geo:</span>
                  <div className="geo__arrow arrow">
                    <div className="arrow__one"></div>
                    <div className="arrow__two"></div>
                  </div>
                  <div className="geo__content">
                     <div className="geo__lat">
                        lat {user.address && user.address["geo"]["lat"]}
                     </div>
                     <div className="geo__lng">
                        lng {user.address && user.address["geo"]["lat"]}
                     </div>
                  </div>
                </div>  
              </div>
              
          </div>
          <div className="content__company company">
            <div className="company__title">
              company
            </div>
            <div className="company__line"></div>
            <div className="company__content">
              <div className="company__name name">
                 <span className="name__title">name</span> 
                 <div className="name__line-center">
                   <div className='name__line'></div>
                 </div>
                 <br />
                 <span className='name__answer'>{user.company && user.company["name"]}</span>
              </div>
              <div className="company__catchPhrase catchPhrase">
                 <span className="catchPhrase__title">catchPhrase</span> 
                 <div className="catchPhrase__line-center">
                   <div className='catchPhrase__line'></div>
                 </div>
                 <br />
                 <span className='catchPhrase__answer'>{user.company && user.company["catchPhrase"]}</span>
              </div>
              <div className="company__bs">
                 <span className="bs__title">bs</span>
                 <div className="bs__line-center">
                   <div className="bs__line"></div>
                 </div>
                  <br />
                  <span className='bs__answer'>{user.company && user.company["bs"]}</span>
              </div>
            </div>
          </div>
       </div>
       <footer className='footer'>
          <div className="footer__title">
            <h1>The End</h1>
          </div>
          <div className="footer__me">
            <h5 className='footer__word'>I'M IN SOCIAL NETWORKS:</h5>
            <div className="footer__social-networks social-networks">
              <a href='https://github.com/Emil94442' target='blank' className='social-networks__text'>GitHub</a>
              <a href='https://www.youtube.com/channel/UCRO6XxzvACWVDYYewIHqv2g' target='blank' className='social-networks__text'>YouTube</a>
              <a href='https://www.instagram.com/accounts/onetap/?next=%2F' target='blank' className='social-networks__text'>Instagram</a>
            </div>
          </div>
       </footer>
    </div>
  )
}

export default UserIdPage