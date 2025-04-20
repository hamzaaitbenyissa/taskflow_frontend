import { useQuery } from '@tanstack/react-query'
import { EUseQueryKeys, IQueryDescriptor } from '@/types/common'
import { getTask } from '@/apis/tasks/TasksRepository'
import { TGetTaskResponse } from '@/apis/tasks/getTask/TGetTaskResponse'

type TUseGetTask = (id: string) => IQueryDescriptor<TGetTaskResponse>

/**
 * Custom hook to fetch a task by its ID.
 *
 * @param {string} id - The ID of the task to fetch.
 * @returns {IQueryDescriptor<TGetTaskResponse>} - An object containing:
 *   - `data`: The fetched task data.
 *   - `isPending`: A boolean indicating if the query is in progress.
 *   - `isSuccess`: A boolean indicating if the query was successful.
 *   - `isError`: A boolean indicating if the query encountered an error.
 */
export const useGetTask: TUseGetTask = (id: string) => {
  const { data, isPending, isSuccess, isError } = useQuery({
    queryKey: [EUseQueryKeys.USE_GET_TASKS + id],
    queryFn: async () => await getTask(id),
  })

  return { data, isPending, isSuccess, isError }
}
