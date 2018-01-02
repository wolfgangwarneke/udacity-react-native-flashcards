import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { lightBlue } from '../utils/colors'

export default function PreQuiz ({onPress, styles}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the quiz.</Text>
      <Text style={styles.instructions}>- Test out your familiarity with this deck by guessing the answer before you flip the card over and then keep tabs on how you did!
      </Text>
      <TouchableOpacity style={styles.start} onPress={onPress}>
        <View>
          <FontAwesome style={styles.playIcon} name='play' size={30} color={lightBlue} />
          <Text>START</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
