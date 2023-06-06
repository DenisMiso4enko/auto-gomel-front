import { createAsyncThunk } from '@reduxjs/toolkit'
import { httpRequest } from '../../../httpRequests'
import { PATHDOMAIN } from '../../../constants'
import { setModels, setOptions, setPartsCategory } from './settingsSlice'

export const fetchOptions = createAsyncThunk(
    'options/fetchOptions',
    async function (_, { dispatch }) {
        try {
            const autosResponse: Response = await httpRequest(
                `${PATHDOMAIN}/getAutosInfo`,
                'GET'
            )
            const optionsResponse: Response = await httpRequest(
                `${PATHDOMAIN}/getOptionsInfo`,
                'GET'
            )
            const partsResponse: Response = await httpRequest(
                `${PATHDOMAIN}/getPartsList`,
                'GET'
            )

            const autos = await autosResponse.json()
            const options = await optionsResponse.json()
            const partsCategory = await partsResponse.json()

            dispatch(setModels(autos))
            dispatch(setOptions(options))
            dispatch(setPartsCategory(partsCategory))
        } catch (e: any) {
            console.log(e.message())
        }
    }
)

export const fetchRates = createAsyncThunk(
    'options/fetchRates',
    async function (_, {rejectWithValue}) {
        try {
            const ratesResponse: Response = await httpRequest(
              'https://api.nbrb.by/exrates/rates?periodicity=0',
              'GET'
            )
            const dataRates = await ratesResponse.json()
            return dataRates
        } catch (e: any) {
            console.log(e.message())
            return rejectWithValue(e)
        }
    }
)