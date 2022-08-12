import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  raw: null,
  name: undefined,
  excel: [],
  data: []
}

export const fileSlice = createSlice({
  name: 'setFile',
  initialState,
  reducers: {
    /**
     * 등록된 엑셀파일 교체
     * @param {*} state
     */
    setCSVFile: (state, action) => {
      state.raw = action.payload
    },

    /**
     * 엑셀파일 이름 저장
     * @param {*} state
     */
    setCSVFileName: (state, action) => {
      state.name = action.payload
    },

    /**
     * 등록된 엑셀파일 교체
     * @param {*} state
     */
    setFiles: (state, action) => {
      state.excel = [...state.excel, action.payload]
    },

    /**
     * 등록된 엑셀파일 교체
     * @param {*} state
     */
    setData: (state, action) => {
      state.data = [action.payload]
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

export const { setFiles, setData, setCSVFile, setCSVFileName } = fileSlice.actions
export default fileSlice.reducer
