import PropTypes from 'prop-types';

import { Box, Card, Grid, Stack } from '@mui/material';

import DelegatesComparativeChart from './delegates-comparative-chart';
// ----------------------------------------------------------------------
export default function DelegatesPeriod({ title, icon, sx, ...other }) {
  return (
    <Card
      component={Stack}
      spacing={3}
      sx={{
        p: 1,
        backgroundColor: '#E6E7E8',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        ...sx,
      }}
      {...other}
    >
      <Grid container>
        <Grid xs={12}>
          <div className="row justify-end">
            <Box sx={{ width: 80, height: 80, marginLeft: '10px' }}>
              <img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />
            </Box>

            <div className="column">
              <h3
                className="height-fit-content text-align-center"
                style={{ color: 'white', backgroundColor: '#B0A834' }}
              >
                Votación 2024
              </h3>
              <p>comparativo por candidatura</p>
            </div>
          </div>
        </Grid>

        <Grid xs={12}>
          <DelegatesComparativeChart
          />
        </Grid>

      </Grid>
    </Card>
  );
}

DelegatesPeriod.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
