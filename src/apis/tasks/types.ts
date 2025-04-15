import type { TGetTasksResponse } from './getTasks/TGetTasksResponse'
import type { IPostTaskRequest } from './postTask/IPostTaskRequest'
import type { IPutTaskRequest } from './putTask/IputTaskRequest'
import type { TPutTaskResponse } from './putTask/TPutTaskResponse'
import { TGetTaskResponse } from '@/apis/tasks/getTask/TGetTaskResponse'

export type TGetTasks = () => Promise<TGetTasksResponse>
export type IGetTask = (id: string) => Promise<TGetTaskResponse>
export type TCreateTask = (createTaskRequest: IPostTaskRequest) => Promise<void>
export type TUpdateTask = (updateTaskRequest: IPutTaskRequest) => Promise<TPutTaskResponse>
export type TDeleteTask = (id: string) => Promise<void>

export type ITaskDTO = {
  id: string
  title: string
  description: string
  completed: boolean
}
