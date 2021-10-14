import { ROOT_NAVIGATION, AUTH_NAVIGATION, APP_NAVIGATION, RETRIEVE_DATA } from "./actionstype";

const initialState = {
    email:null,
    username:null,
    id:null
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ROOT_NAVIGATION:
            return{
                ...state,
                email:action.email,
                password:action.password,
                id:id
            }

        default:
            return state
    }
}