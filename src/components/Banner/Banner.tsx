import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate()
  return (
    <main className="section banner">
      <div className="banner__content">
        <h1 className="banner__title">Автозапчасти в Гомеле Б/У из Европы</h1>
        <p className="banner__subtitle">
          Купить автозапчасти в Минске и Беларуси для иномарок и отечественных автомобилей по
          выгодным ценам с доставкой в любой город Беларуси.
        </p>
        <button className="btn btn-lg btn-default" onClick={() => navigate('/about')}>Узнать больше</button>
      </div>
    </main>
  );
};

export default Banner;
