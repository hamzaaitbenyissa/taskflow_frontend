import { styled } from '@mui/material'
import { AlignItemsProperties, JustifyContentProperties } from '@/components/common/types'

interface ColumnProps {
  justify?: JustifyContentProperties
  alignItems?: AlignItemsProperties
  rowGap?: number
}

const Column = styled('div')((columnProps: ColumnProps) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: columnProps.justify ?? 'auto',
  alignItems: columnProps.alignItems ?? 'auto',
  rowGap: columnProps.rowGap === undefined ? 'normal' : `${String(columnProps.rowGap)}px`,
}))

export default Column
