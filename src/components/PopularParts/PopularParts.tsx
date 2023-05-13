import React, { useEffect } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import ProductCart from "../ProductCart/ProductCart";
import { fetchGetAllParts } from "../../store/slices/autoParts/autoPartsServices";

const PopularParts = () => {
  const { parts } = useSelector((state: RootState) => state.autoParts);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGetAllParts());
  }, []);

  return (
    <div className="section popular-parts container">
      <SectionTitle title="Популярные запчасти" />
      <div className="popular-parts__list">
        {parts?.map((product) => (
          <ProductCart key={product._id} {...product} />
        ))}
      </div>
      <button className="btn btn-lg btn-default">Смотреть все</button>
    </div>
  );
};

export default PopularParts;
