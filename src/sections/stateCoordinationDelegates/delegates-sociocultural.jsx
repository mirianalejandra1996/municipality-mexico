import PropTypes from 'prop-types';

// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import Stack from '@mui/material/Stack';
// import { CardHeader } from '@mui/material';
import { styled } from '@mui/material/styles';
// import { Card, List, Stack, ListItem, ListItemText } from '@mui/material';
import {
  Box,
  Card,
  List,
  Grid,
  Stack,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';

const StyledList = styled(List)({
  marginTop: '0 !important',
});
// .css-1mn3bel-MuiStack-root-MuiPaper-root-MuiCard-root>:not(style)~:not(style)

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 10px',
  color: 'white',
  '& .MuiListItemText-primary': {
    fontSize: '12px', // Cambia el tamaño de la fuente aquí
  },
}));

const StyledNumber = styled(ListItemIcon)(({ theme }) => ({
  color: '#941727',
  fontSize: 15,
  fontWeight: 'bold',
  // minWidth: 100,
  // maxWidth: 100,
  width: 100,
  textAlign: 'right',
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: 'white', // Cambia este color según tus necesidades
  height: '2px', // Cambia este valor según el grosor que desees
}));

// const items = ['Item 1', 'Item 2', 'Item 3'];
// const items = ['Item 1', 'Item 2', 'Item 3'];

// ----------------------------------------------------------------------
export default function DelegatesSociocultural({ title, icon, sx, ...other }) {
  return (
    <Card
      component={Stack}
      spacing={3}
      sx={{
        p: 1,
        color: 'white',
        backgroundColor: '#B0A834',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        ...sx,
      }}
      {...other}
    >
      <Grid container>
        <Grid xs={12}>
          <div className="row justify-center">
            <Box sx={{ width: 40, height: 40, marginRight: '10px' }}>
              <img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />
            </Box>

            <div className="column">
              <h3
                className="height-fit-content text-align-center"
                style={{ color: 'white', backgroundColor: '#941727' }}
              >
                Socioculturales
              </h3>
            </div>
          </div>
        </Grid>
        {/* <CardHeader title={title} subheader={subheader} sx={{ mb: 5 }} /> */}
        {/* <div style={{ display: 'flex', gap: 10 }}>
          {icon && <Box sx={{ width: 40, height: 40 }}>{icon}</Box>}
          <h3>{title}</h3>
        </div> */}

        <Grid xs={12}>
        <StyledList disablePadding>
          <StyledListItem secondaryAction="">
            <StyledNumber>248:</StyledNumber>
            <ListItemText primary=" Población indígena" />
          </StyledListItem>
          <StyledListItem secondaryAction="">
            <StyledNumber>Festividad:</StyledNumber>
            <ListItemText
              primary="15 de agosto (Virgen de la
Asunción de María)
"
            />
          </StyledListItem>
          <StyledDivider variant="inset" component="li" />

          <StyledListItem secondaryAction="">
            <StyledNumber>Turismo:</StyledNumber>
            <ListItemText
              primary="Ex-convento Franciscano, la
Iglesia del Calvario, Parroquia de la Asunción,
Fundición Hacienda del Moral
"
            />
          </StyledListItem>
          <StyledDivider variant="inset" component="li" />

          <StyledListItem secondaryAction="">
            <StyledNumber>Gastronomía:</StyledNumber>
            <ListItemText primary="mole poblano" />
          </StyledListItem>
        </StyledList>
        </Grid>

      </Grid>
    </Card>
  );
}

DelegatesSociocultural.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
