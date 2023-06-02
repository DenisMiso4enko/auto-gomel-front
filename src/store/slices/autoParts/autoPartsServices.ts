import { createAsyncThunk } from '@reduxjs/toolkit'
import { httpRequest } from '../../../httpRequests'
import { PATHDOMAIN } from '../../../constants'

export const fetchGetProducts = createAsyncThunk(
    'parts/fetchGetProducts',
    async function (
        { mark, model, year, article, numberOfProduct, product, page }: any,
        { getState, rejectWithValue }
    ) {
        try {
            // @ts-ignore
            const { limit } = getState().autoParts
            const res: Response = await httpRequest(
                `${PATHDOMAIN}/getAllParts?page=${page || 1}&limit=${limit}&mark=${
                    mark || ''
                }&model=${model || ''}&year=${year || ''}&article=${
                    article || ''
                }&numberOfProduct=${numberOfProduct || ''}&product=${
                    product || ''
                }`,
                'GET'
            )
            const data = await res.json()
            window.scrollTo(0, 0)
            return data
        } catch (e: any) {
            console.log(e.message)
            return rejectWithValue(e)
        }
    }
)

export const fetchGetProduct = createAsyncThunk(
    'parts/fetchGetProduct',
    async function (id, { rejectWithValue }) {
        try {
            const response: Response = await httpRequest(
                `${PATHDOMAIN}/getOne/${id}`,
                'GET'
            )
            if (response.status === 404) {
                throw new Error('Ошибка, данные не получены')
            }
            const data = await response.json()
            window.scrollTo(0, 0)
            return data
        } catch (e: any) {
            console.log(e.message)
            return rejectWithValue(e)
        }
    }
)
