import { configureStore } from '@reduxjs/toolkit'
import fileReducer from './files'
import optionReducer from './option'

export default configureStore({
  reducer: {
    files: fileReducer,
    options: optionReducer
  }
})
