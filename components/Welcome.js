import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { lightBlue, darkBlue, blue, white } from '../utils/colors'

export default function Welcome ({style, navigation}, ...props) {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={[style, {marginTop: 8, color: lightBlue}]}>WELCOME</Text>
      <Text style={[style, {color: lightBlue}]}>TO</Text>
      <Text style={[style, {color: 'black', fontWeight: 'bold'}]}>MOBILE</Text>
      <Text style={[style, {color: 'black', fontWeight: 'bold'}]}>FLASHCARDS</Text>
      <Text style={styles.noneFound}>(no decks found)</Text>
      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate('AddDeck')
      }}>
        <Text style={styles.buttonText}>Get started.</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: lightBlue,
    padding: 18,
    borderWidth: 4,
    borderColor: darkBlue,
    borderRadius: 16,
    marginBottom: 400 // sloppy background color fix
  },
  buttonText: {
    color: white,
    fontSize: 24,
    fontWeight: 'bold'
  },
  noneFound: {
    marginTop: 20,
    marginBottom: 20
  }
})
