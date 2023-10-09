import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export const useConvertedToUsd = (price: number) => {
  const percent = 5
  const { rates } = useSelector((state: RootState) => state.settings)
  const usd: any = rates?.find(
    ({ Cur_Abbreviation }) => Cur_Abbreviation === 'USD'
  )
  const priceToUsd = `${(price / usd?.Cur_OfficialRate).toFixed()} USD`
  // const priceToUsd = `${(
  //   converted +
  //   (+converted * percent) / 100
  // ).toFixed()} USD`
  return { priceToUsd }
}
