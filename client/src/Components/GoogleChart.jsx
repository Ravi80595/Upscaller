// GoogleChart.js
import React from 'react';
import Chart from 'react-google-charts';

const GoogleChart = () => {
  const chartData = [
    ['Task', 'Hours per Day'],
    ['To-Do', 11],
    ['In-Progress', 2],
    ['Done', 2],
    // ['Watch TV', 2],
    // ['Sleep', 7],
  ];

  return (
    <div style={{border: '1px solid #ddd',
      padding: '10px',
      margin: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
      <Chart
        chartType="PieChart"
        loader={<div>Loading Chart...</div>}
        data={chartData}
        options={{
          title: 'Today updates',
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  );
};

export default GoogleChart;
