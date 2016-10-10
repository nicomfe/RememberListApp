import { createSelector } from 'reselect'

export const getItems = state => state.get('items')

export const getAllItems = createSelector(
  getItems,
  items => items.get('all')
)
