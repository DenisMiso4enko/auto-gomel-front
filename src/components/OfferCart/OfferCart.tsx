import { FC } from 'react'

type OfferCartType = {
    image?: string
    title?: string
    text?: string
}

const OfferCart: FC<OfferCartType> = ({ image, title, text }) => {
    return (
        <div className="offer-cart">
            <div className="offer-cart__image">
                <img src={image} alt="svg" />
            </div>
            <h3 className="offer-cart__title">{title}</h3>
            <p className="offer-cart__text">{text}</p>
        </div>
    )
}

export default OfferCart
