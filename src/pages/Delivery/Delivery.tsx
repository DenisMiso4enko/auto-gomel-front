import React from 'react'
import { Helmet } from 'react-helmet'
import { DeliveryData } from './DeliveryData'

const Delivery = () => {
  return (
    <div className="delivery container">
      <Helmet>
        <title>Доставка | АВТО.ГОМЕЛЬ</title>
      </Helmet>
      <h2 className="delivery__title">Доставка</h2>
      <p className="delivery__description">
        В случае доставки курьером покупатели могут оплатить заказ как наличным,
        так и безналичным способом. Мы постоянно совершенствуем нашу службу
        доставки для того, чтобы сделать ее максимально удобной. Чтобы быть к
        Вам как можно ближе мы регулярно открываем новые пункты самовывоза.
      </p>
      <div className="delivery__list">
        {DeliveryData.map((data, i) => (
          <div className="delivery-card" key={i}>
            <div className="delivery-card__image">
              <img src={data.image} alt="Транспортная компания" />
            </div>
            <h3 className="delivery-card__title">{data.title}</h3>
            <p className="delivery-card__subtitle">{data.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Delivery
