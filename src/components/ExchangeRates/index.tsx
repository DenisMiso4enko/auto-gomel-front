import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { IRates } from '../../types/productTypes'
import dayjs from 'dayjs'

export const ExchangeRates = () => {
  const { rates } = useSelector((state: RootState) => state.settings)

  const eur: IRates | undefined = rates?.find(
    ({ Cur_Abbreviation }) => Cur_Abbreviation === 'EUR'
  )
  const rub: IRates | undefined = rates?.find(
    ({ Cur_Abbreviation }) => Cur_Abbreviation === 'RUB'
  )
  const usd: IRates | undefined = rates?.find(
    ({ Cur_Abbreviation }) => Cur_Abbreviation === 'USD'
  )
  const currentRates = [eur, usd, rub]

  if (!rates) {
    return <>{'<SkeletonRates />'}</>
  }
  return (
    <>
      <h3>Курсы валют {dayjs(usd?.Date).format('DD.MM.YYYY')}</h3>
      <ul>
        {currentRates.length &&
          currentRates.map(
            ({ Cur_Abbreviation, Cur_Scale, Cur_OfficialRate }) => (
              <li key={Cur_Abbreviation}>{`${Cur_Scale} ${Cur_Abbreviation} ${Cur_OfficialRate} BYN`}</li>
            )
          )}
      </ul>
    </>
  )
}
