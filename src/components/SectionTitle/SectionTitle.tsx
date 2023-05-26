import { FC } from 'react'

type SectionTitleProp = {
    title: string
}

const SectionTitle: FC<SectionTitleProp> = ({ title }) => {
    return <h3 className="section-title">{title}</h3>
}

export default SectionTitle
