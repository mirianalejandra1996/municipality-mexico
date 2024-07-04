import PropTypes from 'prop-types';

// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import Stack from '@mui/material/Stack';
// import { CardHeader } from '@mui/material';
// import { Card, List, Stack, ListItem, ListItemText } from '@mui/material';
// import { Box, Card, Grid, Stack } from '@mui/material';
import { Card, Grid, Stack } from '@mui/material';

import DelegatesPovertyLevel from './delegates-poverty-level';

// const items = ['Item 1', 'Item 2', 'Item 3'];
// const items = ['Item 1', 'Item 2', 'Item 3'];

// ----------------------------------------------------------------------
export default function DelegatesPoverty({ title, icon, sx, ...other }) {
  return (
    <Card
      component={Stack}
      spacing={3}
      sx={{
        p: 1,
        // backgroundColor: '#E6E7E8',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        ...sx,
      }}
      {...other}
    >
      <Grid container direction="column" justifyContent="space-between" alignItems="flex-start">
        <Grid>
          <DelegatesPovertyLevel />
        </Grid>

        {/* <Grid sx={{ backgroundColor: 'pink', height: '50%' }}> */}
        <Grid sx={{ height: '50%' }}>
          <DelegatesPovertyLevel />
        </Grid>
      </Grid>
    </Card>
  );
}

DelegatesPoverty.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
