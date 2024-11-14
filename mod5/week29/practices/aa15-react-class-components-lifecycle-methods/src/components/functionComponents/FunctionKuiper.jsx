import { useState, useEffect } from 'react';
import kuiperSleep from '../../assets/kuiper_sleep.jpg';
import kuiperHappy from '../../assets/kuiper_happy.jpg';

const FunctionKuiper = () => {
  const [guess, setGuess] = useState('');
  const [guessCount, setGuessCount] = useState(0);
  const [kuiper, setKuiper] = useState(kuiperSleep);

  const updateState = (count, kuiper) => {
    setGuess('');
    setGuessCount(count);
    setKuiper(kuiper);
  };

  useEffect(() => {
    if (guessCount > 4) {
      updateState(0, kuiperSleep);
      alert(`Sorry you have used your 5 guesses! You lose! Start again!`);
    }
  }, [guessCount]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const numGuesses = guessCount + 1;
    const numGuessesString = `${numGuesses} guess${(numGuesses === 1) ? "" : "es"}`;

    if (guess === 'sleeping') {
      updateState(0, kuiperHappy);
      alert(
        `Congratulations! ${guess.toUpperCase()}! You got it in ${numGuessesString}!`
      );
    } else if (guess === '') {
      alert("You didn't choose anything!");
    } else {
      updateState(numGuesses, kuiperSleep);
      alert(
        `Nice try but wrong! You have made ${numGuessesString} thus far!`
      );
    }
  };

  return (
    <>
      <div className='kuiper-container'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label className={kuiper === kuiperHappy ? 'kuiper-check' : ''}>
            <h1>Enter Kuiper&apos;s favorite activity</h1>
            <input
              type='text'
              value={guess}
              placeholder='Enter here'
              onChange={(event) => setGuess(event.target.value)}
            />
          </label>
          <div>
            <button className='k-button' type='submit'>
              Guess
            </button>
            <button
              onClick={() => setKuiper(kuiperSleep)}
              className='k-button'
              type='reset'
            >
              Reset
            </button>
          </div>
        </form>

        <img
          className={
            kuiper === kuiperHappy ? 'kuiper-image rotate' : 'kuiper-image'
          }
          alt='kuiper'
          width='450'
          height='450'
          src={kuiper}
        />
      </div>
    </>
  );
};

export default FunctionKuiper;
