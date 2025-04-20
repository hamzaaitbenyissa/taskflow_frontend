import { updateTask } from '../TasksRepository'

import type { IPutTaskRequest } from './IputTaskRequest'
import type { TPutTaskResponse } from './TPutTaskResponse'

import { useMutation } from '@tanstack/react-query'
import { UseCustomMutation } from '@/types/common'

/**
 * Custom hook to update a task using react-query
 * @param onSuccess - Callback function to be called on success
 * @returns {object} - Contains data, isPending, request, isSuccess, and isError
 */
export const usePutTask: UseCustomMutation<TPutTaskResponse, IPutTaskRequest> = (onSuccess) => {
  const { data, isPending, mutate, isSuccess, isError } = useMutation({
    mutationKey: ['usePutTask'],
    mutationFn: async (updateTaskRequest: IPutTaskRequest) => updateTask(updateTaskRequest),
    onSuccess,
  })

  return { data, isPending, request: mutate, isSuccess, isError }
}
