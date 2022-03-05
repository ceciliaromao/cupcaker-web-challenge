import React from 'react'

import styles from './styles.module.scss'

interface InputProps {
  name: string
  options: {
    label: string
    value: {
      id: number
      name: string
      description: string
      price: number
    }
  }[]
  placeholder?: string
  setState: React.Dispatch <
    React.SetStateAction <
      { 
        id: number
        name: string
        description: string
        price: number
      } | null
    >
  >
  error?: boolean
}

function Select({ name, options, placeholder, setState, error }: InputProps): JSX.Element {
  return (
    <div className={styles.containerSelect}>
      <label htmlFor={name}>{name}</label>
      <select id={name} name={name} className={styles.select}
        style={{ borderColor: error ? 'var(--color-alert-red)' : 'var(--color-dark-gray)' }}
        onChange={el => {
          const found = options.find(i => i.value.id.toString() == el.target.value)
          if (found) {
            setState(found.value)
          }
        }}
      >
        <option value="" disabled selected> {placeholder} </option>
        {options.map(el => ( <option value={el.value.id} key={el.label}> {el.label} </option> ))}
      </select>
    </div>
  )
}

export { Select }