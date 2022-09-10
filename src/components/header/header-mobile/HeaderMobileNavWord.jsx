import { useNavigate } from 'react-router-dom'
import './HeaderMobileNavWord.scss'

const HeaderMobileNavWord = ({children , route}) => {

  const navigate = useNavigate()

  function MobileMenuNavigate () {
      navigate(route)
  }  

  return (
    null
  )
}

export default HeaderMobileNavWord