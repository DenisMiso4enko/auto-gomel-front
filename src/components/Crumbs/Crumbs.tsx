import { FC } from 'react'
import { currentType } from '../../pages/Details/Details'
import ArrowBack from '../Icons/ArrowBack'
import './index.scss'

interface CrumbsProps {
  goBack: () => void
  current: currentType
}

const Crumbs: FC<CrumbsProps> = ({ goBack, current }) => {
  const { product, year, mark } = current
  return (
    <div className="crumbs">
      <ArrowBack />
      <p className="crumbs__item " onClick={goBack}>
        назад
      </p>
      <p>/</p>
      <p className="crumbs__item crumbs-disabled">
        {product} {mark} {year}
      </p>
    </div>
  )
}

export default Crumbs
