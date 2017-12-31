import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { resetDecks } from '../actions'
import { deleteDecks } from '../utils/api'

class Settings extends React.Component {
  resetApp = () => {
    const { dispatch } = this.props
    deleteDecks()
      .then(dispatch(resetDecks()))
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>This will be the settings view</Text>
        <Text style={{fontSize: 30}} onPress={this.resetApp}>DELETE ALL THE DECKS</Text>
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

export default connect()(Settings)
