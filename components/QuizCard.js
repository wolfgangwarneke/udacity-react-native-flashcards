import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons'
import { blue } from '../utils/colors'

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
        <Text style={{fontSize: 20}}>
          Question {questionOrder} of {questionsTotal}
        </Text>
        <Text style={{fontSize: 16, fontStyle: 'italic'}}>
          ({questionsTotal - questionOrder} remaining)
        </Text>
        {!this.state.isFlipped ?
            <View style={styles.container}>
              <Text style={styles.qAndA}>{question.question}</Text>
              <TouchableOpacity style={styles.row} onPress={this.flip}>
                <FontAwesome name='share' size={30} color={blue} />
                <Text style={styles.flipText}>FLIP</Text>
              </TouchableOpacity>
            </View>
          :
            <View style={styles.container}>
              <TouchableOpacity style={[styles.row, {marginBottom: 25}]} onPress={this.flip}>
                <FontAwesome name='share' size={30} color={blue} style={{transform: [{rotate: "180deg"}]}} />
                <Text style={styles.flipText}>FLIP BACK</Text>
              </TouchableOpacity>
              <Text style={styles.qAndA}>{question.answer}</Text>
              <View style={styles.row}>
                <TouchableOpacity style={{marginRight: 15}} onPress={() => this.nextAndFlipBack(true)}>
                  <FontAwesome style={styles.iconOffset} name='check' size={30} color={"green"} />
                  <Text>Got it!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft: 15}} onPress={() => this.nextAndFlipBack(false)}>
                  <FontAwesome style={styles.iconOffset} name='times' size={30} color={"red"} />
                  <Text>Not yet</Text>
                </TouchableOpacity>
              </View>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  qAndA: {
    fontSize: 30,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  iconOffset: {
    paddingTop: 8,
    transform: [{ translateX: 12 }]
  },
  flipText: {
    color: blue,
    marginLeft: 5
  }
});
