import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchGetProduct } from "../../store/slices/autoParts/autoPartsServices";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ImagesGallery from "../../components/ImagesGallery/ImagesGallery";
import DetailsSkeleton from "../../components/DetailsSkeleton/DetailsSkeleton";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import noImage from "/no-img.png";
import Crumbs from "../../components/Crumbs/Crumbs";

export type currentType = {
  product: string | undefined
  mark: string | undefined
  year: number | undefined
}

const Details = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const { product, loading } = useSelector(
    (state: RootState) => state.autoParts
  );

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchGetProduct(id));
  }, [id]);

  if (loading) {
    return <DetailsSkeleton />;
  }

  const current: currentType = {
    product: product?.product,
    mark: product?.mark,
    year: product?.year
  };

  return (
    <div className="details container">
      {product ? (
        <>
          <Crumbs goBack={goBack} current={current} />
          <div className="details-wrapper">
            <div className="details__top">
              <div
                className={
                  product.imagesUrl?.length
                    ? "details__images"
                    : "details__images details__images--padding"
                }
              >
                {!product.imagesUrl?.length ? (
                  <img src={noImage} alt={product.product} />
                ) : (
                  <ImagesGallery
                    product={product?.product}
                    imagesUrl={product?.imagesUrl}
                  />
                )}
              </div>
              <div className="details__info">
                <div className="details__product details-item">
                  <h2>{product.product}</h2>
                  <div className="car">
                    <DirectionsCarIcon />
                    <p>
                      {product.mark} {product.model}, {product.year} г.{" "}
                    </p>
                  </div>
                </div>
                <div className="details__price details-item">
                  <AccountBalanceWalletIcon />
                  <p>
                    {product.price} {product.currency}
                  </p>
                </div>
                <div className="details__desc details-item">
                  {product.description}
                </div>
                <div className="details__service">
                  <div className="details__service-item">
                    <LocalShippingIcon color={"warning"} />
                    <p>Отправляем по Беларуси</p>
                  </div>
                  <div className="details__service-item">
                    <WorkspacePremiumIcon color={"warning"} />
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
        </>
      ) : (
        <ErrorMessage message="Произошла ошибка, попробуйте позже" />
      )}
    </div>
  );
};

export default Details;
