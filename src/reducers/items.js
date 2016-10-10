import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

import * as actions from '../actions/items'

const initialState = Immutable.fromJS({
  all: {},
})

export default createReducer(initialState, {
  [actions.ADD_ITEM]: (state, action) => {
    const item = action.payload
    return state.setIn(['all', item.id], Immutable.fromJS(item))
  },
})
