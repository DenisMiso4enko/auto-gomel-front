import { NavLink } from 'react-router-dom'
import { menuData } from './menuData'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'
import { setCurrentPage } from '../../store/slices/autoParts/autoPartsSlice'

const NavMenu = ({ isOpen, setIsOpen }: any) => {
  const dispatch = useDispatch<AppDispatch>()

  const handlerChangeCurrentPage = (
    event: React.ChangeEvent<unknown>,
    value = 1
  ) => {
    window.scrollTo(0, 0)
    dispatch(setCurrentPage(value))
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('stop-scrolling')
    } else {
      document.body.classList.remove('stop-scrolling')
    }
  }, [isOpen])
  return (
    <nav className={`menu ${isOpen ? 'active' : ''}`}>
      <ul className="menu__list">
        {menuData?.map((el) => (
          <li className="" key={el.title}>
            <NavLink
              className="menu-item"
              to={el.link}
              onClick={(event) => {
                setIsOpen(false)
                handlerChangeCurrentPage(event, 1)
                // TS ругается на метод matches =>
                // if (event.target.matches('a[href$="parts"]')) {
                //   handlerChangeCurrentPage(event, 1)
                // }
              }}
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
