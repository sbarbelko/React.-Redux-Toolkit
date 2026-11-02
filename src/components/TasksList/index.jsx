import React from 'react'
import { connect } from 'react-redux'

function TasksList ({ tasks }) {
  return (
    <ul>
      {tasks.map(t => (
        <li key={t.id}> {t.body} </li>
      ))}
    </ul>
  )
}

const mapStateToProps = ({ tasksList }) => tasksList

export default connect(mapStateToProps)(TasksList)
