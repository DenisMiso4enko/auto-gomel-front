import Banner from '../../components/Banner/Banner'
import WeOffer from '../../components/WeOffer/WeOffer'
import PopularMarks from '../../components/PopularMarks/PopularMarks'
import MapComp from '../../components/Map/Map'
import SectionAdresses from '../../components/SectionAdresses/SectionAdresses'

const MainPage = () => {
  return (
    <div className="main-page">
      <Banner />
      <WeOffer />
      <PopularMarks />
      <SectionAdresses />
    </div>
  )
}

export default MainPage
