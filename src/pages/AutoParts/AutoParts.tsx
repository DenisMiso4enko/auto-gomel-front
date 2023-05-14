import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import FormSearch from "../../components/FormSerach/FormSearch";
import Pagination from "../../components/Pagination/Pagination";
import PartsList from "../../components/PartsList/PartsList";
import { fetchGetAllParts } from "../../store/slices/autoParts/autoPartsServices";

const AutoParts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { parts, currentPage } = useSelector((state: RootState) => state.autoParts);
  console.log("currentPage from component", currentPage);

  useEffect(() => {
    dispatch(fetchGetAllParts());
  }, [currentPage]);

  return (
    <div className="parts container">
      <h2 style={{ marginBottom: "20px" }} className="parts__page-title">
        Запчасти
      </h2>
      <div className="parts-row">
        <div className="parts-row__left">
          <FormSearch title="Поиск запчастей" />
        </div>
        <div className="parts-row__right">
          {parts.length ? (
            <PartsList parts={parts} />
          ) : (
            <p>Результаты не найдены</p>
          )}
        </div>
      </div>
      <Pagination currentPage={currentPage} />
    </div>
  );
};

export default AutoParts;
