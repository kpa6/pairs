function modal(state = {}, action) {
	switch(action.type) { 
		case 'SHOW_MODAL': {
			return {
				...state,
				show: true,
				time: action.time
			}
			break;	
		}
		case 'CLOSE_MODAL': {
			return {
				...state,
				show: false
			}
			break;	
		}
		default:
			return state;
	}
}
export default modal;