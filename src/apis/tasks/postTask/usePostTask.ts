import { createTask } from '../TasksRepository'

import type { IPostTaskRequest } from './IPostTaskRequest'

import { useMutation } from '@tanstack/react-query'
import { UseCustomMutation } from '@/types/common'

export const usePostTask: UseCustomMutation<void, IPostTaskRequest> = (onSuccess) => {
  const { data, isPending, mutate, isSuccess, isError } = useMutation({
    mutationKey: ['usePostTask'],
    mutationFn: async (createTaskRequest: IPostTaskRequest) => createTask(createTaskRequest),
    onSuccess,
  })

  return { data, isPending, request: mutate, isSuccess, isError }
}
