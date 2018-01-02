import React from 'react';
import { View, Animated, Easing, StatusBar } from 'react-native';
import { Constants } from 'expo'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import Settings from './components/Settings'
import DeckLibrary from './components/DeckLibrary'
import AddDeck from './components/AddDeck'
import DeckDetail from './components/DeckDetail'
import Quiz from './components/Quiz'
import AddCard from './components/AddCard'

import { setLocalNotification } from './utils/notifications'
import { darkBlue, lightBlue, blue, grey, lightGrey, paleBlue, white } from './utils/colors'

const GeneralTabs = TabNavigator({
  DeckLibrary: {
    screen: DeckLibrary,
    navigationOptions: {
      tabBarLabel: 'Deck Library',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='list' size={30} color={tintColor} />
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus' size={30} color={tintColor} />
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='cog' size={30} color={tintColor} />
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: lightGrey,
    inactiveTintColor: grey,
    style: {
      height: 56,
      backgroundColor: darkBlue,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const DetailTabs = TabNavigator({
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      tabBarLabel: 'DeckDetail',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='info' size={30} color={tintColor} />
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      tabBarLabel: 'Start Quiz',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='question-circle' size={40} color={tintColor} />
    },
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      tabBarLabel: 'Add Card',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus' size={30} color={tintColor} />
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: lightGrey,
    inactiveTintColor: grey,
    style: {
      height: 56,
      backgroundColor: darkBlue,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = StackNavigator({
  General: {
    screen: GeneralTabs,
    navigationOptions: {
      headerTintColor: 'rgba(200, 100, 50, 1)',
      headerStyle: {
        backgroundColor: darkBlue
      }
    }
  },
  DeckDetail: {
    screen: DetailTabs,
    navigationOptions: {
      headerTintColor: paleBlue,
      headerStyle: {
        backgroundColor: darkBlue
      }
    }
  }
}, {
  transitionConfig : () => ({
  	transitionSpec: {
  		duration: 0,
  		timing: Animated.timing,
  		easing: Easing.step0,
  	},
  })
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <View style={{backgroundColor: paleBlue, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={paleBlue} />
          </View>
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}
