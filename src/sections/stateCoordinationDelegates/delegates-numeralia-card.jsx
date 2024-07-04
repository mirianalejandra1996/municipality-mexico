import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { Grid, CardContent } from '@mui/material';
// import Typography from '@mui/material/Typography';

// import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export default function DelegatesNumeraliaCard({
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
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <h3 style={{ color: 'white', backgroundColor: '#808285' }}>Numeralia</h3>
            </div>
          </Grid>

          {/* <h5 className='red'>Población ocupada</h5> */}
          {/* <h2>38,515</h2> */}

          <Grid xs={12}>
            <div className="horizontal-line--bottom column justify-end align-end">
              <h5 className="red">Listado nominal</h5>
              <h2>59,783</h2>
            </div>
          </Grid>

          <Grid xs={12} md={6}>
            <div className="vertical-line--right">
              <div className="column justify-center align-center">
                <h2 className="red">58.3%</h2>
                <h5 className="text-align-center">Secciones</h5>
              </div>
            </div>
          </Grid>

          <Grid xs={12} md={6}>
            <div className="column justify-center align-center">
              <h2 className="red">58.3%</h2>
              <h5 className="text-align-center">Participación electoral</h5>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

DelegatesNumeraliaCard.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
