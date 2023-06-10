import { NavLink } from 'react-router-dom'
import { menuData } from '../NavMenu/menuData'
import './index.scss'

const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      {menuData?.map((el) => (
        <li className="">
          <NavLink className="" to={el.link}>
            {el.title}
          </NavLink>
        </li>
      ))}
    </div>
  )
}

export default MobileMenu
