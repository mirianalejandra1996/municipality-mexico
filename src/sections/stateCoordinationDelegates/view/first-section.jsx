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
import DelegatesPeriod from '../delegates-period';
import DelegatesSecurity from '../delegates-security';
// import DelegatesCategories from '../delegates-categories';
import DelegatesCategories from '../delegates-categories';
import DelegatesSociocultural from '../delegates-sociocultural';
import DelegatesSocialDemands from '../delegates-social-demands';
import DelegatesPopulationCard from '../delegates-population-card';
import DelegatesMunicipalFinances from '../delegates-municipal-finances';
import DelegatesWorkingPopulationCard from '../delegates-working-population-card';

// ----------------------------------------------------------------------

export default function FirstSection() {
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
                  <DelegatesSocialDemands
                    title="Demandas Sociales"
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
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* !=========== COLUMN LEFT START ===========! */}

          {/* !=========== COLUMN RIGHT START ===========! */}
          <Grid item xs={12} md={9}>
            <Box sx={{ backgroundColor: 'pink', height: '100vh' }}>
              {/* !=========== UPPER SECTION START ===========! */}
              <Grid item container spacing={3}>
                {/* !=========== HEADER SECTION START ===========! */}
                <Grid item xs={12} md={9}>
                  <Box
                    className="header__main-container"
                    sx={{ backgroundColor: 'lightblue', height: '45vh' }}
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
                        <DelegatesPopulationCard
                          sx={{ height: '200px' }}
                          icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
                        />
                      </Grid>

                      <Grid xs={12} sm={6} md={4}>
                        <DelegatesWorkingPopulationCard
                          sx={{ height: '200px' }}
                          icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
                        />
                      </Grid>

                      <Grid xs={12} sm={6} md={4}>
                        <DelegatesMunicipalFinances
                          sx={{ height: '200px' }}
                          icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                {/* !=========== HEADER SECTION END ===========! */}

                <Grid item xs={12} md={3}>
                  {/* <Box sx={{ backgroundColor: 'lightblue', height: '40vh' }}> */}
                  <Box sx={{ height: '40vh' }}>
                    <div className="delegate__container">
                      <DelegatesBullet
                        align="right"
                        title="Delegado"
                        description="Ricardo López Priego"
                      />
                    </div>
                  </Box>
                </Grid>
              </Grid>
              {/* !=========== UPPER SECTION START ===========! */}

              {/* !=========== LOWER SECTION START ===========! */}
              <Grid
                item
                container
                spacing={3}
                sx={{ backgroundColor: '#20EEC9', position: 'relative' }}
              >
                <Grid
                  item
                  xs={12}
                  md={8}
                  // sx={{ position: 'absolute', right: 0, backgroundColor: 'red', zIndex: 100}}
                  sx={{ position: 'absolute', right: 0, zIndex: 100}}
                >
                  <DelegatesCategories />
                </Grid>
                {/* <div style={{position: "absolute", right: 0, backgroundColor: "red"}}>
                    <DelegatesCategories />
                </div> */}

                {/* <Grid item xs={12} md={8}>
                  <Box sx={{ backgroundColor: 'lightblue', height: '90vh' }}>
                    <div className="delegate__container">
                      <DelegatesBullet
                        align="right"
                        title="Delegado"
                        description="Ricardo López Priego"
                      />
                    </div>
                  </Box>
                </Grid> */}

                <Grid xs={12} md={8}>
                <Box sx={{ backgroundColor: 'lightblue', height: '90vh' }}>

                  <DelegatesPeriod
                    sx={{ height: '100%' }}
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

                <Grid item xs={12} md={4}>
                  <Box
                    sx={{
                      backgroundColor: 'lightblue',
                      height: '90vh',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                    }}
                  >
                    {/* <Box sx={{ backgroundColor: 'lightblue', height: '80vh' }}> */}
                    <DelegatesSociocultural />
                  </Box>
                </Grid>

                {/* !=========== HEADER SECTION START ===========! */}
                {/* This component should be absolute */}
                {/* Cards container */}
                {/* <Grid item xs={12} md={9}>
                  <Box>
                    <Grid
                      container
                      spacing={3}
                      direction="row"
                      justifyContent="center"
                      alignItems="flex-end"
                      sx={{ height: '100%' }}
                    >
                      <Grid xs={12} sx={{ height: '100%' }}>
                        <DelegatesCategories />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid> */}
                {/* !=========== HEADER SECTION END ===========! */}
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