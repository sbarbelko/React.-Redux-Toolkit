import React from 'react'
import { connect } from 'react-redux'
import { deleteTask, doneChage } from '../../store/slices/tasksSlice'

function TasksList ({ tasks, deleteTaskById, doneChageById }) {
  return (
    <ul>
      {tasks.map(t => (
        <li key={t.id}>
          <label>
            <input
              type='checkbox'
              checked={t.isDone}
              onChange={() => doneChageById(t.id, !t.isDone)}
            />
            {t.body}
          </label>
          <button onClick={() => deleteTaskById(t.id)}>Delete</button>{' '}
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = ({ tasksList }) => tasksList

const mapDispatchToProps = dispatch => ({
  deleteTaskById: id => dispatch(deleteTask(id)),
  doneChageById: (id, data) => dispatch(doneChage({ id, data }))
})

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)
