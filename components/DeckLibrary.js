import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class DeckLibrary extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This will be the decks list view</Text>
        <TouchableOpacity
            onPress={() => this.props.navigation.navigate(
              'DeckDetail'
            )}
        ><Text>Go to Deck Detail Nav</Text></TouchableOpacity>
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
