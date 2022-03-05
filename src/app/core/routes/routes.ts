import { AppRoute } from './types'
import Home from 'app/core/pages/home'
import AddNewCoin from '../pages/AddNewCoin'

export const coreRoutes: AppRoute[] = [
  { path: '/', exact: true, component: Home },
  { path: '/private', exact: true, component: Home, isPrivate: true },
  { path: '/new-coin', exact: true, component: AddNewCoin },
]
