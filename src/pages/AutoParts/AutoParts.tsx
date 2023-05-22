import { useSelector } from "react-redux";
import { RootState } from "../../store";
import FormSearch from "../../components/FormSerach/FormSearch";
import Pagination from "../../components/Pagination/Pagination";
import PartsList from "../../components/PartsList/PartsList";

const AutoParts = () => {
  const { parts, currentPage } = useSelector((state: RootState) => state.autoParts);


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
          {parts?.length ? (
            <PartsList parts={parts} />
          ) : (
            <h1>No resultss</h1>
          )}
        </div>
      </div>
      <Pagination currentPage={currentPage} />
    </div>
  );
};

export default AutoParts;
