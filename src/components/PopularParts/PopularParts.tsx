import React, { useEffect } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchGetAllParts } from "../../store/slices/autoPartsSlice";
import ProductCart from "../ProductCart/ProductCart";

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
