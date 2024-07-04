import PropTypes from 'prop-types';

// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import Stack from '@mui/material/Stack';
import { Box, Grid, CardContent } from '@mui/material';

// import AppWidgetSummary from './app-widget-summary';
// import Typography from '@mui/material/Typography';

// import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export default function DelegatesWinnerInfo({
  title,
  total,
  icon,
  color = 'primary',
  sx,
  colorSection,
  quantity,
  percentageText,
  hasPercentage = false,
  direction = 'row',
  ...other
}) {
  return (
    <CardContent
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px !important',
        ...sx,
      }}
    >
      <Grid container>
        {/* <h3 style={{ color: 'white', backgroundColor: '#808285' }}>Numeralia</h3> */}
        {/* <Grid xs={12}>
          <div className="justify-end">
            <Box sx={{ width: 40, height: 40, marginRight: '20px' }}>
              <img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />
            </Box>
          </div>
        </Grid> */}

        <Grid xs={12}>
          <div style={{ display: 'flex', justifyContent: 'start' }}>
            <h3 style={{ color: 'white', backgroundColor: 'black' }}>Resultados 2024</h3>
          </div>
        </Grid>

        {/* Winner name and image section start */}
        <Grid xs={12}>
          <div style={{ gap: 10 }} className="row">
            <div className="row">
              <Box sx={{ width: 80, height: 80, marginRight: '10px' }}>
                <img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />
              </Box>
              <div>
                <h4>MATEO HERNÁNDEZ LÓPEZ</h4>
                <p>PDTE ELECTO:</p>
              </div>
            </div>
          </div>
        </Grid>
        {/* Winner name and image section end */}

        <Grid xs={12} md={4}>
          <div className="vertical-line--right">
            <div className="column">
              <h3>Edad</h3>
              <h5>00</h5>
            </div>
          </div>
        </Grid>

        <Grid xs={12} md={6}>
          <div className="column">
            <h3>Tel.</h3>
            <h5>222222222</h5>
          </div>
        </Grid>
      </Grid>
    </CardContent>
  );
}

DelegatesWinnerInfo.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
  quantity: PropTypes.number,
  colorSection: PropTypes.string,
  percentageText: PropTypes.string,
  direction: PropTypes.string,
  hasPercentage: PropTypes.bool,
};

// {/* <Grid xs={12}>
// <div>
//   <h3 style={{ color: 'white', backgroundColor: 'black' }}>Numeralia</h3>
// </div>
// </Grid>
// <Grid xs={12}>
// <div className="justify-end">
// <Box sx={{ width: 40, height: 40, marginRight: '20px' }}>
//   <img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />
// </Box>
// </div>
// </Grid> */}
