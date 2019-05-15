import { SHOW_MODAL, CLOSE_MODAL } from '../constants'

function modal(state = {}, action) {
	switch(action.type) {
		case SHOW_MODAL: {
			return {
				...state,
				show: true,
				time: action.time
			}
		}
		case CLOSE_MODAL: {
			return {
				...state,
				show: false
			}
		}
		default:
			return state;
	}
}

export default modal;
