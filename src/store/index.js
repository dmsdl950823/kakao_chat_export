import { configureStore } from '@reduxjs/toolkit'
import fileReducer from './files'

export default configureStore({
  reducer: {
    files: fileReducer
  }
})
