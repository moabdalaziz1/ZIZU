import './ListItem.scss';

const ListItem = ({ item }) => {
  return (
    <>
      <li className={item.listClass}>
        <a className={`nav-link ${item.activeClass}`} href={`${item.linkHref}`}>
          {item.linkContent}
        </a>
      </li>
    </>
  )
}

export default ListItem