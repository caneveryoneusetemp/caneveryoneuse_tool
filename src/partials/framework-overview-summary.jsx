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

  // Sort by percentage of zero issues in descending order
  frameworkSummaries.sort((a, b) => b.percentageOfZeroIssues - a.percentageOfZeroIssues);

  // Add ranks based on sorted positions
  frameworkSummaries.forEach((framework, index) => {
    framework.rank = index + 1;
  });

  const columnStyleText = {
    //width: `${100 / (frameworkData.length + 1)}%`,
    textAlign: 'left',
  };

  const columnStyleNumber = {
    //width: `${100 / (frameworkData.length + 1)}%`,
    textAlign: 'right',
  };

  return (
    <div className="container">
      <h2>Framework Summary</h2>
      <table className="table">
        <thead>
          <tr>
            <th style={columnStyleNumber}>Rank</th>
            <th style={columnStyleText}>Framework</th>
            <th style={columnStyleNumber}>Total Components</th>
            <th style={columnStyleNumber}>Components without Issues</th>
            <th style={columnStyleNumber}>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {frameworkSummaries.map((framework, index) => (
            <tr key={index}>
              <td style={columnStyleNumber}>{framework.rank}</td>
              <td style={columnStyleText}><Link to={`/${framework.slug}`} className="text-dark">{framework.name}</Link></td>
              <td style={columnStyleNumber}>{framework.totalComponents}</td>
              <td style={columnStyleNumber}>{framework.zeroIssuesCount}</td>
              <td style={columnStyleNumber}>{framework.percentageOfZeroIssues.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FrameworkOverviewSummary;
