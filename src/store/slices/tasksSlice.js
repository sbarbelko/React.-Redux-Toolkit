import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [
    {
      id: '1',
      body: 'Вивчити основи Redux Toolkit',
      isDone: false,
      deadline: '2026-11-01'
    },
    {
      id: '2',
      body: 'Підключити Formik та Yup до форми',
      isDone: true,
      deadline: '2026-10-20'
    }
  ]
}

const tasksSlice = createSlice({
  initialState,
  name: 'tasks',
  reducer: {}
})

const { reducer, actions } = tasksSlice

export default reducer
