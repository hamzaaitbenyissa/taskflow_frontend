'use client'

import React from 'react'

interface LoadingErrorProps {
  isLoading: boolean
  isError: boolean
  loadingComponent?: React.ReactNode
  errorComponent?: React.ReactNode
  children: React.ReactNode
}

const DefaultLoader = () => <div>Loading...</div>
const DefaultError = () => <div>Error loading data</div>

export const LoadingError = ({
  isLoading,
  isError,
  loadingComponent = <DefaultLoader />,
  errorComponent = <DefaultError />,
  children,
}: LoadingErrorProps) => {
  if (isLoading) return loadingComponent
  if (isError) return errorComponent
  return children
}
