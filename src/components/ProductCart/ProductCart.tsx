import React, { FC } from "react";
import { IProduct } from "../../types/productTypes";
import { PATHDOMAIN } from "../../constants";
import noImage from "/no-img.png";
import dayjs from "dayjs";

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
}) => {
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
          <p className="product-card__price">
            {price} <span>{currency}</span>
          </p>
          <p className="product-card__description">{description}</p>
        </div>
        <div className="product-card__bottom">
          <div className="product-card__date">{dayjs(createdAt).format("MM.D.YYYY")}</div>
          <button className="btn btn-success">Узнать больше</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
