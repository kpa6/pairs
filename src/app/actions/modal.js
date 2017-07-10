export function closeModal() {
  return {
    type: 'CLOSE_MODAL'
  }
}
export function openModal(time) {
  return {
    type: 'SHOW_MODAL',
    time
  }
}