import { NavLink } from 'react-router-dom'
import { menuData } from './menuData'

const NavMenu = ({ isOpen, setIsOpen }: any) => {
  return (
    <nav className={`menu ${isOpen ? 'active' : ''}`}>
      <ul className="menu__list">
        {menuData?.map((el) => (
          <li className="" key={el.title}>
            <NavLink
              className="menu-item"
              to={el.link}
              onClick={() => setIsOpen(false)}
            >
              {el.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavMenu
