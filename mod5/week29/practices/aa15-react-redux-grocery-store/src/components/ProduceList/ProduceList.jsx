import ProduceDetails from './ProduceDetails';
import './ProduceList.css';
import { useSelector } from 'react-redux';

function ProduceList() {
  const produce = useSelector(state => state.produce); // useSelector accepts a function as a parameter and will pass the updated state into this function whenever the state is updated. The return value of the useSelector function is the return value of the function that is passed in as a parameter.

  const produceArr = Object.values(produce);

  return (
    <>
      <h2>All produce</h2>
      {!produceArr.length && <span>No produce available right now.</span>}
      <ul className="produce-list">
        {produceArr.map((produce) => (
          <ProduceDetails key={produce.id} produce={produce} />
        ))}
      </ul>
    </>
  );
}

export default ProduceList;
