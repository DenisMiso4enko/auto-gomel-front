import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import FormSearch from "../../components/FormSerach/FormSearch";
import PartsList from "../../components/PartsList/PartsList";
import PaginationController from "../../components/Pagination/PaginationController";
import React from "react";
import { setCurrentPage } from "../../store/slices/autoParts/autoPartsSlice";

const AutoParts = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { parts, currentPage, isPrevDisabled, isNextDisabled } = useSelector((state: RootState) => state.autoParts);

  return (
    <div className="parts container">
      <h2 style={{ marginBottom: "20px" }} className="parts__page-title">
        Запчасти
      </h2>
      <div className="parts__number-render">
        Показывать количество запчастей в списке:
        <button onClick={() => dispatch(setLimit(8))}>8</button>
        <button onClick={() => dispatch(setLimit(16))}>16</button>
        <button onClick={() => dispatch(setLimit(32))}>32</button>
      </div>
      <div className="parts-row">
        <div className="parts-row__left">
          <FormSearch title="Поиск запчастей" />
        </div>
        <div className="parts-row__right">
          {parts?.length ? (
            <PartsList parts={parts} />
          ) : (
            <h1>No resultss</h1>
          )}
        </div>
      </div>
      <PaginationController currentPage={currentPage} totalPages={totalPages} handlerChangeCurrentPage={handlerChangeCurrentPage} />
    </div>
  );
};

export default AutoParts;
