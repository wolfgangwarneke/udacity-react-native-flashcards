export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const SET_DETAIL_DECK ='SET_DETAIL_DECK'
export const ADD_CARD = 'ADD_CARD'

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function setDetailDeck (title) {
  return {
    type: SET_DETAIL_DECK,
    title,
  }
}

export function addCard (card, deck) {
  return {
    type: ADD_CARD,
    card,
    deck
  }
}
