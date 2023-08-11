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
    window.scrollTo(0, 0)
  }

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
        <div className="product-card__info">
          <p className="product-card__subtitle">{product}</p>
          <h3 className="product-card__title">
            {mark} {model}, {year}
          </h3>
          <p className="product-card__description">{description}</p>
        </div>
        <div className="product-card__rates">
          <p className="product-card__price">
            {price} {currency}
          </p>
        </div>
        <div className="product-card__date">
          <span>
            <HistoryIcon /> {dayjs(createdAt).format('DD.MM.YYYY')}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCart
