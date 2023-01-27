import './ListItem.scss';

const ListItem = ({ listClass, linkHref, linkContent }) => {
  return (
    <>
      <li className={listClass}>
        <a className="nav-link" href={`${linkHref}`}>
          {linkContent}
        </a>
      </li>
    </>
  )
}

export default ListItem