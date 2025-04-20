/**
 * This file contains the LoadingError component, which handles loading and error states.
 */
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

/**
 * LoadingError component that handles loading and error states.
 *
 * @param isLoading - Indicates if the content is loading.
 * @param isError - Indicates if there was an error loading the content.
 * @param loadingComponent - Component to render when loading.
 * @param errorComponent - Component to render when there is an error.
 * @param children - The content to render when not loading or in error state.
 * @returns The LoadingError component with the provided props.
 */
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
