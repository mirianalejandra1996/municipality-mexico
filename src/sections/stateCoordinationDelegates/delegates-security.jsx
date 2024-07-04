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
  // backgroundColor: '#D9D9D9',
  // border: '1px solid #fff',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 10px',
  color: 'white',
}));

const StyledNumber = styled(ListItemIcon)(({ theme }) => ({
  // backgroundColor: '#D9D9D9',
  // border: '1px solid #fff',
  // display: 'flex',
  // justifyContent: 'space-between',
  // padding: '0 10px',
  color: 'white',
  fontSize: 26,
  minWidth: 100,
  textAlign: 'right',
}));

// const Number = styled('div')({
//   marginRight: 10,
//   fontSize: 26,
// });

const StyledDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: 'white', // Cambia este color según tus necesidades
  height: '2px', // Cambia este valor según el grosor que desees
}));

// const items = ['Item 1', 'Item 2', 'Item 3'];
// const items = ['Item 1', 'Item 2', 'Item 3'];

// ----------------------------------------------------------------------
export default function DelegatesSecurity({ title, icon, sx, ...other }) {
  return (
    <Card
      component={Stack}
      spacing={3}
      sx={{
        p: 1,
        color: 'white',
        backgroundColor: '#0E274C',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        ...sx,
      }}
      {...other}
    >
      {/* <CardHeader title={title} subheader={subheader} sx={{ mb: 5 }} /> */}
      <div style={{ display: 'flex', gap: 10 }}>
        {icon && <Box sx={{ width: 40, height: 40 }}>{icon}</Box>}
        <h3>{title}</h3>
      </div>
      {/* <CardHeader title={title} subheader={subheader} sx={{ mb: 5 }} /> */}

      {/* <StyledList>
        {items.map((item, index) => (
          <div key={index}>
            <StyledListItem key={index}>
              <Number>{index + 1}</Number>
              <ListItemText primary={item} />
            </StyledListItem>
            {index < items.length - 1 && <StyledDivider />}
          </div>
        ))}
      </StyledList> */}
      <StyledList
        // dense
        // secondaryAction={
        //   <div className="list__right-container">
        //     <p className="message-box__user-time">10:26 am</p>
        //   </div>
        // }

        disablePadding
      >
        <StyledListItem secondaryAction="">
          <StyledNumber>86</StyledNumber>
          <ListItemText primary="policias mpales" />
        </StyledListItem>
        <StyledListItem secondaryAction="">
          <StyledNumber>05</StyledNumber>
          <ListItemText primary="agentes del MP" />
        </StyledListItem>
        <StyledDivider variant="inset" component="li" />

        <StyledListItem secondaryAction="">
          <StyledNumber>1,056</StyledNumber>
          <ListItemText primary="hogares victimas de delitos" />
        </StyledListItem>
        <StyledDivider variant="inset" component="li" />

        <StyledListItem secondaryAction="">
          <StyledNumber>65</StyledNumber>
          <ListItemText primary="delitos violencia familiar" />
        </StyledListItem>

        {/* {items.map((item, index) => (
          <div key={index}>{index < items.length - 1 && <StyledDivider />}</div>
        ))} */}
      </StyledList>
    </Card>
  );
}

// {/* <StyledList>
// {items.map((item, index) => (
//   <StyledListItem key={index}>
//     <Number>{index + 1}</Number>
//     <ListItemText primary={item} />
//   </StyledListItem>
// ))}
// </StyledList> */}

DelegatesSecurity.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
