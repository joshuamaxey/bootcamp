import { movies } from '../../data/movieData'
import {NavLink} from 'react-router-dom'

function MovieNavBar(movies) {

    return <nav>
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <NavLink to={`${movie.id}`}>{ movie.title }</NavLink>
                </li>
            ))}
        </ul>
    </nav>
}

export default MovieNavBar;
