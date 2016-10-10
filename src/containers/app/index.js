import React from 'react'
import Immutable from 'immutable'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import Items from '../items/Items'

import rootReducer from '../../reducers/index'

let middleware = [ thunk ]

if (__DEV__) {
  middleware = [
    ...middleware,
    logger({
      stateTransformer: state => state.toJS(),
      collapsed: () => true
    }),
  ]
}
// const store = compose(
//   applyMiddleware(...middleware)
// )(createStore)(rootReducer)

const store = createStore(
  rootReducer,
  Immutable.fromJS({}),
  applyMiddleware(...middleware)
)

export default class AppContainer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Items />
      </Provider>
    )
  }
}
