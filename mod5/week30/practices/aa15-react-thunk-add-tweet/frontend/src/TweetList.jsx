import { useEffect } from 'react'; // useEffect is a React hook that runs side effects in function components.
import { useDispatch, useSelector } from 'react-redux'; // THese are hooks provided by react-redux which allows us to interact with the Redux store
import { getAllTweets } from './store/tweet'; // This is an action creator imported from the 'tweet' slice of the Redux store (slice of state)

const TweetList = () => { // here, we define TweetList as a functional React component
  const dispatch = useDispatch(); // The useDispatch hook returns a reference to the dispatch function from the Redux store. This function is used to dispatch actions to the store, and is saved to a variable called 'dispatch'

  const tweets = useSelector((state) => state.tweet); // The useSelector hook allwos us to extract data from the redux store state using a selector function. In this case, we are retrieving the tweet slice of state.
  const tweetList = Object.values(tweets); // Here we convert the 'tweets' object into an array of tweet values using the Object.values method
  console.log(tweetList);

  useEffect(() => { // The useEffect hook runs a specified effect after the initial render AND any time the dependencies change.
    dispatch(getAllTweets()); // In this case, we dispatch the getAllTweets action to fetch tweets.
  }, [dispatch]); // In this case (since dispatch never changes in its definition), including it in the dependency array ensures that the effect runs only once after the initial render. Within useEffects, changes in any of the dependencies will cause a re-render. Since dispatch never changes, it will only render once.

  return (
    // Here we return a React fragment containing an h1 heading and a list of tweets
    <>
      <h1>Tweet List</h1>
      {tweetList?.map(({ id, message }) => (
        <p key={id}>{message}</p>
      ))}
    </>
    // In the code above, we use the .map method to iterate over the tweetList array and render each tweet as a paragraph with its tweet message as the content.
  );
};

//^ UseDispatch is a hook that returns the 'dispatch' function from the Redux store, allowing us to dispatch actions. UseSelector is a hook that allows us to select and extract data from the Redux store state. UseEffect is a hook that runs side effects. In this case, it dispatches the getAllTweets action to fetch tweets when the component mounts. Finally, The component renders a list of tweets by converting the tweets object to an array and mapping over it to display each tweet.

// Using useDispatch and useSelector allows us to easily interact with the Redux store to fetch and display data in our React components.

export default TweetList;
