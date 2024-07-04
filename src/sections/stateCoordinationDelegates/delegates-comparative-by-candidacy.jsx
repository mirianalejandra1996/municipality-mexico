import PropTypes from 'prop-types';

// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import Stack from '@mui/material/Stack';
// import { CardHeader } from '@mui/material';
import { styled } from '@mui/material/styles';
// import { Card, List, Stack, ListItem, ListItemText } from '@mui/material';
import { Box, Card, Grid, Stack, Divider } from '@mui/material';

const StyledDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: '#941727', // Cambia este color según tus necesidades
  height: '2px', // Cambia este valor según el grosor que desees
  marginTop: '10px',
  marginBottom: '10px',
}));

// const items = ['Item 1', 'Item 2', 'Item 3'];
// const items = ['Item 1', 'Item 2', 'Item 3'];

// ----------------------------------------------------------------------
export default function DelegatesComparativeByCandidacy({ title, icon, sx, ...other }) {
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
          <div className="row">
            <h3
              className="height-fit-content text-align-center"
              style={{ color: 'white', backgroundColor: '#B0A834' }}
            >
              Gobierno 2021-2024
            </h3>
            <Box sx={{ width: 80, height: 80, marginLeft: '10px' }}>
              <img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />
            </Box>
          </div>
        </Grid>

        <Grid xs={12}>
          <div style={{ gap: 10 }} className="row">
            <h4>Partido Gobernante</h4>
            <div className="row">
              <Box sx={{ width: 20, height: 20, marginRight: '3px' }}>
                <img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />
              </Box>
            </div>
          </div>
        </Grid>

        <Grid xs={12}>
          <div style={{ gap: 10 }} className="row">
            <h4>Votación Ganador:</h4>
            <h4 className="red">11,765</h4>
          </div>
        </Grid>

        <Grid xs={12}>
          <StyledDivider />
        </Grid>

        <Grid xs={12}>
          <div style={{ gap: 10 }} className="row">
            <p>Dip. Fed:</p>
          </div>
        </Grid>

        <Grid xs={12}>
          <div style={{ gap: 10 }} className="row">
            <p>Dip. Local:</p>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}

DelegatesComparativeByCandidacy.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
