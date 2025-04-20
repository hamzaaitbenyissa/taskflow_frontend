import { createTask } from '../TasksRepository'

import type { IPostTaskRequest } from './IPostTaskRequest'

import { useMutation } from '@tanstack/react-query'
import { UseCustomMutation } from '@/types/common'

/**
 * Custom hook to post a task using react-query
 * @param onSuccess - Callback function to be called on success
 * @returns {object} - Contains data, isPending, request, isSuccess, and isError
 */
export const usePostTask: UseCustomMutation<void, IPostTaskRequest> = (onSuccess) => {
  const { data, isPending, mutate, isSuccess, isError } = useMutation({
    mutationKey: ['usePostTask'],
    mutationFn: async (createTaskRequest: IPostTaskRequest) => createTask(createTaskRequest),
    onSuccess,
  })

  return { data, isPending, request: mutate, isSuccess, isError }
}
