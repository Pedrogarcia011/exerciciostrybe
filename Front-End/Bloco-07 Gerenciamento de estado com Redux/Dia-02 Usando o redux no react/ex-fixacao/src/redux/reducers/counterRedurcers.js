const INITIAL_STATE = {
    clicks: 0,
    count: 0,
  }
  
  
  const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
          return { 
            ...state,
            count: state.count + action.playoad
        }
        case 'INCREMENT_CLICK':
          return { 
            ...state,
            clicks: state.clicks + 1,
        }
            
        default:
          return state;
    }
  }

  export default counterReducer;
  