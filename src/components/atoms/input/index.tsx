/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'

import styles from './styles.module.scss'

interface InputProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
  name: string
  disabled?: boolean | undefined
  value?: string
  error?: boolean
}

function Input({ onChange, name, disabled, value, error }: InputProps): JSX.Element {
  return (
    <div className={styles.containerInput}>
      <label htmlFor={name}  style={{ color: disabled ? 'var(--color-gray-light)' : 'var(--color-gray-dark)', }}>{name}</label>
      <input
        id={name}
        className={styles.input}
        type="text"
        style={{ borderColor: error ? 'var(--color-alert-red)' : disabled ? 'var(--color-gray-light)' : 'var(--color-gray-dark)', }}
        disabled={disabled}
        value={value}
        onChange={onChange} />
    </div>
  )
}

export { Input }