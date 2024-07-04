import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { Grid, CardContent } from '@mui/material';
// import Typography from '@mui/material/Typography';

// import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export default function DelegatesWorkingPopulationCard({
  title,
  total,
  icon,
  color = 'primary',
  sx,
  ...other
}) {
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
                <h5 className='red'>Población ocupada</h5>
                <h2>38,515</h2>
              </Stack>
            </div>
          </Grid>

          <Grid xs={12} md={2}>
            <Box sx={{ width: 20, height: 20, marginRight: '2px' }}>{icon}</Box>
          </Grid>

          <Grid xs={12} md={10}>
            <div className="vertical-line--left">
              <div className='column'>
                <h5>2.58%</h5>
                <p className="small">Aportación agrícola estatal</p>
              </div>
              <div className='column'>
                <h5>2.58%</h5>
                <p className="small">Aportación agrícola estatal</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

DelegatesWorkingPopulationCard.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
