import React, { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import WeOffer from "../../components/WeOffer/WeOffer";
import PopularMarks from "../../components/PopularMarks/PopularMarks";
import PopularParts from "../../components/PopularParts/PopularParts";

const MainPage = () => {
  // const {parts} = useSelector((state: RootState) => state.autoParts)
  // const dispatch = useDispatch<AppDispatch>()
  //
  // useEffect(() => {
  // 	dispatch(fetchGetAllParts())
  // }, [])

  return (
    <div className="main-page">
      <Banner />
      <WeOffer />
      <PopularMarks />
      <PopularParts />
    </div>
  );
};

export default MainPage;
