import PropTypes from 'prop-types';

// import Chart, { useChart } from 'src/components/chart';
import Chart from 'src/components/chart';

// ----------------------------------------------------------------------

// const chartData = {
//   labels: [
//     '01/01/2003',
//     '02/01/2003',
//     '03/01/2003',
//     '04/01/2003',
//     '05/01/2003',
//     '06/01/2003',
//     '07/01/2003',
//     '08/01/2003',
//     '09/01/2003',
//     '10/01/2003',
//     '11/01/2003',
//   ],
//   series: [
//     {
//       name: 'Team A',
//       type: 'column',
//       fill: 'solid',
//       data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
//     },
//     {
//       name: 'Team B',
//       type: 'area',
//       fill: 'gradient',
//       data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
//     },
//     {
//       name: 'Team C',
//       type: 'line',
//       fill: 'solid',
//       data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
//     },
//   ],
// }

export default function DelegatesComparativeChart({ title, subheader, ...other }) {
  const data = {
    series: [{
      data: [
        {
          x: 'PRESIDENCIA',
          y: 30,
          fillColor: '#941727'
        },
        {
          x: 'GUBERNATURA',
          y: 40,
          fillColor: '#404041'
        },
        {
          x: 'AYUNTAMIENTO',
          y: 50,
          fillColor: '#939598'
        }
      ]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top', // Mostrar las etiquetas de datos en la parte superior
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: (val) => val,
        offsetY: -30,
        style: {
          fontSize: '20px',
          colors: ["#304758"]
        }
      },

      // !=======

      annotations: {
        yaxis: [
          {
            y: 10,
            borderColor: 'transparent',
            label: {
              borderColor: 'transparent',
              style: {
                color: '#fff',
                fontSize: '20px',
                background: '#941727',
              },
              text: '46.4%',
              offsetX: -455,
              // position: 'right'
            }
          },
          {
            y: 10,
            borderColor: 'transparent',
            label: {
              borderColor: 'transparent',
              style: {
                fontSize: '20px',
                color: '#fff',
                background: '#404041',
              },
              text: '60%',
              offsetX: -270,
            }
          },
          {
            y: 10,
            borderColor: 'transparent',
            label: {
              borderColor: 'transparent',
              style: {
                fontSize: '20px',
                color: '#fff',
                background: '#939598',
              },
              text: '75%',
              offsetX: -75,
              position: 'right'
            }
          }

          // {
          //   y: 50,
          //   borderColor: 'transparent',
          //   label: {
          //     borderColor: 'transparent',
          //     style: {
          //       color: '#fff',
          //       background: '#939598',
          //     },
          //     text: '75%',
          //     offsetX: 10,
          //     offsetY: "100",
          //     position: 'center'
          //   }
          // }
        ]
      },
      // !=======
      xaxis: {
        categories: ["PRESIDENCIA", "GUBERNATURA", "AYUNTAMIENTO"],
        position: 'bottom',
        labels: {
          offsetY: 0,
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: (val) => val
        }
      }
    },
  };

  return (
    <div>
      <Chart
        options={data.options}
        series={data.series}
        type="bar"
        height={350}
      />
    </div>
  );
}

DelegatesComparativeChart.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};

// * Chequear
// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import Chart from 'src/components/chart';

// export default function DelegatesComparativeChart({ title, subheader, ...other }) {
//   const [data, setData] = useState({
//     series: [{
//       data: []
//     }],
//     options: {
//       chart: {
//         type: 'bar',
//         height: 350
//       },
//       plotOptions: {
//         bar: {
//           dataLabels: {
//             position: 'top', // Mostrar las etiquetas de datos en la parte superior
//           },
//         }
//       },
//       dataLabels: {
//         enabled: true,
//         formatter: (val) => val,
//         offsetY: -20,
//         style: {
//           fontSize: '12px',
//           colors: ["#304758"]
//         }
//       },
//       xaxis: {
//         categories: [],
//         position: 'bottom',
//         labels: {
//           offsetY: 0,
//         },
//         axisBorder: {
//           show: false
//         },
//         axisTicks: {
//           show: false
//         },
//         crosshairs: {
//           fill: {
//             type: 'gradient',
//             gradient: {
//               colorFrom: '#D8E3F0',
//               colorTo: '#BED1E6',
//               stops: [0, 100],
//               opacityFrom: 0.4,
//               opacityTo: 0.5,
//             }
//           }
//         },
//         tooltip: {
//           enabled: true,
//         }
//       },
//       yaxis: {
//         axisBorder: {
//           show: false
//         },
//         axisTicks: {
//           show: false,
//         },
//         labels: {
//           show: false,
//           formatter: (val) => val
//         }
//       },
//       annotations: {
//         points: []
//       }
//     }
//   });

//   useEffect(() => {
//     // Simulación de obtener datos desde un endpoint
//     const fetchData = async () => {
//       const result = await fetch('/api/your-endpoint');
//       const json = await result.json();

//       const seriesData = json.map(item => ({
//         x: item.label,
//         y: item.value,
//         fillColor: item.color // Color dinámico
//       }));

//       const annotations = json.map(item => ({
//         x: item.label,
//         y: 0,
//         label: {
//           text: item.value.toString(),
//           offsetY: 10,
//           style: {
//             color: item.color,
//             background: 'transparent'
//           }
//         }
//       }));

//       setData({
//         series: [{ data: seriesData }],
//         options: {
//           ...data.options,
//           xaxis: {
//             ...data.options.xaxis,
//             categories: json.map(item => item.label)
//           },
//           annotations: {
//             points: annotations
//           }
//         }
//       });
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <Chart
//         options={data.options}
//         series={data.series}
//         type="bar"
//         height={350}
//         {...other}
//       />
//     </div>
//   );
// }

// DelegatesComparativeChart.propTypes = {
//   chart: PropTypes.object,
//   subheader: PropTypes.string,
//   title: PropTypes.string,
// };