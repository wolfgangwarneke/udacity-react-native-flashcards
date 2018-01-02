import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { white } from '../utils/colors'
import DeckInfo from './DeckInfo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreContent: {
    fontSize: 24,
    fontFamily: 'Trebuchet MS',
    color: white,
    marginTop: 25
  }
});

const moreContent = (
  <Text style={styles.moreContent}>
    (You can hit this box to go to the quiz area, or tap the QUESTION MARK tab below. Would you like to add a question card to your deck? Click on the PLUS sign!)
  </Text>
)

class DeckDetail extends React.Component {
  render() {
    const { deck } = this.props
    const navigate = () => this.props.navigation.navigate('Quiz')
    return (
      <View style={styles.container}>
        <DeckInfo
          deck={deck}
          bigMode={true}
          onPress={navigate}
          bonusContent={moreContent}
        />
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    deck: state.decks[state.detailDeck]
  }
}
export default connect(
  mapStateToProps,
)(DeckDetail)
