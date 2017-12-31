import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveDecks, setDetailDeck } from '../actions'

import DeckInfo from './DeckInfo'

class DeckLibrary extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props

    // const allDecks = getDecks()
    // dispatch(receiveDecks(allDecks))
    try {
      getDecks()
        .then((decks) => dispatch(receiveDecks(JSON.parse(decks))))
    } catch(error) {
      alert(JSON.stringify(error))
    }
  }

  render() {
    const decks = this.props.decks || {}
    const { dispatch } = this.props

    return (
      <View style={styles.container}>
        <Text>This will be the decks list view</Text>
        <TouchableOpacity
            onPress={() => this.props.navigation.navigate(
              'DeckDetail'
            )}
        ><Text>Go to Deck Detail Nav</Text></TouchableOpacity>
        {Object.keys(decks).map((key) => (
          <DeckInfo key={decks[key].title} deck={decks[key]}
            newPress={() => dispatch(setDetailDeck(decks[key].title))}
            onPress={() => {
                dispatch(setDetailDeck(decks[key].title))
                this.props.navigation.navigate(
                  'DeckDetail',
                  { detailId: decks[key].title }
                )
              }
            }
           />
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

function mapStateToProps (state) {
  return {
    decks: state.decks
  }
}
export default connect(
  mapStateToProps,
)(DeckLibrary)
