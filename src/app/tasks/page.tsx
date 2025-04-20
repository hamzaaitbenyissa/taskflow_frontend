/**
 * This file defines the TasksPage component, which displays the task list and a toggle for the task form.
 */

'use client'
import TaskList from '@/components/taskList'
import TaskForm from '@/components/taskForm'
import Column from '@/components/common/flexs/column'
import SecondaryButton from '@/components/common/buttons/secondaryButton'
import AddIcon from '@mui/icons-material/Add'
import React from 'react'

/**
 * TaskFormToggle component that toggles the visibility of the task form.
 *
 * @returns The TaskFormToggle component with the task form or the toggle button.
 */
const TaskFormToggle = () => {
  const [showForm, setShowForm] = React.useState(false)

  return showForm ? (
    <TaskForm task={undefined} onClose={() => setShowForm(false)} />
  ) : (
    <SecondaryButton
      onClick={() => setShowForm(true)}
      variant="outlined"
      startIcon={<AddIcon />}
      value={'New Task'}
    />
  )
}

/**
 * TasksPage component that displays the task list and a toggle for the task form.
 *
 * @returns The TasksPage component with the task list and the task form toggle.
 */
export default function TasksPage() {
  return (
    <Column rowGap={20} style={{ padding: '100px' }}>
      <TaskFormToggle />
      <TaskList />
    </Column>
  )
}
