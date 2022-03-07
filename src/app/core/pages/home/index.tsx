import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Panel, Typography, TypographyVariant } from 'components/atoms'
import { EmptyState, EmptyStateType, CoinRow } from 'components/molecules'
import { dataReturn } from '../AddNewCoin'
import styles from './styles.module.scss'

console.log(dataReturn)

const Home = (): JSX.Element => {
  const history = useHistory()
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Typography text="Watchlist" variant={TypographyVariant.h3} />
        <Button text="ADD NEW COIN" type="button" onclick={() => { history.push('/new-coin') }} />
      </div>
     
      {
        dataReturn.length  ? 
        ( 
          <Panel className={styles.panelFlexstart}>
           {dataReturn.map(el => ( <CoinRow name={el.name} date={el.date} quantity={Number(el.quantity)} price={el.price} /> ))}
          </Panel>
        ) : 
        ( 
          <Panel className={styles.panelCenter}>
            <EmptyState type={EmptyStateType.emptyWallet} />
          </Panel> 
        )
      }
      
    </div>
  )
}

export default Home
