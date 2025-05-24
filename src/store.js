import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'
import {
	userReducer,
	accountsReducer,
	transactionsReducer,
	transactionReducer,
	categoriesReducer,
} from './reducers'

const reducer = combineReducers({
	user: userReducer,
	accounts: accountsReducer,
	transactions: transactionsReducer,
	transaction: transactionReducer,
	categories: categoriesReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
