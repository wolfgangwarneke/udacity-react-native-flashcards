import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { alertOrange } from '../utils/colors'

export default function ValidationMessage ({ message, ...props }) {
  return (
    <View style={styles.row}>
      <FontAwesome name='exclamation-triangle' size={30} color={alertOrange} />
      <Text>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4
  }
});
