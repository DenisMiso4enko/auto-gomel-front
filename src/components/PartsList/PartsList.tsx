import ProductCart from "../ProductCart/ProductCart";
import { IProduct } from "../../types/productTypes";

const PartsList = ({ parts }: any) => {
  return (
    <>
      {parts?.map((part: JSX.IntrinsicAttributes & IProduct) => (
        <ProductCart key={part._id} {...part} />
      ))}
    </>
  );
};

export default PartsList;
