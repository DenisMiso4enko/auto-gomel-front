import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../types/productTypes";
import { PATHDOMAIN } from "../../constants";
import noImage from "/no-img.png";
import dayjs from "dayjs";
import HistoryIcon from "@mui/icons-material/History";

<<<<<<< HEAD
const ProductCarD: FC<IProduct> = ({
=======
const ProductCard: FC<IProduct> = ({
>>>>>>> origin/master
                                     description,
                                     imagesUrl,
                                     product,
                                     price,
                                     year,
                                     mark,
                                     model,
                                     currency,
                                     createdAt,
                                     _id
                                   }) => {
  const navigate = useNavigate();

  return (
    <div className="product-card">
<<<<<<< HEAD
      <div
        className={
          !imagesUrl.length
            ? "product-card__image product-card__image--padding"
            : "product-card__image"
        }
      >
=======
      <div className="product-card__image">
>>>>>>> origin/master
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
<<<<<<< HEAD
            <HistoryIcon /> {dayjs(createdAt).format("MM.D.YYYY")}
=======
            <HistoryIcon /> {dayjs(createdAt).format("D.MM.YYYY")}
>>>>>>> origin/master
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
  );
};

<<<<<<< HEAD
export default ProductCarD;
=======
export default ProductCard;
>>>>>>> origin/master
