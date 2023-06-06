import React from "react";
import HistoryIcon from "@mui/icons-material/History";

const Salesman = () => {
  return (
    <div className="salesman-info">
      <div className="salesman-info__name">
        ИП МИСОЧЕНКО А.Н
      </div>
      <div className="salesman-info__time">
        <HistoryIcon />
        <p>c 8.30 до 19.00</p>
      </div>
      <div className="salesman-info__address">
        <span>Адрес: </span>
        ул. Ефремова
        Авторынок "Ефремовский", <br />
        ул. Г/Подпольщиков, 18
        Авторынок "Бакуненский"
      </div>
      <div className="salesman-info__phones">
        <div><a href="tel:+375298378081">+375 (29) 837 80 81</a></div>
        <div><a href="tel:+375298378081">+375 (29) 837 80 81</a></div>
        <div><a href="tel:+375298378081">+375 (29) 837 80 81</a></div>
      </div>
      <div className="salesman-info__say">Скажите я звоню с сайта avtogomel.by</div>
    </div>
  );
};

export default Salesman;