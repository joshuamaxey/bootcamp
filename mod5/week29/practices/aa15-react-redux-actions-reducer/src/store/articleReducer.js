import articles from '../../src/data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';

export const loadArticles = () => {
    return {
        type: LOAD_ARTICLES,
        articles
    };
};

const initialState = { entries: [], isLoading: true }; // create an initialState variable that is assigned to an object. The object should have two keys: entries and isLoading. Entries is set to an empty array while isLoading is set to 'true'

const articleReducer = (state = initialState, action) => { // create an articleReducer function
    switch (action.type) { // Create a switch/case statement that switches based on the action's type
        case LOAD_ARTICLES: // If the action type is LOAD_ARTICLES...
            return { ...state, entries: [...action.articles] }; // ...return a new COPY of the state object and update the entries array with the articles payload fro the loadArticles action creator. Remember, do NOT mutate the original state!
        default:
            return state; // For the default case, return the original state.
    }
};

export default articleReducer;
