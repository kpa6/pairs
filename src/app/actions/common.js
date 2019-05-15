import { START_GAME, GAME_LOADED, RESTART_GAME } from "../constants";

export const startGame = () => ({
  type: START_GAME
})

export const gameLoaded = () => ({
  type: GAME_LOADED
})

export const restartGame = () => ({
  type: RESTART_GAME
})