import React from 'react'
import { Text, ListView } from '@shoutem/ui'

import ItemRow from './ItemRow'
import ItemSeparator from './ItemSeparator'

class ItemsList extends React.Component {

  render() {
    const { items } = this.props
    const itemsList = items && items.valueSeq()
    if (itemsList && itemsList.count() > 0) {
      return (<ListView
        style={styles.container}
        data={items.valueSeq().toJS()}
        renderRow={item => <ItemRow item={item} />}
        renderSeparator={(sectionId, rowId) => <ItemSeparator rowId={rowId} />}
      />)
    }
    return <Text>Empty list</Text>
  }
}

const styles = {
  container: {
    backgroundColor: '#FAFAFA',
  },
}

export default ItemsList
