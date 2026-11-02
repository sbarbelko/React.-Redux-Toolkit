import React from 'react'
import TaskForm from '../../components/TaskForm'
import TasksList from '../../components/TasksList'

function TasksPage () {
  return (
    <>
      <h1>Tasks</h1>
      <TaskForm />
      <TasksList />
    </>
  )
}

export default TasksPage
