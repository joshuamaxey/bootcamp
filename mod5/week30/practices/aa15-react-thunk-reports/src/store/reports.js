/** Action Type Constants: */
export const LOAD_REPORTS = 'reports/LOAD_REPORTS';
export const RECEIVE_REPORT = 'reports/RECEIVE_REPORT';
export const UPDATE_REPORT = 'reports/UPDATE_REPORT';
export const REMOVE_REPORT = 'reports/REMOVE_REPORT';

//^ These action types are constants which represent the different types of actions that can be dispatched in your application. Using constants helps to avoid typos and makes it easire to manage action types.

/**  Action Creators: */
export const loadReports = (reports) => ({ // creates an action to load multiple reports
  type: LOAD_REPORTS,
  reports
});

export const receiveReport = (report) => ({ // creates an action to add or receive a single report
  type: RECEIVE_REPORT,
  report
});

export const editReport = (report) => ({ // creates an action to update an existing report
  type: UPDATE_REPORT,
  report
});

export const removeReport = (reportId) => ({ // creates an action to remove a report by its 'reportId'
  type: REMOVE_REPORT,
  reportId
});

//^ These action creators are functions that return action objects. An action object typically has a 'type' property as well as any additional data that is required to process the action.

/** Thunk Action Creators: */

// Your code here

export const fetchReports = () => async (dispatch) => {
  const response = await fetch('/api/reports');
  if (response.ok) {
    const reports = await response.json();
    dispatch(loadReports(reports));
  } else {
    console.error('Failed to fetch reports');
  }
}

/** Selectors: */

/** Reducer: */

/** The reports reducer is complete and does not need to be modified */
const reportsReducer = (state = {}, action) => { // This reducer is a pure function that takes the current state and an action as arguments, then returns the new state based on the action type. The initial state is set to an empty object by default.
  switch (action.type) { // We use a switch/case statement for our action handler
    case LOAD_REPORTS: { // When an action of type LOAD_REPORTS is dispatched, the reducer creates a new state object where each report from the action.reports array is added to the state using its id as the key.
      const reportsState = {};
      action.reports.forEach((report) => {
        reportsState[report.id] = report;
      });
      return reportsState;
    }
    case RECEIVE_REPORT:
      return { ...state, [action.report.id]: action.report };
    case UPDATE_REPORT:
      return { ...state, [action.report.id]: action.report };
    // Both the RECEIVE_REPORT and UPDATE_REPORT actions update the state by adding or updating a report in the state object using its id
    case REMOVE_REPORT: { // THis action creates a new state object, deletes the report with the given reportId from the new state, then returns the new state.
      const newState = { ...state };
      delete newState[action.reportId];
      return newState;
    }
    default: // If the action type does not match any of the cases above, the current state is returned unchanged
      return state;
  }
};

//^ First, we have 'action types' defined as constants representing the types of actions that can be dispatched. Then we have action creators, which are functions that return action objects to be dispatched to the store. Finally, we have a reducer function that processes the actions and returns the new state based on the action type and data.

export default reportsReducer;
