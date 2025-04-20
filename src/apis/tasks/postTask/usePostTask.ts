/**
 * This file contains the hook for creating a new task.
 */

import { createTask } from '../TasksRepository'

import type { IPostTaskRequest } from './IPostTaskRequest'

import { useMutation } from '@tanstack/react-query'
import { UseCustomMutation } from '@/types/common'

/**
 * Hook to create a new task.
 *
 * @param onSuccess - Callback function to be called on successful task creation.
 * @returns An object containing the task data, loading state, success state, error state, and the request function.
 */
export const usePostTask: UseCustomMutation<void, IPostTaskRequest> = (onSuccess) => {
  const { data, isPending, mutate, isSuccess, isError } = useMutation({
    mutationKey: ['usePostTask'],
    mutationFn: async (createTaskRequest: IPostTaskRequest) => createTask(createTaskRequest),
    onSuccess,
  })

  return { data, isPending, request: mutate, isSuccess, isError }
}
