import type { ButtonProps } from '../types'

import SC from './style'

import type { FC } from 'react'

type PrimaryButtonProps = ButtonProps
const PrimaryButton: FC<PrimaryButtonProps> = ({ value, ...props }) => {
  return (
    <SC.Button variant="contained" {...props} color="primary" value={value} disableElevation>
      {value}
    </SC.Button>
  )
}

export default PrimaryButton
