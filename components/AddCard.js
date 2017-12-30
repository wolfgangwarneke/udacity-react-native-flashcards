import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AddCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This will be the form to add a new question to the deck.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
