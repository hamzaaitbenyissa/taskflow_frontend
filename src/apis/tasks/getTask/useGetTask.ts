import { useQuery } from '@tanstack/react-query'
import { EUseQueryKeys, IQueryDescriptor } from '@/types/common'
import { getTask } from '@/apis/tasks/TasksRepository'
import { TGetTaskResponse } from '@/apis/tasks/getTask/TGetTaskResponse'

type TUseGetTask = (id: string) => IQueryDescriptor<TGetTaskResponse>

export const useGetTask: TUseGetTask = (id: string) => {
  const { data, isPending, isSuccess, isError } = useQuery({
    queryKey: [EUseQueryKeys.USE_GET_TASKS + id],
    queryFn: async () => await getTask(id),
  })

  return { data, isPending, isSuccess, isError }
}
