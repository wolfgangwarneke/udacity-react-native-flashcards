import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { resetDecks } from '../actions'
import { deleteDecks } from '../utils/api'
import { alertOrange, white, lightBlue } from '../utils/colors'
import fontPicker from '../utils/fontPicker'
import { clearLocalNotification } from '../utils/notifications'

class Settings extends React.Component {
  resetDecks = () => {
    const { dispatch } = this.props
    deleteDecks()
      .then(dispatch(resetDecks()))
  }
  clearNotification() {
    clearLocalNotification()
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Settings</Text>
        <TouchableOpacity style={styles.button} onPress={this.resetDecks}>
          <Text style={styles.buttonText}>RESET DECKS</Text>
        </TouchableOpacity>
        <Text style={styles.warning}>WARNING: this can NOT be undone.</Text>
        <TouchableOpacity style={[styles.button, {backgroundColor: lightBlue}]} onPress={this.clearNotification}>
          <Text style={[styles.buttonText, {fontSize: 19}]}>CLEAR NOTIFICATION</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
    fontFamily: fontPicker(),
    textDecorationLine: 'underline',
    padding: 5,
    marginBottom: 50
  },
  warning: {
    marginTop: 10,
    marginBottom: 44
  },
  button: {
    borderWidth: 1,
    backgroundColor: alertOrange,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    padding: 10
  },
  buttonText: {
    color: white,
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default connect()(Settings)
