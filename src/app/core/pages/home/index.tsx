import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Panel, Typography, TypographyVariant } from 'components/atoms'
import { EmptyState, EmptyStateType, CoinRow } from 'components/molecules'
import { dataReturn } from '../AddNewCoin'
import styles from './styles.module.scss'

const Home = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Typography text="Watchlist" variant={TypographyVariant.h3} />
      <Panel className={styles.panel}>
        <EmptyState type={EmptyStateType.emptyWallet} />
      </Panel>
    </div>
  )
}

export default Home
