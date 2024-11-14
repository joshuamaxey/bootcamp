import { Component } from 'react';
import titanChill from '../../assets/titan_chill.jpg';
import titanHungry from '../../assets/titan_hungry.mp4';
import titanRage from '../../assets/titan_rage.mov';

class ClassTitan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHungry: true,
      isLunchTime: false
    };
  }

  // Your code here 
  render() {
    const { isLunchTime, isHungry } = this.state;
    const mood = (isLunchTime && isHungry) ? 'MAD' : isHungry ? 'HUNGRY' : 'CHILL';

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
                onClick={() => this.setState({ isHungry: false })}
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
              onClick={() => this.setState({ isHungry: false })}
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
      <>
        <div className='titan-container'>
          {hungerRender}
          <h2> Current mood: {mood} </h2>
          {moodRender}
        </div>
      </>
    );
  }
}

export default ClassTitan;
