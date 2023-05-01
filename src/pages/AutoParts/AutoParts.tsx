import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchGetAllParts, setCurrentPage } from "../../store/slices/autoPartsSlice";
import FormSearch from "../../components/FormSerach/FormSearch";
import Pagination from "../../components/Pagination/Pagination";
import PartsList from "../../components/PartsList/PartsList";

const AutoParts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { parts, currentPage } = useSelector((state: RootState) => state.autoParts);

  useEffect(() => {
    dispatch(fetchGetAllParts());
  }, [currentPage]);

  return (
    <div className="parts container">
      <h2 style={{ marginBottom: "20px" }} className="page-title">
        Запчасти
      </h2>
      <div className="parts-row">
        <div className="parts-row__left">
          <FormSearch title="Поиск запчастей" />
        </div>
        <div className="parts-row__right">
          <PartsList/>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default AutoParts;
