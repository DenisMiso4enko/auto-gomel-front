import { useSelector } from "react-redux";
import { RootState } from "../../store";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProductCard from "../ProductCard/ProductCard";

const PopularParts = () => {
  const { parts } = useSelector((state: RootState) => state.autoParts);

  return (
    <div className="section popular-parts container">
      <SectionTitle title="Популярные запчасти" />
      <div className="popular-parts__list">
        {parts?.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
      <button className="btn btn-lg btn-default">Смотреть все</button>
    </div>
  );
};

export default PopularParts;
