// constant to avoid debugging typos
const GET_ALL_TWEETS = 'tweet/getAllTweets'; // This is a constant that represents the type of action to be dispatched. Using constants helps us avoid typos and makes our code more maintainable.

//regular action creator
const loadTweets = (tweets) => {
  return {
    type: GET_ALL_TWEETS,
    tweets
  };
};

//^ Our action creator creates an action object. The action object has a type property (GET_ALL_TWEETS) and a 'tweets' property which will be the payload containing the tweets data.

// thunk action creator
export const getAllTweets = () => async (dispatch) => { // This thunk action creator is an asynchronous function that interacts with the API
  const response = await fetch('/api/tweets'); // First we have an API call to /api/tweets to fetch tweets data.

  if (response.ok) { // If the response is successful...
    const data = await response.json(); // ...we parse the JSON data...
    dispatch(loadTweets(data)); // ...then dispatch the 'loadTweets' action creator with the fetched data as an argument. THis line sends the action, which was created by loadTweets, to the Redux store. This action is then handled by the reducer.
    return data;
  }
};

// state object
const initialState = {}; // This is the initial state of the tweets slice of state, which we define as an empty object

// reducer
const tweetsReducer = (state = initialState, action) => { // Our reducer function takes the current state and an action as arguments, then returns the new state based on the action type. The state is initialized with initialState.
  switch (action.type) { // We use a switch-case statement for our action-handling
    case GET_ALL_TWEETS: { // When this action is dispatched (type GET_ALL_TWEETS), the reducer creates a new state object (newState) and populates it with tweets data. Each tweet is stored in the new state using its id as the key.
      const newState = {};
      action.tweets.forEach((tweet) => (newState[tweet.id] = tweet));
      return newState;
    }
    default:
      return state; // If the action type does not match any case, we return the current state unchanged.
  }
};

//^ In Summary: We define the type of the actions using action type constants. THen we create an action object with a type and payload. We use a thunk action creator to fetch tweets data from the API, then dispatch it to update the store. Our 'initialState' defines the starting state for the 'tweet' slice of state. The reducer handles actions and updates the state accordingly.

// In this scenario, tweets come from the API call in the 'getAllTweets' thunk action creator. THe loadTweets action creator is called with the fetched data. Then the tweetsReducer handles the GET_ALL_TWEETS action and updates the state with the new tweets data.

export default tweetsReducer;
