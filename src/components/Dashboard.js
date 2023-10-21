
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addIssue } from '../redux/actions';

const Dashboard = ({ applications, addIssue }) => {
  const [application, setApplication] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddIssue = () => {
    addIssue(application, title, description);
    setApplication('');
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h1>Issue Tracking Dashboard</h1>
      <div>
        <h2>Add Issue</h2>
        <select value={application} onChange={(e) => setApplication(e.target.value)}>
          <option value="">Select Application</option>
          {Object.keys(applications).map((app) => (
            <option key={app} value={app}>
              {app}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Issue Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Issue Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleAddIssue}>Add Issue</button>
      </div>
      <div>
        <h2>Issues by Application</h2>
        {Object.keys(applications).map((app) => (
          <div key={app}>
            <h3>{app}</h3>
            <ul>
              {applications[app].map((issue, index) => (
                <li key={index}>
                  <strong>{issue.title}</strong>: {issue.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  applications: state.applications,
});

const mapDispatchToProps = {
  addIssue,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
