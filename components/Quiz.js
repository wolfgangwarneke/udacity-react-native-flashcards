import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

class Quiz extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This will be the quiz component.</Text>
        {this.props.deck.questions.map((question, idx) => (
          <Text key={idx}>{question.question}</Text>
        ))}
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
    deck: state.decks[state.detailDeck]
  }
}
export default connect(
  mapStateToProps,
)(Quiz)
