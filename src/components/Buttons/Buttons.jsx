import './Buttons.scss';
import { MdExpandMore } from 'react-icons/md'

const MainButton = ({ btnLink, children }) => {
  return (
    <a 
      href={btnLink} 
      target='_blank'
      rel="noreferrer" 
      className='btn'
    >
      {children}
    </a>
  )
}

const LoadButton = ({ handleClick }) => {
  return (
    <button className='seeMore' onClick={handleClick}>
      explore more <MdExpandMore size={30} />
    </button>
  )
}

const Submit = ({ children }) => {
  return (
    <button type='submit' className='btn btn-submit'>
      {children}
    </button>
  )
}

export default MainButton
export { Submit, LoadButton }