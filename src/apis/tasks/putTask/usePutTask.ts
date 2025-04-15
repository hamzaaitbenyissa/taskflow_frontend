import { updateTask } from '../TasksRepository'

import type { IPutTaskRequest } from './IputTaskRequest'
import type { TPutTaskResponse } from './TPutTaskResponse'

import { useMutation } from '@tanstack/react-query'
import { UseCustomMutation } from '@/types/common'

export const usePutTask: UseCustomMutation<TPutTaskResponse, IPutTaskRequest> = (onSuccess) => {
  const { data, isPending, mutate, isSuccess, isError } = useMutation({
    mutationKey: ['usePutTask'],
    mutationFn: async (updateTaskRequest: IPutTaskRequest) => updateTask(updateTaskRequest),
    onSuccess,
  })

  return { data, isPending, request: mutate, isSuccess, isError }
}
