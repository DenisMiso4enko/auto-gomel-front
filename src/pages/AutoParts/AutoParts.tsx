import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { setCurrentPage } from '../../store/slices/autoParts/autoPartsSlice'
import Skeleton from '../../components/Skeleton/Skeleton'
import FormSearch from '../../components/FormSerach/FormSearch'
import ProductCart from '../../components/ProductCart/ProductCart'
import PaginationController from '../../components/Pagination/PaginationController'
import { IProduct } from '../../types/productTypes'

const AutoParts = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { parts, currentPage, totalPages, loading, totalProducts, limit } =
        useSelector((state: RootState) => state.autoParts)

    const handlerChangeCurrentPage = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        dispatch(setCurrentPage(value))
    }

    return (
        <div className="parts container">
            <div className="parts-row">
                <div className="parts-row__left">
                    <FormSearch title="Поиск запчастей" />
                </div>
                <div className="parts-row__right">
                    <PaginationController
                        variant="top"
                        currentPage={currentPage}
                        totalPages={totalPages}
                        handlerChangeCurrentPage={handlerChangeCurrentPage}
                    />
                    {loading &&
                        [...new Array(limit)].map((_, i) => (
                            <Skeleton key={i} />
                        ))}
                    {!loading && !!totalProducts ? (
                        parts?.map(
                            (part: JSX.IntrinsicAttributes & IProduct) => (
                                <ProductCart key={part._id} {...part} />
                            )
                        )
                    ) : (
                        <div>По вашему запросу товаров не найдено</div>
                    )}
                    <PaginationController
                        currentPage={currentPage}
                        totalPages={totalPages}
                        handlerChangeCurrentPage={handlerChangeCurrentPage}
                    />
                </div>
            </div>
        </div>
    )
}

export default AutoParts
