/**
 * TasksRepository module provides functions to interact with the tasks API.
 *
 * This file includes methods for performing CRUD operations on tasks, such as:
 * - Fetching all tasks or a specific task by ID.
 * - Creating, updating, and deleting tasks.
 *
 * These functions use Axios for HTTP requests and return promises for handling asynchronous operations.
 */
import type { TGetTasksResponse } from './getTasks/TGetTasksResponse'
import type { TPutTaskResponse } from './putTask/TPutTaskResponse'
import { IGetTask, TCreateTask, TDeleteTask, TGetTasks, TUpdateTask } from './types'

import type { AxiosResponse } from 'axios'
import { tasksUrl } from '@/apis/urls'
import axios from '@/lib/axios'

/**
 * Fetches all tasks from the API.
 *
 * @returns {Promise<TGetTasksResponse>} A promise that resolves to the response data containing all tasks.
 */
export const getTasks: TGetTasks = async () => {
  const { data }: AxiosResponse<TGetTasksResponse> = await axios.get(`${tasksUrl}`)

  return data
}

/**
 * Fetches a specific task by its ID from the API.
 *
 * @param {string} id - The ID of the task to fetch.
 * @returns {Promise<TGetTasksResponse>} A promise that resolves to the response data containing the task.
 */
export const getTask: IGetTask = async (id: string) => {
  const { data } = await axios.get(`${tasksUrl}/${id}`)

  return data
}

/**
 * Creates a new task in the API.
 *
 * @param {TCreateTask} createTaskRequest - The request object containing task details.
 * @returns {Promise<void>} A promise that resolves when the task is created.
 */
export const createTask: TCreateTask = async (createTaskRequest) => {
  await axios.post(tasksUrl, createTaskRequest)
}

/**
 * Updates an existing task in the API.
 *
 * @param {TPutTaskResponse} updateTaskRequest - The request object containing updated task details.
 * @returns {Promise<TPutTaskResponse>} A promise that resolves to the response data containing the updated task.
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
 * Deletes a task by its ID from the API.
 *
 * @param {string} id - The ID of the task to delete.
 * @returns {Promise<void>} A promise that resolves when the task is deleted.
 */
export const deleteTask: TDeleteTask = async (id) => {
  await axios.delete(`${tasksUrl}/${id}`)
}
