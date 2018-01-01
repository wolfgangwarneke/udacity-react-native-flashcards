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
    }, () => this.nextQuestion(false)) // needs to wait until state is finished updated
  }
  nextQuestion = (wasCorrect) => {
    const {questions} = this.props.deck
    const { history, correct } = this.state
    if (wasCorrect) this.setState({correct: (wasCorrect ? correct + 1 : correct)})
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
  getSummaryMessage = () => {
    const correctAmt = this.state.correct
    const quizLength = this.state.history.length
    const addS = correctAmt !== 1 ? "s" : ""
    return `You answered ${correctAmt} out of ${quizLength} question${addS} correctly.`
  }
  getSummaryPercentage = () => {
    const correctAmt = this.state.correct
    const quizLength = this.state.history.length
    return (correctAmt/quizLength*100).toFixed(1) + "%"
  }
  render() {
    if (this.props.deck.questions.length === 0) {
      return (
        <View style={styles.container}>
          <Text>There are no questions in this deck yet.</Text>
        </View>
      )
    }
    switch (this.state.state) {
      case "active":
        const question = this.props.deck.questions[this.state.current]
        const questionOrder = this.state.history.length
        const questionsTotal = this.props.deck.questions.length
        return (
          <QuizCard
            question={question}
            questionOrder={questionOrder}
            questionsTotal={questionsTotal}
            nextQuestion={this.nextQuestion}
          />
        )
      case "summary":
        return (
          <View style={styles.container}>
            <Text>You are now finished a quiz.</Text>
            <Text>{this.getSummaryPercentage()}</Text>
            <Text>{this.getSummaryMessage()}</Text>
            {this.props.deck.questions.map((question, idx) => (
              <Text key={idx}>{question.question}</Text>
            ))}
            <TouchableOpacity onPress={this.start}>
              <Text>RESTART</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              this.setState({state: "home"})
              //TODO navigate back to info tab
            }}>
              <Text>Back to card detail</Text>
            </TouchableOpacity>
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
