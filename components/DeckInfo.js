import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

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
    borderColor: '#ff2288',
    borderWidth: 5,
    marginTop: 20
  }
})
