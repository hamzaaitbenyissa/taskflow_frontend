/**
 * This file contains the Column component, which renders a flex container with column direction.
 */

import { styled } from '@mui/material'
import { AlignItemsProperties, JustifyContentProperties } from '@/components/common/types'

interface ColumnProps {
  justify?: JustifyContentProperties
  alignItems?: AlignItemsProperties
  rowGap?: number
}

/**
 * Column component that renders a flex container with column direction.
 *
 * @param columnProps - The props for the column component.
 * @returns The Column component with the provided props.
 */
const Column = styled('div')((columnProps: ColumnProps) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: columnProps.justify ?? 'auto',
  alignItems: columnProps.alignItems ?? 'auto',
  rowGap: columnProps.rowGap === undefined ? 'normal' : `${String(columnProps.rowGap)}px`,
}))

export default Column
