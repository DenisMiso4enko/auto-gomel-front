import React, { FC } from 'react'
import './index.scss'
import { currentType } from '../../pages/Details/Details'

interface CrumbsProps {
  goBack: () => void
  current: currentType
}

const Crumbs: FC<CrumbsProps> = ({ goBack, current }) => {
  const { product, year, mark } = current
  return (
    <div className="crumbs">
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
