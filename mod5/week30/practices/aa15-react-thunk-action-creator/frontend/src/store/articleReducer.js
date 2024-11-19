const LOAD_ARTICLES = 'article/loadArticles';
const ADD_ARTICLE = 'article/addArticle';

export const loadArticles = (articles) => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};

export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    article
  };
};

export const fetchArticles = () => async dispatch => { // we define fetchArticles as an arrow function that returns another arrow function. This is a common pattern in Redux for creating thunks. Note that the inner function is marked as async, indicating that it will use asynchronous operations (such as fetching API calls). The 'dispatch' parameter is provided by the Redux Thunk Middleware. //^ The 'dispatch' parameter is provided through the installation of the thunk middleware in the store.js file. This is why we do not need to import the useDispatch method into this file in order to use dispatch.
  const response = await fetch('api/articles'); // The fetch action is called with the URL 'api/articles' to make an HTTP GET request to the server. This call retrieves data from the specified API endpoint. THe 'await' keyword here pauses the execution of the function until the fetch promise resolves. We store the result of this call in the 'response' variable.
  const articles = await response.json(); // The response.json() method is called to parse the JSON data from the response. Again, 'await' is used to wait for this promise to resolve. The parsed data is stored in the 'articles' variable. //^ Note that parsing the response body is itself an asynchronous operation. This line of code reads the response body and parses it as JSON asynchronously, ensuring that our code can handle the response efficiently without blocking the main thread.
  dispatch(loadArticles(articles)); // The 'dispatch' function is called with the loadArticles action creator, passing the 'articles' data as an argument. This dispatches an action to the Redux store to update the state with the fetched articles.
}

//^ fetchArticles is an action creator that returns a thunk function. The thunk function performs an asynchronous fetch request to retrieve articles from the API endpoint 'api/articles.' It then waits for the response and then parses the JSON data. Then it dispatches the 'loadARticles' action with the fetched articles, which updates the Redux store.

//* For context, here is an example of how this function may integrate within a Redux application:
// 1. fetchArticles is called within a component or other action creator
// 2. The thunk middleware recognizes the returned function and executes it, providing dispatch as an argument.
// 3. The fetchArticles function fetches the articles and dispatches the loadArticles action to update the state with the fetched data.

export const writeArticle = (payload) => async (dispatch) => { // writeArticle is defined as a function that takes 'payload' as an argument and returns an asynchronous function. This is the 'thunk action creator.' The inner function is marked as async, which allows it to perform asynchronous operations. This function takes 'dispatch' as an argument from the Redux Thunk middleware that is installed and located in store.js.
  const response = await fetch('/api/articles', { //
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  //^ Here we send a POST request to the /api/articles endpoint to create a new article. We specify the method, headers, and body of the response using the payload that is passed into the thunk action creator as an argument for the body. Then we store the result in a variable, 'response.' Note that he 'await' keyword pauses the execution of the function until the fetch promise resolves, and the result is stored in the response variable.

  if (response.ok) { // If the response status is 'ok' (between 200 - 299), then the request was successful and the code below will execute
    const article = await response.json(); // If the response is OK, this line parses the JSON data from the response using response.json(), which returns a promise. The parsed data is stored in the variable, 'article.'
    dispatch(addArticle(article)); // Next, the dispatch function is called with the addArticle action creator, passing the new article as an argument. This dispatches an action to update the Redux store with the newly created article.
    return article; // THe function returns the new article, which can be used for further processing if needed.
  }
}

//^ writeArticle is a thunk action creator that takes payload (the article data to be created) as an argument. It is an asynchronous function that performs an asynchronous POST request to create a new article. It sends the article data to the server and waits for the response, checks if the response is OK, then parses the response body as JSON to get the newly created article. It dispatches the addArticle action to updated the Redux store with the new article, and it returns the newly created article for further use. 

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    case ADD_ARTICLE:
      return { ...state, entries: [...state.entries, action.article] };
    default:
      return state;
  }
};

export default articleReducer;
