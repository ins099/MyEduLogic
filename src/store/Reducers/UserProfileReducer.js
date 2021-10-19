import { VERIFY_USER_SUCCESS } from "../actionstype";

    const initialState = {};
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case VERIFY_USER_SUCCESS: {
       state = {...action.payload}
       return state
      }
      default:
        return state;
    }
  };
  