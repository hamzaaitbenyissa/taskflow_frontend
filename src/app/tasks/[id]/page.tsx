'use client'
import TaskDetails from '@/components/taskDetails'
import { useParams } from 'next/navigation'

export default function TaskDetailsPage() {
  const { id } = useParams()

  return <TaskDetails taskId={id as string} />
}
