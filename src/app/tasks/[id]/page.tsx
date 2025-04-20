'use client'
import TaskDetails from '@/components/taskDetails'
import { useParams } from 'next/navigation'

const TaskDetailsPage = () => {
  const { id } = useParams()

  return <TaskDetails taskId={id as string} />
}

export default TaskDetailsPage
