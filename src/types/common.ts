import type { UseMutateFunction } from '@tanstack/react-query'

export interface IQueryDescriptor<TResponse> {
  data: TResponse | undefined
  isPending: boolean
  isSuccess?: boolean
  isError?: boolean
}

export interface TRequestDescriptor<TResponse, TRequest = void>
  extends IQueryDescriptor<TResponse> {
  request: UseMutateFunction<TResponse, unknown, TRequest>
}

export type OnUseMutationSuccess<TResponse> = (response: TResponse) => void

export type UseCustomMutation<TResponse, TRequest = void> = (
  onSuccess: OnUseMutationSuccess<TResponse>
) => TRequestDescriptor<TResponse, TRequest>

export type Nullable<Type> = Type | null
export type NulllableOrUndefined<Type> = Type | null | undefined

export type Consumer<Type> = (arg: Type) => void
export type Callback = () => void
export type Undefined<Type> = Type | undefined

export enum EUseQueryKeys {
  USE_GET_TASKS = 'useGetTasks',
}

export const voidFunction = () => {}
