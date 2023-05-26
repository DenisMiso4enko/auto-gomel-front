import ProductCart from '../ProductCart/ProductCart'
import Skeleton from '../Skeleton/Skeleton'
import { IProduct } from '../../types/productTypes'

const PartsList = ({ parts, loading }: any) => {
    return (
        <>
            {loading
                ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
                : parts?.map((part: JSX.IntrinsicAttributes & IProduct) => (
                      <ProductCart key={part._id} {...part} />
                  ))}
        </>
    )
}

export default PartsList
