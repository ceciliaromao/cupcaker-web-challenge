/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'

import styles from './styles.module.scss'

interface InputProps {
  typeRegister: React.ReactNode
  name: string
  disabled?: boolean | undefined
  value?: number
}

function Input({ typeRegister, name, disabled, value }: InputProps): JSX.Element {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{name}</label>
      <input
        id={name}
        className={styles.input}
        type="text"
        {...typeRegister}
        disabled={disabled}
        value={value} />
    </div>
  )
}

export { Input }