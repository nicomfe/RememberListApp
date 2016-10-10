import React from 'react'
import { View, StyleSheet } from 'react-native'

class ItemSeparator extends React.Component {
  render() {
    const { rowId } = this.props
    return <View key={rowId} style={styles.separator} />
  }
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#757575',
    height: 1,
  },
})

export default ItemSeparator
