import { createSelector } from 'reselect'

const getModalData = (state) => state.modal
const getPreloaderData = (state) => state.preloader
const getElapsedTime = (state) => 0

export const getClickedData = (state) => state.clicksCounter.value
export const getCardsData = (state) => state.cards
export const getTimerData = (state) => state.timer
export const getGameStartedData = (state) => state.gameStarted

export const getPageTopData = createSelector(
  [ getModalData, getPreloaderData, getElapsedTime, getClickedData ],
  (modal, preloader, elapsedTime, clickedData) => ({ modal, preloader, elapsedTime, clickedData })
)
