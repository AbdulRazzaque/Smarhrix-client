import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
const Chartbar = () => {

  const chartSetting = {
    yAxis: [
      {
        label: 'rainfall (mm)',
      },
    ],
  
    height: 500,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
      color:"red"
    },
  };
  const dataset = [
    {
    
      newYork: 86,
      seoul: 21,
      month: 'Jan',
    },
    {
   
      newYork: 78,
      seoul: 28,
      month: 'Fev',
    },
    {
   
      newYork: 106,
      seoul: 41,
      month: 'Mar',
    },
    {
    
      newYork: 92,
      seoul: 73,
      month: 'Apr',
    },
    {
      
      newYork: 92,
      seoul: 99,
      month: 'May',
    },
    {
      
      newYork: 103,
      seoul: 144,
      month: 'June',
    },
    {
     
      newYork: 105,
      seoul: 319,
      month: 'July',
    },
    {
      
      newYork: 106,
      seoul: 249,
      month: 'Aug',
    },
    {
      
      newYork: 95,
      seoul: 131,
      month: 'Sept',
    },
    {
      
      newYork: 97,
      seoul: 55,
      month: 'Oct',
    },
    {
      
      newYork: 76,
      seoul: 48,
      month: 'Nov',
    },
    {
     
      newYork: 103,
      seoul: 25,
      month: 'Dec',
    },
  ];
  
  const valueFormatter = (value) => `${value}mm`;
  return (
    <div className='border border-dark rounded  m-2 mb-4'>
      <h3 style={{color:'#2F69FF'}}>Statistics</h3>
      <hr />
       <BarChart
    dataset={dataset}
    xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
    series={[
     
      { dataKey: 'newYork', label: 'CANDIDATE', valueFormatter },
      { dataKey: 'seoul', label: 'JOBS', valueFormatter },
    ]}
    {...chartSetting}
  />

    </div>
   
  )
}

export default Chartbar