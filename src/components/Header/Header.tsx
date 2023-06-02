import { useNavigate } from 'react-router-dom'
import NavMenu from '../NavMenu/NavMenu'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'

const Header = () => {
  const navigate = useNavigate()
  const goHome = () => navigate('/')

  return (
    <header className="header">
      <div className="header__body container">
        <div
          className="logo"
          style={{ fontSize: '20px', fontWeight: '700' }}
          onClick={goHome}
        >
          АВТО.ГОМЕЛЬ
        </div>
        <NavMenu />
        <div className="header__search">
          <div className="header__phone">
            <PhoneInTalkIcon />
            <a href="tel:+375298378081">+375 29 837 80 81</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
