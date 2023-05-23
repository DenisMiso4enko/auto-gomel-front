import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { httpRequest } from "../../httpRequests";
import { PATHDOMAIN } from "../../constants";
import { IProduct } from "../../types/productTypes";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ImagesGallery from "../../components/ImagesGallery/ImagesGallery";
import noImage from "/no-img.png";

const Details = () => {
  // @ts-ignore
  const [product, setProduct] = useState<IProduct>(null)
  const { id } = useParams()

  const fetchGetProduct = async () => {
    try {
      const response = await httpRequest(`${PATHDOMAIN}/getOne/${id}`, 'GET')
      const data = await response.json()
      setProduct(data)
    } catch (e) {
    }
  }

  useEffect(() => {
    fetchGetProduct()
  }, [id])

  if (!product) {
    return (
      <h1>Уппс, что-то пошло не так</h1>
    )
  }

  return (
    <div className="details container">
      <div>Тут будет хебные крошки</div>
      <div className="details-wrapper">
        <div className="details__top">
          <div className="details__images">
            {!product.imagesUrl?.length ? (
              <img src={noImage} alt={product.product}/>
            ) : (
              <ImagesGallery product={product?.product} imagesUrl={product?.imagesUrl}/>
            )}

          </div>
          <div className="details__info">
            <div className="details__product details-item">
              <h2>{product.product}</h2>
              <div className="car">
                <DirectionsCarIcon/>
                <p>{product.mark} {product.model}, {product.year} г. </p>
              </div>
            </div>
            <div className="details__price details-item">
              <AccountBalanceWalletIcon/>
              <p>{product.price} {product.currency}</p>
            </div>
            <div className="details__desc details-item">{product.description}</div>
            <div className="details__service">
              <div className="details__service-item">
                <LocalShippingIcon color={"warning"}/>
                <p>Отправляем по Беларуси</p>
              </div>
              <div className="details__service-item">
                <WorkspacePremiumIcon color={"warning"}/>
                <p>7 дней гарантия</p>
              </div>
            </div>
          </div>
        </div>
        <div className="details__bottom">
          <h3>Спецификация</h3>
          <div className="details__specs">
            <div className="details__specs-left">
              <div className="details__specs-item">
                <p>Марка</p>
                <p>{product.mark || "-"}</p>
              </div>
              <div className="details__specs-item">
                <p>Модель</p>
                <p>{product.model || "-"}</p>
              </div>
              <div className="details__specs-item">
                <p>Год</p>
                <p>{product.year || "-"}</p>
              </div>
              <div className="details__specs-item">
                <p>Коробка</p>
                <p>{product.box || "-"}</p>
              </div>
              <div className="details__specs-item">
                <p>Кузов</p>
                <p>{product.bodyType || "-"}</p>
              </div>
            </div>
            <div className="details__specs-right">
              <div className="details__specs-item">
                <p>Тип</p>
                <p>{product.type || "-"}</p>
              </div>
              <div className="details__specs-item">
                <p>Состояние</p>
                <p>{product.state || "-"}</p>
              </div>
              <div className="details__specs-item">
                <p>Номер по каталогу</p>
                <p>{product.numberOfProduct || "-"}</p>
              </div>
              <div className="details__specs-item">
                <p>Объем топлива</p>
                <p>{product.volume || "-"}</p>
              </div>
              <div className="details__specs-item">
                <p>Арктикул</p>
                <p>{product.article || "-"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;