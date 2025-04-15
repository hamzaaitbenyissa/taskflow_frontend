import type { TGetTasksResponse } from './getTasks/TGetTasksResponse'
import type { TPutTaskResponse } from './putTask/TPutTaskResponse'
import { IGetTask, TCreateTask, TDeleteTask, TGetTasks, TUpdateTask } from './types'

import type { AxiosResponse } from 'axios'
import { tasksUrl } from '@/apis/urls'
import axios from '@/lib/axios'

export const getTasks: TGetTasks = async () => {
  const { data }: AxiosResponse<TGetTasksResponse> = await axios.get(`${tasksUrl}`)

  return data
}

export const getTask: IGetTask = async (id: string) => {
  const { data } = await axios.get(`${tasksUrl}/${id}`)

  return data
}

export const createTask: TCreateTask = async (createTaskRequest) => {
  await axios.post(tasksUrl, createTaskRequest)
}

export const updateTask: TUpdateTask = async (updateTaskRequest) => {
  const { id, ...updateTaskRequestBody } = updateTaskRequest
  const { data }: AxiosResponse<TPutTaskResponse> = await axios.put(
    `${tasksUrl}/${id}`,
    updateTaskRequestBody
  )

  return data
}

export const deleteTask: TDeleteTask = async (id) => {
  await axios.delete(`${tasksUrl}/${id}`)
}
