import { getTasks } from '../TasksRepository'

import type { TGetTasksResponse } from './TGetTasksResponse'

import { useQuery } from '@tanstack/react-query'

import { EUseQueryKeys, IQueryDescriptor } from '@/types/common'

type TUseGetTasks = () => IQueryDescriptor<TGetTasksResponse>

export const useGetTasks: TUseGetTasks = () => {
  const { data, isPending, isSuccess, isError } = useQuery({
    queryKey: [EUseQueryKeys.USE_GET_TASKS],
    queryFn: async () => getTasks(),
    staleTime: Infinity,
  })

  return { data, isPending, isSuccess, isError }
}
