import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import BajajAreaChartCard from './BajajAreaChartCard';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true)
  }, [])

  if (show) return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <BajajAreaChartCard />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <BajajAreaChartCard />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <BajajAreaChartCard />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <BajajAreaChartCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={8}>
            <BajajAreaChartCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
  return (<>...Loading</>)
};

export default Dashboard;