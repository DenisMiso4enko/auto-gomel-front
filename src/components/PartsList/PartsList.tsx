import ProductCard from '../ProductCard/ProductCard'
import Skeleton from '../Skeleton/Skeleton'
import { IProduct } from '../../types/productTypes'

const PartsList = ({ parts, loading }: any) => {
  return (
    <>
      {loading
        ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
        : parts?.map((part: JSX.IntrinsicAttributes & IProduct) => (
            <ProductCard key={part._id} {...part} />
          ))}
      {/* {
        !loading && !parts.length && (<h4>По вашему запросу ничего не найдено...</h4>)
      } */}
    </>
  )
}

export default PartsList
