import './index.scss'
import { currentType } from '../../pages/Details/Details'

interface BreadCrumbsProps {
  prev?: string
  current: currentType
  goBack: () => void
}

const BreadCrumbs = ({ prev, current, goBack }: BreadCrumbsProps) => {
  const { product, mark, year } = current
  return (
    <div className="crumbs">
      <p className="crumbs__item" onClick={goBack}>
        назад
      </p>
      <p>/</p>
      <p className="crumbs__item crumbs-disabled">
        {product} {mark} {year}
      </p>
    </div>
  )
}

export default BreadCrumbs
