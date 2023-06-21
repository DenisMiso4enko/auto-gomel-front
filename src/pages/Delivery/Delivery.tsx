import React from "react";
import { Helmet } from "react-helmet";
import truck from "../../assets/delivery-truck.svg";
import box from "../../assets/delivery-bold-duotone.png";

const Delivery = () => {
  return (
    <div className="delivery container">
      <Helmet>
        <title>Доставка | АВТО.ГОМЕЛЬ</title>
      </Helmet>
      <h2 className="delivery__title">Доставка</h2>
      <p className="delivery__description">
        В случае доставки курьером покупатели могут оплатить заказ как наличным, так и безналичным способом. Мы
        постоянно совершенствуем нашу службу доставки для того, чтобы сделать ее максимально удобной. Чтобы быть к Вам
        как можно ближе мы регулярно открываем новые пункты самовывоза.
      </p>
      <div className="delivery__list">
        <div className="delivery-card">
          <div className="delivery-card__image">
            <img src={truck} alt="Транспортная компания" />
          </div>
          <h3 className="delivery-card__title">Транспортная компания</h3>
          <p className="delivery-card__subtitle">Этот способ может быть выбран по договоренности с менеджером.</p>
        </div>

        <div className="delivery-card">
          <div className="delivery-card__image">
            <img src={box} alt="Самовызов" />
          </div>
          <h3 className="delivery-card__title">Самовывоз</h3>
          <p className="delivery-card__subtitle">Этот способ следует выбирать, если Вы сможете забрать заказ
            самостоятельно или через доверенное лицо в офисе.</p>
        </div>
      </div>

    </div>
  );
};

export default Delivery;
