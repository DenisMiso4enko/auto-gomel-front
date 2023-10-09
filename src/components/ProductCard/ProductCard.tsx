import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { IProduct } from '../../types/productTypes'
import { PATHDOMAIN } from '../../constants'
import noImage from '../../assets/nofoto2.jpg'
import dayjs from 'dayjs'
import HistoryIcon from '@mui/icons-material/History'
import { useConvertedToByn } from '../../libs/hooks/useConvertedToByn'
import { useConvertedToUsd } from '../../libs/hooks/useConvertedToUsd'

const ProductCart: FC<IProduct> = ({
  description,
  imagesUrl,
  product,
  price,
  year,
  mark,
  model,
  currency,
  createdAt,
  _id,
}) => {
  const navigate = useNavigate()
  const handlerOnClickProduct = () => {
    navigate(`/parts/${_id}`)
    window.scrollTo(0, 0)
  }

  const { priceToBYN } = useConvertedToByn(+price)
  const { priceToUsd } = useConvertedToUsd(+price)

  return (
    <div className="product-card" onClick={handlerOnClickProduct}>
      <div
        className={
          imagesUrl.length
            ? 'product-card__image'
            : 'product-card__image product-card__image--padding'
        }
      >
        {imagesUrl.length ? (
          <img src={`${PATHDOMAIN}${imagesUrl[0]}`} alt={product} />
        ) : (
          <img src={noImage} alt={product} />
        )}
      </div>
      <div className="product-card__content">
        <div className="product-card__product">
          <p className="product-card__subtitle">{product}</p>
          <h3 className="product-card__title">
            {mark} {model}, {year}
          </h3>
          <p className="product-card__description">{description}</p>
        </div>
        <div className="product-card__info">
          {currency === 'USD' ? (
            <>
              <p className="product-card__price">{priceToBYN}</p>
              <p>
                ~ {price} {currency}
              </p>
            </>
          ) : (
            <>
              <p className="product-card__price">
                {price} {currency}
              </p>
              <p>~ {priceToUsd}</p>
            </>
          )}

          {/*          <span className="product-card__date">*/}
          {/*  <HistoryIcon/> {dayjs(createdAt).format('DD.MM.YYYY')}*/}
          {/*</span>*/}
        </div>
      </div>
    </div>
  )
}

export default ProductCart
