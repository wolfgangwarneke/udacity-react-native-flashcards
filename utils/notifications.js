// functions taken from UdaciFitness example app
import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'NOTIFICATION_KEY_GOES_HERE'

// relevant constants for tinkering for notifcation testing
const NOTIFICATION_HOUR = 20 // 8pm TESTING: set this to current hour
const NOTIFICATION_MINUTES = 0 // TESTING: set this to a few minutes in the future
const NOTIFICATION_TOMORROW_OFFSET = 1 // TESTING: set this to 0, run the app, and DON'T take a quiz!

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
  return {
    title: "Time to take a quiz?",
    body: "You haven't taken a quiz yet today... Your decks are waiting—don't fall behind!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + NOTIFICATION_TOMORROW_OFFSET)
              tomorrow.setHours(NOTIFICATION_HOUR)
              tomorrow.setMinutes(NOTIFICATION_MINUTES)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day'
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}
