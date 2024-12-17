import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

//! This is the component that renders when we click on the link to the report details page from within the ReportIndexItem component (see ReportIndexItem.jsx).

const ReportShow = () => { // Here we define ReportShow as a functional React component.
  const { reportId } = useParams(); // Retrive the 'reportId' parameter from the URL, which helps to identify which report to display.
  const navigate = useNavigate(); // This hook returns a function that allows you to programmatically navigate to different routes, saved to a variable called 'navigate'
  const [goToReport, setGoToReport] = useState(reportId); // goToReport is a state variable initialized with the reportId. This holds the value of the report ID to navigate to. //???
  const report = {}; // The 'report' object will eventually be populated with data from the Redux store

  const handleSubmit = e => {
    e.preventDefault(); // Here we prevent the default form submission behavior.
    navigate(`/reports/${goToReport}`); // We use the navigate function to redirect the user to the specified report ID based on the value of goToReport above.
  }

  /* **DO NOT CHANGE THE RETURN VALUE** */
  return (
    // Here we have a section element which contains the report details and navigation options.
    //* Within the <section></section>, we have a table which displays the report details with reportId as the heading. This table includes rows for the Understanding and Improvement attributes of the report.
    // After the section which displays the report data, we have a footer. The footer contains a link to navigate back to the report index page (home page).
    //* We also have a Form for navigating to a different report by entering its ID. This form has an input field for the report ID, which is controlled by the goToReport state variable. It also has a button to submit the form and navigate to the specified report.
    <section>
      <table id="report-table">
        <thead>
          <tr>
            <th colSpan="2">Report #{reportId}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="attribute">Understanding:</td>
            <td className="value">{report?.understanding}</td>
          </tr>
          <tr>
            <td className="attribute">Improvement:</td>
            <td className="value">{report?.improvement}</td>
          </tr>
        </tbody>
      </table>
      <div className="footer">
        <Link
          className="back-button"
          to="/"
        >
          Back to Report Index
        </Link>
        <form className="go-to-report-form" onSubmit={handleSubmit}>
          Go to Report #
          <input
            type="number"
            min={1}
            max={99}
            value={goToReport}
            onChange={(e) => setGoToReport(e.target.value)}
            required
          />
          <button>Go!</button>
        </form>
      </div>
    </section>
  );
};

//^ The ReportShow component displays the details of a specific report identified by the reportId parameter from the URL. It is rendered when the user navigates to a path like /reports/:reportId. It uses state to manage the report ID to navigate to. And it provides functionality to navigate back to the report index and to navigate to a different report by entering its ID.

export default ReportShow;
