import PropTypes from 'prop-types';

// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import Stack from '@mui/material/Stack';
// import { CardHeader } from '@mui/material';
import { styled } from '@mui/material/styles';
// import { Card, List, Stack, ListItem, ListItemText } from '@mui/material';
import { Card, List, Stack, ListItem } from '@mui/material';

const StyledList = styled(List)({
  marginTop: "0 !important",
});
// .css-1mn3bel-MuiStack-root-MuiPaper-root-MuiCard-root>:not(style)~:not(style)

const StyledListItem = styled(ListItem)(({ theme }) => ({
  backgroundColor: '#D9D9D9',
  border: '1px solid #fff',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 10px',
  color: 'black',
}));

const Number = styled('div')({
  marginRight: 10,
});

const items = ['Item 1', 'Item 2', 'Item 3'];

// ----------------------------------------------------------------------
export default function DelegatesSocialDemands({ title, icon, sx, ...other }) {
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
      {/* <CardHeader title={title} subheader={subheader} sx={{ mb: 5 }} /> */}
      <h3>{title}</h3>
      {/* <CardHeader title={title} subheader={subheader} sx={{ mb: 5 }} /> */}
      <StyledList >
        {items.map((item, index) => (
          <StyledListItem key={index}>
            <Number>{index + 1}</Number>
            {/* <ListItemText primary={item} /> */}
          </StyledListItem>
        ))}
      </StyledList>
    </Card>
  );
}

DelegatesSocialDemands.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
