import OfferCart from '../OfferCart/OfferCart'
import { offerData } from './OfferData'
import SectionTitle from '../SectionTitle/SectionTitle'

const WeOffer = () => {
  return (
    <section className="section offer container">
      <SectionTitle title="Что мы предлагаем?" />
      <div className="offer__list">
        {offerData?.map((offer) => (
          <OfferCart key={offer.title} {...offer} />
        ))}
      </div>
    </section>
  )
}

export default WeOffer
