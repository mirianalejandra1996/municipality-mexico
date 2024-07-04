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

                  {/* <DelegatesWinnerInfo
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
                  /> */}
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
                <Grid item xs={12}>
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

                {/* <Box sx={{ backgroundColor: 'lightblue', height: '40vh' }}> */}
                {/* <Grid item xs={12} md={3}>
                  <Box sx={{ height: '40vh' }}>
                    <div className="delegate__container">
                      <DelegatesBullet
                        align="right"
                        title="Delegado"
                        description="Ricardo López Priego"
                      />
                    </div>
                  </Box>
                </Grid> */}
              </Grid>
              {/* !=========== UPPER SECTION START ===========! */}

              {/* !=========== LOWER SECTION START ===========! */}
              <Grid item container spacing={3}>
                <Grid item xs={12} md={9}>
                  {/* <Box sx={{ backgroundColor: 'lightblue', height: '80vh' }}> */}
                  <Box sx={{ backgroundColor: 'lightblue', height: '50vh' }}>
                    <div className="delegate__container">
                      <DelegatesBullet
                        align="right"
                        title="Delegado"
                        description="Ricardo López Priego"
                      />
                    </div>
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

                {/* <Grid xs={12}>
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
                </Grid> */}

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

          {/* <Box sx={{ backgroundColor: 'lightblue', height: '100vh' }}>
              Contenido de la columna derecha
            </Box> */}
          {/* <Grid item xs={12} md={8}>
            <Box sx={{ backgroundColor: 'lightblue', height: '100vh' }}>
              Contenido de la columna derecha
            </Box>
          </Grid> */}
        </Grid>
      </Box>
    </Container>
  );
}

// export default function AppView() {
//   return (
//     <Container maxWidth="xl">
//       <Typography variant="h4" sx={{ mb: 5 }}>
//         Hi, Welcome back 👋
//       </Typography>

// <Grid container spacing={3}>
// <Grid xs={12} sm={6} md={3}>
//   <AppWidgetSummary
//     title="Weekly Sales"
//     total={714000}
//     color="success"
//     icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
//   />
// </Grid>

//         <Grid xs={12} sm={6} md={3}>
//           <AppWidgetSummary
//             title="New Users"
//             total={1352831}
//             color="info"
//             icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
//           />
//         </Grid>

//         <Grid xs={12} sm={6} md={3}>
//           <AppWidgetSummary
//             title="Item Orders"
//             total={1723315}
//             color="warning"
//             icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
//           />
//         </Grid>

//         <Grid xs={12} sm={6} md={3}>
//           <AppWidgetSummary
//             title="Bug Reports"
//             total={234}
//             color="error"
//             icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
//           />
//         </Grid>

//         <Grid xs={12} md={6} lg={8}>
//           <AppWebsiteVisits
//             title="Website Visits"
//             subheader="(+43%) than last year"
//             chart={{
//               labels: [
//                 '01/01/2003',
//                 '02/01/2003',
//                 '03/01/2003',
//                 '04/01/2003',
//                 '05/01/2003',
//                 '06/01/2003',
//                 '07/01/2003',
//                 '08/01/2003',
//                 '09/01/2003',
//                 '10/01/2003',
//                 '11/01/2003',
//               ],
//               series: [
//                 {
//                   name: 'Team A',
//                   type: 'column',
//                   fill: 'solid',
//                   data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
//                 },
//                 {
//                   name: 'Team B',
//                   type: 'area',
//                   fill: 'gradient',
//                   data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
//                 },
//                 {
//                   name: 'Team C',
//                   type: 'line',
//                   fill: 'solid',
//                   data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
//                 },
//               ],
//             }}
//           />
//         </Grid>

//         <Grid xs={12} md={6} lg={4}>
//           <AppCurrentVisits
//             title="Current Visits"
//             chart={{
//               series: [
//                 { label: 'America', value: 4344 },
//                 { label: 'Asia', value: 5435 },
//                 { label: 'Europe', value: 1443 },
//                 { label: 'Africa', value: 4443 },
//               ],
//             }}
//           />
//         </Grid>

//         <Grid xs={12} md={6} lg={8}>
//           <AppConversionRates
//             title="Conversion Rates"
//             subheader="(+43%) than last year"
//             chart={{
//               series: [
//                 { label: 'Italy', value: 400 },
//                 { label: 'Japan', value: 430 },
//                 { label: 'China', value: 448 },
//                 { label: 'Canada', value: 470 },
//                 { label: 'France', value: 540 },
//                 { label: 'Germany', value: 580 },
//                 { label: 'South Korea', value: 690 },
//                 { label: 'Netherlands', value: 1100 },
//                 { label: 'United States', value: 1200 },
//                 { label: 'United Kingdom', value: 1380 },
//               ],
//             }}
//           />
//         </Grid>

//         <Grid xs={12} md={6} lg={4}>
//           <AppCurrentSubject
//             title="Current Subject"
//             chart={{
//               categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
//               series: [
//                 { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
//                 { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
//                 { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
//               ],
//             }}
//           />
//         </Grid>

//         <Grid xs={12} md={6} lg={8}>
//           <AppNewsUpdate
//             title="News Update"
//             list={[...Array(5)].map((_, index) => ({
//               id: faker.string.uuid(),
//               title: faker.person.jobTitle(),
//               description: faker.commerce.productDescription(),
//               image: `/assets/images/covers/cover_${index + 1}.jpg`,
//               postedAt: faker.date.recent(),
//             }))}
//           />
//         </Grid>

//         <Grid xs={12} md={6} lg={4}>
//           <AppOrderTimeline
//             title="Order Timeline"
//             list={[...Array(5)].map((_, index) => ({
//               id: faker.string.uuid(),
//               title: [
//                 '1983, orders, $4220',
//                 '12 Invoices have been paid',
//                 'Order #37745 from September',
//                 'New order placed #XF-2356',
//                 'New order placed #XF-2346',
//               ][index],
//               type: `order${index + 1}`,
//               time: faker.date.past(),
//             }))}
//           />
//         </Grid>

//         <Grid xs={12} md={6} lg={4}>
//           <AppTrafficBySite
//             title="Traffic by Site"
//             list={[
//               {
//                 name: 'FaceBook',
//                 value: 323234,
//                 icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
//               },
//               {
//                 name: 'Google',
//                 value: 341212,
//                 icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
//               },
//               {
//                 name: 'Linkedin',
//                 value: 411213,
//                 icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
//               },
//               {
//                 name: 'Twitter',
//                 value: 443232,
//                 icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
//               },
//             ]}
//           />
//         </Grid>

//         <Grid xs={12} md={6} lg={8}>
//           <AppTasks
//             title="Tasks"
//             list={[
//               { id: '1', name: 'Create FireStone Logo' },
//               { id: '2', name: 'Add SCSS and JS files if required' },
//               { id: '3', name: 'Stakeholder Meeting' },
//               { id: '4', name: 'Scoping & Estimations' },
//               { id: '5', name: 'Sprint Showcase' },
//             ]}
//           />
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }
