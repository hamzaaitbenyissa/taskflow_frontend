import { FC } from 'react'
import CancelIcon from '@mui/icons-material/Cancel'
import type { ButtonProps as muiButtonProps } from '@mui/material'

import SC from './style'

type TCancelButtonProps = muiButtonProps

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
