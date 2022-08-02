import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showComeOut: false, // '들어왔습니다/나갔습니다' 사용할지 / 안할지 => 기본으로 사용 안함(false)
  useMyId: false, // 사용자 (나) 를 사용할 것인지 확인
  myId: undefined // 사용자 (나) 의 이름
}

export const optionSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    /**
     * 들어왔습니다/나갔습니다 설정
     * @param {*} state
     * @param {*} action
     */
    toggleShowComeOut: (state, action) => {
      state.showComeOut = action.payload
    },
    /**
     * 사용자 (나) 를 사용할 것 인지 설정
     * @param {*} state
     * @param {*} action
     */
    toggleUseMyId: (state, action) => {
      state.useMyId = action.payload
    },
    /**
     * 사용자 (나) 이름을 설정
     * @param {*} state
     * @param {*} action
     */
    setMyId: (state, action) => {
      state.myId = action.payload
    }
  }
})

export const { setFiles } = optionSlice.actions
export default optionSlice.reducer
