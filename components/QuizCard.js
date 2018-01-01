import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

export default class Quiz extends React.Component {
  state = {
    isFlipped: false // false shows question, true shows answer
  }
  flip = () => {
    this.setState({isFlipped: !this.state.isFlipped})
  }
  nextAndFlipBack = (wasCorrect) => {
    this.flip()
    this.props.nextQuestion(wasCorrect)
  }
  render() {
    const { question, questionsTotal, questionOrder } = this.props
    return (
      <View style={styles.container}>
        <Text>
          Question {questionOrder} of {questionsTotal}
        </Text>
        <Text>
          ({questionsTotal - questionOrder} remaining)
        </Text>
        {!this.state.isFlipped ?
            <View style={styles.container}>
              <Text>{question.question}</Text>
              <TouchableOpacity onPress={this.flip}>
                <Text>FLIP</Text>
              </TouchableOpacity>
            </View>
          :
            <View style={styles.container}>
              <TouchableOpacity onPress={this.flip}>
                <Text>back to question</Text>
              </TouchableOpacity>
              <Text>{question.answer}</Text>
              <TouchableOpacity onPress={() => this.nextAndFlipBack(true)}>
                <Text>CORRECT</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.nextAndFlipBack(false)}>
                <Text>INCORRECT</Text>
              </TouchableOpacity>
            </View>
        }
      </View>
    )
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
