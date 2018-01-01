import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import QuizCard from './QuizCard'

class Quiz extends React.Component {
  state = {
    state: "home", // options are home, active, and summary
    current: 0,
    correct: 0,
    history: [] // stores question array indexes to prevent duplicate questions
  }
  start = () => {
    this.setState({
      state: "active",
      current: 0,
      correct: 0,
      history: []
    })
    this.nextQuestion()
  }
  nextQuestion = () => {
    const {questions} = this.props.deck
    const { history } = this.state
    if (history.length >= questions.length) {
      this.setState({state: "summary"})
      return
    }

    let index;
    do {
      index = Math.floor(Math.random()*questions.length);
    } while (history.includes(index))
    //alert(index)
    this.setState({current: index, history: [...history, index]})
    //alert(JSON.stringify(this.state))
  }

  render() {
    switch (this.state.state) {
      case "active":
        const question = this.props.deck.questions[this.state.current]
        return (
          <QuizCard question={question} nextQuestion={this.nextQuestion} />
        )
      case "summary":
        return (
          <View style={styles.container}>
            <Text>You are now finished a quiz.</Text>
            {this.props.deck.questions.map((question, idx) => (
              <Text key={idx}>{question.question}</Text>
            ))}
          </View>
        )
      case "home":
      default:
        return (
          <View style={styles.container}>
            <Text>Welcome to the quiz.</Text>
            <TouchableOpacity onPress={this.start}>
              <Text>START</Text>
            </TouchableOpacity>
          </View>
        )
    }
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
