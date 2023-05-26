import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Banner from '../../components/Banner/Banner'
import WeOffer from '../../components/WeOffer/WeOffer'
import PopularMarks from '../../components/PopularMarks/PopularMarks'
import PopularParts from '../../components/PopularParts/PopularParts'
import ScrollButton from '../../components/ScrollButton/ScrollButton'

const MainPage = () => {
    // const {parts} = useSelector((state: RootState) => state.autoParts)

    return (
        <div className="main-page">
            <Banner />
            <WeOffer />
            <PopularMarks />
            {/*<PopularParts />*/}
        </div>
    )
}

export default MainPage
