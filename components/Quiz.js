import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import QuizCard from './QuizCard'
import { NavigationActions } from 'react-navigation'
import { clearLocalNotification, setLocalNotification } from '../utils/notifications'
import { lightBlue, blue, darkBlue, white } from '../utils/colors'
import { FontAwesome } from '@expo/vector-icons'

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
      clearLocalNotification()
        .then(setLocalNotification)
      return
    }

    let index;
    do {
      index = Math.floor(Math.random()*questions.length);
    } while (history.includes(index))
    this.setState({current: index, history: [...history, index]})
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
            <Text style={styles.summaryTextTop}>You have now finished the quiz.</Text>
            <Text style={styles.percentage}>{this.getSummaryPercentage()}</Text>
            <Text style={styles.summaryTextBottom}>{this.getSummaryMessage()}</Text>
            <TouchableOpacity style={styles.button} onPress={this.start}>
              <Text style={styles.buttonText}>RESTART</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.row} onPress={() => {
              this.setState({state: "home"})
              this.props.navigation.dispatch(NavigationActions.back())
            }}>
              <FontAwesome name='arrow-left' size={30} color={blue} />
              <Text style={{paddingLeft: 10, color: blue}}>Back to card detail</Text>
            </TouchableOpacity>
          </View>
        )
      case "home":
      default:
        return (
          <View style={styles.container}>
            <Text style={styles.header}>Welcome to the quiz.</Text>
            <Text style={styles.instructions}>- Test out your familiarity with this deck by guessing the answer before you flip the card over and then keep tabs on how you did!
            </Text>
            <TouchableOpacity style={styles.start} onPress={this.start}>
              <View>
                <FontAwesome style={styles.playIcon} name='play' size={30} color={lightBlue} />
                <Text>START</Text>
              </View>
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
  header: {
    fontSize: 30,
    marginBottom: 20
  },
  start: {
    marginBottom: 100
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  percentage: {
    padding: 10,
    fontSize: 90
  },
  summaryTextTop: {
    fontSize: 20
  },
  summaryTextBottom: {
    fontSize: 18
  },
  button: {
    backgroundColor: lightBlue,
    padding: 18,
    borderWidth: 4,
    borderColor: darkBlue,
    borderRadius: 16,
    marginTop: 32,
    marginBottom: 40
  },
  buttonText: {
    color: white,
    fontSize: 17
  },
  playIcon: {
    transform: [{ translateX: 10 }],
    paddingBottom: 10
  },
  instructions: {
    fontSize: 18,
    lineHeight: 30,
    padding: 20,
    marginBottom: 10
  }
});

function mapStateToProps (state) {
  return {
    deck: state.decks[state.detailDeck] || {title: 'No deck found?', questions: []}
  }
}
export default connect(
  mapStateToProps,
)(Quiz)
