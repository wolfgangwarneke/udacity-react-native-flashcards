import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DeckDetail extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This will be the detail info view for the deck.</Text>
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
