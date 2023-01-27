import './NavItems.scss';

import { ListItem } from '../index';
import listItemData from '../../data/listItemData';

const NavItems = ({ handleClick }) => {

  return (
    <div className="nav-items">
      <ul className="navbar-nav ms-auto me-auto mt-md-0" onClick={handleClick}>
        { 
          listItemData.map((item) => (
            <ListItem 
              key={item.id} 
              listClass={item.listClass} 
              linkHref={item.linkHref} 
              linkContent={item.linkContent} 
            />
          ))
        }
      </ul>
  </div>
  )
}

export default NavItems