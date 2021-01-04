import { auth } from "./fire"

export const initialState = {
    user: null,
    isSignedIn: false,
    userName: ""
}

export const actionTypes = {
    SET_USER: 'SET_USER',
}

const reducer = (state=initialState, action) => {
    console.log(auth.currentUser)
    console.log(action)
    switch(action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
                isSignedIn: action.isSignedIn,
                userName: action.userName,
            }
        default:
            return state
    }
}

export default reducer