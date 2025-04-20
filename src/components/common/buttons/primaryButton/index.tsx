/**
 * This file contains the PrimaryButton component, which renders a button with primary styling.
 */

import type { ButtonProps } from '../types'

import SC from './style'

import type { FC } from 'react'

type TPrimaryButtonProps = ButtonProps

/**
 * PrimaryButton component that renders a button with primary styling.
 *
 * @param props - The props for the button component.
 * @returns The PrimaryButton component with the provided props.
 */
const PrimaryButton: FC<TPrimaryButtonProps> = ({ value, ...props }) => {
  return (
    <SC.Button variant="contained" {...props} color="primary" value={value} disableElevation>
      {value}
    </SC.Button>
  )
}

export default PrimaryButton
