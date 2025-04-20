/**
 * This file contains the SecondaryButton component, which renders a button with secondary styling.
 */

import type { ButtonProps } from '../types'

import SC from './style'

import type { FC } from 'react'

type TSecondaryButtonProps = ButtonProps

/**
 * SecondaryButton component that renders a button with secondary styling.
 *
 * @param props - The props for the button component.
 * @returns The SecondaryButton component with the provided props.
 */
const SecondaryButton: FC<TSecondaryButtonProps> = ({ value, ...props }) => {
  return (
    <SC.Button variant="outlined" {...props} color="secondary" disableElevation>
      {value}
    </SC.Button>
  )
}

export default SecondaryButton
