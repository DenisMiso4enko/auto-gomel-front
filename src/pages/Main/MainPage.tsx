import Banner from '../../components/Banner/Banner'
import WeOffer from '../../components/WeOffer/WeOffer'
import PopularMarks from '../../components/PopularMarks/PopularMarks'
import SectionAdresses from '../../components/SectionAdresses/SectionAdresses'
import { Helmet } from 'react-helmet'

const MainPage = () => {
  return (
    <div className="main-page">
      <Helmet>
        <title>Главная | АВТО.ГОМЕЛЬ</title>
      </Helmet>
      <Banner />
      <WeOffer />
      <PopularMarks />
      <SectionAdresses />
    </div>
  )
}

export default MainPage
