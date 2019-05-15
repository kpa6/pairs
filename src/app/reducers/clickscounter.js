import { CLEAR_CLICKS, INCREMENT_CLICKS } from '../constants'

function clicksCounter(state = {}, action) {
	switch(action.type) {
		case INCREMENT_CLICKS: {
			return {
				...state,
				value: state.value += 1
			}
		}
		case CLEAR_CLICKS: {
			return {
				...state,
				value: 0
			}
		}
		default:
			return state;
	}
}

export default clicksCounter;