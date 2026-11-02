import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'

const TaskSchema = yup.object().shape({
  body: yup
    .string()
    .trim()
    .min(3, 'Занадто коротке завдання (мінімум 3 символи)')
    .required("Обов'язкове поле"),
  deadline: yup.date().required('Вкажіть дедлайн')
})

function TaskForm () {
  const submitHandler = (values, { resetForm }) => {
    const newTask = {
      id: crypto.randomUUID(),
      body: values.body,
      isDone: false,
      deadline: values.deadline
    }

    resetForm()
  }

  return (
    <Formik
      initialValues={{ body: '', deadline: '' }}
      validationSchema={TaskSchema}
      onSubmit={submitHandler}
    >
      <Form>
        <label>
          <Field name='body' type='text' placeholder='Що треба зробити?' />
        </label>
        <label>
          <Field type='date' name='deadline' />
        </label>
        <button type='submit'>Додати завдання</button>
      </Form>
    </Formik>
  )
}

export default TaskForm
