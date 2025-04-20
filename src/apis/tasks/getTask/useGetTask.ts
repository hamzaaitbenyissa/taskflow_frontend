/**
 * This file contains the hook for fetching a single task by its ID.
 */

import { useQuery } from '@tanstack/react-query'
import { EUseQueryKeys, IQueryDescriptor } from '@/types/common'
import { getTask } from '@/apis/tasks/TasksRepository'
import { TGetTaskResponse } from '@/apis/tasks/getTask/TGetTaskResponse'

/**
 * Type representing the hook for fetching a single task by its ID.
 */
type TUseGetTask = (id: string) => IQueryDescriptor<TGetTaskResponse>

/**
 * Hook to fetch a single task by its ID.
 *
 * @param id - The ID of the task to fetch.
 * @returns An object containing the task data, loading state, success state, and error state.
 */
export const useGetTask: TUseGetTask = (id: string) => {
  const { data, isPending, isSuccess, isError } = useQuery({
    queryKey: [EUseQueryKeys.USE_GET_TASKS + id],
    queryFn: async () => await getTask(id),
  })

  return { data, isPending, isSuccess, isError }
}
