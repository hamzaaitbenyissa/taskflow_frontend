/**
 * This file contains the CancelButton component, which renders a button with a cancel icon.
 */

import { FC } from 'react'
import CancelIcon from '@mui/icons-material/Cancel'
import type { ButtonProps as muiButtonProps } from '@mui/material'

import SC from './style'

type TCancelButtonProps = muiButtonProps

/**
 * CancelButton component that renders a button with a cancel icon.
 *
 * @param props - The props for the button component.
 * @returns The CancelButton component with the provided props.
 */
const CancelButton: FC<TCancelButtonProps> = ({ ...props }) => {
  return (
    <SC.Button
      startIcon={<CancelIcon />}
      variant="outlined"
      {...props}
      color="warning"
      disableElevation
    >
      Cancel
    </SC.Button>
  )
}

export default CancelButton
