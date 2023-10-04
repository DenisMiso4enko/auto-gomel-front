import { useNavigate } from 'react-router-dom'
import banner from '/spare-parts-car.jpg'

const Banner = () => {
  const navigate = useNavigate()
  const handlerOnClickAbout = () => navigate('/about')

  return (
    <main className="section banner">
      <div className="banner__content">
        <h1 className="banner__title">
          Автозапчасти в Гомеле <br /> Б/У из Европы
        </h1>
        <div className="banner__image">
          <img src={banner} alt="автозапчасти" />
        </div>
        <p className="banner__subtitle">
          Купить автозапчасти в Гомеле и Беларуси для иномарок и отечественных
          автомобилей по выгодным ценам с доставкой в любой город Беларуси.
        </p>
        <button className="banner__btn" onClick={handlerOnClickAbout}>
          Узнать больше
        </button>
      </div>
    </main>
  )
}

export default Banner

// btn btn-lg btn-default было у кнопки
