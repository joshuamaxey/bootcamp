import { textInputValidators } from '../utils/validations';
import { useTextInput } from '../hooks/textInput.js';

const Form = () => {

  const { value, setValue, errors } = useTextInput({
    validations: textInputValidators
  });

  return (
    <>
      <h1>Form Component</h1>
      <form>
        <ul>
          {errors.map(err => <li key={err}>{err}</li>)}
        </ul>
        <label htmlFor="name">
          Name{" "}
          <input
            id="name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
      </form>
    </>
  );
};

export default Form;
