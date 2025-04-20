/**
 * This file contains the hook for updating an existing task.
 */

import { updateTask } from '../TasksRepository'

import type { IPutTaskRequest } from './IputTaskRequest'
import type { TPutTaskResponse } from './TPutTaskResponse'

import { useMutation } from '@tanstack/react-query'
import { UseCustomMutation } from '@/types/common'

/**
 * Hook to update an existing task.
 *
 * @param onSuccess - Callback function to be called on successful task update.
 * @returns An object containing the task data, loading state, success state, error state, and the request function.
 */
export const usePutTask: UseCustomMutation<TPutTaskResponse, IPutTaskRequest> = (onSuccess) => {
  const { data, isPending, mutate, isSuccess, isError } = useMutation({
    mutationKey: ['usePutTask'],
    mutationFn: async (updateTaskRequest: IPutTaskRequest) => updateTask(updateTaskRequest),
    onSuccess,
  })

  return { data, isPending, request: mutate, isSuccess, isError }
}
