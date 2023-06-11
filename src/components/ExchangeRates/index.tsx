import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import dayjs from 'dayjs'

export const ExchangeRates = () => {
  const { rates } = useSelector((state: RootState) => state.settings)

  const eur: any = rates?.find(
    ({ Cur_Abbreviation }) => Cur_Abbreviation === 'EUR'
  )
  const rub: any = rates?.find(
    ({ Cur_Abbreviation }) => Cur_Abbreviation === 'RUB'
  )
  const usd: any = rates?.find(
    ({ Cur_Abbreviation }) => Cur_Abbreviation === 'USD'
  )
  const currentRates = [eur, usd, rub]

  if (!rates) {
    return <>{'<SkeletonRates />'}</>
  }
  return (
    <>
      <h3>
        Курсы валют <span>({dayjs(usd?.Date).format('DD.MM.YYYY')})</span>
      </h3>
      <ul>
        {currentRates.length &&
          currentRates.map(
            ({ Cur_Abbreviation, Cur_Scale, Cur_OfficialRate }) => (
              <li
                key={Cur_Abbreviation}
              >{`${Cur_Scale} ${Cur_Abbreviation} ${Cur_OfficialRate} BYN`}</li>
            )
          )}
      </ul>
    </>
  )
}
