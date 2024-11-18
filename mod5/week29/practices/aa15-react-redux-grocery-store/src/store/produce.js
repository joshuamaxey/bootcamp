import produceData from '../mockData/produce.json'

// const basicReducer = (state = {}, action) => {
//     switch (action.type) {
//         default:
//             return state;
//     }
// }

//^ By convention, all reducer functions should have the basic structure of the reducer above ^^^, The reducer should return the old state or a new state depending on the type of the action that gets dispatched. The state does not have to be an object. It could be an array, a boolean, etc.

// The produce slice of state should be an object with produce id's as keys. The values should be objects of produce information.

// Action
const POPULATE = "produce/POPULATE"

// This function is our ACTION CREATOR
export function populateProduce() {
    console.log(produceData)
    return { // this object returned is the ACTION
        type: POPULATE, // action type
        produce: produceData // action payload (data)
    };
};

// Reducer
export default function produceReducer(state = {}, action) {
    // console.log(action.type)
    switch (action.type) {
        case POPULATE: { // This case handles actions with a type of POPULATE
            const newState = {}; // create an empty object called 'newState,' we will use this to build the new state
            action.produce.forEach(produce => { // iterat over the produce array in the action object
                newState[produce.id] = produce; // for each item in the produce array, add a new property to the 'newState' object. THe property key is the 'id' of the prodce item, and the value is the produce item itself.
            });
            return newState; // After constructing the newState object, return it as the new state of the reducer. This replaces the previous state with newState
        }
        default:
            return state; // if the action.type does not match any of the cases, we return the current state unchanged. The state will remain the same if an unrecognized action type is dispatched.
    }
}

//^ This conversiaon from an array (produce.json) into an object is called NORMALIZING DATA. It's faster to search by id in this object than an array. Normalizing data is a common practice both within and outside of Redux. Objects allow for an O(1) time complexity for searches while arrays are limited an average time complexity of O(n) for searches.
