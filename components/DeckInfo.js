import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import { darkBlue, lightBlue, blue, grey, lightGrey, white } from '../utils/colors'

export default function DeckInfo ({deck, onPress, bigMode}) {
  if (!deck) deck = {questions: []}
  const title = deck.title || "Title not found"
  const questionsAmt = deck.questions.length || 0
  const eitherStyles = bigMode ? bigStyles : styles
  return (
    <TouchableOpacity style={eitherStyles.infoCard} onPress={onPress}>
      <Text style={eitherStyles.infoHeader}>{title}</Text>
      <Text style={eitherStyles.questionText}>{questionsAmt} {questionsAmt === 1 ? "question" : "questions"}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  infoCard: {
    width: 270,
    backgroundColor: lightBlue,
    borderColor: darkBlue,
    borderWidth: 5,
    marginTop: 20,
    padding: 10,
    paddingLeft: 20
  },
  infoHeader: {
    fontFamily: 'Trebuchet MS',
    color: white,
    fontSize: 36
  },
  questionText: {
    fontSize: 20,
    paddingLeft: 16
  }
})

const bigStyles = StyleSheet.create({
  infoCard: {
    width: 400,
    height: 400,
    alignItems: 'center',
    backgroundColor: lightBlue,
    borderColor: darkBlue,
    borderWidth: 15,
    padding: 30
  },
  infoHeader: {
    fontFamily: 'Trebuchet MS',
    color: white,
    fontSize: 60,
    marginBottom: 15
  },
  questionText: {
    fontSize: 28
  }
})
