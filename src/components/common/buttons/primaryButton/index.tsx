import type { ButtonProps } from '../types'

import SC from './style'

import type { FC } from 'react'

type PrimaryButtonProps = ButtonProps
/**
 * PrimaryButton component that renders a Material-UI Button with primary color.
 * @param value - The text to display on the button.
 * @param props - Additional props to pass to the button.
 * @constructor
 */
const PrimaryButton: FC<PrimaryButtonProps> = ({ value, ...props }) => {
  return (
    <SC.Button variant="contained" {...props} color="primary" value={value} disableElevation>
      {value}
    </SC.Button>
  )
}

export default PrimaryButton
