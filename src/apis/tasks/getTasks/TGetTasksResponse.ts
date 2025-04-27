import { ITaskDTO } from '@/apis/tasks/types'

export type TGetTasksResponse = {
  currentPage: number
  totalPages: number
  pageSize: number
  tasks: ITaskDTO[]
}
