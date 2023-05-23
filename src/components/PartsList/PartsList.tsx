import ProductCart from "../ProductCart/ProductCart";
import { IProduct } from "../../types/productTypes";
import React from "react";
import Skeleton from "../Skeleton/Skeleton";

const PartsList = ({ parts, loading }: any) => {
  return (
    <>
      {loading
        ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
        : parts?.map((part: JSX.IntrinsicAttributes & IProduct) => (
          <ProductCart key={part._id} {...part} />
        ))
      }
    </>
  );
};

export default PartsList;
