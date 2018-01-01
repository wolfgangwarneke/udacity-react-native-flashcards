import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default function ValidationMessage ({ message, ...props }) {
  return (
    <View>
      <FontAwesome name='exclamation-triangle' size={30} color={"red"} />
      <Text>{message}</Text>
    </View>
  )
}
