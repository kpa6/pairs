import { START_OPEN_CARD, ENABLE_CARDS } from "../constants";

export const enableCards = () => ({
  type: ENABLE_CARDS
})

export const startOpenCard = (key, index) => ({
  type: START_OPEN_CARD,
  payload: { key, index }
})
