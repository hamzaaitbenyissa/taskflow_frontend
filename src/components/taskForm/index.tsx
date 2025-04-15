'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { usePostTask } from '@/apis/tasks/postTask/usePostTask'
import { useInvalidateQueries } from '@/apis/hooks'
import { EUseQueryKeys } from '@/types/common'
import SC from '@/components/taskForm/style'

import { Controller, useForm } from 'react-hook-form'
import React from 'react'
import CancelButton from '@/components/common/buttons/cancelButton'
import SaveButton from '@/components/common/buttons/saveButton'
import { usePutTask } from '@/apis/tasks/putTask/usePutTask'

interface TaskFormData {
  id?: string
  title: string
  description: string
  completed: boolean
}

interface TaskFormProps {
  task?: TaskFormData
  onClose: () => void
}
const schema = yup.object().shape({
  id: yup.string().nullable(),
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  completed: yup.boolean().nullable(),
})

const TaskForm = ({ task, onClose }: TaskFormProps) => {
  const isEditMode = Boolean(task)

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: task?.title || '',
      description: task?.description || '',
      completed: task?.completed ?? false,
    },
  })
  const { invalidateQueries } = useInvalidateQueries()

  const OnAddTaskSuccess = () => {
    invalidateQueries([EUseQueryKeys.USE_GET_TASKS])
    reset()
    onClose()
  }
  const onUpdateTaskSuccess = () => {
    invalidateQueries([EUseQueryKeys.USE_GET_TASKS], task?.id)
    invalidateQueries([EUseQueryKeys.USE_GET_TASKS])
    reset()
    onClose()
  }

  const { request: addRequest } = usePostTask(OnAddTaskSuccess)
  const { request: updateRequest } = usePutTask(onUpdateTaskSuccess)

  const onSubmit = (data: TaskFormData) => {
    if (isEditMode) {
      updateRequest({ ...data, id: task?.id, completed: data.completed })
    } else {
      addRequest(data)
    }
    onClose()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SC.FormContainer>
        <Controller
          control={control}
          name="title"
          render={({ field }) => (
            <SC.Title
              {...field}
              placeholder="Task title"
              error={Boolean(errors.title)}
              ref={null}
              helperText={errors.title?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <SC.Description
              {...field}
              placeholder="Task description"
              error={Boolean(errors.description)}
              ref={null}
              helperText={errors.description?.message}
              rows={10}
              multiline={true}
            />
          )}
        />
        <Controller
          control={control}
          name="completed"
          render={({ field }) => (
            <SC.CheckBox
              {...field}
              color={'secondary'}
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
            />
          )}
        />
        <SaveButton type={'submit'} />
        <CancelButton onClick={onClose} />
      </SC.FormContainer>
    </form>
  )
}

export default TaskForm
