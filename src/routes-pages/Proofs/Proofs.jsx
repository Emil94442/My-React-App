import React , {useState , useEffect , useMemo , useRef} from 'react'
import PostForm from '../../components/PostForm/PostForm'
import MyButton from '../../UI/button/MyButton'
import MySelect from '../../UI/select/MySelect'
import ElementForAdd from './ElementAdd/ElementForAdd'
import MyModal from './ModalWindow/MyModal'
import {TransitionGroup , CSSTransition} from 'react-transition-group'
import './Proofs.scss'
import { useNavigate } from 'react-router-dom'
import { useFetching } from '../../Hooks/useFetching'
import { PostServise } from '../../API/PostServise'
import { GetPageCount, GetTotalPages } from '../../API/TotalPages'
import '../../UI/buttonOrange/MyButtonOrange.scss'
import { useObserver } from '../../Hooks/useObserver'
import Loading from './Loading/Loading'
import Calculator from '../calculate/Calculator'

const Proofs = () => {

  const [text , setText] = useState('')
  const [limit , setLimit] = useState(2)
  const [totalPages , setTotalPages] = useState(0)
  const [page , setPage] = useState(1)
  const [selectedSort , setSelectedSort] = useState('')
  const [searchQuery , setSearchQuery] = useState('')
  const [users , setUsers] = useState([])
  const [lists , setLists] = useState([
    {id: 1 , text: 'Hello-Emil'},
    {id: 2 , text: 'Artur-buy'},
    {id: 3 , text: 'Shamen-apkel'},
    {id: 4 , text: 'Didar-deading-side'}
  ])
  const [modal , setModal] = useState(false)
  const lastElement = useRef()
  

  const AddElement = () => {
      const obgForText = {
        id: Date.now(),
        text,
      }
      setLists([...lists , obgForText])
      console.log(text)
      setModal(false)
      setText('')
  }
  const removeList = (list) => {
     setLists(lists.filter(removing => removing.id !== list.id))
  }
  
  const sortLists = (sort) => {
      setSelectedSort(sort)
  }


  const sortedLists = useMemo(() => {
    console.log('отработала функция')
    if (selectedSort) {
      return [...lists].sort((a , b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return lists
  } , [selectedSort , lists])

  
  const searchedAndSortedPosts = useMemo(() => {
      return [...sortedLists].filter(list => list.text.toLowerCase().includes(searchQuery.toLowerCase()))
  } , [searchQuery , sortedLists])


  const [isLoading , FetchUsers , usersError] = useFetching( async(limit , page) => {
      const user = await PostServise.getUsers(limit , page)
      setUsers([...users , ...user.data])
      const totalCount = user.headers['x-total-count']
      setTotalPages(GetPageCount(totalCount , limit))
  })


  useObserver(lastElement , page < totalPages , isLoading , () => {
    console.log(page)
    setPage(page + 1)
  })
  
  useEffect(() => {
      FetchUsers(limit , page)
  } , [page , limit])
  

  const navigate = useNavigate()

  
  let pagesArray = GetTotalPages(totalPages)
  console.log(pagesArray)

  return (
    <div className='Proofs'>
      <h1 className="first-step-h1">React App</h1>
      <div className="lists-Editor">
        <div className="lists-Editor__line"></div>
        <h1 className='lists-Editor__title'>Lists-Editor</h1>
      </div>
      <div className="Choose-sort">
        <div className="MySelect">
           <MySelect
             value={selectedSort}
             onChange={sortLists}
             defaultValue='Сортировка от'
             options={[
               {value: 'text' , name: 'Начало'},
               {value: '' , name: 'Default'}
             ]}
           />
        </div>
        <div className="querry-div">
        <input
           type="text"
           placeholder='ПОИСК...'
           className="querry-input" 
           value={searchQuery} 
           onChange={edit => setSearchQuery(edit.target.value)}
        />
        <img src="images/Awicons-Vista-Artistic-Search.ico" alt="" className='search-ico'/>
        </div>
      </div>
      <div className="add-remove-app">
         <div className="MyButton-div">
            <MyButton style={{marginLeft: 20}} onClick={() => setModal(true)}>Создать лист</MyButton>
         </div>
         <MyModal visible={modal} setVisible={setModal}>
             <PostForm text={text} AddElement={AddElement} setText={setText}/>
         </MyModal>
         <div className="nothing">
           {searchedAndSortedPosts.length 
           ? <div className="Elements">
              <TransitionGroup>
                {searchedAndSortedPosts.map((text , index) =>
                  <CSSTransition
                    key={text.id}
                    timeout={500}
                    classNames="list"
                  >
                    <ElementForAdd text={text} remove={removeList} index={index + 1} />
                  </CSSTransition>
                )}
              </TransitionGroup>
            </div>
           : <div className="nothing-container">
                <h1>Списков не найдено</h1>
                <div className="div-IDN">
                    <h1 className='question'>?</h1>
                    <img src="images/IDN.png" alt="" className='IDN'/>
                </div>
             </div>
          }
          <div className="Total-lists">
            {searchedAndSortedPosts.length > 0 && <h1 style={{marginLeft: 20}}>length: {searchedAndSortedPosts.length}</h1>
            }    
           </div>
          </div>
      </div>
      <div className="Calculator">
        <div className="Calculator__titleContent">
           <div className="Calculator__line"></div>
           <h1 className="Calculator__title">Calculator</h1>
        </div>
         <Calculator/>
      </div>
      <div className="API-line">
        <h1 className='API-title'>API</h1>
      </div>
      <div className="API">
         {users.map(user =>
          <div className="user">
            <div className="line-div">
              <div className="line-drop"></div>
            </div>
            <div className="name-email-div">
               <div className="name">{user.id}. <span className="span-name">{user.name}</span></div>
               <div className="email">{user.email}</div>
            </div>
            <div className="user-MyButton">
               <MyButton onClick={() => navigate(`/user/${user.id}`)}>Открыть</MyButton>
            </div>
          </div>
        )
        }
      </div>
      <div ref={lastElement} className="red-line-for-loading-users"></div>
      {isLoading && <Loading/>}
    </div>
  )
}

export default Proofs