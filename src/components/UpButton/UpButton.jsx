import {useState} from 'react'
import './UpButton.scss'
import { MdExpandLess } from 'react-icons/md'

const UpButton = () => {

  const [isUpBtnAppear, setIsUpBtnAppear] = useState(false)
  window.addEventListener('scroll', () => {
    window.scrollY >= 500 ? setIsUpBtnAppear(true) : setIsUpBtnAppear(false)
  })
  const goUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <div 
        className={`up ${isUpBtnAppear ? 'show-btn' : 'hide-btn'}`} 
        onClick={goUp}
      >
        <MdExpandLess size={30} />
      </div>
    </>
  )
}

export default UpButton