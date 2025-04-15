import { FC } from 'react'
import type { ButtonProps as muiButtonProps } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done'

import SC from './style'

type TSaveButtonProps = muiButtonProps

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
