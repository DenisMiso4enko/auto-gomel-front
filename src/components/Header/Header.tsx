import { useLocation, useNavigate } from 'react-router-dom'
import NavMenu from '../NavMenu/NavMenu'
import PhoneIcon from '@mui/icons-material/Phone'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate()
  const goHome = () => navigate('/')

  const locate = useLocation()
  const isHome = locate.pathname === '/'

  const handleBurgerOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className={'header--background'}>
      <div className="header__body container">
        <div
          className="logo"
          style={{ fontSize: '20px', fontWeight: '700' }}
          onClick={goHome}
        >
          АВТОГОМЕЛЬ
        </div>
        <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="header__right">
          <div className="header__phone">
            <a href="tel:+375447522757">
              <PhoneIcon />
              <span>+375 (44) 752 27 57</span>
            </a>
          </div>
          <div
            className={`menu-btn ${isOpen ? 'active' : ''}`}
            onClick={handleBurgerOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

// className={isHome ? 'header' : 'header header--background'} изначально стиль для header
