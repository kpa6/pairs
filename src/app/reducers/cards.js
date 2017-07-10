function cards(state = {}, action) {
	switch(action.type) {
		case 'OPEN_CARD': {
			if (!state.prevCard) {
				return {
					...state,
				  	prevCard : action.cardType,
					prevIndex : action.index,
				 	types: state.types.map( (item,index) => {
				 		if (index !== action.index) return item
				 			else return { ...item, opened: true }
				 	})
				};
			} else if ( state.prevCard == action.cardType ){
				return {
					...state,
					hide: true,
				    types: state.types.map( (item,index) => {
				    	if (index !== action.index ) return item
				    		else return { ...item, disabled: true, opened: true }
				    })
				};
			} else {
				return {
					...state,
					types: state.types.map( (item,index) => {
				 		if (index !== action.index ) return { ...item, disabled: true }
				 		 	else return {...item, disabled: true, opened: true }
				 	}),
					prevCard: null,
				    prevIndex: null
				}
			}
			break;
		}
		case 'CHECK_IS_FINISH': {
			const isFinish = state.types.filter( item => item.hidden === true ).length === state.types.length;
			
			if (isFinish) return { ...state, isFinished: true }
				else return state;
			break;
		}
		case 'CLEAR_ISFINISHED': {
			return { ...state, isFinished: false }
			break;
		}
		case 'CLOSE_CARDS': {
			if (!state.prevCard) {
				return {
					...state,
					types: state.types.map( (item,index) => {
						return { ...item, opened: false, disabled: false }
					})
				}
			} else if (state.hide) {
				return {
					...state,
					types: state.types.map( (item,index) => {
						if (item.opened) return { ...item, hidden: true, disabled: true }	
							else return { ...item, disabled: true }
					}),
					hide: false,
					prevCard: null,
					prevIndex: null
				}
			}
			else {
				return { ...state }
			}
			break;
		}
		case 'SHUFFLE_CARDS': {
			return {
				...state,
				types: state.types.sort( () => 0.5 - Math.random() ).map( (item) => {
					return { ...item, disabled: false, opened: false }
				})
			}
			break;
		}
		case 'ENABLE_CARDS': {
			if (state.types.filter( card => card.opened ).length === 2){
				return {
					...state,
					types: state.types.map( (item) => {
						return { ...item, disabled: false }
					})
				}
			} else {
				return state;
			}
			
			break;
		}
		case 'SHOW_CARDS': {
			return {
				...state,
				types: state.types.map( (item) => {
					return { ...item, hidden: false }
				})
			}	
			break;
		}
		default:
			return state;
	}

}
export default cards;