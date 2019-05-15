import { START_GAME } from '../constants';

export default function gameStarted(state = {}, action){
	switch(action.type) {
		case START_GAME: {
			return true
		}
		default:
			return state;
	}
}