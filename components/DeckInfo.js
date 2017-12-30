import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { fadedOrange, orange } from '../utils/colors'

export default function DeckInfo ({deck, onPress}) {
  if (!deck) deck = {}
  const title = deck.title || "Title not found"
  const questionsAmt = deck.questions.length || 0
  return (
    <TouchableOpacity style={styles.infoCard} onPress={onPress}>
      <Text>{title}</Text>
      <Text>{questionsAmt} {questionsAmt === 1 ? "question" : "questions"}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  infoCard: {
    width: 200,
    backgroundColor: orange,
    borderColor: fadedOrange,
    borderWidth: 5,
    marginTop: 20,
    padding: 10
  }
})
