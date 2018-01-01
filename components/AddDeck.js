import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { submitDeck } from '../utils/api'
import { NavigationActions } from 'react-navigation'
import ValidationMessage from './ValidationMessage'

class AddDeck extends React.Component {
  state = {
    titleText: '',
    showValidation: false
  }
  submit = () => {
    // validate, don't sumbit if invalid and show validation message
    if (!this.state.titleText) {
      this.setState({showValidation: true})
      return
    }

    const deck = {title: this.state.titleText, questions: []}

    // update Redux
    this.props.dispatch(addDeck(deck))

    this.setState({titleText: ''})

    // Save to 'DB'
    submitDeck(deck)

    // navigate back
    Keyboard.dismiss()
    this.props.navigation.dispatch(NavigationActions.back())
  }
  render() {
    const { dispatch } = this.props

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {this.state.showValidation && <ValidationMessage message="Please give your deck a title." />}
          <Text>This will be the form to create a new deck.</Text>
          <TextInput
            style={{height: 80, width: 300, backgroundColor: '#ff4400', fontSize: 50}}
            placeholder="New title"
            value={this.state.titleText}
            onChangeText={(titleText) => this.setState({titleText})}
          />
          <TouchableOpacity onPress={this.submit}>
            <Text>NEW DECK NOW!</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect()(AddDeck)
