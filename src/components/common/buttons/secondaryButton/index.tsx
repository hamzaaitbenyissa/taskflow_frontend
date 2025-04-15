import type { ButtonProps } from '../types'

import SC from './style'

import type { FC } from 'react'

type PrimaryButtonProps = ButtonProps
const SecondaryButton: FC<PrimaryButtonProps> = ({ value, ...props }) => {
  return (
    <SC.Button variant="outlined" {...props} color="secondary" disableElevation>
      {value}
    </SC.Button>
  )
}

export default SecondaryButton
