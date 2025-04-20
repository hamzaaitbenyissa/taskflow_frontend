/**
 * This file defines the types used in the tasks API.
 */

import type { TGetTasksResponse } from './getTasks/TGetTasksResponse'
import type { IPostTaskRequest } from './postTask/IPostTaskRequest'
import type { IPutTaskRequest } from './putTask/IputTaskRequest'
import type { TPutTaskResponse } from './putTask/TPutTaskResponse'
import { TGetTaskResponse } from '@/apis/tasks/getTask/TGetTaskResponse'

/**
 * Type representing the function to fetch all tasks.
 *
 * @returns A promise that resolves to an array of task data.
 */
export type TGetTasks = () => Promise<TGetTasksResponse>

/**
 * Type representing the function to fetch a single task by its ID.
 *
 * @param id - The ID of the task to fetch.
 * @returns A promise that resolves to the task data.
 */
export type IGetTask = (id: string) => Promise<TGetTaskResponse>

/**
 * Type representing the function to create a new task.
 *
 * @param createTaskRequest - The request object containing the task data to create.
 * @returns A promise that resolves when the task is created.
 */
export type TCreateTask = (createTaskRequest: IPostTaskRequest) => Promise<void>

/**
 * Type representing the function to update an existing task.
 *
 * @param updateTaskRequest - The request object containing the task data to update.
 * @returns A promise that resolves to the updated task data.
 */
export type TUpdateTask = (updateTaskRequest: IPutTaskRequest) => Promise<TPutTaskResponse>

/**
 * Type representing the function to delete a task by its ID.
 *
 * @param id - The ID of the task to delete.
 * @returns A promise that resolves when the task is deleted.
 */
export type TDeleteTask = (id: string) => Promise<void>

/**
 * Interface representing the data transfer object for a task.
 */
export type ITaskDTO = {
  id: string
  title: string
  description: string
  completed: boolean
}
