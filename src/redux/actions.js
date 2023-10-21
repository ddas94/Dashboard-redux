export const addIssue = (application, title, description) => ({
  type: 'ADD_ISSUE',
  payload: { application, title, description },
});

// src/redux/reducers.js
const initialState = {
  applications: {},
};

const issueTrackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ISSUE':
      const { application, title, description } = action.payload;
      const appIssues = state.applications[application] || [];
      return {
        ...state,
        applications: {
          ...state.applications,
          [application]: [...appIssues, { title, description }],
        },
      };
    default:
      return state;
  }
};

export default issueTrackerReducer;
