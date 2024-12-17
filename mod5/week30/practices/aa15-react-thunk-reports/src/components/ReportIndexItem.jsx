import { Link } from 'react-router-dom';

//! This 'ReportIndexItem' component will be rendered within the ReportsIndex component, with each instance corresponding to an item in the 'reports' array (See ReportsIndex.jsx).

const ReportIndexItem = ({ report }) => { // Here we define ReportIndexItem as a functional component that takes a 'report' object as a prop
  const handleDelete = (e) => { // This function is attached to the 'Delete' button's onClick event to prevent the default form submission behavior. In a complete implementation, this function would contain logic to delete the report. Currently, its only function is to prevent the default action.
    e.preventDefault();
  };

  /* **DO NOT CHANGE THE RETURN VALUE** */
  return (
    // Here, the our ReportIndexItem returns a list item element <li></li>.
    //* Inside of the li, we have a container <div></div> with a class name of 'li-contents-flex' which is used for styling.
    // Inside of the div, we create a link to the report's detail page using the report's 'id'.
    //* After the first link, we have another <div></div> with a class name of 'buttons-container'
    // This second div contains two buttons: Edit (which is actually a link) and Delete (which is an actual button)
    //* The Edit button creates a link to the report's edit page using the report's id.
    // The Delete button invokes the 'handleDelete' function from line 6, which initially only prevents the default behavior of the button.
    <li>
      <div className="li-contents-flex">
        <Link to={`/reports/${report.id}`}>Report #{report.id}</Link>
        <div className="buttons-container">
          <Link
            className="edit-link"
            to={`/reports/${report.id}/edit`}
          >
            Edit
          </Link>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </li>
  );
};

//^ The ReportIndexItem component represents a single report item in the list of reports. It provides links to view and edit the report as well as a button to delete the report. It receives a 'report' object as a prop, which contains the report's data. It uses 'report.id' to create dynamic links for viewing and editing the report. The handleDelete function is initially a placeholder for delete functionality, preventing the default behavior when the Delete button is clicked.

//* Notice that this component does not actually display the content of the report (understanding/improvement), it only shows the report's id as well as the edit and delete buttons. The actual content of the report in question will be displayed on the report's detail page (i.e. reports/:reportId). 

export default ReportIndexItem;
