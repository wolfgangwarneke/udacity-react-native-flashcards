import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { connect } from 'react-redux'
import { receiveDecks, setDetailDeck } from '../actions'
import { getDecks } from '../utils/api'
import { white } from '../utils/colors'

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
        <Text style={styles.header}>Quiz Decks</Text>
        {Object.keys(decks).map((key) => {
          const animatedValue = new Animated.Value(0)
          return <Animated.View key={decks[key].title} style={{transform: [{translateX: animatedValue}]}}>
            <DeckInfo key={decks[key].title} deck={decks[key]}
              newPress={() => dispatch(setDetailDeck(decks[key].title))}
              onPress={() => {
                  Animated.sequence([
                    Animated.timing(animatedValue, { duration: 400, toValue: -400 })
                  ]).start(() => {
                    dispatch(setDetailDeck(decks[key].title))
                    this.props.navigation.navigate(
                      'DeckDetail',
                      { detailId: decks[key].title }
                    )
                    Animated.sequence([
                      Animated.timing(animatedValue, { duration: 500, toValue: -600 }),
                      Animated.timing(animatedValue, { duration: 100, toValue: 0 })
                    ]).start()
                  })
                }
              }
            />
          </Animated.View>
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 40
  }
});

function mapStateToProps (state) {
  return {
    decks: state.decks
  }
}
export default connect(
  mapStateToProps,
)(DeckLibrary)
