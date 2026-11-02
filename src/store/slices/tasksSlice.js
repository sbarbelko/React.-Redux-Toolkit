import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  tasks: [
    {
      id: uuidv4(),
      body: 'Вивчити основи Redux Toolkit',
      isDone: false,
      deadline: '2026-11-01'
    },
    {
      id: uuidv4(),
      body: 'Підключити Formik та Yup до форми',
      isDone: true,
      deadline: '2026-10-20'
    }
  ]
}

const tasksSlice = createSlice({
  initialState,
  name: 'tasks',
  reducers: {
    createTask: (state, { payload }) => {
      state.tasks.push(payload)
    },
    deleteTask: (state, { payload }) => {
      state.tasks = state.tasks.filter(t => t.id !== payload)
    },
    doneChage: (state, { payload }) => {
      const updatedDone = state.tasks.findIndex(t => t.id === payload.id)
      state.tasks[updatedDone].isDone = payload.data
    }
  }
})

const { reducer, actions } = tasksSlice

export const { createTask, deleteTask, doneChage } = actions

export default reducer
