import React from 'react'
import { connect } from 'react-redux'
import { deleteTask } from '../../store/slices/tasksSlice'

function TasksList ({ tasks, deleteTaskById }) {
  return (
    <ul>
      {tasks.map(t => (
        <li key={t.id}>
          {' '}
          {t.body} <button onClick={() => deleteTaskById(t.id)}>Delete</button>{' '}
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = ({ tasksList }) => tasksList

const mapDispatchToProps = dispatch => ({
  deleteTaskById: id => dispatch(deleteTask(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)
