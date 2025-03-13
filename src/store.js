import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'
import {
	userReducer,
	accoutsReducer,
	accoutReducer,
	transactionsReducer,
	transactionReducer,
	categoriesReducer,
	categoryReducer,
} from './reducers'

const reducer = combineReducers({
	user: userReducer,
	accouts: accoutsReducer,
	accout: accoutReducer,
	transactions: transactionsReducer,
	transaction: transactionReducer,
	categories: categoriesReducer,
	category: categoryReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
