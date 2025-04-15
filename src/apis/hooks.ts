import { useQueryClient } from '@tanstack/react-query'
import { EUseQueryKeys, voidFunction } from '@/types/common'

type TUseInvalidateQueries = () => {
  invalidateQueries: (keys: EUseQueryKeys[], id?: string) => void
}

export const useInvalidateQueries: TUseInvalidateQueries = () => {
  const queryClient = useQueryClient()

  const invalidateQueries = (keys: EUseQueryKeys[], id?: string) => {
    const queriesToInvalidate = keys.map(async (key) =>
      queryClient.invalidateQueries({ queryKey: id ? [key + id] : [key] })
    )
    Promise.all(queriesToInvalidate).catch(voidFunction)
  }

  return { invalidateQueries }
}
