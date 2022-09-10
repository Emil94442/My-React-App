import React , {useState , useEffect , useMemo , useContext} from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../../API/AuthContext'
import { PostServise } from '../../../API/PostServise'
import { useFetching } from '../../../Hooks/useFetching'
import Loading from '../Loading/Loading'
import UserIdPage from '../UserIdPage/UserIdPage'

const UserId = () => {

    const {user , setUser} = useContext(AuthContext)

    const params = useParams()
  
  
    const [isUserLoading , FetchUserInfo , userError] = useFetching( async (id) => {
        const response = await PostServise.getInfoUser(id)
        setUser(response.data)
    })
  
  
    useEffect(() => {
        FetchUserInfo(params.id)
    } , [])

  return (
    <div className='UserId'>
        {isUserLoading
         ? <Loading/>
         : <UserIdPage loading={isUserLoading} user={user}/>
        }
    </div>
  )
}

export default UserId