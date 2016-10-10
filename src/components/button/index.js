import React from 'react'
import { Button, Text } from '@shoutem/ui'

class SimpleButton extends React.Component {
  render() {
    const { text, handlePress, disabled } = this.props
    return <Button onPress={handlePress} disabled={disabled}><Text>{text}</Text></Button>
  }
}

export default SimpleButton
