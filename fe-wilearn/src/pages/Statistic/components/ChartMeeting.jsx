import { Grid, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';

const ChartMeeting = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Attended Meetings',
        data: [10, 15, 12, 8, 10, 11, 14, 13, 9, 10, 16, 18],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Absent Meetings',
        data: [7, 12, 9, 6, 8, 9, 11, 10, 7, 8, 13, 15],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Total Meetings',
        data: [3, 3, 3, 2, 2, 2, 3, 3, 2, 2, 3, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
  };

  return (
  <Grid style={{maxWidth:'800px', marginLeft:'200px'}}>
    <Typography variant='h5'>Number of meetings</Typography>
    <Bar data={data} options={options} />
  </Grid>
  )
};

export default ChartMeeting;
