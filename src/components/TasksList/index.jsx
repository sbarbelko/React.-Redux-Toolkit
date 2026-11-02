import React from 'react'
import { connect } from 'react-redux'
import { deleteTask, doneChage } from '../../store/slices/tasksSlice'
import styles from './TasksList.module.sass'
import classNames from 'classnames'

function TasksList ({ tasks, deleteTaskById, doneChageById }) {
  return (
    <ul className={styles.taskList}>
      {tasks.map(t => (
        <li
          key={t.id}
          className={classNames(styles.taskItem, {
            [styles.done]: t.isDone,
            [styles.undone]: !t.isDone
          })}
        >
          <label>
            <input
              className={styles.checkTask}
              type='checkbox'
              checked={t.isDone}
              onChange={() => doneChageById(t.id, !t.isDone)}
            />
            {t.body}
          </label>
          <button
            className={styles.deleteBtn}
            onClick={() => deleteTaskById(t.id)}
          >
            Delete
          </button>{' '}
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
