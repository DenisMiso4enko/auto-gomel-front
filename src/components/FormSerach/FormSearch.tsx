import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { IAutos } from "../../types/productTypes";
import { setCurrentPage } from "../../store/slices/autoParts/autoPartsSlice";
import { useNavigate, useParams } from "react-router-dom";
import { fetchGetAllParts, fetchSearch } from "../../store/slices/autoParts/autoPartsServices";

interface IFormSearch {
  container?: string;
  sm?: boolean;
  title?: string;
}

const FormSearch = ({ container, sm, title }: IFormSearch) => {
  const { mark: markParams } = useParams();

  const { autos, options, partsCategory } = useSelector((state: RootState) => state.settings);
  const [mark, setMark] = useState("");
  const [modelVal, setModelVal] = useState("");
  const [yearVal, setYearVal] = useState("");
  const [productVal, setProductVal] = useState("");
  const [articleVal, setArticleVal] = useState("");
  const [numberVal, setNumberVal] = useState("");
  const [models, setModels] = useState([]);
  const marks = autos?.map((el: IAutos) => el.mark);
  const years = options?.map((el) => el.years);

  const dispatch = useDispatch<AppDispatch>();

  const handlerOnChangeMarks = (e: any) => {
    const mark = e.target.value;
    setMark(mark);
    const { models } = autos?.find((el: IAutos) => el.mark === mark);
    setModels(models);
  };

  const handlerSearchForm = async (e: any) => {
    e.preventDefault();
    try {
      const formField = {
        mark: mark,
        model: modelVal,
        year: yearVal,
        product: productVal,
        article: articleVal,
        numberOfProduct: numberVal,
      };
      dispatch(fetchSearch(formField));
      dispatch(setCurrentPage(1));
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const handlerClearSearch = () => {
    setMark("");
    setProductVal("");
    setModelVal("");
    setYearVal("");
    setArticleVal("");
    setNumberVal("");
    dispatch(fetchGetAllParts());
  };

  useEffect(() => {
    if (markParams) {
      setMark(mark);
    }
  }, []);

  return (
    <div className="form-search__container">
      <h3 className="form-title">{title}</h3>
      <form className="form-search" onSubmit={handlerSearchForm}>
        <div className="select-container">
          <select className="select-box" value={mark} onChange={handlerOnChangeMarks}>
            <option value="0">Марка</option>
            {marks?.map((el: any) => (
              <option key={el} value={el}>{el}</option>
            ))}
          </select>
          <div className="icon-container">
            <img src="/polygone.svg" alt="polygone" />
          </div>
        </div>

        <div className="select-container">
          <select
            className="select-box"
            value={modelVal}
            onChange={(event) => setModelVal(event.target.value)}
          >
            <option value="0">Модель</option>
            {models?.map((el: any) => (
              <option key={el} value={el}>{el}</option>
            ))}
          </select>
          <div className="icon-container">
            <img src="/polygone.svg" alt="polygone" />
          </div>
        </div>

        <div className="select-container">
          <select
            className="select-box"
            value={yearVal}
            onChange={(event) => setYearVal(event.target.value)}
          >
            <option value="0">Год</option>
            {years && years[0].map((el: any) => <option key={el} value={el}>{el}</option>)}
          </select>
          <div className="icon-container">
            <img src="/polygone.svg" alt="polygone" />
          </div>
        </div>

        <div className="select-container">
          <select
            className="select-box"
            value={productVal}
            onChange={(event) => setProductVal(event.target.value)}
          >
            <option value="0">Запчасть</option>
            {partsCategory?.map((el: any) => (
              <option key={el} value={el}>{el}</option>
            ))}
          </select>
          <div className="icon-container">
            <img src="/polygone.svg" alt="polygone" />
          </div>
        </div>

        <input
          className="form-control"
          type="text"
          placeholder="Номер по каталогу"
          value={numberVal}
          onChange={(event) => setNumberVal(event.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Артикул"
          value={articleVal}
          onChange={(event) => setArticleVal(event.target.value)}
        />

        <button className="btn btn-lg">Поиск</button>
        {mark ||
        productVal.trim() ||
        modelVal ||
        yearVal ||
        articleVal.trim() ||
        numberVal.trim() ? (
          <button className="btn btn-lg" type="button" onClick={handlerClearSearch}>
            Сбрость
          </button>
        ) : null}
      </form>
    </div>
  );
};

export default FormSearch;
