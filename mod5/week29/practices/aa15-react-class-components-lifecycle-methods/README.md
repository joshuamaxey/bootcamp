# Class Component Lifecycle Methods

In this short practice you will use 3 basic lifecycle methods included in React:

- `componentDidMount`
- `componentDidUpdate`
- `componentWillUnmount`

## Setup

Clone the starter repo, which you can access through the `Download Project`
button at the bottom of this page.

`cd` into the practice's root directory and run `npm install`. To start your
app, run `npm run dev`.

## `componentDidMount` and `componentWillUnmount`

In the `FunctionTitan` component, there is a `useEffect` with a `setTimeout`
that triggers after 7 seconds. Also notice that there is a cleanup function.
When the user clicks one of the buttons in the `Navbar` and unmounts this
component, the timer function will be cleared out, preventing a memory leak.

You will use two lifecycle methods, `componentDidMount` and
`componentWillUnmount`, to add this functionality in `ClassTitan`.

Create a `componentDidMount` lifecycle method beneath the `constructor` function
in your `ClassTitan` component. Inside the `componentDidMount`, create a
`setTimeout` function that, after seven seconds, changes `isLunchTime` to
`true`. This `setTimeout` function will only run once because the
`componentDidMount` method only runs once, after the initial render.

Next, create a `componentWillUnmount` lifecycle method beneath the
`componentDidMount`. Inside this method, you should clean up the `setTimeout`
when the `ClassTitan` component is unmounted. **Never set state in this
method.**

If you are successful, your code should resemble the code below:

```js
// src/components/classComponents/ClassTitan.jsx

// ...

class ClassTitan extends Component {
  // ...
  componentDidMount() {
    this.lunchTimeout = setTimeout(() => {
      this.setState({ isLunchTime: true });
    }, 7000);
  }

  componentWillUnmount() {
    clearTimeout(this.lunchTimeout);
  }
  //...
}

export default ClassTitan;
```

Now that you have your class component set up, export it and import it in your
__src/App.jsx__ file. Replace the `FunctionTitan` component with your new class
component.

## `componentDidUpdate`

Now look at the `FunctionKuiper` component. Notice the `useEffect` that listens
for the `guessCount` to change.

Create a `componentDidUpdate` method in the `ClassKuiper` component. When the
`guessCount` state is greater than 4, the `updateState` function should be
invoked passing `0` for the `count` state and a `kuiperSleep` variable for the
`kuiper` state. Also, an `alert` method should be invoked with a message that
says: `Sorry you have used your 5 guesses! You lose! Start again!`

This `componentDidUpdate` lifecycle method won't run after the initial render,
but it will run after every re-render. You should ensure, however, that the
functionality will execute only when the conditional `if` criterion is met.

## What you have learned

**Congratulations!** In this practice you have learned how to replicate the
functionality of `useEffect` in class components by using the 3 basic React
lifecycle methods:

1. `componentDidMount`
2. `componentDidUpdate`
3. `componentWillUnmount`
