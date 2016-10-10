import UUID from 'react-native-uuid'

export const ADD_ITEM = '@@item/ADD_ITEM'

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: {
      id: UUID.v4(),
      text: item,
    },
  }
}
