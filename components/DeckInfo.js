import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import { darkBlue, lightBlue, blue, grey, lightGrey, white } from '../utils/colors'

export default function DeckInfo ({deck, onPress, bigMode}) {
  if (!deck) deck = {}
  const title = deck.title || "Title not found"
  const questionsAmt = deck.questions.length || 0
  const eitherStyles = bigMode ? bigStyles : styles
  return (
    <TouchableOpacity style={eitherStyles.infoCard} onPress={onPress}>
      <Text style={eitherStyles.infoHeader}>{title}</Text>
      <Text>{questionsAmt} {questionsAmt === 1 ? "question" : "questions"}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  infoCard: {
    width: 200,
    backgroundColor: lightBlue,
    borderColor: darkBlue,
    borderWidth: 5,
    marginTop: 20,
    padding: 10
  },
  infoHeader: {
    color: white,
    fontSize: 40
  }
})

const bigStyles = StyleSheet.create({
  infoCard: {
    width: 400,
    backgroundColor: lightBlue,
    borderColor: darkBlue,
    borderWidth: 15,
    marginTop: 20,
    padding: 30
  },
  infoHeader: {
    color: white,
    fontSize: 60
  }
})
