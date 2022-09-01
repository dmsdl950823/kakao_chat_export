import { configureStore } from '@reduxjs/toolkit'
import fileReducer from './files'
import optionReducer from './option'
import chatOptionReducer from './chatOption'

export default configureStore({
  reducer: {
    files: fileReducer,
    options: optionReducer,
    chatOptions: chatOptionReducer
  }
})
