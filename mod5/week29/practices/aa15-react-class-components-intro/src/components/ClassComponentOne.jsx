import { Component } from 'react';
import FunctionComponentTwo from './FunctionComponentTwo';

class ClassComponentOne extends Component {

  constructor(props) {
    super(props); // must include super to inherit methods/etc from 'Component' class
    this.state = {
      count: 0,
      message: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState({})
  }

  render() {
    return (
      <div className='center'>
        <h1>Class Component One</h1>
        <div className='one'>
          <button onClick={() => {
            this.setState(prevState => ({
              count: prevState - 1
            }));
          }}>
            Decrement
          </button>
          <button onClick={() => {
            this.setState(prevState => ({
              count: prevState.count + 1
            }));
          }}>
            Increment
          </button>

          <input
            type='text'
            value={undefined}
            onChange={e => this.setState({message: e.target.value})}
            placeholder='Enter Your Message'
          />
          <button onClick={() => this.setState({message: ''})}>Clear</button>
        </div>

        <FunctionComponentTwo count={undefined} message={undefined} />
      </div>
    );
  }
}

export default ClassComponentOne;
