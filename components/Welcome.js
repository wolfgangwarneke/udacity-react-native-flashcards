import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { lightBlue, darkBlue, blue, white } from '../utils/colors'

export default function Welcome ({style, navigation}, ...props) {
  return (
    <View>
      <Text style={[style, {marginTop: 8, color: lightBlue}]}>WELCOME</Text>
      <Text style={[style, {color: lightBlue}]}>TO</Text>
      <Text style={[style, {color: 'black', fontWeight: 'bold'}]}>MOBILE</Text>
      <Text style={[style, {color: 'black', fontWeight: 'bold'}]}>FLASHCARDS</Text>
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
    marginTop: 30,
    marginBottom: 400 // sloppy background color fix
  },
  buttonText: {
    color: white,
    fontSize: 24,
    fontWeight: 'bold'
  }
})
