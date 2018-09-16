import React, { Component } from 'react'
import { Button } from 'react-native'
import { connect } from 'react-redux'
import { actions } from '../store'

class SaveContactButton extends Component {
  render() {
    const { navigation, saveContact } = this.props
    return (
      <Button
        onPress={() => {
          saveContact()
          navigation.pop()
        }}
        title="Save"
      />
    )
  }
}

const mapDispatchToProps = {
  saveContact: actions.saveContactToEdit
}

export default connect(
  null,
  mapDispatchToProps
)(SaveContactButton)
