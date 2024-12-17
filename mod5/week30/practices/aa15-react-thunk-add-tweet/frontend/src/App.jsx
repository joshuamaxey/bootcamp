import TweetList from './TweetList'; // import TweetList from TweetList.jsx

function App() { // app is defined as a functional React component using a traditional function declaration
  return (
    // We render the TweetList component inside of a React fragment.
    <>
      <TweetList />
    </>
  );
}

//^ The App component here is the main component of our application. IT serves as the root component that is rendered when our application starts. The TweetList component is imported and rendered inside the App component. THis means that when the App component is rendered, it will display the TweetList component. The App component itself is simple and only serves to render the TweetList.

export default App;
