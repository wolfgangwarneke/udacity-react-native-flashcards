import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = "decksstoragekey"

export function deleteDecks () {
  return AsyncStorage.removeItem(DECKS_STORAGE_KEY)
}

export function getDecks () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
}

export function submitDeck (deck) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [deck.title]: deck
  }))
}

export function submitCard (card, deck) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [deck.title]: {title: deck.title, questions: [...deck.questions, card]}
  }))
}

export function getDecks2 () {
  return {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }
}
