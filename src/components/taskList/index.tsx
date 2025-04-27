/**
 * This file contains the TaskList component, which renders a list of tasks.
 * It fetches the tasks using the useGetTasks hook and displays each task using the TaskItem component.
 */

'use client'

import TaskItem from '@/components/taskItem/'
import { useGetTasks } from '@/apis/tasks/getTasks/useGetTasks'
import Column from '@/components/common/flexs/column'

import { LoadingError } from '@/components/common/loadingError'

/**
 * TaskList component that renders a list of tasks.
 *
 * @returns The TaskList component with the list of tasks.
 */
export default function TaskList() {
  const { data: tasks, isPending, isError } = useGetTasks()

  return (
    <LoadingError isLoading={isPending} isError={isError == undefined || isError}>
      <Column rowGap={15}>
        {tasks?.tasks.map((task) => <TaskItem task={task} key={task.id} />)}
      </Column>
    </LoadingError>
  )
}
