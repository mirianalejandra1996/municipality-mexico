import PropTypes from 'prop-types';

// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import Stack from '@mui/material/Stack';
import {  CardContent } from '@mui/material';

// import AppWidgetSummary from './app-widget-summary';
// import Typography from '@mui/material/Typography';

// import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export default function DelegatesEducation({
  title,
  total,
  icon,
  color = 'primary',
  sx,
  colorSection,
  quantity,
  percentageText,
  hasPercentage = false,
  direction = "row",
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
      padding: "10px !important",
      ...sx,
    }}
  >
    <h3 style={{ color: "white", backgroundColor: colorSection}}>{title}</h3>

    <div className={`categories__percentage-container ${direction}`}>
      <h2 className='category__title' style={{ color: colorSection}}>{quantity} {hasPercentage && "%"}</h2>
      <strong>{percentageText}</strong>
    </div>
    <table className="custom-table">
      <thead>
        <tr>
          <th>NIVEL </th>
          <th>ESCUELAS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Preescolar</td>
          <td>41</td>
        </tr>
        <tr>
          <td>Primaria </td>
          <td>39</td>
        </tr>
        <tr>
          <td>Secundaria</td>
          <td>22</td>
        </tr>

        <tr>
          <td>Media Superior</td>
          <td>19</td>
        </tr>

        <tr>
          <td>Superior</td>
          <td>6</td>
        </tr>
      </tbody>
    </table>
  </CardContent>
  );
}

DelegatesEducation.propTypes = {
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
