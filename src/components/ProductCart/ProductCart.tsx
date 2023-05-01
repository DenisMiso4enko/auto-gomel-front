import React, { FC } from "react";
import { IProduct } from "../../types/productTypes";
import { PATHDOMAIN } from "../../constants";
import noImage from "/no-img.png";

const ProductCart: FC<IProduct> = ({
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
        <p className="product-card__subtitle">
          {mark} {model}, {year}
        </p>
        <h3 className="product-card__title">{product}</h3>
        <p className="product-card__price">
          {price} <span>{currency}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCart;
