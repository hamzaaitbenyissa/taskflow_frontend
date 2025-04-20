import { getTasks } from '../TasksRepository'

import type { TGetTasksResponse } from './TGetTasksResponse'

import { useQuery } from '@tanstack/react-query'

import { EUseQueryKeys, IQueryDescriptor } from '@/types/common'

type TUseGetTasks = () => IQueryDescriptor<TGetTasksResponse>

/**
 * Custom hook to fetch all tasks.
 *
 * @returns {IQueryDescriptor<TGetTasksResponse>} - An object containing:
 *   - `data`: The fetched tasks data.
 *   - `isPending`: A boolean indicating if the query is in progress.
 *   - `isSuccess`: A boolean indicating if the query was successful.
 *   - `isError`: A boolean indicating if the query encountered an error.
 */
export const useGetTasks: TUseGetTasks = () => {
  const { data, isPending, isSuccess, isError } = useQuery({
    queryKey: [EUseQueryKeys.USE_GET_TASKS],
    queryFn: async () => getTasks(),
    staleTime: Infinity,
  })

  return { data, isPending, isSuccess, isError }
}
