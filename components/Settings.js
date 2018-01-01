import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { resetDecks } from '../actions'
import { deleteDecks } from '../utils/api'
import { clearLocalNotification } from '../utils/notifications'

class Settings extends React.Component {
  resetApp = () => {
    const { dispatch } = this.props
    deleteDecks()
      .then(dispatch(resetDecks()))
    clearLocalNotification()
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Settings</Text>
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
  header: {
    fontSize: 20,
    textDecorationLine: 'underline'
  }
});

export default connect()(Settings)
