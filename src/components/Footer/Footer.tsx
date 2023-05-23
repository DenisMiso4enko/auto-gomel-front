import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__body container">
        <div className="footer__top">
          <div className="footer__top-item">
            <div className="logo" style={{ fontSize: "20px", fontWeight: "700" }}>
              AUTOGOMEL
            </div>
          </div>

          <div className="footer__top-item">
            <h3>Адреса</h3>
            <ul>
              <li>Гомель, ул. Г/Подпольщиков, 18</li>
              <li>Гомель, ул. Ефремова 31</li>
            </ul>
          </div>

          <div className="footer__top-item">
            <h3>Курсы валют</h3>
            <ul>
              <li>1 USD 2.86</li>
              <li>1 EUR 3.10</li>
              <li>1 RUB 0.04</li>
              <li>USD/EUR 1.09</li>
            </ul>
          </div>

          <div className="footer__top-item">
            <h3>Контакты</h3>
            <ul>
              <li>+375 29 899 99 99</li>
              <li>+375 29 899 99 99</li>
              <li>+375 29 899 99 99</li>
              <li>avda2010@mail.ru</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>
            ИП Повная С.В., УНП491166963,
            247501, Республика Беларусь, Гомельская область, Речицкий район, д. Заспа ул. Солигорская д.7 Зарегистрировано решением Речицким районным исполнительным комитетом от 03.02.2015г.
            Дата регистрации интернет-магазина в Торговом реестре Республики Беларусь 12.02.2015г
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
