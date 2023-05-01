import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { marksData } from "./marksData";
import PopularMarksCard from "../PopularMarksCard/PopularMarksCard";

const PopularMarks = () => {
  return (
    <div className="section marks container">
      <SectionTitle title="Поиск по модели" />
      <div className="marks__list">
        {marksData?.map((mark) => (
          <PopularMarksCard key={mark.title} {...mark} />
        ))}
      </div>
    </div>
  );
};

export default PopularMarks;
