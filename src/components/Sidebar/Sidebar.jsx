import './Sidebar.scss';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';

import { ListItem } from '../index';
import listItemData from '../../data/listItemData';

const Sidebar = ({ handleClick }) => {
  // Toggle The Sidebar And The Buttons
  const [isClicked, setIsClicked] = useState(true);
  const toggle = () => {
    setIsClicked(prevState => !prevState);
  }

  return (
    <div className='sidebar-hero'>
      <button className="navbar-toggler" type="button" onClick={toggle}>
        <span className='collapse-icon'>
          {isClicked ? <BiMenuAltRight /> : <AiOutlineClose />}
        </span>
      </button>
      <div className={`sidebar ${isClicked ? 'hide' : 'show' }`}>
        <ul className='navbar-nav' onClick={handleClick}>
          { 
            listItemData.map((item) => (
              <ListItem 
                key={item.id}
                item={item}
              />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Sidebar