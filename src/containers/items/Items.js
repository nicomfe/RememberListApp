import React from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import ItemsForm from '../../components/items/form/ItemsForm'
import ItemsList from '../../components/items/list/ItemsList'
import { addItem } from '../../actions/items'
import { getAllItems } from '../../selectors/items'

class Items extends React.Component {
  render() {
    const { dispatchAddItem, items } = this.props
    return (
      <View style={styles.container}>
        <ItemsForm dispatchAddItem={dispatchAddItem} items={items} />
        <ItemsList items={items} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const mapDispatchToProps = (dispatch) => ({
  dispatchAddItem: (item) => { dispatch(addItem(item)) },
})

const mapStateToProps = (state) => ({
  items: getAllItems(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(Items)
