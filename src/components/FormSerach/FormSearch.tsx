import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { IAutos } from '../../types/productTypes'
import { setCurrentPage } from '../../store/slices/autoParts/autoPartsSlice'
import { useSearchParams } from 'react-router-dom'
import { fetchGetProducts } from '../../store/slices/autoParts/autoPartsServices'

interface IFormSearch {
  container?: string
  sm?: boolean
  title?: string
}

const FormSearch = ({ container, sm, title }: IFormSearch) => {
  const dispatch = useDispatch<AppDispatch>()

  //states global
  const { autos, options, partsCategory } = useSelector(
    (state: RootState) => state.settings
  )
  const { currentPage, limit } = useSelector(
    (state: RootState) => state.autoParts
  )

  //states searchParams
  const [searchParams, setSearchParams] = useSearchParams()
  const queryMark = searchParams.get('mark') || ''
  const queryModel = searchParams.get('model') || ''
  const queryYear = searchParams.get('year') || ''
  const queryArticle = searchParams.get('article') || ''
  const queryNumberOfProduct = searchParams.get('numberOfProduct') || ''
  const queryProduct = searchParams.get('product') || ''

  //states local
  const [mark, setMark] = useState(queryMark)
  const [modelVal, setModelVal] = useState(queryModel)
  const [yearVal, setYearVal] = useState(queryYear)
  const [productVal, setProductVal] = useState(queryProduct)
  const [articleVal, setArticleVal] = useState(queryArticle)
  const [numberVal, setNumberVal] = useState(queryNumberOfProduct)
  const [models, setModels] = useState([])
  const marks = autos?.map((el: IAutos) => el.mark)
  const years = options?.map((el) => el.years)

  const formFields = {
    mark: mark,
    model: modelVal,
    year: yearVal,
    product: productVal,
    article: articleVal,
    numberOfProduct: numberVal,
  }

  const handlerOnChangeMarks = (e: any) => {
    const mark = e.target.value
    setMark(mark)
    setModelVal('')
    const { models } = autos?.find((el: IAutos) => el.mark === mark)
    setModels(models ? models : [])
  }

  const handlerOnSubmitSearchForm = async (e: any) => {
    e.preventDefault()
    setSearchParams({ ...formFields })
    dispatch(setCurrentPage(1))
  }

  const handlerClearSearch = () => {
    setMark('')
    setProductVal('')
    setModelVal('')
    setModels([])
    setYearVal('')
    setArticleVal('')
    setNumberVal('')
    setSearchParams({})
    dispatch(setCurrentPage(1))
  }

  useEffect(() => {
    if (mark) {
      const { models } = autos?.find((el: IAutos) => el.mark === mark)
      setModels(models ? models : [])
    }
    dispatch(fetchGetProducts({ ...formFields, page: currentPage }))
  }, [
    queryMark,
    queryModel,
    queryYear,
    queryArticle,
    queryNumberOfProduct,
    queryProduct,
    currentPage,
    limit,
  ])

  return (
    <div className="form-search__container">
      <h3 className="form-title">{title}</h3>
      <form className="form-search" onSubmit={handlerOnSubmitSearchForm}>
        <div className="select-container">
          <select
            className="select-box"
            value={mark}
            onChange={handlerOnChangeMarks}
          >
            <option value="0">Марка</option>
            {marks?.map((el: any) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
          <div className="icon-container">
            <img src="/polygone.svg" alt="polygone" />
          </div>
        </div>

        <div className="select-container">
          <select
            className="select-box"
            value={modelVal}
            onChange={(event) => setModelVal(event.target.value)}
          >
            <option value="0">Модель</option>
            {models?.map((el: any) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
          <div className="icon-container">
            <img src="/polygone.svg" alt="polygone" />
          </div>
        </div>

        <div className="select-container">
          <select
            className="select-box"
            value={yearVal}
            onChange={(event) => setYearVal(event.target.value)}
          >
            <option value="0">Год</option>
            {years &&
              years[0].map((el: any) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
          </select>
          <div className="icon-container">
            <img src="/polygone.svg" alt="polygone" />
          </div>
        </div>

        <div className="select-container">
          <select
            className="select-box"
            value={productVal}
            onChange={(event) => setProductVal(event.target.value)}
          >
            <option value="0">Запчасть</option>
            {partsCategory?.map((el: any) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
          <div className="icon-container">
            <img src="/polygone.svg" alt="polygone" />
          </div>
        </div>

        <input
          className="form-control"
          type="text"
          placeholder="Номер по каталогу"
          value={numberVal}
          onChange={(event) => setNumberVal(event.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Артикул"
          value={articleVal}
          onChange={(event) => setArticleVal(event.target.value)}
        />

        <button className="btn btn-lg btn-success">Поиск</button>
        {mark ||
        productVal.trim() ||
        modelVal ||
        yearVal ||
        articleVal.trim() ||
        numberVal.trim() ? (
          <button
            className="btn btn-lg btn-red"
            type="button"
            onClick={handlerClearSearch}
          >
            Очистить форму
          </button>
        ) : null}
      </form>
    </div>
  )
}

export default FormSearch
