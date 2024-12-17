import { useState, useEffect } from 'react'; // useState is for managing local state and useEffect is for running side effects.
import { useParams } from 'react-router-dom'; // useParams is for accessing route parameters
import { useSelector } from 'react-redux'; // useSelector is for accessing the Redux store state
import PokemonItems from './PokemonItems';
import EditPokemonForm from './EditPokemonForm';
import ItemForm from './ItemForm';

const PokemonDetail = () => { // here PokemonDetail is defined as a functional React component
  const { pokemonId } = useParams(); // retrieve the pokemonId parameter from the URL
  const pokemon = useSelector(state => state.pokemon[pokemonId]); // Access the pookemon object from the Redux store using pokemonId
  const [showEditPokeForm, setShowEditPokeForm] = useState(false); // manage the visibility of the edit form
  const [editItemId, setEditItemId] = useState(null); // manages the id of the item being edited

  useEffect(() => { // our useEffect runs whenever pokemonId changes. This resets the state for form visiblity and item editing.
    setShowEditPokeForm(false);
    setEditItemId(null);
  }, [pokemonId]);

  if (!pokemon || !pokemon.moves) { // if pokemon or pokemon.moves is not available, we return null. In other words, we return null and stop code execution here if the pokemon does not exist or if the pokemon in question has no moves.
    return null;
  }

  let content = null; // Here we initialize the content variable to store the JSX that will be rendered on by the PokemonDetail component.

  if (editItemId) { // If setItemId has a value, we render the ItemForm component
    content = (
      <ItemForm
        itemId={editItemId}
        hideForm={() => setEditItemId(null)}
      />
    );
  } else if (showEditPokeForm && pokemon.captured) { // if showEditPokeForm is true AND the pokemon is captured, we render the EditPokemonForm component
    content = (
      <EditPokemonForm
        pokemon={pokemon}
        hideForm={() => setShowEditPokeForm(false)}
      />
    );
  } else { // Otherwise, render Pokemon details and items.
    content = (
      <div className="pokemon-detail-lists">
        <div>
          <h2>Information</h2>
          <ul>
            <li>
              <b>Number</b> {pokemon.number}
            </li>
            <li>
              <b>Type</b> {pokemon.type}
            </li>
            <li>
              <b>Attack</b> {pokemon.attack}
            </li>
            <li>
              <b>Defense</b> {pokemon.defense}
            </li>
            <li>
              <b>Moves</b>
              <ul>
                {pokemon.moves && pokemon.moves.map((move, i) => (
                  <li key={move+i}>{move}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h2>
            Items
            <button> + </button>
          </h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Happiness</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <PokemonItems pokemon={pokemon} setEditItemId={setEditItemId} />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
 // In our return statement below, we render a main container with Pokemon details. THen we set the background image of the Pokemon. We display the POkemon's name and an edit button if applicable. Then we render the content variable defined earlier.
  return (
    <div className="pokemon-detail">
      <div className={`pokemon-detail-image-background`}>
        <div
          className="pokemon-detail-image"
          style={{ backgroundImage: `url('${pokemon.imageUrl}')` }}
        ></div>
        <div>
          <h1 className="bigger">{pokemon.name}</h1>
          {(!showEditPokeForm && pokemon.captured) && (
            <button onClick={() => setShowEditPokeForm(true)}>Edit</button>
          )}
        </div>

      </div>
      {content}
    </div>
  );
};

//^ We use useParams to get teh pokemonId from the URL. We manage form visiblility and item editing state with local state. We conditionally render ItemForm, EditPokemonForm, or Pokemon details based on state. And we render detailed information about a specific Pokemon, including its stats and items.

export default PokemonDetail;
