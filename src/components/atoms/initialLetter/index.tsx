/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { Typography, TypographyVariant } from '..'
import { Paragraph } from '../typography/paragraph'
import styles from './styles.module.scss'

interface InitialLetterProps {
  letter?: string
  text?: string
}

const InitialLetter = ({ letter, text }: InitialLetterProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.coin}>
        <Typography
          text={letter ? letter : ' '}
          variant={TypographyVariant.h3}
        />
      </div>
      <div>
        <Paragraph text={text ? text : 'No description!'} />
      </div>
    </div>
  )
}

export { InitialLetter }