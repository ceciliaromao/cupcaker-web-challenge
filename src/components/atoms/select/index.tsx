import React from 'react'

import styles from './styles.module.scss'

interface InputProps {
  name: string
  options: string[]
  placeholder?: string
}

function Select({ name, options, placeholder }: InputProps): JSX.Element {
  return (
    <div className={styles.containerSelect}>
      <label htmlFor={name}>{name}</label>
      <select id={name} name={name} className={styles.select}>
        <option value="" disabled selected> {placeholder} </option>
        {options.map(el => ( <option value={el} key={el}> {el} </option> ))}
      </select>
    </div>
  )
}

export { Select }