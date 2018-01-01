import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { white } from '../utils/colors'
import DeckInfo from './DeckInfo'

class DeckDetail extends React.Component {
  render() {
    const { deck } = this.props
    return (
      <View style={styles.container}>
        <DeckInfo
          deck={deck}
          bigMode={true}
          onPress={() => this.props.navigation.navigate('Quiz')} 
        />
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
});

function mapStateToProps (state) {
  return {
    deck: state.decks[state.detailDeck]
  }
}
export default connect(
  mapStateToProps,
)(DeckDetail)
