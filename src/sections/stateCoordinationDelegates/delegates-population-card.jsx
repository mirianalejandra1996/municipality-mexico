import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { Grid, CardContent } from '@mui/material';
// import Typography from '@mui/material/Typography';

// import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export default function DelegatesPopulationCard({ title, total, icon, color = 'primary', sx, ...other }) {
  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"
      sx={{
        // px: 3,
        p: 1,
        height: 150,
        borderRadius: 2,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        ...sx,
      }}
      {...other}
    >
      {/* children must be here */}
      <CardContent
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          // alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0px !important',
          // fontSize: '12px',
          ...sx,
        }}
      >
        <Grid container>
          <Grid xs={12}>
            <div style={{ display: 'flex', gap: 10 }}>
              {icon && <Box sx={{ width: 50, height: 50 }}>{icon}</Box>}
              <Stack>
                <h5 className='red'>Población</h5>
                <h2>80,771</h2>
              </Stack>
            </div>
          </Grid>

          <Grid xs={12} md={6}>
            <div className='vertical-line--right' >
              <div className="row">
                <Box sx={{ width: 20, height: 20, marginRight: '2px' }}>{icon}</Box>
                <p className="small">51.99%</p>
              </div>

              <div className="row">
                <Box sx={{ width: 20, height: 20, marginRight: '2px' }}>{icon}</Box>
                <p className="small">48.01%</p>
              </div>
            </div>
          </Grid>

          <Grid xs={12} md={6}>
            <p className="small">Urbana: 51.99%</p>
            <p className="small">Rural: 48.01%</p>
          </Grid>

          <Grid xs={12}>
            <div className='horizontal-line--top'>
            <div className="row">
              <p className="small">Jóvenes (18-29): 17,134</p>
            </div>
            <div className="row">
              <p className="small">3a edad (60-más): 6,648</p>
            </div>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

DelegatesPopulationCard.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
