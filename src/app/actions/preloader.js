import { END_LOADING, START_LOADING } from '../constants'

export const startLoading = () => ({
  type: START_LOADING
})

export const endLoading = () => ({
  type: END_LOADING
})