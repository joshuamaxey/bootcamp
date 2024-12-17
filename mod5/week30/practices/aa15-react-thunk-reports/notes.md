## Phase 1: Display A List of Reports

1. Create a Thunk Action Creator in the reports.js file
2. Dispatch the THunk Action in the ReportsIndex component
3. ENsure the Redux store is set up to handle the fetchReports action. The reportsReducer is already set up to handle the LOAD_REPORTS action, so this step should already be covered.
4. Now our reportsIndex component should fetch the reports from the API, populate the Redux store, and render the list of reports on the root page. We can double-check to make sure the implementation aligns with the provided design through the browser.
