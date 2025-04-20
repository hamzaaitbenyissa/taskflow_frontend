/**
 * This file contains the hook for fetching all tasks.
 */

import { getTasks } from '../TasksRepository'

import type { TGetTasksResponse } from './TGetTasksResponse'

import { useQuery } from '@tanstack/react-query'

import { EUseQueryKeys, IQueryDescriptor } from '@/types/common'

/**
 * Type representing the hook for fetching all tasks.
 */
type TUseGetTasks = () => IQueryDescriptor<TGetTasksResponse>

/**
 * Hook to fetch all tasks.
 *
 * @returns An object containing the tasks data, loading state, success state, and error state.
 */
export const useGetTasks: TUseGetTasks = () => {
  const { data, isPending, isSuccess, isError } = useQuery({
    queryKey: [EUseQueryKeys.USE_GET_TASKS],
    queryFn: async () => getTasks(),
    staleTime: Infinity,
  })

  return { data, isPending, isSuccess, isError }
}
