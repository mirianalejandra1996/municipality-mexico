import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { Grid, CardContent } from '@mui/material';
// import Typography from '@mui/material/Typography';

// import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export default function DelegatesMunicipalFinances({
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
                <h5 className='red'>Finanzas municipales</h5>
                <strong className="smaller">(2022) millones de pesos</strong>
              </Stack>
            </div>
          </Grid>

          <Grid xs={12} md={12}>
            <div className="row justify-between">
              <p className="small">Participaciones</p>
              <h5 style={{ backgroundColor: "#FDF9CB", padding: 5}}>82.5</h5>
            </div>
            <div className="row justify-between">
              <p className="small">Ramo 33 FISM Fortamun</p>
              <h5 style={{ backgroundColor: "#941727", padding: 5, color: "white"}}>106.3</h5>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

DelegatesMunicipalFinances.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
