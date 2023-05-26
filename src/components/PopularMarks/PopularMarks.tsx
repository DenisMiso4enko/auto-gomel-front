import SectionTitle from '../SectionTitle/SectionTitle'
import PopularMarksCard from '../PopularMarksCard/PopularMarksCard'
import { marksData } from './marksData'

const PopularMarks = () => {
    return (
        <div className="section marks container">
            <SectionTitle title="Поиск по модели" />
            <div className="marks__list">
                {marksData?.map((mark) => (
                    <PopularMarksCard key={mark.title} {...mark} />
                ))}
            </div>
        </div>
    )
}

export default PopularMarks
