import PropTypes from 'prop-types';

// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import Stack from '@mui/material/Stack';
import { Box, Grid, CardContent } from '@mui/material';

// import AppWidgetSummary from './app-widget-summary';
// import Typography from '@mui/material/Typography';

// import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export default function DelegatesWinnerResult({
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
        <Grid xs={12}>
          <div className="justify-end">
            <Box sx={{ width: 40, height: 40, marginRight: '20px' }}>
              <img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />
            </Box>
          </div>
        </Grid>

       

        {/* Images section start */}
        <Grid xs={12}>
          <div style={{ gap: 10 }} className="row justify-between">
            {/* !=========== WINNER IMAGES LEFT SECTION START ===========! */}
            <div style={{ gap: 10 }} className="row">
              <h4>Ganador</h4>
              <div className="row">
                <Box sx={{ width: 20, height: 20, marginRight: '3px' }}>
                  <img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />
                </Box>
                <Box sx={{ width: 20, height: 20, marginRight: '3px' }}>
                  <img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />
                </Box>
                <Box sx={{ width: 20, height: 20, marginRight: '3px' }}>
                  <img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />
                </Box>
              </div>
            </div>
            {/* !=========== WINNER IMAGES LEFT SECTION END ===========! */}

            {/* !=========== WINNER IMAGES RIGHT SECTION START ===========! */}
            <div style={{ gap: 10 }} className="row">
              <h4>Sigló</h4>
              <div className="row">
                <Box sx={{ width: 20, height: 20, marginRight: '3px' }}>
                  <img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />
                </Box>
              </div>
            </div>
            {/* !=========== WINNER IMAGES RIGHT SECTION END ===========! */}
          </div>
        </Grid>
        {/* Images section end */}

        <Grid xs={12}>
          <div className="justify-center red">
            <h2>Votación: 18,088</h2>
          </div>
        </Grid>

        <Grid xs={12}>
          <div className="justify-end">
            <h3>(50.7%)</h3>
          </div>
        </Grid>

        {/* Second position start */}
        <Grid xs={12}>
          <div style={{ gap: 10 }} className="row">
            <h4>2° Lugar: 11,378 (31.8%)</h4>
            <div className="row">
              <Box sx={{ width: 20, height: 20, marginRight: '3px' }}>
                <img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />
              </Box>
            </div>
          </div>
        </Grid>
        {/* Second position end */}

        {/* Third position start */}
        <Grid xs={12}>
          <div style={{ gap: 10 }} className="row">
            <h4>3er Lugar: 1,823 (5.1%)</h4>
            <div className="row">
              <Box sx={{ width: 20, height: 20, marginRight: '3px' }}>
                <img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />
              </Box>
              <Box sx={{ width: 20, height: 20, marginRight: '3px' }}>
                <img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />
              </Box>
              <Box sx={{ width: 20, height: 20, marginRight: '3px' }}>
                <img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />
              </Box>
            </div>
          </div>
        </Grid>
        {/* Third position end */}
      </Grid>
    </CardContent>
  );
}

DelegatesWinnerResult.propTypes = {
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
