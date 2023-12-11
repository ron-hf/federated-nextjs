import { useEffect } from 'react';
import dynamic from 'next/dynamic'

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, Grid, Typography } from '@mui/material';

// third-party
import ApexCharts from 'apexcharts';

// project imports
import chartData from './chart-data/bajaj-area-chart';
import { orange } from '@mui/material/colors';

// ===========================|| DASHBOARD DEFAULT - BAJAJ AREA CHART CARD ||=========================== //

const BajajAreaChartCard = () => {
  const Chart = dynamic(async () => await import('react-apexcharts'), { ssr: false });
  const theme = useTheme();

  const orangeDark = orange[600]

  useEffect(() => {
    const newSupportChart = {
      ...chartData.options,
      colors: [orangeDark],
      tooltip: {
        theme: 'light'
      }
    };
    ApexCharts.exec(`support-chart`, 'updateOptions', newSupportChart);
  }, [orangeDark, theme]);

  return (
    <Card sx={{ bgcolor: 'secondary.light' }}>
      <Grid container sx={{ p: 2, pb: 0, color: '#fff' }}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.dark }}>
                Bajaj Finery
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" sx={{ color: theme.palette.grey[800] }}>
                $1839.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" sx={{ color: theme.palette.grey[800] }}>
            10% Profit
          </Typography>
        </Grid>
      </Grid>
      { (typeof window !== "undefined") &&
        <Chart type='area' {...chartData }/>
      }
    </Card>
  );
};

export default BajajAreaChartCard;