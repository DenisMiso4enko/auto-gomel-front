import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

type PopularMarksCardProp = {
  image: string
  title: string
}

const PopularMarksCard: FC<PopularMarksCardProp> = ({ image, title }) => {
  const navigate = useNavigate()

  const handlerOnClickMark = () => {
    navigate(`/parts?mark=${title}`)
  }

  return (
    <div className="mark-card" onClick={handlerOnClickMark}>
      <div className="mark-card__image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
    </div>
  )
}

export default PopularMarksCard
