/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { Typography, TypographyVariant } from '..'
import { Paragraph } from '../typography/paragraph'
import styles from './styles.module.scss'

interface InitialLetterProps {
  letter?: string
  text?: string
}

function InitialDescription({ letter, text }: InitialLetterProps): JSX.Element {
  return (
    <div className={styles.containerDescription}>
      <div className={styles.coin}>
        <Typography
          text={letter ? letter : ' '}
          variant={TypographyVariant.h3} />
      </div>
      <div>
        <Paragraph text={text ? text : 'No description!'} />
      </div>
    </div>
  )
}

function InitialLetter({ letter }: InitialLetterProps): JSX.Element {
  return (
    <div className={styles.coin}>
      <Typography text={letter ? letter : ' '} variant={TypographyVariant.h3} />
    </div>
  )
}

export { InitialDescription, InitialLetter }