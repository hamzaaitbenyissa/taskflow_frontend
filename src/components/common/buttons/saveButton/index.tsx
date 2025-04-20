/**
 * This file contains the SaveButton component, which renders a button with a save icon.
 */

import { FC } from 'react'
import type { ButtonProps as muiButtonProps } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done'

import SC from './style'

type TSaveButtonProps = muiButtonProps

/**
 * SaveButton component that renders a button with a save icon.
 *
 * @param props - The props for the button component.
 * @returns The SaveButton component with the provided props.
 */
const SaveButton: FC<TSaveButtonProps> = ({ ...props }) => {
  return (
    <SC.Button
      variant="outlined"
      {...props}
      color="success"
      disableElevation
      startIcon={<DoneIcon />}
    >
      Save
    </SC.Button>
  )
}

export default SaveButton
