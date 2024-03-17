import React from 'react';
import frameworkData from '../json';

const calculateTotalIssues = (component) => {
  let totalIssues = 0;

  if (component.Axe) {
    totalIssues += parseInt(component.Axe.total_issues, 10);
  }

  if (component.manual_testing && Array.isArray(component.manual_testing.errors)) {
    totalIssues += component.manual_testing.errors.length;
  }

  return totalIssues;
};

const getBackgroundClass = (issues) => {
  if (issues === '-') return 'bg-gray';
  const count = parseInt(issues, 10);
  if (count === 0) return 'bg-success';
  if (count > 0 && count <= 2) return 'bg-warning';
  if (count >= 3) return 'bg-danger';
  return '';
};

const FrameworkOverview = () => {
  const allComponentNames = [...new Set(frameworkData.flatMap(framework =>
    framework.components.map(component => component.name)))];

  const componentIssuesMap = allComponentNames.reduce((acc, name) => {
    acc[name] = frameworkData.map(framework => {
      const component = framework.components.find(c => c.name === name);
      return component ? calculateTotalIssues(component) : '-';
    });
    return acc;
  }, {});

  // Inline style for equal column width
  const columnStyle = {
    width: `${100 / (frameworkData.length + 1)}%`,
    textAlign: 'center',
  };

  return (
    <div className="container">
      <h2>Frameworks Component Issues Overview</h2>
      <table className="table">
        <thead>
          <tr>
            <th style={columnStyle}>Component</th>
            {frameworkData.map((framework, index) => (
              <th key={index} style={columnStyle}>{framework.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(componentIssuesMap).map(([componentName, issuesCounts], index) => (
            <tr key={index}>
              <td style={columnStyle}>{componentName}</td>
              {issuesCounts.map((count, fwIndex) => (
                <td key={fwIndex} className={`${getBackgroundClass(count)} text-center text-white`} style={columnStyle}>{count}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FrameworkOverview;
