import { createSlice } from '@reduxjs/toolkit'
import { IOptionsInitialState } from '../../../types/productTypes'
import { fetchOptions, fetchRates } from './settingsServices'

const initialState: IOptionsInitialState = {
  autos: null,
  options: null,
  status: '',
  errors: null,
  partsCategory: null,
  rates: null,
}

export const settingsSlice = createSlice({
  name: 'options',
  initialState: initialState,
  reducers: {
    setModels(state, action) {
      state.autos = action.payload
    },
    setOptions(state, action) {
      state.options = action.payload
    },
    setPartsCategory(state, action) {
      state.partsCategory = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOptions.pending, (state) => {
      state.status = 'pending'
      state.errors = null
    })
    builder.addCase(fetchOptions.fulfilled, (state) => {
      state.status = 'fulfilled'
      state.errors = null
    })
    builder.addCase(fetchOptions.rejected, (state, action) => {
      state.status = 'rejected'
      state.errors = action.payload
    })
    builder.addCase(fetchRates.pending, (state) => {
      state.status = 'pending'
      state.errors = null
    })
    builder.addCase(fetchRates.fulfilled, (state, action) => {
      state.status = 'fulfilled'
      state.errors = null
      state.rates = action.payload
    })
    builder.addCase(fetchRates.rejected, (state, action) => {
      state.status = 'rejected'
      state.errors = action.payload
    })
  },
})

export const { setModels, setOptions, setPartsCategory } = settingsSlice.actions
export default settingsSlice.reducer
