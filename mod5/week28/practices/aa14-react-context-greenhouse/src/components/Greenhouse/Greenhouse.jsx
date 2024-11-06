import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { useTheme } from '../../context/ThemeContext'; // import the useTheme custom hook

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {

  const { themeName } = useTheme();

  let img;

  if (themeName === 'day') img = dayImage
  if (themeName === 'night') img = nightImage

  return (
    <section>
      <img  className='greenhouse-img'
            src={img}
            alt='greenhouse'
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
