import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { addDeck } from '../actions'

class AddDeck extends React.Component {
  state = {
    titleText: ''
  }
  render() {
    const { dispatch } = this.props
    const newDeck = {"title": "WOW NEW DECK", "questions": []}

    return (
      <View style={styles.container}>
        <Text>This will be the form to create a new deck.</Text>
        <TouchableOpacity onPress={() => dispatch(addDeck(newDeck))}>
          <Text>NEW DECK NOW!</Text>
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

export default connect()(AddDeck)
