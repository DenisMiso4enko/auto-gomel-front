import HistoryIcon from '@mui/icons-material/History'

const Salesman = () => {
  return (
    <div className="salesman-info">
      <div className="salesman-info__name">ИП МИСОЧЕНКО А.Н</div>
      <div className="salesman-info__time">
        <HistoryIcon />
        <p>c 8.30 до 19.00</p>
      </div>
      <div className="salesman-info__address">
        <span>Адрес: </span>
        ул. Ефремова Авторынок "Ефремовский", <br />
        ул. Г/Подпольщиков, 18 Авторынок "Бакуненский"
      </div>
      <div className="salesman-info__phones">
        <div>
          <a href="tel:+375447522757">+375 (44) 752 27 57</a>
        </div>
        <div>
          <a href="tel:+375297522757">+375 (29) 752 27 57</a>
        </div>
        <div>
          <a href="tel:+375447585536">+375 (44) 758 55 36</a>
        </div>
      </div>
      <div className="salesman-info__say">
        Скажите, что вы звоните с сайта <span>автогомель.бел</span>
      </div>
    </div>
  )
}

export default Salesman
