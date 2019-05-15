import { CLOSE_MODAL, SHOW_MODAL } from '../constants'

export const closeModal = () => ({
  type: CLOSE_MODAL
})

export const openModal = (time) => {
  return {
    type: SHOW_MODAL, time
  }
}