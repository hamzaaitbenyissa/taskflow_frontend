'use client'

import { Task } from '@/types/task'
import { useRouter } from 'next/navigation'
import { useDeleteTask } from '@/apis/tasks/deleteTask/useDeleteTask'
import { useInvalidateQueries } from '@/apis/hooks'
import { EUseQueryKeys } from '@/types/common'
import { usePutTask } from '@/apis/tasks/putTask/usePutTask'
import DeleteIcon from '@mui/icons-material/Delete'
import SC from './style'
import Row from '@/components/common/flexs/row'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import TaskForm from '@/components/taskForm'
import { useState } from 'react'

const useTaskActions = (task: Task) => {
  const router = useRouter()
  const { invalidateQueries } = useInvalidateQueries()

  const { request: updateTaskRequest } = usePutTask(() =>
    invalidateQueries([EUseQueryKeys.USE_GET_TASKS])
  )

  const { request: deleteTaskRequest } = useDeleteTask(() =>
    invalidateQueries([EUseQueryKeys.USE_GET_TASKS])
  )

  const handleTaskClick = (taskId: string) => {
    router.push(`/tasks/${taskId}`)
  }

  const updateTask = () => {
    updateTaskRequest({ ...task, completed: !task.completed })
  }

  const deleteTask = () => {
    deleteTaskRequest(task.id)
  }

  return { handleTaskClick, updateTask, deleteTask }
}

export default function TaskItem({ task }: { task: Task }) {
  const [isEditMode, setIsEditMode] = useState(false)
  const { handleTaskClick, updateTask, deleteTask } = useTaskActions(task)

  return isEditMode ? (
    <TaskForm
      task={task}
      onClose={() => {
        setIsEditMode(false)
      }}
    />
  ) : (
    <SC.TaskItemContainer>
      <SC.CheckBox color={'secondary'} checked={task.completed} onChange={updateTask} />
      <SC.Title onClick={() => handleTaskClick(task.id)}>{task.title}</SC.Title>
      <Row alignItems="center" columnGap={10}>
        <EditIcon cursor={'pointer'} onClick={() => setIsEditMode(true)} color="action" />
        <DeleteIcon onClick={deleteTask} color="action" cursor={'pointer'} />
        <VisibilityIcon
          onClick={() => handleTaskClick(task.id)}
          color="action"
          cursor={'pointer'}
        />
      </Row>
    </SC.TaskItemContainer>
  )
}
