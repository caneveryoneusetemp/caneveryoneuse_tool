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

const getTrophyIcon = (rank) => {
  const trophyStyles = { width: '16px', verticalAlign: 'middle', marginLeft: '5px' };
  switch(rank) {
    case 1:
      return <img src="/images/trophy-gold.svg" style={trophyStyles} alt="Gold Trophy" />;
    case 2:
      return <img src="/images/trophy-silver.svg" style={trophyStyles} alt="Silver Trophy" />;
    case 3:
      return <img src="/images/trophy-bronze.svg" style={trophyStyles} alt="Bronze Trophy" />;
    default:
      return null;
  }
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

  const rankStyle = {
    textAlign: 'left', 
  };
  const textStyle = {
    textAlign: 'left',
  };
  const numberStyle = {
    textAlign: 'right',
  };

  const rankAndTrophyStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  };

  return (
    <div className="container">
      <h2>Framework Summary Overview</h2>
      <table className="table">
        <thead>
          <tr>
            <th style={rankStyle}>Rank</th>
            <th style={textStyle}>Framework</th>
            <th style={numberStyle}>Total Components</th>
            <th style={numberStyle}>Components with Zero Issues</th>
            <th style={numberStyle}>Percentage of Zero Issues</th>
          </tr>
        </thead>
        <tbody>
          {frameworkSummaries.map((framework, index) => (
            <tr key={index}>
              <td style={rankStyle}>
                <div style={rankAndTrophyStyle}>
                  <span>{framework.rank}</span>
                  {getTrophyIcon(framework.rank)}
                </div>
              </td>
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
