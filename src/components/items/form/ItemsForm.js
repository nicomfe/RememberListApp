import React from 'react'
import { View } from 'react-native'
import { TextInput } from '@shoutem/ui'

import SimpleButton from '../../button'

class ItemsForm extends React.Component {
  constructor(){
    super()
    this.state = {
      text: '',
    }
  }

  addItem = () => {
    const { dispatchAddItem } = this.props
    const { text } = this.state
    dispatchAddItem(text)
    this.setState({ text: '' })
  }

  handleChange = (text) => {
    this.setState({text})
  }

  render() {
    const { text } = this.state
    const { items } = this.props
    return (
      <View>
        <TextInput
          onChangeText={this.handleChange}
          value={text}
          placeholder="Add item"
        />
        <SimpleButton handlePress={this.addItem} text="Add item" />
      </View>
    )
  }
}

export default ItemsForm
