import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { connect } from 'react-redux'
import * as yup from 'yup'
import { createTask } from '../../store/slices/tasksSlice'
import { v4 as uuidv4 } from 'uuid'
import styles from './TaskForm.module.sass'

const TaskValidationSchema = yup.object().shape({
  body: yup
    .string()
    .trim()
    .min(6, 'Task is too short (min 6)')
    .required('Required'),
  deadline: yup.date().required('Required')
})

function TaskForm ({ createNewTask }) {
  const submitHandler = (values, { resetForm }) => {
    const newTask = {
      id: uuidv4(),
      body: values.body,
      isDone: false,
      deadline: values.deadline
    }

    createNewTask(newTask)

    resetForm()
  }

  return (
    <Formik
      initialValues={{ body: '', deadline: '' }}
      validationSchema={TaskValidationSchema}
      onSubmit={submitHandler}
    >
      <Form className={styles.tasksForm}>
        <label className={styles.tasksLabel}>
          Task:
          <Field
            className={styles.tasksField}
            name='body'
            type='text'
            placeholder='Your task'
          />
          <ErrorMessage className={styles.err}  name='body' component='div' />
        </label>
        <label className={styles.tasksLabel}>
          Deadline:
          <Field className={styles.tasksField} name='deadline' type='date' />
          <ErrorMessage className={styles.err} name='deadline' component='div' />
        </label>
        <button className={styles.submitBtn} type='submit'>Add task</button>
      </Form>
    </Formik>
  )
}

const mapDispatchToProps = dispatch => ({
  createNewTask: data => dispatch(createTask(data))
})

export default connect(null, mapDispatchToProps)(TaskForm)
