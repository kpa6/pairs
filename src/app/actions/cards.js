export function openCard(cardType,index) {
	return (dispatch)=>{
    return new Promise((resolve,reject) => {
      dispatch({    
    		type: 'OPEN_CARD',
    	 	cardType,
        index
      })

      setTimeout(()=>{
        dispatch({    
          type: 'CLOSE_CARDS'
        })

        dispatch({    
          type: 'CHECK_IS_FINISH'
        })
        dispatch({
          type: 'ENABLE_CARDS'
        })
        resolve();
      }, 2000);

    })
	};
}
export function enableCards() {
  return {
    type: 'ENABLE_CARDS'
  }
}