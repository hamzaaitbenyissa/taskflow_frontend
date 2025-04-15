'use client'

import TaskItem from '@/components/taskItem/'
import { useGetTasks } from '@/apis/tasks/getTasks/useGetTasks'
import Column from '@/components/common/flexs/column'

import { LoadingError } from '@/components/common/loadingError'

export default function TaskList() {
  const { data: tasks, isPending, isError } = useGetTasks()

  return (
    <LoadingError isLoading={isPending} isError={isError == undefined || isError}>
      <Column rowGap={15}>{tasks?.map((task) => <TaskItem task={task} key={task.id} />)}</Column>
    </LoadingError>
  )
}
