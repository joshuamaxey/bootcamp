import { useParams } from 'react-router-dom';
import ReportForm from './ReportForm';

//! This is the component that renders when you click the 'Edit' button on the ReportIndexItem page for a specific report.

const EditReportForm = () => { // Here we define EditReportForm as a functional React component using an arrow function.
  const { reportId } = useParams(); // This hook retrieves the reportId parameter from the URL, which helps us to identify which report we are trying to edit.
  const report = {}; // This 'report' object will eventually be populated with data from the Redux store. It is initially defined as an empty object.

  if (!report) return(<></>); // Here we check to see if the 'report' object is not found (if 'report' is undefined or null). IF that is the case, then the component returns an empty fragment (<></>), rendering nothing. This prevents the component from trying to render with invalid data.

  /* **DO NOT CHANGE THE RETURN VALUE** */
  return (
    Object.keys(report).length > 1 && ( // This line checks to see if the 'report' object has more than one property, which would imply that it is a valid, populated report object. If this is the case, then we render the JSX below:
      <>
        <ReportForm // Here we render the ReportForm component, passing in the following 2 props:
          report={report} // THe report object, which contains the data to populate the form fields
          formType="Update Report" // THe form type in the form of a string
        />
      </>
    )
  );
};

//^ The EditReportForm component is responsible for rendering the form used to edit an existing report. It initializes the form fields with the current values from the 'report' object and specifies that the form type is 'Update Report.' This component is rendered at the route '/reports/:reportId/edit'. When the 'edit' button is clicked on the ReportIndexItem page, it navigates to this route and renders the EditReportForm component. The actual form rendering and handling is delegated to the ReportForm component, which receives the current report data and form type as props.

export default EditReportForm;
