// import PropTypes from 'prop-types';

import { Grid } from "@mui/material";

import Iconify from "src/components/iconify";

// ----------------------------------------------------------------------

export default function DelegatesHeader() {

  return (
    <div className="header__red-container">
    <Grid container spacing={1} direction="row">
      <Grid item>
        <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />
      </Grid>
      <Grid item xs>
        <h4>Sistema de Informacion Estratégica</h4>
        <p>Coordinación Estatal de Delegados</p>
      </Grid>

      <Grid item>
        <div className="header__municipality-container">
          <p>Municipio</p>
          <span className="header__municipality-name">Tecamachalco</span>
        </div>
      </Grid>
    </Grid>
  </div>
  );
}

// DelegatesHeader.propTypes = {
//   chart: PropTypes.object,
//   subheader: PropTypes.string,
//   title: PropTypes.string,
// };
