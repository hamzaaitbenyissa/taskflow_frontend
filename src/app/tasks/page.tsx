'use client'
import TaskList from '@/components/taskList'
import TaskForm from '@/components/taskForm'
import Column from '@/components/common/flexs/column'
import SecondaryButton from '@/components/common/buttons/secondaryButton'
import AddIcon from '@mui/icons-material/Add'
import React from 'react'

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

export default function TasksPage() {
  return (
    <Column rowGap={20} style={{ padding: '100px' }}>
      <TaskFormToggle />
      <TaskList />
    </Column>
  )
}
