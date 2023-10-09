import { useSelector } from 'react-redux'
import { RootState } from '../../store'

// export const convertToUsd = (price: number) => {
//   const percent = 5
//   const converted = price * usd?.Cur_OfficialRate
//   const newPrice = converted + (converted * percent) / 100
//   return `${(converted + (+converted * percent) / 100).toFixed(2)} BYN`
// }

export const useConvertedToByn = (price: number) => {
  const percent = 5
  const { rates } = useSelector((state: RootState) => state.settings)
  const usd: any = rates?.find(
    ({ Cur_Abbreviation }) => Cur_Abbreviation === 'USD'
  )
  const converted = price * usd?.Cur_OfficialRate
  const priceToBYN = `${(
    converted +
    (+converted * percent) / 100
  ).toFixed()} BYN`
  return { priceToBYN }
}
