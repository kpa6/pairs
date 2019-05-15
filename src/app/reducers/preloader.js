import { START_LOADING, END_LOADING } from '../constants'

function loading(state = {}, action) {
	switch(action.type) {
		case START_LOADING: {
			return {
				loading: true
			}
		}
		case END_LOADING: {
			return {
				loading: false
			}
		}
		default:
			return state;
	}
}

export default loading;