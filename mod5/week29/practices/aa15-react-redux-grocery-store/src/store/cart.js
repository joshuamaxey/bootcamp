// action
const ADD = "cart/ADD"
const REMOVE = "cart/REMOVE"

// action creator
export function addToCart(id) {
    return { // action
        type: ADD,
        produceId: id
    }
}

// action creator
export function removeFromCart(id) {
    return { // action
        type: REMOVE,
        produceId: id
    }
}

export default function cartReducer(state = {}, action) {
    console.log(state)
    switch (action.type) {
        case ADD: {
            const newState = {
                ...state,
                [action.produceId]: {
                    id: action.produceId,
                    count: 1
                }
            }
            return newState;
        }
        case REMOVE: {
            const newState = {...state}
            delete newState.action.produceId
            return newState
        }
        default:
            return state;
    }
}
