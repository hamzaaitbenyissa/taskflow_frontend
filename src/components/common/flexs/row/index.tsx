import { styled } from '@mui/material'
import { AlignItemsProperties, JustifyContentProperties } from '@/components/common/types'

interface RowFlexProps {
  alignItems?: AlignItemsProperties
  justify?: JustifyContentProperties
  columnGap?: number
}

const Row = styled('div')<RowFlexProps>(({ alignItems, justify, columnGap }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: justify ?? 'flex-start',
  alignItems: alignItems ?? 'flex-start',
  columnGap: columnGap === undefined ? '0' : `${String(columnGap)}px`,
}))

export default Row
