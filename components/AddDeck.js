import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux'
import { addDeck, setDetailDeck } from '../actions'
import { submitDeck } from '../utils/api'
import { lightGrey, darkBlue, lightBlue } from '../utils/colors'
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

    this.setState({titleText: '', showValidation: false})

    // Save to 'DB'
    submitDeck(deck)

    // set and navigate to detail deck with new deck
    const { dispatch } = this.props
    dispatch(setDetailDeck(deck.title))
    Keyboard.dismiss()
    this.props.navigation.navigate('DeckLibrary') // reset home tab for when user goes back to general tabs
    this.props.navigation.navigate('DeckDetail')
  }
  render() {
    const { dispatch } = this.props

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {this.state.showValidation && <ValidationMessage message="Please give your deck a title." />}
          <Text style={styles.header}>Go ahead and make a new deck.</Text>
          <Text style={styles.label}>Title:</Text>
          <TextInput
            style={styles.input}
            placeholder="New title"
            value={this.state.titleText}
            onChangeText={(titleText) => this.setState({titleText})}
          />
          <TouchableOpacity style={styles.button} onPress={this.submit}>
            <Text style={styles.buttonText}>Create Deck</Text>
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
    //justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontFamily: 'Trebuchet MS',
    paddingBottom: 10,
    marginTop: 80
  },
  label: {
    fontSize: 30,
    fontFamily: 'Trebuchet MS',
    fontWeight: 'bold',
    transform: [{
      translateX: -100
    }]
  },
  input: {
    height: 80,
    width: 300,
    backgroundColor: '#ccc',
    fontSize: 40,
    paddingLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 2
  },
  button: {
    backgroundColor: lightBlue,
    padding: 18,
    borderWidth: 4,
    borderColor: darkBlue,
    borderRadius: 16,
    marginTop: 12
  },
  buttonText: {
    color: "white",
    fontSize: 17
  }
});

export default connect()(AddDeck)
