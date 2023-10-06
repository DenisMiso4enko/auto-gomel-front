import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { setCurrentPage } from '../../store/slices/autoParts/autoPartsSlice'
import Skeleton from '../../components/Skeleton/Skeleton'
import FormSearch from '../../components/FormSerach/FormSearch'
import ProductCard from '../../components/ProductCard/ProductCard'
import PaginationController from '../../components/Pagination/PaginationController'
import { IProduct } from '../../types/productTypes'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

const AutoParts = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { parts, currentPage, totalPages, loading, totalProducts, limit } =
    useSelector((state: RootState) => state.autoParts)

  const handlerChangeCurrentPage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    window.scrollTo(0, 0)
    dispatch(setCurrentPage(value))
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="parts container">
      <Helmet>
        <title>Запчасти | АВТО.ГОМЕЛЬ</title>
      </Helmet>
      <div className="parts-row">
        <div className="parts-row__left">
          <FormSearch title="Поиск запчастей" />
        </div>
        <div className="parts-row__right">
          <div className="right__list">
            {loading &&
              [...new Array(limit)].map((_, i) => <Skeleton key={i} />)}
            {!loading && !!totalProducts ? (
              parts?.map((part: JSX.IntrinsicAttributes & IProduct) => (
                <ProductCard key={part._id} {...part} />
              ))
            ) : (
              <div className="notfound">
                <h3>По вашему запросу ничего не найдено...</h3>
              </div>
            )}
          </div>

          {!!parts.length && !loading && (
            <PaginationController
              currentPage={currentPage}
              totalPages={totalPages}
              handlerChangeCurrentPage={handlerChangeCurrentPage}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default AutoParts
