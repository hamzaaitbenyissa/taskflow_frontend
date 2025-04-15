'use client'

import { useGetTask } from '@/apis/tasks/getTask/useGetTask'
import SC from './style'
import TaskStatus from '@/components/taskStatus'
import { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import TaskForm from '@/components/taskForm'

import { LoadingError } from '@/components/common/loadingError'
import { Task } from '@/types/task'
import PrimaryButton from '@/components/common/buttons/primaryButton'
import { useRouter } from 'next/navigation'
import SecondaryButton from '@/components/common/buttons/secondaryButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
const TaskDetailsContent = ({ task }: { task: Task }) => {
  const [isEditMode, setIsEditMode] = useState(false)

  const router = useRouter()

  return isEditMode ? (
    <TaskForm task={task} onClose={() => setIsEditMode(false)} />
  ) : (
    <SC.TaskDetailsContainer>
      <SC.Header>
        <SC.TitleContainer>
          <SC.Title>{task.title}</SC.Title>
          <SC.StatusContainer>
            <TaskStatus isCompleted={task.completed} />
            <PrimaryButton
              value={'Edit'}
              onClick={() => setIsEditMode(true)}
              startIcon={<EditIcon />}
            ></PrimaryButton>
          </SC.StatusContainer>
        </SC.TitleContainer>
        <SC.MetaContainer>
          <SC.MetaItem>
            <SC.MetaLabel>Created:</SC.MetaLabel>
            <SC.MetaValue>{new Date().toLocaleDateString()}</SC.MetaValue>
          </SC.MetaItem>
          <SC.MetaItem>
            <SC.MetaLabel>Last Updated:</SC.MetaLabel>
            <SC.MetaValue>{new Date().toLocaleDateString()}</SC.MetaValue>
          </SC.MetaItem>
        </SC.MetaContainer>
      </SC.Header>
      <SC.DescriptionContainer>
        <SC.DescriptionLabel>Description</SC.DescriptionLabel>
        <SC.Description>{task.description || 'No description provided'}</SC.Description>
      </SC.DescriptionContainer>
      <SecondaryButton
        value={'Back to List'}
        onClick={() => router.push('/tasks')}
        startIcon={<ArrowBackIcon />}
      />
    </SC.TaskDetailsContainer>
  )
}

const TaskDetails = ({ taskId }: { taskId: string }) => {
  const { data: task, isPending, isError } = useGetTask(taskId)

  return (
    <LoadingError
      isLoading={isPending}
      isError={isError || !task}
      loadingComponent={<h1>Loading task details...</h1>}
      errorComponent={<h6 color="error">Error loading task details</h6>}
    >
      <TaskDetailsContent task={task!} />
    </LoadingError>
  )
}

export default TaskDetails
