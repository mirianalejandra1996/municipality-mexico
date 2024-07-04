import PropTypes from 'prop-types';

// import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

import DelegatesEducation from './delegates-winner-result';

// import AppWidgetSummary from './app-widget-summary';
// import Typography from '@mui/material/Typography';

// import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export default function DelegatesCategories({
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
        borderRadius: 2,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#E6E7E8',
        height: '100%',
        ...sx,
      }}
      {...other}
    >
      <Grid container spacing={3} sx={{ height: '100%' }}>
        <Grid xs={12} sm={6} md={4}>
          <DelegatesEducation
            colorSection="#006438"
            quantity="20.15"
            hasPercentage
            title="Educación"
            percentageText="Rezago educativo"
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <DelegatesEducation
            sx={{
              borderLeft: '1px solid',
              borderColor: '#BBBDC0',
              height: '100%',
            }}
            direction="column"
            colorSection="#B0A834"
            quantity="39.5"
            hasPercentage
            title="Salud"
            percentageText="Población no afiliada a servicios de salud"
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <DelegatesEducation
            sx={{
              borderLeft: '1px solid',
              borderColor: '#BBBDC0',
              height: '100%',
            }}
            direction="column"
            colorSection="#808285"
            quantity="2,258"
            title="Vivienda"
            percentageText="Viviendas con hacinamiento"
          />
        </Grid>
      </Grid>
    </Card>
  );
}

DelegatesCategories.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
