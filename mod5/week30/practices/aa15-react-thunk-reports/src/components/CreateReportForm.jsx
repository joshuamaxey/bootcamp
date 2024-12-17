import ReportForm from './ReportForm';

//! This CreateReportForm component is rendered at the route '/reports/new' route. The 'New Report' button on the homepage (see ReportIndex.jsx, which is the component rendered when we navigate to the homepage) will take us to this page.

const CreateReportForm = () => { // Here we define CreateReportForm as a functional component using an arrow function.
  const report = { // We create a 'report' object which initializes the state for a new report. It has empty strings for the 'understanding' and 'improvement' fields. These serve as the initial values for the form fields in the 'ReportForm' component.
    understanding: '',
    improvement: ''
  };

  /* **DO NOT CHANGE THE RETURN VALUE** */
  return ( // Here we return a 'ReportForm' component (see ReportForm.jsx), passing in two props.
    <ReportForm
      report={report} // The first prop is the 'report' object defined above, on line 6, which initializes the form fields with empty strings.
      formType="Create Report" // The second prop is a string "Create Report" which serves to determine the form's behavior and/or display text.
    />
  );
};

//^ The CreateReportForm component is responsible for rendering the form that is used to create a new report. It initializes the form fields with empty values and specifies that the form type is "Create Report". This component is rendered at the route '/reports/new'. When the "New Report" button on the ReportsIndex.jsx page is clicked, we navigate to this route and render the CreateReportForm component. The actual form rendering and handling is deletated to the ReportFOrm component (see ReportForm.jsx), which receives the initial state and form type as props.

export default CreateReportForm;
