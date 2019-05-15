import {
	OPEN_CARD, CHECK_IS_FINISH, CLEAR_ISFINISHED,
	CLOSE_CARDS, SHUFFLE_CARDS, ENABLE_CARDS, SHOW_CARDS
} from '../constants';

const changeOpenCardState = (state, action, cardsState) => {
	return state.types.map( (item,index) => {
		if (index !== action.index) return item;
			else return { ...item, ...cardsState }
	})
};
const returnCardState = (state, action) => {
	return state.types.map( (item,index) => {
		if (index !== action.index ) return { ...item, disabled: true }
			else return {...item, disabled: true, opened: true }
	})
}

function cards(state = {}, action) {
	switch(action.type) {
		case OPEN_CARD: {
			switch (true) {
				case !state.prevCard:
					return {
						...state,
						prevCard : action.cardType,
						prevIndex : action.index,
						types: changeOpenCardState(state, action, { opened: true })
					};
				case state.prevCard == action.cardType:
					return {
						...state,
						hide: true,
						types: changeOpenCardState(state, action, { disabled: true, opened: true })
					};
				default:
					return {
						...state,
						types: returnCardState(state, action),
						prevCard: null,
						prevIndex: null
				}
			}
    }
    case CLOSE_CARDS: {
			switch (true) {
				case !state.prevCard:
					return {
						...state,
						types: state.types.map(item => ({ ...item, opened: false, disabled: false }))
					}
				case state.hide:
					return {
						...state,
						types: state.types.map(item => item.opened ? {...item, hidden: true, disabled: true} : {...item, disabled: true}),
						hide: false,
						prevCard: null,
						prevIndex: null
					}
				default:
					return { ...state }
			}
		}
    case SHUFFLE_CARDS: {
			return {
				...state,
				types: state.types.sort(() => 0.5 - Math.random() ).map(
					item => ({ ...item, disabled: false, opened: false })
				),
				prevCard: null,
				prevIndex: null
			}
		}
		case ENABLE_CARDS: {
			if (state.types.filter( card => card.opened ).length === 2){
				return {
					...state,
					types: state.types.map(item => ({ ...item, disabled: false }))
				}
			}
			return state;
		}
		case SHOW_CARDS: {
			return {
				...state,
				types: state.types.map(item => ({ ...item, hidden: false }))
			}
		}
		case CHECK_IS_FINISH: {
			const isFinish = state.types.filter( item => item.hidden === true ).length === state.types.length;
			if (isFinish) return { ...state, isFinished: true }
				else return state;
		}
		case CLEAR_ISFINISHED: {
			return { ...state, isFinished: false }
		}
		default:
			return state;
	}
}
export default cards;