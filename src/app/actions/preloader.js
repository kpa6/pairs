export function startLoading(){
  return (dispatch)=>{
    return new Promise((resolve, reject)=>{
      dispatch({ type: 'START_LOADING' })
      resolve();
    })
  }
}