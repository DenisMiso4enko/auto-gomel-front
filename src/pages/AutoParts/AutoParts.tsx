import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import FormSearch from "../../components/FormSerach/FormSearch";
import PartsList from "../../components/PartsList/PartsList";
import PaginationController from "../../components/Pagination/PaginationController";
import React, { useEffect } from "react";
import { setCurrentPage, setLimit } from "../../store/slices/autoParts/autoPartsSlice";
import Skeleton from "../../components/Skeleton/Skeleton";
import { IProduct } from "../../types/productTypes";
import ProductCart from "../../components/ProductCart/ProductCart";

const AutoParts = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { parts, currentPage, totalPages, loading, totalProducts, limit } = useSelector((state: RootState) => state.autoParts);

  const handlerChangeCurrentPage = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setCurrentPage(value));
  };

  return (
    <div className="parts container">
      {/*<h2 style={{ marginBottom: "20px" }} className="parts__page-title">*/}
      {/*  Запчасти*/}
      {/*</h2>*/}
      {/*<div className="parts__number-render">*/}
      {/*  Показывать количество запчастей в списке:*/}
      {/*  <button onClick={() => dispatch(setLimit(8))}>8</button>*/}
      {/*  <button onClick={() => dispatch(setLimit(16))}>16</button>*/}
      {/*  <button onClick={() => dispatch(setLimit(32))}>32</button>*/}
      {/*</div>*/}
      <div className="parts-row">
        <div className="parts-row__left">
          <FormSearch title="Поиск запчастей" />
        </div>
        <div className="parts-row__right">
          {loading && [...new Array(limit)].map((_, i) => <Skeleton key={i} />)}
          {!loading && !!totalProducts ? (parts?.map((part: JSX.IntrinsicAttributes & IProduct) => (
            <ProductCart key={part._id} {...part} />
            ))) : (<div>По вашему запросу товаров не найдено</div>)}
        </div>
      </div>
      <PaginationController currentPage={currentPage} totalPages={totalPages} handlerChangeCurrentPage={handlerChangeCurrentPage} />
    </div>
  );
};

export default AutoParts;
