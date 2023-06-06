import { useNavigate } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const goHome = () => navigate("/");

  const handleBurgerOpen = () => {
    setIsOpen(!isOpen);

  };

  return (
    <header className="header">
      <div className="header__body container">
        <div
          className="logo"
          style={{ fontSize: "20px", fontWeight: "700" }}
          onClick={goHome}
        >
          АВТО.ГОМЕЛЬ
        </div>
        <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="header__right">
          <div className="header__phone">
            <PhoneInTalkIcon />
            <a href="tel:+375298378081">+375 29 837 80 81</a>
          </div>
          <div className={`menu-btn ${isOpen ? "active" : ""}`} onClick={handleBurgerOpen}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
