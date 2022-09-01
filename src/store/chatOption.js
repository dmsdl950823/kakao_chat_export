import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  useCheckbox: false
}

export const optionSlice = createSlice({
  name: 'chatOptions',
  initialState,
  reducers: {
    /**
     * 날짜 지정여부 선택
     * @param {*} state
     * @param {*} action
     */
    setUseCheckbox: (state, action) => {
      state.useCheckbox = action.payload
    }
  }
})

export const { setUseCheckbox } = optionSlice.actions
export default optionSlice.reducer
