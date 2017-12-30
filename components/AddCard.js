import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux'
import { addCard } from '../actions'

class AddCard extends React.Component {
  state = {
    questionText: '',
    answerText: ''
  }
  render() {
    const { dispatch, detailDeck } = this.props
    const newCard = {"question": this.state.questionText, "answer": this.state.answerText}

    return (
      <View style={styles.container}>
        <Text>Add a question to {detailDeck}</Text>
        <Text>QUESTION</Text>
        <TextInput
          style={{height: 80, width: 300, backgroundColor: '#ff9999', fontSize: 50}}
          placeholder="New title"
          onChangeText={(titleText) => this.setState({titleText})}
        />
        <Text>ANSWER</Text>
        <TextInput
          style={{height: 80, width: 300, backgroundColor: '#ffff44', fontSize: 50}}
          placeholder="New title"
          onChangeText={(titleText) => this.setState({titleText})}
        />
        <TouchableOpacity onPress={() => dispatch(addCard(newCard, detailDeck))}>
          <Text>NEW CARD NOW!</Text>
        </TouchableOpacity>
      </View>
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
    detailDeck: state.detailDeck || ""
  }
}
export default connect(
  mapStateToProps,
)(AddCard)
