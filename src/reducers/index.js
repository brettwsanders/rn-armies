import { combineReducers } from 'redux'
import groups from './groups'
import user from './user'
import wallet from './wallet'

const cryptoApp = combineReducers({
  groups,
  user,
  wallet
})

export default cryptoApp
