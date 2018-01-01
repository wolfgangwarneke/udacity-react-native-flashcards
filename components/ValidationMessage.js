import React from 'react'
import { View, Text } from 'react-native'

export default function ValidationMessage ({ message, ...props }) {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  )
}
