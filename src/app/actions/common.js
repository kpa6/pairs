export function restart() {
  return (dispatch) =>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        dispatch({    
          type: 'CLOSE_CARDS'
        })
        dispatch({
          type: 'CLEAR_CLICKS'
        })
        dispatch({
          type: 'SHUFFLE_CARDS'
        })
        dispatch({
          type: 'CLEAR_ISFINISHED'
        })
        dispatch({
          type: 'ENABLE_CARDS'
        })
        dispatch({
          type: 'SHOW_CARDS'
        })
        resolve()  
      },1000)
    })
  }
}