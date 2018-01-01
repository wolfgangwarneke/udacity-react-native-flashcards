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
import { NavigationActions } from 'react-navigation'

class AddCard extends React.Component {
  state = {
    questionText: '',
    answerText: ''
  }
  submit = () => {
    //alert("from addcard comp... " + JSON.stringify(this.props.decks))
    const detailDeck = this.props.decks[this.props.detailDeck]
    const newCard = {"question": this.state.questionText, "answer": this.state.answerText}

    // update Redux
    this.props.dispatch(addCard(newCard, detailDeck))

    this.setState({questionText: '', answerText: ''})

    // Save to 'DB'
    submitCard(newCard, detailDeck)

    // navigate back
    this.props.navigation.dispatch(NavigationActions.back())
  }
  render() {
    const { dispatch, detailDeck } = this.props

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text>Add a question to {detailDeck}</Text>
          <Text>QUESTION</Text>
          <TextInput
            style={{height: 80, width: 300, backgroundColor: '#ff9999', fontSize: 50}}
            placeholder="New title"
            value={this.state.questionText}
            onChangeText={(questionText) => this.setState({questionText})}
          />
          <Text>ANSWER</Text>
          <TextInput
            style={{height: 80, width: 300, backgroundColor: '#ffff44', fontSize: 50}}
            placeholder="New title"
            value={this.state.answerText}
            onChangeText={(answerText) => this.setState({answerText})}
          />
          <TouchableOpacity onPress={this.submit}>
            <Text>NEW CARD NOW!</Text>
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

function mapStateToProps (state) {
  return {
    detailDeck: state.detailDeck || "",
    decks: state.decks || {}
  }
}
export default connect(
  mapStateToProps,
)(AddCard)
