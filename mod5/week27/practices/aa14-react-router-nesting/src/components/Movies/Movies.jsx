import { Outlet } from 'react-router-dom'
import MovieNavBar from './MovieNavBar';

function Movies() {

  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <MovieNavBar />
      <Outlet />
    </div>
  );
}

export default Movies;
