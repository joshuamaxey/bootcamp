import { Link } from 'react-router-dom';
import ReportIndexItem from './ReportIndexItem';
import { resetDatabase } from '../mocks/storage';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchReports } from '../store/reports';

const ReportsIndex = () => { // Here we define ReportsIndex as a functional component using an arrow function
  const dispatch = useDispatch();
  const reports = useSelector(state => state.reports);

  useEffect(() => {
    dispatch(fetchReports());
  }, [dispatch])

  // const reports = []; //* 'reports' is an array that will be populated with data from the Redux store. In a real application, we would use a selector to get the reports from the Redux store. //* That might look like this:

  /* **DO NOT CHANGE THE RETURN VALUE** */
  return (
    //* */ In the JSX below, we return a 'section' element that contains the rest of the component's content.
    // First, we have an unordered list which we use to create a list of reports.
    //* Within the UL, we map over the 'reports' array from line 7 above, rendering a 'ReportIndexItem'(see ReportIndexItem.jsx) component for each report. Each 'ReportIndexItem' receives a 'report' prop and a unique 'key' prop (using report.id) for React to keep track of list items.
    // After the ul, we have a Link which navigates to the path /reports/new when clicked. This will render a form to create a new report (see CreateReportForm.jsx)
    //* Finally, after the Link, we have a button which, when clicked, calls the 'resetDatabase' function imported from '../mocks/storage'. This function clears local storage and reloads the window.
    <section>
      <ul>
        {Object.values(reports).map((report) => ( // Object.values turns the 'reports' from an object into an array so that we can .map through it
          <ReportIndexItem
            report={report}
            key={report.id}
          />
        ))}
      </ul>
      <Link
        className="back-button new"
        to="/reports/new"
      >
        New Report
      </Link>
      <button onClick={resetDatabase}>Reset the Database</button>
    </section>
  );
};

//^ In summary: The ReportsIndex component defines an empty 'reports' array that will be populated from the Redux store. Then it maps over the 'reports' array to render a list of 'ReportIndexItem' components. It also includes a Link to create a new report, as well as a button to reset the database.

// The reports array is pupulated from the Redux store using useSelector, the map function dynamically renders ReportIndexItem components based on the 'reports' data, the Link component enables navigation to the /reports/new route, and the reset button calls a function to reset the database, which is useful for development and testing.

export default ReportsIndex;
