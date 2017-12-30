import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

class DeckDetail extends React.Component {
  render() {
    const { deck } = this.props
    return (
      <View style={styles.container}>
        <Text>This will be the detail info view for the deck.</Text>
        <Text>The deck is...</Text>
        <Text>{JSON.stringify(deck)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f90',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps (state) {
  return {
    deck: state.detailDeck
  }
}
export default connect(
  mapStateToProps,
)(DeckDetail)
