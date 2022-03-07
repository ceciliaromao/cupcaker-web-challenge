import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import styles from './styles.module.scss'
import {
  InitialDescription,
  Input,
  Button,
  Panel,
  Select,
  Typography,
  TypographyVariant,
} from 'components/atoms'

interface FormInput {
  name: string | undefined
  description: string | undefined
  price: number | undefined
  quantity: string
  date: string
}

const coins = [
  {
    label: 'Bitcoin',
    value: {
      id: 1,
      name: 'Bitcoin',
      description:
        'Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.',
      price: 223483.32,
    },
  },
  {
    label: 'Ethereum',
    value: {
      id: 2,
      name: 'Ethereum',
      description:
        "Ethereum is a technology that's home to digital money, global payments, and applications. The community has built a booming digital economy, bold new ways for creators to earn online, and so much more. It's open to everyone, wherever you are in the world – all you need is the internet.",
      price: 215262.18,
    },
  },
  {
    label: 'Dogecoin',
    value: {
      id: 3,
      name: 'Dogecoin',
      description:
        'Dogecoin (DOGE), seen by some as the original “memecoin,” caused a stir in 2021 as the price of the coin skyrocketed. The coin, which uses an image of the Shiba Inu as its avatar, is accepted as a form of payment by some major companies, including the Dallas Mavericks, Kronos, and—perhaps most notably—SpaceX, an American aerospace manufacturer owned by Elon Musk.',
      price: 0.74,
    },
  },
]

const schema = yup.object().shape({
  coin: yup.string().required('Coin must be filled!'),
  price: yup.string().required(),
  quantity: yup.string().required('Quantity must be filled!'),
})

export const dataReturn: FormInput[] = []

const coinsStorageReturn = String(localStorage.getItem('coinsReturn'))
const dataCoinsStorage = JSON.parse(coinsStorageReturn)
dataCoinsStorage ? dataCoinsStorage.map((el: FormInput) => dataReturn.push(el)) : ''

const AddNewCoin = (): JSX.Element => {
  const history = useHistory()
  const [quantity, setQuantity] = React.useState('')
  const [selectAddCoin, setSelectAddCoin] = React.useState<{
    id: number
    name: string
    description: string
    price: number
  } | null>(null)
  const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(schema), })
  const { errors } = formState

  const handleOnSubmit = () => {
    const date = new Date()
    dataReturn.push({
      name: selectAddCoin?.name,
      description: selectAddCoin?.description,
      price: selectAddCoin?.price,
      quantity,
      date: `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${ date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1 }/${date.getFullYear()}`,
    })
    localStorage.setItem('coinsReturn', JSON.stringify(dataReturn))
    history.push('/')
  }

  return (
    <div className={styles.containerPage}>
      <Typography text="Add New Coin" variant={TypographyVariant.h3} />
      <Panel className={styles.panel}>
        <div className={styles.containerInfoCoin}>
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <Select
              options={coins}
              placeholder="Select the coin..."
              setState={setSelectAddCoin}
              {...register('coin')}
              error={errors?.coin && !selectAddCoin ? true : false}
            />
            {errors?.coin && !selectAddCoin && <p>{errors.coin.message}</p>}

            <Input
              disabled={true}
              value={selectAddCoin?.price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
              {...register('price')}
            />
            <Input
              {...register('quantity')}
              value={quantity}
              onChange={el => {
                setQuantity(el.target.value)
              }}
              error={errors?.coin && !selectAddCoin ? true : false}
            />
            {errors?.quantity && !quantity && <p>{errors.quantity.message}</p>}
            <div className={styles.divButton}>
              <Button
                type = "submit"
                text = "ADD NEW COIN"
                onclick = {() => {
                  if (quantity != '' && selectAddCoin != null) {
                    handleOnSubmit()
                  }
                }}
              />
            </div>
          </form>
          <div className={styles.description}>
            <InitialDescription
              letter={selectAddCoin?.name.toUpperCase().substr(0, 1)}
              text={selectAddCoin?.description}
            />
          </div>
        </div>
      </Panel>
    </div>
  )
}

export default AddNewCoin