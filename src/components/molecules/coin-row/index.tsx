import React from 'react'
import { InitialLetter, Typography, TypographyVariant } from 'components/atoms'
import styles from './styles.module.scss'

interface CoinRowProps {
  name?: string
  date?: string
  quantity?: number
  price?: number
}

function CoinRow({ name = '', date, quantity = 0, price = 0 }: CoinRowProps): JSX.Element {
  return (
    <div className={styles.containerCoinRow}>
      <div className={styles.initialLetter}>
        <InitialLetter letter={name.toUpperCase().substr(0, 1)} />
      </div>
      <div className={styles.description}>
        <Typography text={name[0].toUpperCase() + name.substr(1)} variant={TypographyVariant.h5} />
        <p>Added {date}</p>
      </div>
      <div className={styles.price}>
        {(quantity * price).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
    </div>
  )
}

export { CoinRow }