import { deleteTask } from '../TasksRepository'

import { useMutation } from '@tanstack/react-query'
import { UseCustomMutation } from '@/types/common'

/**
 * Custom hook to handle the deletion of a task.
 *
 * @param {Function} onSuccess - Callback function to execute upon successful deletion of a task.
 * @returns {Object} - An object containing:
 *   - `data`: The response data from the mutation.
 *   - `isPending`: A boolean indicating if the mutation is in progress.
 *   - `request`: A function to trigger the mutation with the task ID.
 *   - `isSuccess`: A boolean indicating if the mutation was successful.
 *   - `isError`: A boolean indicating if the mutation encountered an error.
 */
export const useDeleteTask: UseCustomMutation<void, string> = (onSuccess) => {
  const { data, isPending, mutate, isSuccess, isError } = useMutation({
    mutationKey: ['useDeleteTask'],
    mutationFn: async (id: string) => deleteTask(id),
    onSuccess,
  })

  return { data, isPending, request: mutate, isSuccess, isError }
}
