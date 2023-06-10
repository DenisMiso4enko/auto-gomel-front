import { useState, useEffect } from 'react'
import { ExchangeRates } from '../ExchangeRates'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__body container">
        <div className="footer__top">
          
          <div className="footer__top-item">
            <div className="logo">АВТО.ГОМЕЛЬ</div>
          </div>

          <div className="footer__top-item">
            <h3>Адреса</h3>
            <ul>
              <li>Гомель, ул. Г/Подпольщиков, 18</li>
              <li>Гомель, ул. Ефремова 31</li>
            </ul>
          </div>

          <div className="footer__top-item">
            <ExchangeRates />
          </div>

          <div className="footer__top-item">
            <h3>Контакты</h3>
            <ul>
              <li>
                <a href="tel:+375 29 899 99 99">+375(29) 899-99-99</a>
              </li>
              <li>
                <a href="tel:+375 29 899 99 99">+375(29) 899-99-99</a>
              </li>
              <li>
                <a href="tel:+375 29 899 99 99">+375(29) 899-99-99</a>
              </li>
              <li>
                <a href="mailto:avda2010@mail.ru?subject=Вопросы и предложения">
                  avda2010@mail.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>
            ИП Повная С.В., УНП491166963, 247501, Республика Беларусь,
            Гомельская область, Речицкий район, д. Заспа ул. Солигорская д.7
            Зарегистрировано решением Речицким районным исполнительным комитетом
            от 03.02.2015г. Дата регистрации интернет-магазина в Торговом
            реестре Республики Беларусь 12.02.2015г
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
