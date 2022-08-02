import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  excel: []
}

export const fileSlice = createSlice({
  name: 'setFile',
  initialState,
  reducers: {
    /**
     * 등록된 엑셀파일 교체
     * @param {*} state
     */
    setFiles: (state, action) => {
      state.excel = [action.payload]
    }
    // ===
    // toggleGluten: (state) => {
    //   state.gluten = !state.gluten
    // },
    // addTopping: (state, action) => {
    //   state.toppings = [...state.toppings, action.payload]
    // }
  }
})

export const { setFiles } = fileSlice.actions
export default fileSlice.reducer
