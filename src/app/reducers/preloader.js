function loading(state = {}, action) {
	switch(action.type) { 
		case 'START_LOADING': {
			return {
				loading: true
			}
			break;	
		}
		case 'END_LOADING': {
			return {
				loading: false
			}
			break;	
		}
		default:
			return state;
	}
}
export default loading;