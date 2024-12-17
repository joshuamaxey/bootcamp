import { useState } from 'react'; // react hook for managing local state
import { useSelector } from 'react-redux'; // a Redux hook for accessing the state from the Redux store
import { NavLink, Outlet, useParams } from 'react-router-dom'; // Components for navigating and routing
import PokemonDetail from './PokemonDetail';
import CreatePokemonForm from './CreatePokemonForm';
import Fab from './Fab';

const PokemonBrowser = () => { // Here we define PokemonBrowser as a functional React component
  const { pokemonId } = useParams(); // Retrieve the pokemonId route parameter from the URL
  const allPokemon = useSelector(state => state.pokemon); // Access the 'pokemon' slice of state from the Redux store
  const pokemon = allPokemon.list.map(pokemonId => allPokemon[pokemonId]); // Here we convert the list of Pokemon from an object to an array
  const [showForm, setShowForm] = useState(false); // Here we manage the visibility of the form using the 'showForm' slice of state


  return (
    // The nav element below is a navigation section containing links to individual pokemon.
    // The Fab component renders a floating action button (FAB). When clicked, it shows the CreatePokemonForm.
    // The NavLink links to a specific Pokemon's detail page.
    // The conditional class name adds a class to highlight the selected Pokemon based on the pokemonId parameter.
    // Then we have inline styling to set the background image.
    // The Outlet element is a placeholder for rendering nested routes. This allows child routes to render their components here.
    // The conditional rendering will render CreatePokemonForm IF 'showForm' is true. It will also render the PokemonDetail component if pokemonId is present.
    <main>
      <nav>
        <Fab hidden={showForm} onClick={() => setShowForm(true)} />
        {pokemon.map((pokemon) => {
          return (
            <NavLink key={pokemon.name} to={`/pokemon/${pokemon.id}`}>
              <div
                className={
                  Number.parseInt(pokemonId) === pokemon.id
                    ? "nav-entry is-selected"
                    : "nav-entry"
                }
              >
                <div
                  className="nav-entry-image"
                  style={{ backgroundImage: `url('${pokemon.imageUrl}')` }}
                ></div>
                <div>
                  <div className="primary-text">{pokemon.name}</div>
                  <div className="secondary-text">
                    {pokemon.number} {pokemon.captured && "(Captured)"}
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </nav>
      <Outlet />
      {showForm ? (
        <CreatePokemonForm hideForm={() => setShowForm(false)} />
      ) : (
        pokemonId ? <PokemonDetail/> : null
      )}
    </main>
  );
};

//^ We use NavLink to create links for individual Pokemon, and useParams to get the pokemonId from the URL. Based on the state (showForm) and the URL parameter (pokemonId), different components (CreatePokemonForm or PokemonDetail) are rendered. We use local state (showForm) to control form visibility, and Redux state for managing Pokemon data. And we use the Outlet component to render child routes.

// THe PokemonBrowser component conditionally renders different components (PokemonDetail or CreatePokemonForm) based on the route and state. It also provides navigation for different Pokemon using NavLink and utilizes the Outlet component to render nested routes. 

export default PokemonBrowser;
