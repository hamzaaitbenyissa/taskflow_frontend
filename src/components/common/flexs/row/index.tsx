/**
 * This file contains the Row component, which renders a flex container with row direction.
 */

import { styled } from '@mui/material'
import { AlignItemsProperties, JustifyContentProperties } from '@/components/common/types'

interface RowFlexProps {
  alignItems?: AlignItemsProperties
  justify?: JustifyContentProperties
  columnGap?: number
}

/**
 * Row component that renders a flex container with row direction.
 *
 * @param rowFlexProps - The props for the row component.
 * @returns The Row component with the provided props.
 */
const Row = styled('div')<RowFlexProps>(({ alignItems, justify, columnGap }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: justify ?? 'flex-start',
  alignItems: alignItems ?? 'flex-start',
  columnGap: columnGap === undefined ? '0' : `${String(columnGap)}px`,
}))

export default Row
