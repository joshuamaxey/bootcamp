import { useState, useEffect } from 'react';
import Cart from './components/Cart';
import ProduceList from './components/ProduceList';
import { useDispatch } from 'react-redux';
import { populateProduce } from './store/produce';

function App() {
  const [showCart, setShowCart] = useState(false);

  // assign the useDispatch() method to a variable called 'dispatch' for easy use
  const dispatch = useDispatch();

  // Create a useEffect that will dispatch the POPULATE action from the 'populateProduce()' action creator
  useEffect(() => {
    dispatch(populateProduce());
  }, [dispatch]) // technically, dispatch is a dependency of this useEffect because it is defined outside of the useEffect and used within it. But the definition of 'dispatch' should never change, so this function should run only once (or twice, with strict mode turned on) despite that 'dispatch' is present in its dependency array

  return (
    <>
      <nav>
        <h1>Grocery Store</h1>
        <button className="checkout-button" onClick={() => setShowCart(true)}>
          <i className="fas fa-shopping-bag" />
          Checkout
        </button>
      </nav>
      <main style={showCart ? { marginRight: '300px' } : {}} >
        <ProduceList />
      </main>
      <div
        className="sidebar"
        style={showCart ? { transform: 'translateX(-100%)' } : {}}
      >
        <div className="sidebar-header">
          <button className="arrow-button" onClick={() => setShowCart(false)}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <Cart />
      </div>
    </>
  );
}

export default App;
