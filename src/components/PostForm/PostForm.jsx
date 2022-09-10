import React from 'react'
import MyButton from '../../UI/button/MyButton'
import './PostForm.scss'


const PostForm = ({text , AddElement , setText}) => {
  return (
    <div className='PostForm'>
        <input
            type="text" 
            className='input-for-add'
            placeholder='Добавьте текст'
            value={text} 
            onChange={e => setText(e.target.value)}
          />
         <div className="button-div">
           <MyButton onClick={AddElement}>Создать</MyButton>
        </div>
    </div>
  )
}

export default PostForm