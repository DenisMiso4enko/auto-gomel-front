import React from "react";
import ProductCart from "../ProductCart/ProductCart";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const PartsList = () => {
  const { parts } = useSelector((state: RootState) => state.autoParts);
  return (
    <>
      {parts?.map((part) => (
        <ProductCart key={part._id} {...part} />
      ))}
    </>
  );
};

export default PartsList;
