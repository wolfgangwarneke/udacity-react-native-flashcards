import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { getDecks } from '../utils/api'

import DeckInfo from './DeckInfo'

export default class DeckLibrary extends React.Component {
  state = {
    decks: {}
  }

  componentDidMount() {
    const allDecks = getDecks()
    this.setState((decks) => {return {decks: allDecks}})
  }

  render() {
    const { decks } = this.state

    return (
      <View style={styles.container}>
        <Text>This will be the decks list view</Text>
        <TouchableOpacity
            onPress={() => this.props.navigation.navigate(
              'DeckDetail'
            )}
        ><Text>Go to Deck Detail Nav</Text></TouchableOpacity>
        {Object.keys(decks).map((key) => (
          <DeckInfo key={decks[key].title} deck={decks[key]} />
        ))}
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
