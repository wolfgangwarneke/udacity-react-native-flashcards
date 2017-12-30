import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Settings from './components/Settings'
import DeckLibrary from './components/DeckLibrary'
import AddDeck from './components/AddDeck'
import DeckDetail from './components/DeckDetail'
import Quiz from './components/Quiz'
import AddCard from './components/AddCard'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckLibrary />
        <AddDeck />
        <Settings />
        <DeckDetail />
        <Quiz />
        <AddCard />
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
