import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NoResults = () => {
  const [counter, setCounter] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearInterval(interval);
  }, [navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevState => prevState - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div className="no-results">
      <h2 className="no-results__title">По запросу ничего не найдено</h2>
      <p className="no-results__text">Вернуться на главную через {counter} секунды</p>
    </div>
  );
};

export default NoResults;
