import { deleteTask } from '../TasksRepository'

import { useMutation } from '@tanstack/react-query'
import { UseCustomMutation } from '@/types/common'

export const useDeleteTask: UseCustomMutation<void, string> = (onSuccess) => {
  const { data, isPending, mutate, isSuccess, isError } = useMutation({
    mutationKey: ['useDeleteTask'],
    mutationFn: async (id: string) => deleteTask(id),
    onSuccess,
  })

  return { data, isPending, request: mutate, isSuccess, isError }
}
