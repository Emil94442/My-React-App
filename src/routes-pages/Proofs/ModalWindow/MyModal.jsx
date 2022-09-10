import React from 'react'
import cl from './MyModal.module.scss'

const MyModal = ({visible , children , setVisible}) => {

  const rootClasses = [cl.Modal]
  if (visible) {
      rootClasses.push(cl.active)
  }

  const stop = () => {
      setVisible(true)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
         <div className={cl.ModalContent} onClick={(e) => e.stopPropagation()}>
            {children}
         </div>
    </div>
  )
}

export default MyModal