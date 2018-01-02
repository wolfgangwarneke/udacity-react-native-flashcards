import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux'
import { addCard } from '../actions'
import { submitCard } from '../utils/api'
import { lightBlue, darkBlue, lightGrey, paleBlue } from '../utils/colors'
import { NavigationActions } from 'react-navigation'
import ValidationMessage from './ValidationMessage'

class AddCard extends React.Component {
  state = {
    questionText: '',
    answerText: '',
    showValidation: false
  }
  submit = () => {
    // validate, don't sumbit if invalid and show validation message
    if (!this.state.questionText || !this.state.answerText) {
      this.setState({showValidation: true})
      return
    }

    const detailDeck = this.props.decks[this.props.detailDeck]
    const newCard = {"question": this.state.questionText, "answer": this.state.answerText}

    // update Redux
    this.props.dispatch(addCard(newCard, detailDeck))

    this.setState({questionText: '', answerText: '', showValidation: false})

    // Save to 'DB'
    submitCard(newCard, detailDeck)

    // navigate back
    this.props.navigation.dispatch(NavigationActions.back())

    // dismiss Keyboard
    Keyboard.dismiss()
  }
  render() {
    const { dispatch, detailDeck } = this.props
    const { showValidation } = this.state

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {showValidation && <ValidationMessage message="Please fill in both fields." />}
          <Text style={styles.header}>Add a question to {detailDeck}</Text>
          <Text style={styles.label}>Question:</Text>
          <TextInput
            style={[styles.input, {backgroundColor: lightGrey}]}
            placeholder="New question?"
            value={this.state.questionText}
            onChangeText={(questionText) => this.setState({questionText})}
          />
          <Text style={styles.label}>Answer:</Text>
          <TextInput
            style={[styles.input, {backgroundColor: paleBlue}]}
            placeholder="New answer."
            value={this.state.answerText}
            onChangeText={(answerText) => this.setState({answerText})}
          />
          <TouchableOpacity style={styles.button} onPress={this.submit}>
            <Text style={styles.buttonText}>SUBMIT</Text>
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
    marginTop: 10
  },
  label: {
    fontSize: 26,
    fontFamily: 'Trebuchet MS',
    color: darkBlue
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

function mapStateToProps (state) {
  return {
    detailDeck: state.detailDeck || "",
    decks: state.decks || {}
  }
}
export default connect(
  mapStateToProps,
)(AddCard)
