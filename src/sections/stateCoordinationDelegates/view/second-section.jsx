// import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
// import Typography from '@mui/material/Typography';
// import "../"
// import Iconify from 'src/components/iconify';

// import AppTasks from '../app-tasks';
// import AppNewsUpdate from '../app-news-update';
// import AppOrderTimeline from '../app-order-timeline';
// import AppCurrentVisits from '../app-current-visits';
// import AppWebsiteVisits from '../app-website-visits';
// import AppWidgetSummary from '../app-widget-summary';
// import AppTrafficBySite from '../app-traffic-by-site';
// import AppCurrentSubject from '../app-current-subject';
// import AppConversionRates from '../app-conversion-rates';

// ! ==============
import { Box } from '@mui/material';

import '../dashboardStyles.css';
import DelegatesMap from '../delegates-map';
// import DelegatesCard from '../delegates-population-card';
import DelegatesHeader from '../delegates-header';
import DelegatesBullet from '../delegates-bullet';
// import DelegatesSecurity from '../delegates-security';
// import DelegatesCategories from '../delegates-categories';
import DelegatesPeriod from '../delegates-period';
import DelegatesWinnerCard from '../delegates-winner-card';
// import DelegatesWinnerInfo from '../delegates-winner-info';
import DelegatesSocialDemands from '../delegates-social-demands';
import DelegatesNumeraliaCard from '../delegates-numeralia-card';
import DelegatesComparativeByCandidacy from '../delegates-delegates-period';

// {/* <DelegatesWinnerInfo
//             sx={{
//               borderLeft: '1px solid',
//               borderColor: '#BBBDC0',
//               height: '100%',
//             }}
//             direction="column"
//             colorSection="#808285"
//             quantity="2,258"
//             title="Vivienda"
//             percentageText="Viviendas con hacinamiento"
//           /> */}

// ----------------------------------------------------------------------

export default function SecondSection() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {/* !=========== COLUMN LEFT START ===========! */}
          <Grid item xs={12} md={3}>
            {/* <Box sx={{ backgroundColor: 'lightgray', height: '100vh' }}> */}
            <Box sx={{ height: '100vh' }}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <DelegatesBullet title="Dtto Federal" description="12-Ciudad Serdán" />
                </Grid>

                <Grid item xs={12}>
                  <DelegatesBullet title="Distrito Local" description="15-Tecamachalco" />
                </Grid>

                <Grid item xs={12}>
                  <DelegatesBullet title="Delegado" description="Ricardo López Priego" />
                </Grid>

                <Grid xs={12}>
                  <DelegatesMap
                    title="Weekly Sales"
                    total={714000}
                    color="success"
                    icon={
                      <img
                        alt="icon"
                        className="map__image"
                        src="/assets/icons/glass/ic_glass_bag.png"
                      />
                    }
                  />
                </Grid>

                <Grid xs={12}>
                  <DelegatesPeriod
                    title="Seguridad"
                    icon={
                      <img
                        alt="icon"
                        className="map__image"
                        src="/assets/icons/glass/ic_glass_bag.png"
                      />
                    }
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* !=========== COLUMN LEFT START ===========! */}

          {/* !=========== COLUMN RIGHT START ===========! */}
          <Grid item xs={12} md={9}>
          {/* <Box sx={{ backgroundColor: 'pink', height: '100vh' }}> */}
          <Box sx={{ height: '100vh' }}>
          {/* !=========== UPPER SECTION START ===========! */}
              <Grid item container spacing={3}>
                {/* !=========== HEADER SECTION START ===========! */}
                <Grid item xs={12}>
                  <Box
                    className="header__main-container"
                    sx={{  height: '45vh' }}
                  >
                    {/* This component is absolute */}
                    <DelegatesHeader />

                    {/* Cards container */}
                    <Grid
                      container
                      spacing={3}
                      direction="row"
                      justifyContent="center"
                      alignItems="flex-end"
                      // sx={{ backgroundColor: 'lightblue', height: '100%' }}
                      sx={{ height: '100%' }}
                    >
                      <Grid xs={12} sm={6} md={4}>
                        <DelegatesNumeraliaCard
                          sx={{ height: '200px' }}
                          icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
                        />
                      </Grid>

                      <Grid xs={12} sm={6} md={8}>
                        <DelegatesWinnerCard sx={{ height: '200px' }} />
                        {/* <DelegatesEducation sx={{ height: '200px' }} /> */}
                      </Grid>

                      {/* <Grid xs={12} sm={6} md={4}>
                        <DelegatesMunicipalFinances
                          sx={{ height: '200px' }}
                          icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
                        />
                      </Grid> */}
                    </Grid>
                  </Box>
                </Grid>
                {/* !=========== HEADER SECTION END ===========! */}
           
              </Grid>
              {/* !=========== UPPER SECTION START ===========! */}

              {/* !=========== LOWER SECTION START ===========! */}
              <Grid item container spacing={3}>
                <Grid item xs={12} md={9}>
                  {/* <Box sx={{ backgroundColor: 'lightblue', height: '80vh' }}> */}
                  <Box sx={{  height: '50vh' }}>
                    <DelegatesComparativeByCandidacy
                      title="Seguridad"
                      icon={
                        <img
                          alt="icon"
                          className="map__image"
                          src="/assets/icons/glass/ic_glass_bag.png"
                        />
                      }
                    />
                  </Box>
                </Grid>

                {/* <Grid xs={12}>
                  <DelegatesSecurity
                    title="Seguridad"
                    icon={
                      <img
                        alt="icon"
                        className="map__image"
                        src="/assets/icons/glass/ic_glass_bag.png"
                      />
                    }
                  />
                </Grid> */}

                <Grid item container xs={12} md={3} spacing={3}>
                  <Grid item xs={12}>
                    <DelegatesSocialDemands
                      title="Grupos / Actores políticos"
                      sx={{ backgroundColor: '#941727' }}
                      icon={
                        <img
                          alt="icon"
                          className="map__image"
                          src="/assets/icons/glass/ic_glass_bag.png"
                        />
                      }
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <DelegatesSocialDemands
                      title="Situación política"
                      sx={{ backgroundColor: '#006438' }}
                      icon={
                        <img
                          alt="icon"
                          className="map__image"
                          src="/assets/icons/glass/ic_glass_bag.png"
                        />
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
              {/* !=========== LOWER SECTION START ===========! */}

              {/* !=========== COLUMN RIGHT END ===========! */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}