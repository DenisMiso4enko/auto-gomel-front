import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { IProduct } from '../../types/productTypes'
import { PATHDOMAIN } from '../../constants'
import noImage from '/no-img.png'
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

    return (
        <div className="product-card">
            <div className="product-card__image">
                {imagesUrl.length ? (
                    <img src={`${PATHDOMAIN}${imagesUrl[0]}`} alt={product} />
                ) : (
                    <img src={noImage} alt={product} />
                )}
            </div>
            <div className="product-card__content">
                <div className="product-card__top">
                    <p className="product-card__subtitle">
                        {mark} {model}, {year}
                    </p>
                    <h3 className="product-card__title">{product}</h3>
                    <div className="product-card__price">
                        <p>
                            {price} <span>{currency}</span>
                        </p>
                    </div>
                    <p className="product-card__description">{description}</p>
                </div>
                <div className="product-card__bottom">
                    <div className="product-card__date">
                        <HistoryIcon /> {dayjs(createdAt).format('MM.D.YYYY')}
                    </div>
                    <button
                        className="btn btn-success"
                        onClick={() => navigate(`/parts/${_id}`)}
                    >
                        Узнать больше
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCart
