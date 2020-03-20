import {
    SUCCESS_REGISTER,
    SUCCESS_LOGIN,
    FAIL_REGISTER,
    FAIL_LOGIN

} from "../types"

export default (state, action) => {
    switch (action.type) {
        case SUCCESS_REGISTER:
        case SUCCESS_LOGIN:
            localStorage.setItem(
                "token", action.payload.token
            )
        case FAIL_REGISTER:
        case FAIL_REGISTER:
            return {
                ...state,
                userAuth: null,
                errors: action.payload

            }

            return {
                ...state,
                userAuth: true,
                errors: null
            }
        default:
            return state
    }
}