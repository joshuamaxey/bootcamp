import { Component } from 'react';
import kuiperSleep from '../../assets/kuiper_sleep.jpg';
import kuiperHappy from '../../assets/kuiper_happy.jpg';

class Kuiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guessCount: 0,
      guess: '',
      kuiper: kuiperSleep
    };
  }

  // Your code here 
  updateState = (count, kuiper) => {
    this.setState({
      kuiper,
      guess: '',
      guessCount: count
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { guess, guessCount } = this.state;
    const numGuesses = guessCount + 1;
    const numGuessesString = `${numGuesses} guess${(numGuesses === 1) ? "" : "es"}`;

    if (guess === 'sleeping') {
      this.updateState(0, kuiperHappy);
      alert(
        `Congratulations! ${guess.toUpperCase()}! You got it in ${numGuessesString}!`
      );
    } else if (guess === '') {
      alert("You didn't choose anything!");
    } else {
      this.updateState(numGuesses, kuiperSleep);
      alert(
        `Nice try but wrong! You have made ${numGuessesString} thus far!`
      );
    }
  };

  render() {
    return (
      <div className='kuiper-container'>
        <form onSubmit={this.onSubmit}>
          <label
            className={this.state.kuiper === kuiperHappy ? 'kuiper-check' : ''}
          >
            <h1>Enter Kuiper&apos;s favorite activity</h1>
            <input
              type='text'
              value={this.state.guess}
              placeholder='Enter here'
              onChange={(event) => this.setState({ guess: event.target.value })}
            />
          </label>
          <div>
            <button className='k-button' type='submit'>
              Guess
            </button>
            <button
              onClick={() => this.setState({ kuiper: kuiperSleep })}
              className='k-button'
              type='reset'
            >
              Reset
            </button>
          </div>
        </form>

        <img
          className={
            this.state.kuiper === kuiperHappy
              ? 'kuiper-image rotate'
              : 'kuiper-image '
          }
          alt='kuiper'
          width='450'
          height='450'
          src={this.state.kuiper}
        />
      </div>
    );
  }
}

export default Kuiper;
