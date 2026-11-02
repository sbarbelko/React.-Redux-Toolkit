import React from 'react'
import TaskForm from '../../components/TaskForm'
import TasksList from '../../components/TasksList'
import styles from '../TasksPage/TasksPage.module.sass'

function TasksPage () {
  return (
    <main className={styles.tasksPage}>
      <h1 className={styles.pageHeader}>Tasks</h1>
      <TaskForm />
      <TasksList />
    </main>
  )
}

export default TasksPage
