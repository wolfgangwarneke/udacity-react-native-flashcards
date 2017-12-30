import { RECEIVE_DECKS, ADD_DECK, SET_DETAIL_DECK } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        decks: {...action.decks}
      }
    case ADD_DECK :
      return {
        ...state,
        ...action.deck
      }
    case SET_DETAIL_DECK :
      return {
        ...state,
        detailDeck: action.title
      }
    default :
      return state
  }
}

export default decks
