import React from 'react';
import { Link } from "react-router-dom";
import frameworkData from '../json';

const calculateIssuesForFramework = (framework) => {
  let zeroIssuesCount = 0;

  framework.components.forEach(component => {
    let totalIssues = 0;

    if (component.Axe) {
      totalIssues += parseInt(component.Axe.total_issues, 10);
    }

    if (component.manual_testing && Array.isArray(component.manual_testing.errors)) {
      totalIssues += component.manual_testing.errors.length;
    }

    if (totalIssues === 0) {
      zeroIssuesCount += 1;
    }
  });

  return {
    totalComponents: framework.components.length,
    zeroIssuesCount,
    percentageOfZeroIssues: (zeroIssuesCount / framework.components.length) * 100,
  };
};


const FrameworkOverviewSummary = () => {
  let frameworkSummaries = frameworkData.map(framework => ({
    name: framework.name,
    slug: framework.slug,
    ...calculateIssuesForFramework(framework),
  }));

  frameworkSummaries.sort((a, b) => b.percentageOfZeroIssues - a.percentageOfZeroIssues);

  frameworkSummaries.forEach((framework, index) => {
    framework.rank = index + 1;
  });

  const textStyle = {
    textAlign: 'left',
  };
  const numberStyle = {
    textAlign: 'right',
  };

  return (
    <div className="container">
      <h2>Framework Summary Overview</h2>
      <table className="table">
        <thead>
          <tr>
            <th style={textStyle}>Framework</th>
            <th style={numberStyle}>Total Components</th>
            <th style={numberStyle}>Components with Zero Issues</th>
            <th style={numberStyle}>Percentage of Zero Issues</th>
          </tr>
        </thead>
        <tbody>
          {frameworkSummaries.map((framework, index) => (
            <tr key={index}>
              <td style={textStyle}><Link to={`/${framework.slug}`} className="text-dark">{framework.name}</Link></td>
              <td style={numberStyle}>{framework.totalComponents}</td>
              <td style={numberStyle}>{framework.zeroIssuesCount}</td>
              <td style={numberStyle}>{Math.round(framework.percentageOfZeroIssues)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FrameworkOverviewSummary;
