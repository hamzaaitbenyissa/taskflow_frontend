/**
 * This file contains the repository functions for managing tasks.
 * It includes functions to get all tasks, get a single task by ID, create a new task, update an existing task, and delete a task.
 */

import type { TGetTasksResponse } from './getTasks/TGetTasksResponse'
import type { TPutTaskResponse } from './putTask/TPutTaskResponse'
import { IGetTask, TCreateTask, TDeleteTask, TGetTasks, TUpdateTask } from './types'

import type { AxiosResponse } from 'axios'
import { tasksUrl } from '@/apis/urls'
import axios from '@/lib/axios'

/**
 * Fetches all tasks.
 *
 * @returns A promise that resolves to an array of task data.
 */
export const getTasks: TGetTasks = async () => {
  const { data }: AxiosResponse<TGetTasksResponse> = await axios.get(`${tasksUrl}`)

  return data
}

/**
 * Fetches a single task by its ID.
 *
 * @param id - The ID of the task to fetch.
 * @returns A promise that resolves to the task data.
 */
export const getTask: IGetTask = async (id: string) => {
  const { data } = await axios.get(`${tasksUrl}/${id}`)

  return data
}

/**
 * Creates a new task.
 *
 * @param createTaskRequest - The request object containing the task data to create.
 * @returns A promise that resolves when the task is created.
 */
export const createTask: TCreateTask = async (createTaskRequest) => {
  await axios.post(tasksUrl, createTaskRequest)
}

/**
 * Updates an existing task.
 *
 * @param updateTaskRequest - The request object containing the task data to update.
 * @returns A promise that resolves to the updated task data.
 */
export const updateTask: TUpdateTask = async (updateTaskRequest) => {
  const { id, ...updateTaskRequestBody } = updateTaskRequest
  const { data }: AxiosResponse<TPutTaskResponse> = await axios.put(
    `${tasksUrl}/${id}`,
    updateTaskRequestBody
  )

  return data
}

/**
 * Deletes a task by its ID.
 *
 * @param id - The ID of the task to delete.
 * @returns A promise that resolves when the task is deleted.
 */
export const deleteTask: TDeleteTask = async (id) => {
  await axios.delete(`${tasksUrl}/${id}`)
}
