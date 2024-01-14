import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { IProduct } from '../../types/productTypes'
import { PATHDOMAIN } from '../../constants'
import noImage from '../../assets/nofoto2.jpg'
import dayjs from 'dayjs'
import HistoryIcon from '@mui/icons-material/History'

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
    // window.scrollTo(0, 0)
  }

  return (
    <div className="product-card" onClick={handlerOnClickProduct}>
      {imagesUrl.length ? (
        <img
          className={
            imagesUrl.length
              ? 'product-card__image'
              : 'product-card__image product-card__image--padding'
          }
          src={`${PATHDOMAIN}${imagesUrl[0]}`}
          alt={product}
        />
      ) : (
        <img
          className={
            imagesUrl.length
              ? 'product-card__image'
              : 'product-card__image product-card__image--padding'
          }
          src={noImage}
          alt={product}
        />
      )}
      <div className="product-card__content">
        <div className="product-card__info">
          <p className="product-card__subtitle">{product}</p>
          <h3 className="product-card__title">
            {mark} {model}, {year}
          </h3>
        </div>
        <div className="product-card__bottom">
          <span className="product-card__date">
            <HistoryIcon /> {dayjs(createdAt).format('DD.MM.YYYY')}
          </span>
          <p className="product-card__price">
            {price} {currency}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductCart
