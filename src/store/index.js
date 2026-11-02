import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './slices/tasksSlice'

const store = configureStore({
  reducer: {
    tasksList: tasksReducer
  }
})

export default store
