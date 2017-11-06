import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import search from './search'
import record from './record'

export default combineReducers({
  routing: routerReducer,
  search: search,
  record: record
})
