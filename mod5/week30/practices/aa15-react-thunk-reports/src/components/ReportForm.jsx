import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//! This is the component that is rendered on the page from within the CreateReportForm component (see CreateReportForm.jsx) when we navigate to '/reports/new'.

const ReportForm = ({ report, formType }) => { // Here we define ReportForm as a functional component which takes 'report' and 'formType' as props. 'Report' contains the initial state of the form fields while formType is a string indicating the type of form (such as Create Report, or Edit Report) //*(See CreateReportForm.jsx for details about these two props and to see how they are passed into this ReportForm component)
  const navigate = useNavigate(); // useNavigate returns a function that allows you to programmatically navigate to different routes. We save this function to a variable called 'navigate'.
  const [understanding, setUnderstanding] = useState(report?.understanding);
  const [improvement, setImprovement] = useState(report?.improvement);
  //^ Understanding and Improvement are both state variables initialized with the respective values from the 'reprot' prop (by default, they are both empty strings, as defined within CreateReportForm.jsx)
  const [errors, setErrors] = useState({}); // Here we define a state variable 'errors' initialized to an empty object to keep track of potential validation errors.

  const handleSubmit = async (e) => { // This function is called when the form is submitted.
    e.preventDefault(); // Here we prevent the default form submission behavior.
    setErrors({}); // The setErrors({}) clears any validation errors by resetting 'errors' to an empty object
    report = { ...report, understanding, improvement }; // THe report object is updated with the current values of 'understanding' and 'improvement'
  };

  /* **DO NOT CHANGE THE RETURN VALUE** */
  return (
    // The onSubmit={handleSubmit} ensures that form submission is handled by the handleSubmit function defined on line 13.
    //* Then have a <div></div> which displays validation errors pertaining to the 'understanding' field.
    // After the div, we have an input field controlled by the 'understanding' state variable which updates its value using the setUnderstanding function.
    //* After the understanding input, we have a textarea field for the 'Improvement' state variable which is updated using the setImprovement function.
    // We also have an error display which shows validations errors for the 'improvement' field.
    //* Finally, we have a submit button which submits the form using the handleSubmit function.
    <form onSubmit={handleSubmit}>
      <h2>{formType}</h2>
      <div className="errors">{errors.understanding}</div>
      <label>
        Understanding:
        <input
          type="text"
          value={understanding}
          onChange={(e) => setUnderstanding(e.target.value)}
        />
      </label>
      <div className="errors">{errors.improvement}</div>
      <label>
        Improvement:
        <textarea
          value={improvement}
          onChange={(e) => setImprovement(e.target.value)}
        />
      </label>
      <button type="submit">{formType}</button>
    </form>
  );
};

//^ The ReportForm component is a reusable form for creating or editing reports. It handles form state, validation, and form submission. It uses React hooks to manage the form state (understanding, improvement, and errors). The handleSubmit function handles form submission, including preventing default behavior, clearing errors, and updating the report object. The component renders a form with input fields for understanding and improvement, displays any validation errors, and includes a submit button.

export default ReportForm;
