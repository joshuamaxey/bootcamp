import { useState, useEffect } from 'react';
import titanChill from '../../assets/titan_chill.jpg';
import titanHungry from '../../assets/titan_hungry.mp4';
import titanRage from '../../assets/titan_rage.mov';

const FunctionTitan = () => {
  const [isHungry, setIsHungry] = useState(true);
  const [isLunchTime, setIsLunchTime] = useState(false);
  const mood = (isLunchTime && isHungry) ? 'MAD' : isHungry ? 'HUNGRY' : 'CHILL';

  useEffect(() => {
    const timeout = setTimeout(() => setIsLunchTime(true), 7000);
    return () => clearTimeout(timeout);
  }, []);

  let moodRender, hungerRender;
  switch (mood) {
    case 'CHILL':
      hungerRender = <h1>Yum! That&apos;s better!</h1>;
      moodRender =
        <div className='titan-chill'>
          <img width=' 690' height=' 390' src={titanChill} alt='titan' />
        </div>;
      break;
    case 'HUNGRY':
      hungerRender = <h1>If You Don&apos;t Feed Titan Soon, He Will Get Mad!</h1>;
      moodRender =
        <div className='titan-hungry'>
          <video controls autoPlay muted>
            <source src={titanHungry} type='video/mp4' />
          </video>
          <div className='button-holder'>
            <button
              className='mover t-button'
              onClick={() => setIsHungry(false)}
            >
              Click to Feed Titan! LOL!
            </button>
          </div>
        </div>;
      break;
    case 'MAD':
      hungerRender = <h1>Titan Is Mad!</h1>;
      moodRender =
        <>
          <video width='690px' height='390px' controls autoPlay muted>
            <source src={titanRage} type='video/mp4' />
          </video>
          <br />
          <button
            className='f-button'
            onClick={() => setIsHungry(false)}
          >
            Feed Titan
          </button>
        </>
      break;
    default:
      console.error("Should never get here");
      break;
  }

  return (
    <div className='titan-container'>
      {hungerRender}
      <h2> Current mood: {mood} </h2>
      {moodRender}
    </div>
  );
};

export default FunctionTitan;
