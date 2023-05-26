import OfferCart from '../OfferCart/OfferCart'
import { offerData } from './OfferData'
import SectionTitle from '../SectionTitle/SectionTitle'

const WeOffer = () => {
    return (
        <div className="section offer container">
            <SectionTitle title="Что мы предлагаем?" />
            <div className="offer__list">
                {offerData?.map((offer) => (
                    <OfferCart key={offer.title} {...offer} />
                ))}
            </div>
        </div>
    )
}

export default WeOffer
