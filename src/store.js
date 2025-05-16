import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'
import {
	userReducer,
	accountsReducer,
	accountReducer,
	transactionsReducer,
	transactionReducer,
	categoriesReducer,
	categoryReducer,
} from './reducers'

const reducer = combineReducers({
	user: userReducer,
	accounts: accountsReducer,
	account: accountReducer,
	transactions: transactionsReducer,
	transaction: transactionReducer,
	categories: categoriesReducer,
	category: categoryReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
