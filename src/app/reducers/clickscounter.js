function clicksCounter(state = {}, action) {
	switch(action.type) {
		case 'INCREMENT_CLICKS': {
			return {
				...state,
				value: state.value+=1
			}
			break;
		} 
		case 'CLEAR_CLICKS': {
			return {
				...state,
				value: 0
			}
			break;	
		}
		default:
			return state;
	}

}
export default clicksCounter;