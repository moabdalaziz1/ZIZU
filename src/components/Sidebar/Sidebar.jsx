import { useState } from 'react';
import './Sidebar.scss';
import { FaAlignJustify, FaWindowClose } from 'react-icons/fa';

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
          {isClicked ? <FaAlignJustify /> : <FaWindowClose />}
        </span>
      </button>
      <div className={`sidebar ${isClicked ? 'hide' : 'show' }`}>
        <ul className='navbar-nav' onClick={handleClick}>
          { 
            listItemData.map((item) => (
              <ListItem 
                key={item.id} 
                linkHref={item.linkHref} 
                linkContent={item.linkContent} 
              />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Sidebar