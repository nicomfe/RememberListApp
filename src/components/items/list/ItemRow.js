import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

class ItemRow extends React.Component {

  render() {
    const { item } = this.props
    return (
      <View style={styles.container}>
        <Text id={item.id} style={styles.text}>{item.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    height: 80,
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    color: '#212121',
  },
});

export default ItemRow
