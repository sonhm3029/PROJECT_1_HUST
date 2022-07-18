function initBarChart(chartDom, echarts, data) {
  var myChart = echarts.init(chartDom);
  var option;
  let arrSum = Object.values(data)
    ?.reduce((result, item) => result.concat(item), [])
    ?.map((turn) => turn.Time);
  console.log("arrSum",arrSum);
  let finalData = [...new Set(arrSum)].map((item) => [
    +new Date(item),
    arrSum.filter((time) => item === time).length,
  ]);
  console.log("final",finalData);

  // option = {
  //   tooltip: {
  //     trigger: "axis",
  //     position: function (pt) {
  //       return [pt[0], "10%"];
  //     },
  //   },
  //   title: {
  //     left: "center",
  //     text: "Large Ara Chart",
  //   },
  //   toolbox: {
  //     feature: {
  //       dataZoom: {
  //         yAxisIndex: "none",
  //       },
  //       restore: {},
  //       saveAsImage: {},
  //     },
  //   },
  //   xAxis: {
  //     type: "time",
  //     boundaryGap: false,
  //   },
  //   yAxis: {
  //     type: "value",
  //     boundaryGap: [0, "100%"],
  //   },
  //   dataZoom: [
  //     {
  //       type: "inside",
  //       start: 0,
  //       end: 20,
  //     },
  //     {
  //       start: 0,
  //       end: 20,
  //     },
  //   ],
  //   series: [
  //     {
  //       name: "Fake Data",
  //       type: "line",
  //       smooth: true,
  //       symbol: "none",
  //       areaStyle: {},
  //       data: finalData,
  //     },
  //   ],
  // };
  const date = finalData.map((item) => item[0]);
  const value = finalData.map(item => item[1]);
  option = {
    tooltip: {
      trigger: 'axis',
      position: function (pt) {
        return [pt[0], '10%'];
      }
    },
    title: {
      left: 'center',
      text: 'Large Area Chart'
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: date
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%']
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 10
      },
      {
        start: 0,
        end: 10
      }
    ],
    series: [
      {
        name: 'Fake Data',
        type: 'line',
        symbol: 'none',
        sampling: 'lttb',
        itemStyle: {
          color: 'rgb(255, 70, 131)'
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 158, 68)'
            },
            {
              offset: 1,
              color: 'rgb(255, 70, 131)'
            }
          ])
        },
        data: value
      }
    ]
  };

  myChart.setOption(option);
}

function initPieChart(chartDom, echarts, data) {
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "16",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: data,
      },
    ],
  };

  option && myChart.setOption(option);
}

// const areaChartData = {
//   Face1: [
//     {
//       Name: "Face 1",
//       Top: 151,
//       Left: 837,
//       Width: 251,
//       Height: 267,
//       "Frame number": 37,
//       Time: "2022-04-19 23:59:48",
//     },
//   ],
//   Face2: [
//     {
//       Name: "Face 2",
//       Top: 155,
//       Left: 837,
//       Width: 217,
//       Height: 265,
//       "Frame number": 38,
//       Time: "2022-04-19 23:59:48",
//     },
//     {
//       Name: "Face 2",
//       Top: 90,
//       Left: 823,
//       Width: 233,
//       Height: 295,
//       "Frame number": 44,
//       Time: "2022-04-19 23:59:49",
//     },
//     {
//       Name: "Face 2",
//       Top: 95,
//       Left: 806,
//       Width: 230,
//       Height: 303,
//       "Frame number": 59,
//       Time: "2022-04-19 23:59:51",
//     },
//     {
//       Name: "Face 2",
//       Top: 191,
//       Left: 709,
//       Width: 211,
//       Height: 283,
//       "Frame number": 62,
//       Time: "2022-04-19 23:59:52",
//     },
//     {
//       Name: "Face 2",
//       Top: 249,
//       Left: 660,
//       Width: 207,
//       Height: 272,
//       "Frame number": 67,
//       Time: "2022-04-19 23:59:53",
//     },
//   ],
// };

const areaChartData = {
  "Face3": [
{
     "Name": "Sinh vien5",
     "Top": 4,
     "Left": 600,
     "Width": 313,
     "Height": 690,
     "Frame number": 1,
     "Time": "2022-08-18 14:12:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 675,
     "Left": 1618,
     "Width": 580,
     "Height": 843,
     "Frame number": 2,
     "Time": "2022-08-18 14:28:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 646,
     "Left": 474,
     "Width": 538,
     "Height": 818,
     "Frame number": 3,
     "Time": "2022-08-18 16:32:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 251,
     "Left": 1868,
     "Width": 187,
     "Height": 241,
     "Frame number": 4,
     "Time": "2022-08-18 16:55:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 622,
     "Left": 1464,
     "Width": 160,
     "Height": 1643,
     "Frame number": 5,
     "Time": "2022-08-18 08:36:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 366,
     "Left": 1757,
     "Width": 580,
     "Height": 188,
     "Frame number": 6,
     "Time": "2022-08-18 14:12:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 451,
     "Left": 1197,
     "Width": 604,
     "Height": 1494,
     "Frame number": 7,
     "Time": "2022-08-18 15:01:00",
     "Weekdays": "Thursday"
}

 ],
  "Face2": [
{
     "Name": "Sinh vien8",
     "Top": 328,
     "Left": 1014,
     "Width": 310,
     "Height": 1706,
     "Frame number": 8,
     "Time": "2022-08-18 13:56:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 207,
     "Left": 1676,
     "Width": 854,
     "Height": 1591,
     "Frame number": 9,
     "Time": "2022-08-18 13:55:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 550,
     "Left": 289,
     "Width": 467,
     "Height": 1169,
     "Frame number": 10,
     "Time": "2022-08-18 10:16:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 67,
     "Left": 1129,
     "Width": 567,
     "Height": 1228,
     "Frame number": 11,
     "Time": "2022-08-18 11:32:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 676,
     "Left": 1296,
     "Width": 589,
     "Height": 1773,
     "Frame number": 12,
     "Time": "2022-08-18 09:54:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 157,
     "Left": 1159,
     "Width": 715,
     "Height": 109,
     "Frame number": 13,
     "Time": "2022-08-18 11:03:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 125,
     "Left": 1687,
     "Width": 685,
     "Height": 609,
     "Frame number": 14,
     "Time": "2022-08-18 09:45:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 166,
     "Left": 138,
     "Width": 204,
     "Height": 1245,
     "Frame number": 15,
     "Time": "2022-08-18 09:09:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 400,
     "Left": 1320,
     "Width": 681,
     "Height": 1169,
     "Frame number": 16,
     "Time": "2022-08-18 12:36:00",
     "Weekdays": "Thursday"
}

 ],
  "Face6": [
{
     "Name": "Sinh vien10",
     "Top": 367,
     "Left": 454,
     "Width": 458,
     "Height": 450,
     "Frame number": 17,
     "Time": "2022-08-18 09:01:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 517,
     "Left": 118,
     "Width": 690,
     "Height": 139,
     "Frame number": 18,
     "Time": "2022-08-18 12:11:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 700,
     "Left": 1887,
     "Width": 379,
     "Height": 38,
     "Frame number": 19,
     "Time": "2022-08-18 13:15:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 824,
     "Left": 201,
     "Width": 261,
     "Height": 1194,
     "Frame number": 20,
     "Time": "2022-08-18 10:53:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 10,
     "Left": 1544,
     "Width": 39,
     "Height": 1044,
     "Frame number": 21,
     "Time": "2022-08-18 10:28:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 810,
     "Left": 197,
     "Width": 60,
     "Height": 591,
     "Frame number": 22,
     "Time": "2022-08-18 15:24:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 44,
     "Left": 277,
     "Width": 144,
     "Height": 1824,
     "Frame number": 23,
     "Time": "2022-08-18 16:08:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 308,
     "Left": 59,
     "Width": 764,
     "Height": 515,
     "Frame number": 24,
     "Time": "2022-08-18 12:14:00",
     "Weekdays": "Thursday"
}

 ],
  "Face10": [
{
     "Name": "Sinh vien9",
     "Top": 228,
     "Left": 1468,
     "Width": 355,
     "Height": 483,
     "Frame number": 25,
     "Time": "2022-08-18 16:06:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 342,
     "Left": 753,
     "Width": 560,
     "Height": 1727,
     "Frame number": 26,
     "Time": "2022-08-18 13:54:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 716,
     "Left": 14,
     "Width": 783,
     "Height": 262,
     "Frame number": 27,
     "Time": "2022-08-18 13:30:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 406,
     "Left": 563,
     "Width": 31,
     "Height": 936,
     "Frame number": 28,
     "Time": "2022-08-18 11:30:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 743,
     "Left": 181,
     "Width": 575,
     "Height": 147,
     "Frame number": 29,
     "Time": "2022-08-18 13:34:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 509,
     "Left": 1079,
     "Width": 129,
     "Height": 1106,
     "Frame number": 30,
     "Time": "2022-08-18 09:46:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 719,
     "Left": 852,
     "Width": 13,
     "Height": 1337,
     "Frame number": 31,
     "Time": "2022-08-18 13:10:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 185,
     "Left": 839,
     "Width": 570,
     "Height": 823,
     "Frame number": 32,
     "Time": "2022-08-18 13:31:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 757,
     "Left": 277,
     "Width": 614,
     "Height": 1272,
     "Frame number": 33,
     "Time": "2022-08-18 13:34:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 46,
     "Left": 521,
     "Width": 87,
     "Height": 1197,
     "Frame number": 34,
     "Time": "2022-08-18 15:34:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 163,
     "Left": 545,
     "Width": 237,
     "Height": 507,
     "Frame number": 35,
     "Time": "2022-08-18 15:08:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 463,
     "Left": 975,
     "Width": 299,
     "Height": 1418,
     "Frame number": 36,
     "Time": "2022-08-18 09:30:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 91,
     "Left": 1382,
     "Width": 550,
     "Height": 1500,
     "Frame number": 37,
     "Time": "2022-08-18 09:17:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 555,
     "Left": 467,
     "Width": 695,
     "Height": 669,
     "Frame number": 38,
     "Time": "2022-08-18 09:12:00",
     "Weekdays": "Thursday"
}

 ],
  "Face3": [
{
     "Name": "Sinh vien7",
     "Top": 261,
     "Left": 192,
     "Width": 270,
     "Height": 782,
     "Frame number": 39,
     "Time": "2022-08-18 12:54:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 494,
     "Left": 1910,
     "Width": 522,
     "Height": 584,
     "Frame number": 40,
     "Time": "2022-08-18 09:02:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 174,
     "Left": 1484,
     "Width": 206,
     "Height": 1188,
     "Frame number": 41,
     "Time": "2022-08-18 16:34:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 117,
     "Left": 1342,
     "Width": 820,
     "Height": 1349,
     "Frame number": 42,
     "Time": "2022-08-18 16:52:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 672,
     "Left": 1550,
     "Width": 255,
     "Height": 1767,
     "Frame number": 43,
     "Time": "2022-08-18 16:36:00",
     "Weekdays": "Thursday"
}

 ],
  "Face4": [
{
     "Name": "Sinh vien2",
     "Top": 659,
     "Left": 443,
     "Width": 623,
     "Height": 326,
     "Frame number": 44,
     "Time": "2022-08-18 16:27:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 6,
     "Left": 388,
     "Width": 256,
     "Height": 1887,
     "Frame number": 45,
     "Time": "2022-08-18 10:01:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 385,
     "Left": 37,
     "Width": 322,
     "Height": 406,
     "Frame number": 46,
     "Time": "2022-08-18 14:57:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 569,
     "Left": 258,
     "Width": 200,
     "Height": 1904,
     "Frame number": 47,
     "Time": "2022-08-18 16:34:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 538,
     "Left": 387,
     "Width": 303,
     "Height": 1515,
     "Frame number": 48,
     "Time": "2022-08-18 10:19:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 26,
     "Left": 608,
     "Width": 504,
     "Height": 879,
     "Frame number": 49,
     "Time": "2022-08-18 13:30:00",
     "Weekdays": "Thursday"
}

 ],
  "Face8": [
{
     "Name": "Sinh vien11",
     "Top": 822,
     "Left": 165,
     "Width": 610,
     "Height": 143,
     "Frame number": 50,
     "Time": "2022-08-18 11:51:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 736,
     "Left": 1450,
     "Width": 86,
     "Height": 890,
     "Frame number": 51,
     "Time": "2022-08-18 08:57:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 771,
     "Left": 1399,
     "Width": 378,
     "Height": 485,
     "Frame number": 52,
     "Time": "2022-08-18 13:42:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 242,
     "Left": 1451,
     "Width": 447,
     "Height": 1280,
     "Frame number": 53,
     "Time": "2022-08-18 09:33:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 263,
     "Left": 423,
     "Width": 123,
     "Height": 443,
     "Frame number": 54,
     "Time": "2022-08-18 14:27:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 27,
     "Left": 1131,
     "Width": 662,
     "Height": 1194,
     "Frame number": 55,
     "Time": "2022-08-18 13:55:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 691,
     "Left": 1794,
     "Width": 43,
     "Height": 1861,
     "Frame number": 56,
     "Time": "2022-08-18 14:31:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 745,
     "Left": 505,
     "Width": 80,
     "Height": 1198,
     "Frame number": 57,
     "Time": "2022-08-18 10:09:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 73,
     "Left": 1123,
     "Width": 326,
     "Height": 1636,
     "Frame number": 58,
     "Time": "2022-08-18 11:44:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 97,
     "Left": 914,
     "Width": 715,
     "Height": 1006,
     "Frame number": 59,
     "Time": "2022-08-18 15:07:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 566,
     "Left": 388,
     "Width": 746,
     "Height": 1011,
     "Frame number": 60,
     "Time": "2022-08-18 16:07:00",
     "Weekdays": "Thursday"
}

 ],
  "Face10": [
{
     "Name": "Sinh vien11",
     "Top": 49,
     "Left": 714,
     "Width": 630,
     "Height": 1615,
     "Frame number": 61,
     "Time": "2022-08-18 16:35:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 30,
     "Left": 776,
     "Width": 321,
     "Height": 353,
     "Frame number": 62,
     "Time": "2022-08-18 11:42:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 402,
     "Left": 1125,
     "Width": 415,
     "Height": 1817,
     "Frame number": 63,
     "Time": "2022-08-18 14:26:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 593,
     "Left": 227,
     "Width": 711,
     "Height": 1438,
     "Frame number": 64,
     "Time": "2022-08-18 10:58:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 412,
     "Left": 1807,
     "Width": 348,
     "Height": 1217,
     "Frame number": 65,
     "Time": "2022-08-18 15:23:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 76,
     "Left": 905,
     "Width": 295,
     "Height": 534,
     "Frame number": 66,
     "Time": "2022-08-18 09:54:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 426,
     "Left": 682,
     "Width": 500,
     "Height": 112,
     "Frame number": 67,
     "Time": "2022-08-18 10:08:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 403,
     "Left": 1089,
     "Width": 366,
     "Height": 481,
     "Frame number": 68,
     "Time": "2022-08-18 13:07:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 8,
     "Left": 359,
     "Width": 785,
     "Height": 931,
     "Frame number": 69,
     "Time": "2022-08-18 16:18:00",
     "Weekdays": "Thursday"
}

 ],
  "Face2": [
{
     "Name": "Sinh vien9",
     "Top": 491,
     "Left": 848,
     "Width": 696,
     "Height": 185,
     "Frame number": 70,
     "Time": "2022-08-18 15:14:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 481,
     "Left": 1668,
     "Width": 102,
     "Height": 1786,
     "Frame number": 71,
     "Time": "2022-08-18 15:20:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 682,
     "Left": 1791,
     "Width": 331,
     "Height": 1201,
     "Frame number": 72,
     "Time": "2022-08-18 15:43:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 703,
     "Left": 730,
     "Width": 671,
     "Height": 417,
     "Frame number": 73,
     "Time": "2022-08-18 12:45:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 398,
     "Left": 770,
     "Width": 33,
     "Height": 1363,
     "Frame number": 74,
     "Time": "2022-08-18 14:52:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 276,
     "Left": 138,
     "Width": 75,
     "Height": 785,
     "Frame number": 75,
     "Time": "2022-08-18 10:30:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 633,
     "Left": 749,
     "Width": 79,
     "Height": 1428,
     "Frame number": 76,
     "Time": "2022-08-18 10:40:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 223,
     "Left": 336,
     "Width": 88,
     "Height": 186,
     "Frame number": 77,
     "Time": "2022-08-18 13:06:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 147,
     "Left": 1234,
     "Width": 640,
     "Height": 988,
     "Frame number": 78,
     "Time": "2022-08-18 08:56:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 129,
     "Left": 1314,
     "Width": 728,
     "Height": 18,
     "Frame number": 79,
     "Time": "2022-08-18 14:13:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 768,
     "Left": 1519,
     "Width": 224,
     "Height": 781,
     "Frame number": 80,
     "Time": "2022-08-18 15:28:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 764,
     "Left": 1784,
     "Width": 570,
     "Height": 181,
     "Frame number": 81,
     "Time": "2022-08-18 12:11:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 315,
     "Left": 140,
     "Width": 729,
     "Height": 105,
     "Frame number": 82,
     "Time": "2022-08-18 15:43:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 303,
     "Left": 1871,
     "Width": 786,
     "Height": 1304,
     "Frame number": 83,
     "Time": "2022-08-18 12:10:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 13,
     "Left": 1251,
     "Width": 39,
     "Height": 1668,
     "Frame number": 84,
     "Time": "2022-08-18 16:53:00",
     "Weekdays": "Thursday"
}

 ],
  "Face8": [
{
     "Name": "Sinh vien2",
     "Top": 629,
     "Left": 1307,
     "Width": 745,
     "Height": 1178,
     "Frame number": 85,
     "Time": "2022-08-18 12:47:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 319,
     "Left": 691,
     "Width": 170,
     "Height": 1506,
     "Frame number": 86,
     "Time": "2022-08-18 12:41:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 857,
     "Left": 1721,
     "Width": 378,
     "Height": 441,
     "Frame number": 87,
     "Time": "2022-08-18 09:23:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 454,
     "Left": 1494,
     "Width": 218,
     "Height": 440,
     "Frame number": 88,
     "Time": "2022-08-18 15:22:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 367,
     "Left": 1071,
     "Width": 124,
     "Height": 303,
     "Frame number": 89,
     "Time": "2022-08-18 16:19:00",
     "Weekdays": "Thursday"
}

 ],
  "Face4": [
{
     "Name": "Sinh vien8",
     "Top": 395,
     "Left": 225,
     "Width": 723,
     "Height": 846,
     "Frame number": 90,
     "Time": "2022-08-18 14:19:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 553,
     "Left": 653,
     "Width": 478,
     "Height": 743,
     "Frame number": 91,
     "Time": "2022-08-18 15:08:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 165,
     "Left": 361,
     "Width": 67,
     "Height": 162,
     "Frame number": 92,
     "Time": "2022-08-18 10:01:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 412,
     "Left": 53,
     "Width": 703,
     "Height": 723,
     "Frame number": 93,
     "Time": "2022-08-18 09:51:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 112,
     "Left": 1250,
     "Width": 625,
     "Height": 1474,
     "Frame number": 94,
     "Time": "2022-08-18 14:29:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 455,
     "Left": 260,
     "Width": 842,
     "Height": 1278,
     "Frame number": 95,
     "Time": "2022-08-18 16:52:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 507,
     "Left": 664,
     "Width": 26,
     "Height": 1708,
     "Frame number": 96,
     "Time": "2022-08-18 12:08:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 431,
     "Left": 647,
     "Width": 89,
     "Height": 1234,
     "Frame number": 97,
     "Time": "2022-08-18 15:58:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 316,
     "Left": 1739,
     "Width": 584,
     "Height": 1581,
     "Frame number": 98,
     "Time": "2022-08-18 15:22:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 419,
     "Left": 1684,
     "Width": 616,
     "Height": 637,
     "Frame number": 99,
     "Time": "2022-08-18 16:31:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 456,
     "Left": 1048,
     "Width": 521,
     "Height": 1868,
     "Frame number": 100,
     "Time": "2022-08-18 16:46:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 790,
     "Left": 1161,
     "Width": 63,
     "Height": 463,
     "Frame number": 101,
     "Time": "2022-08-18 09:50:00",
     "Weekdays": "Thursday"
}

 ],
  "Face3": [
{
     "Name": "Sinh vien8",
     "Top": 798,
     "Left": 395,
     "Width": 476,
     "Height": 482,
     "Frame number": 102,
     "Time": "2022-08-18 08:05:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 384,
     "Left": 1318,
     "Width": 605,
     "Height": 390,
     "Frame number": 103,
     "Time": "2022-08-18 14:35:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 7,
     "Left": 1136,
     "Width": 64,
     "Height": 1043,
     "Frame number": 104,
     "Time": "2022-08-18 11:35:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 82,
     "Left": 124,
     "Width": 654,
     "Height": 1836,
     "Frame number": 105,
     "Time": "2022-08-18 09:21:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 484,
     "Left": 989,
     "Width": 426,
     "Height": 730,
     "Frame number": 106,
     "Time": "2022-08-18 13:28:00",
     "Weekdays": "Thursday"
}

 ],
  "Face2": [
{
     "Name": "Sinh vien5",
     "Top": 14,
     "Left": 1073,
     "Width": 572,
     "Height": 244,
     "Frame number": 107,
     "Time": "2022-08-18 08:19:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 9,
     "Left": 414,
     "Width": 439,
     "Height": 870,
     "Frame number": 108,
     "Time": "2022-08-18 13:11:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 342,
     "Left": 677,
     "Width": 440,
     "Height": 753,
     "Frame number": 109,
     "Time": "2022-08-18 09:04:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 433,
     "Left": 146,
     "Width": 337,
     "Height": 1808,
     "Frame number": 110,
     "Time": "2022-08-18 16:18:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 544,
     "Left": 774,
     "Width": 795,
     "Height": 102,
     "Frame number": 111,
     "Time": "2022-08-18 11:47:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 560,
     "Left": 1860,
     "Width": 804,
     "Height": 821,
     "Frame number": 112,
     "Time": "2022-08-18 13:54:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 813,
     "Left": 1752,
     "Width": 824,
     "Height": 677,
     "Frame number": 113,
     "Time": "2022-08-18 15:02:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 274,
     "Left": 687,
     "Width": 393,
     "Height": 719,
     "Frame number": 114,
     "Time": "2022-08-18 13:06:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 36,
     "Left": 282,
     "Width": 701,
     "Height": 1657,
     "Frame number": 115,
     "Time": "2022-08-18 16:08:00",
     "Weekdays": "Thursday"
}

 ],
  "Face10": [
{
     "Name": "Sinh vien5",
     "Top": 67,
     "Left": 307,
     "Width": 244,
     "Height": 1394,
     "Frame number": 116,
     "Time": "2022-08-18 11:37:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 471,
     "Left": 813,
     "Width": 784,
     "Height": 861,
     "Frame number": 117,
     "Time": "2022-08-18 13:28:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 408,
     "Left": 1828,
     "Width": 578,
     "Height": 360,
     "Frame number": 118,
     "Time": "2022-08-18 10:49:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 837,
     "Left": 358,
     "Width": 500,
     "Height": 509,
     "Frame number": 119,
     "Time": "2022-08-18 08:12:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 178,
     "Left": 1672,
     "Width": 307,
     "Height": 842,
     "Frame number": 120,
     "Time": "2022-08-18 09:21:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 515,
     "Left": 1444,
     "Width": 326,
     "Height": 1862,
     "Frame number": 121,
     "Time": "2022-08-18 16:50:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 100,
     "Left": 821,
     "Width": 760,
     "Height": 719,
     "Frame number": 122,
     "Time": "2022-08-18 13:00:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 175,
     "Left": 135,
     "Width": 538,
     "Height": 576,
     "Frame number": 123,
     "Time": "2022-08-18 16:11:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 184,
     "Left": 204,
     "Width": 709,
     "Height": 80,
     "Frame number": 124,
     "Time": "2022-08-18 12:36:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 604,
     "Left": 487,
     "Width": 88,
     "Height": 1393,
     "Frame number": 125,
     "Time": "2022-08-18 08:17:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 800,
     "Left": 1400,
     "Width": 75,
     "Height": 94,
     "Frame number": 126,
     "Time": "2022-08-18 13:00:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 830,
     "Left": 673,
     "Width": 67,
     "Height": 1253,
     "Frame number": 127,
     "Time": "2022-08-18 15:13:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 664,
     "Left": 1384,
     "Width": 407,
     "Height": 399,
     "Frame number": 128,
     "Time": "2022-08-18 13:34:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 581,
     "Left": 495,
     "Width": 742,
     "Height": 994,
     "Frame number": 129,
     "Time": "2022-08-18 10:07:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 242,
     "Left": 47,
     "Width": 211,
     "Height": 1783,
     "Frame number": 130,
     "Time": "2022-08-18 11:46:00",
     "Weekdays": "Thursday"
}

 ],
  "Face8": [
{
     "Name": "Sinh vien1",
     "Top": 581,
     "Left": 1042,
     "Width": 27,
     "Height": 1435,
     "Frame number": 131,
     "Time": "2022-08-18 11:00:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 594,
     "Left": 311,
     "Width": 372,
     "Height": 1120,
     "Frame number": 132,
     "Time": "2022-08-18 11:12:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 483,
     "Left": 1203,
     "Width": 415,
     "Height": 292,
     "Frame number": 133,
     "Time": "2022-08-18 12:34:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 834,
     "Left": 266,
     "Width": 595,
     "Height": 1531,
     "Frame number": 134,
     "Time": "2022-08-18 08:08:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 839,
     "Left": 1288,
     "Width": 65,
     "Height": 830,
     "Frame number": 135,
     "Time": "2022-08-18 10:26:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 454,
     "Left": 138,
     "Width": 726,
     "Height": 1590,
     "Frame number": 136,
     "Time": "2022-08-18 11:51:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 354,
     "Left": 960,
     "Width": 755,
     "Height": 3,
     "Frame number": 137,
     "Time": "2022-08-18 14:55:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 608,
     "Left": 1561,
     "Width": 460,
     "Height": 220,
     "Frame number": 138,
     "Time": "2022-08-18 12:35:00",
     "Weekdays": "Thursday"
}

 ],
  "Face1": [
{
     "Name": "Sinh vien6",
     "Top": 508,
     "Left": 73,
     "Width": 278,
     "Height": 730,
     "Frame number": 139,
     "Time": "2022-08-18 13:52:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 498,
     "Left": 497,
     "Width": 822,
     "Height": 703,
     "Frame number": 140,
     "Time": "2022-08-18 09:45:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 257,
     "Left": 270,
     "Width": 233,
     "Height": 1249,
     "Frame number": 141,
     "Time": "2022-08-18 10:37:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 181,
     "Left": 1641,
     "Width": 197,
     "Height": 280,
     "Frame number": 142,
     "Time": "2022-08-18 15:45:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 108,
     "Left": 1458,
     "Width": 540,
     "Height": 567,
     "Frame number": 143,
     "Time": "2022-08-18 11:23:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 46,
     "Left": 1841,
     "Width": 588,
     "Height": 1267,
     "Frame number": 144,
     "Time": "2022-08-18 14:07:00",
     "Weekdays": "Thursday"
}

 ],
  "Face12": [
{
     "Name": "Sinh vien11",
     "Top": 758,
     "Left": 1093,
     "Width": 280,
     "Height": 963,
     "Frame number": 145,
     "Time": "2022-08-18 13:47:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 365,
     "Left": 1373,
     "Width": 297,
     "Height": 746,
     "Frame number": 146,
     "Time": "2022-08-18 09:24:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 828,
     "Left": 1536,
     "Width": 35,
     "Height": 1488,
     "Frame number": 147,
     "Time": "2022-08-18 10:10:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 39,
     "Left": 828,
     "Width": 348,
     "Height": 493,
     "Frame number": 148,
     "Time": "2022-08-18 15:26:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 425,
     "Left": 696,
     "Width": 251,
     "Height": 613,
     "Frame number": 149,
     "Time": "2022-08-18 14:50:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 34,
     "Left": 167,
     "Width": 610,
     "Height": 1728,
     "Frame number": 150,
     "Time": "2022-08-18 09:07:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 854,
     "Left": 977,
     "Width": 722,
     "Height": 376,
     "Frame number": 151,
     "Time": "2022-08-18 13:42:00",
     "Weekdays": "Thursday"
}

 ],
  "Face11": [
{
     "Name": "Sinh vien1",
     "Top": 731,
     "Left": 1352,
     "Width": 280,
     "Height": 1684,
     "Frame number": 152,
     "Time": "2022-08-18 09:11:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 401,
     "Left": 616,
     "Width": 623,
     "Height": 793,
     "Frame number": 153,
     "Time": "2022-08-18 15:31:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 648,
     "Left": 1804,
     "Width": 98,
     "Height": 1793,
     "Frame number": 154,
     "Time": "2022-08-18 16:26:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 240,
     "Left": 775,
     "Width": 381,
     "Height": 93,
     "Frame number": 155,
     "Time": "2022-08-18 12:13:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 27,
     "Left": 1546,
     "Width": 288,
     "Height": 1555,
     "Frame number": 156,
     "Time": "2022-08-18 08:51:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 265,
     "Left": 707,
     "Width": 318,
     "Height": 1635,
     "Frame number": 157,
     "Time": "2022-08-18 09:41:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 69,
     "Left": 538,
     "Width": 30,
     "Height": 1549,
     "Frame number": 158,
     "Time": "2022-08-18 14:35:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 590,
     "Left": 958,
     "Width": 96,
     "Height": 1085,
     "Frame number": 159,
     "Time": "2022-08-18 13:26:00",
     "Weekdays": "Thursday"
}

 ],
  "Face2": [
{
     "Name": "Sinh vien6",
     "Top": 405,
     "Left": 1612,
     "Width": 490,
     "Height": 436,
     "Frame number": 160,
     "Time": "2022-08-18 15:49:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 491,
     "Left": 1594,
     "Width": 396,
     "Height": 1525,
     "Frame number": 161,
     "Time": "2022-08-18 16:31:00",
     "Weekdays": "Thursday"
}

 ],
  "Face11": [
{
     "Name": "Sinh vien1",
     "Top": 438,
     "Left": 1215,
     "Width": 810,
     "Height": 191,
     "Frame number": 162,
     "Time": "2022-08-18 10:40:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 311,
     "Left": 661,
     "Width": 650,
     "Height": 1325,
     "Frame number": 163,
     "Time": "2022-08-18 10:55:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 281,
     "Left": 906,
     "Width": 715,
     "Height": 343,
     "Frame number": 164,
     "Time": "2022-08-18 08:52:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 616,
     "Left": 379,
     "Width": 591,
     "Height": 846,
     "Frame number": 165,
     "Time": "2022-08-18 08:01:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 363,
     "Left": 9,
     "Width": 176,
     "Height": 1014,
     "Frame number": 166,
     "Time": "2022-08-18 08:35:00",
     "Weekdays": "Thursday"
}

 ],
  "Face5": [
{
     "Name": "Sinh vien6",
     "Top": 143,
     "Left": 1223,
     "Width": 229,
     "Height": 926,
     "Frame number": 167,
     "Time": "2022-08-18 16:24:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 641,
     "Left": 1586,
     "Width": 60,
     "Height": 723,
     "Frame number": 168,
     "Time": "2022-08-18 10:00:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 583,
     "Left": 1843,
     "Width": 859,
     "Height": 1238,
     "Frame number": 169,
     "Time": "2022-08-18 14:52:00",
     "Weekdays": "Thursday"
}

 ],
  "Face10": [
{
     "Name": "Sinh vien10",
     "Top": 729,
     "Left": 1698,
     "Width": 522,
     "Height": 1917,
     "Frame number": 170,
     "Time": "2022-08-18 12:50:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 347,
     "Left": 866,
     "Width": 253,
     "Height": 454,
     "Frame number": 171,
     "Time": "2022-08-18 14:23:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 512,
     "Left": 1649,
     "Width": 385,
     "Height": 1260,
     "Frame number": 172,
     "Time": "2022-08-18 15:35:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 40,
     "Left": 705,
     "Width": 317,
     "Height": 1665,
     "Frame number": 173,
     "Time": "2022-08-18 11:39:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 319,
     "Left": 1581,
     "Width": 423,
     "Height": 1201,
     "Frame number": 174,
     "Time": "2022-08-18 13:20:00",
     "Weekdays": "Thursday"
}

 ],
  "Face2": [
{
     "Name": "Sinh vien2",
     "Top": 581,
     "Left": 1733,
     "Width": 813,
     "Height": 455,
     "Frame number": 175,
     "Time": "2022-08-18 08:22:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 134,
     "Left": 1376,
     "Width": 386,
     "Height": 463,
     "Frame number": 176,
     "Time": "2022-08-18 09:04:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 542,
     "Left": 2,
     "Width": 313,
     "Height": 727,
     "Frame number": 177,
     "Time": "2022-08-18 15:14:00",
     "Weekdays": "Thursday"
}

 ],
  "Face10": [
{
     "Name": "Sinh vien8",
     "Top": 623,
     "Left": 1600,
     "Width": 39,
     "Height": 752,
     "Frame number": 178,
     "Time": "2022-08-18 13:38:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 563,
     "Left": 1108,
     "Width": 780,
     "Height": 324,
     "Frame number": 179,
     "Time": "2022-08-18 15:36:00",
     "Weekdays": "Thursday"
}

 ],
  "Face5": [
{
     "Name": "Sinh vien1",
     "Top": 780,
     "Left": 1867,
     "Width": 233,
     "Height": 1490,
     "Frame number": 180,
     "Time": "2022-08-18 09:17:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 556,
     "Left": 1725,
     "Width": 80,
     "Height": 922,
     "Frame number": 181,
     "Time": "2022-08-18 09:37:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 17,
     "Left": 159,
     "Width": 46,
     "Height": 1738,
     "Frame number": 182,
     "Time": "2022-08-18 10:25:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 200,
     "Left": 258,
     "Width": 726,
     "Height": 1399,
     "Frame number": 183,
     "Time": "2022-08-18 10:08:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 360,
     "Left": 1867,
     "Width": 752,
     "Height": 759,
     "Frame number": 184,
     "Time": "2022-08-18 15:08:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 556,
     "Left": 650,
     "Width": 856,
     "Height": 734,
     "Frame number": 185,
     "Time": "2022-08-18 14:41:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 166,
     "Left": 1736,
     "Width": 155,
     "Height": 297,
     "Frame number": 186,
     "Time": "2022-08-18 16:04:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 671,
     "Left": 1268,
     "Width": 418,
     "Height": 1413,
     "Frame number": 187,
     "Time": "2022-08-18 13:36:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 90,
     "Left": 1773,
     "Width": 334,
     "Height": 560,
     "Frame number": 188,
     "Time": "2022-08-18 09:12:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 35,
     "Left": 1245,
     "Width": 160,
     "Height": 1194,
     "Frame number": 189,
     "Time": "2022-08-18 09:50:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 70,
     "Left": 1875,
     "Width": 351,
     "Height": 1348,
     "Frame number": 190,
     "Time": "2022-08-18 14:20:00",
     "Weekdays": "Thursday"
}

 ],
  "Face1": [
{
     "Name": "Sinh vien9",
     "Top": 448,
     "Left": 1804,
     "Width": 583,
     "Height": 1477,
     "Frame number": 191,
     "Time": "2022-08-18 10:27:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 601,
     "Left": 791,
     "Width": 538,
     "Height": 640,
     "Frame number": 192,
     "Time": "2022-08-18 14:58:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 271,
     "Left": 1345,
     "Width": 52,
     "Height": 555,
     "Frame number": 193,
     "Time": "2022-08-18 16:13:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 277,
     "Left": 1072,
     "Width": 638,
     "Height": 1541,
     "Frame number": 194,
     "Time": "2022-08-18 09:55:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 254,
     "Left": 918,
     "Width": 7,
     "Height": 993,
     "Frame number": 195,
     "Time": "2022-08-18 12:42:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 126,
     "Left": 249,
     "Width": 599,
     "Height": 1889,
     "Frame number": 196,
     "Time": "2022-08-18 15:27:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 180,
     "Left": 571,
     "Width": 81,
     "Height": 1863,
     "Frame number": 197,
     "Time": "2022-08-18 15:58:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 485,
     "Left": 209,
     "Width": 279,
     "Height": 656,
     "Frame number": 198,
     "Time": "2022-08-18 10:32:00",
     "Weekdays": "Thursday"
}

 ],
  "Face10": [
{
     "Name": "Sinh vien6",
     "Top": 767,
     "Left": 1550,
     "Width": 346,
     "Height": 22,
     "Frame number": 199,
     "Time": "2022-08-18 10:29:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 470,
     "Left": 942,
     "Width": 405,
     "Height": 1123,
     "Frame number": 200,
     "Time": "2022-08-18 08:02:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 799,
     "Left": 73,
     "Width": 148,
     "Height": 1826,
     "Frame number": 201,
     "Time": "2022-08-18 16:23:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 125,
     "Left": 645,
     "Width": 361,
     "Height": 1404,
     "Frame number": 202,
     "Time": "2022-08-18 15:07:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 15,
     "Left": 409,
     "Width": 348,
     "Height": 1007,
     "Frame number": 203,
     "Time": "2022-08-18 12:38:00",
     "Weekdays": "Thursday"
}

 ],
  "Face9": [
{
     "Name": "Sinh vien2",
     "Top": 731,
     "Left": 1003,
     "Width": 797,
     "Height": 1215,
     "Frame number": 204,
     "Time": "2022-08-18 09:38:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 405,
     "Left": 1825,
     "Width": 230,
     "Height": 368,
     "Frame number": 205,
     "Time": "2022-08-18 10:21:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 492,
     "Left": 1510,
     "Width": 192,
     "Height": 323,
     "Frame number": 206,
     "Time": "2022-08-18 13:15:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 549,
     "Left": 1544,
     "Width": 355,
     "Height": 1433,
     "Frame number": 207,
     "Time": "2022-08-18 12:26:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 275,
     "Left": 353,
     "Width": 145,
     "Height": 456,
     "Frame number": 208,
     "Time": "2022-08-18 11:35:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 96,
     "Left": 805,
     "Width": 79,
     "Height": 492,
     "Frame number": 209,
     "Time": "2022-08-18 12:45:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 152,
     "Left": 921,
     "Width": 675,
     "Height": 0,
     "Frame number": 210,
     "Time": "2022-08-18 15:56:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 384,
     "Left": 1459,
     "Width": 290,
     "Height": 735,
     "Frame number": 211,
     "Time": "2022-08-18 15:34:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 262,
     "Left": 1579,
     "Width": 459,
     "Height": 1117,
     "Frame number": 212,
     "Time": "2022-08-18 11:08:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 515,
     "Left": 1015,
     "Width": 598,
     "Height": 209,
     "Frame number": 213,
     "Time": "2022-08-18 11:26:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 222,
     "Left": 710,
     "Width": 191,
     "Height": 1285,
     "Frame number": 214,
     "Time": "2022-08-18 08:38:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 806,
     "Left": 1612,
     "Width": 816,
     "Height": 366,
     "Frame number": 215,
     "Time": "2022-08-18 08:38:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 317,
     "Left": 1589,
     "Width": 722,
     "Height": 1817,
     "Frame number": 216,
     "Time": "2022-08-18 10:39:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 744,
     "Left": 706,
     "Width": 787,
     "Height": 199,
     "Frame number": 217,
     "Time": "2022-08-18 10:09:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 288,
     "Left": 15,
     "Width": 330,
     "Height": 1341,
     "Frame number": 218,
     "Time": "2022-08-18 12:32:00",
     "Weekdays": "Thursday"
}

 ],
  "Face11": [
{
     "Name": "Sinh vien12",
     "Top": 220,
     "Left": 60,
     "Width": 852,
     "Height": 1507,
     "Frame number": 219,
     "Time": "2022-08-18 11:56:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 488,
     "Left": 1690,
     "Width": 437,
     "Height": 1499,
     "Frame number": 220,
     "Time": "2022-08-18 08:48:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 168,
     "Left": 1609,
     "Width": 583,
     "Height": 843,
     "Frame number": 221,
     "Time": "2022-08-18 12:04:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 92,
     "Left": 796,
     "Width": 320,
     "Height": 969,
     "Frame number": 222,
     "Time": "2022-08-18 15:36:00",
     "Weekdays": "Thursday"
}

 ],
  "Face12": [
{
     "Name": "Sinh vien10",
     "Top": 575,
     "Left": 614,
     "Width": 561,
     "Height": 556,
     "Frame number": 223,
     "Time": "2022-08-18 11:35:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 825,
     "Left": 978,
     "Width": 252,
     "Height": 212,
     "Frame number": 224,
     "Time": "2022-08-18 16:49:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 302,
     "Left": 1462,
     "Width": 359,
     "Height": 759,
     "Frame number": 225,
     "Time": "2022-08-18 15:45:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 481,
     "Left": 1467,
     "Width": 274,
     "Height": 1820,
     "Frame number": 226,
     "Time": "2022-08-18 12:00:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 96,
     "Left": 799,
     "Width": 155,
     "Height": 1388,
     "Frame number": 227,
     "Time": "2022-08-18 08:52:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 302,
     "Left": 77,
     "Width": 35,
     "Height": 559,
     "Frame number": 228,
     "Time": "2022-08-18 09:17:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 313,
     "Left": 1832,
     "Width": 256,
     "Height": 1250,
     "Frame number": 229,
     "Time": "2022-08-18 16:16:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 702,
     "Left": 709,
     "Width": 275,
     "Height": 993,
     "Frame number": 230,
     "Time": "2022-08-18 15:30:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 739,
     "Left": 788,
     "Width": 199,
     "Height": 412,
     "Frame number": 231,
     "Time": "2022-08-18 14:16:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 306,
     "Left": 810,
     "Width": 611,
     "Height": 813,
     "Frame number": 232,
     "Time": "2022-08-18 11:57:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 787,
     "Left": 675,
     "Width": 33,
     "Height": 1378,
     "Frame number": 233,
     "Time": "2022-08-18 10:14:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 562,
     "Left": 1896,
     "Width": 453,
     "Height": 266,
     "Frame number": 234,
     "Time": "2022-08-18 14:28:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 855,
     "Left": 1535,
     "Width": 790,
     "Height": 443,
     "Frame number": 235,
     "Time": "2022-08-18 13:17:00",
     "Weekdays": "Thursday"
}

 ],
  "Face1": [
{
     "Name": "Sinh vien12",
     "Top": 575,
     "Left": 1580,
     "Width": 496,
     "Height": 1771,
     "Frame number": 236,
     "Time": "2022-08-18 13:45:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 696,
     "Left": 194,
     "Width": 519,
     "Height": 1487,
     "Frame number": 237,
     "Time": "2022-08-18 08:19:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 788,
     "Left": 1694,
     "Width": 658,
     "Height": 286,
     "Frame number": 238,
     "Time": "2022-08-18 12:09:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 358,
     "Left": 646,
     "Width": 797,
     "Height": 970,
     "Frame number": 239,
     "Time": "2022-08-18 14:47:00",
     "Weekdays": "Thursday"
}

 ],
  "Face8": [
{
     "Name": "Sinh vien12",
     "Top": 799,
     "Left": 1528,
     "Width": 708,
     "Height": 1133,
     "Frame number": 240,
     "Time": "2022-08-18 15:36:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 153,
     "Left": 72,
     "Width": 85,
     "Height": 1694,
     "Frame number": 241,
     "Time": "2022-08-18 13:42:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 242,
     "Left": 1345,
     "Width": 619,
     "Height": 576,
     "Frame number": 242,
     "Time": "2022-08-18 13:06:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 828,
     "Left": 1062,
     "Width": 51,
     "Height": 1120,
     "Frame number": 243,
     "Time": "2022-08-18 10:24:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 424,
     "Left": 1828,
     "Width": 388,
     "Height": 1003,
     "Frame number": 244,
     "Time": "2022-08-18 08:40:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 489,
     "Left": 952,
     "Width": 440,
     "Height": 49,
     "Frame number": 245,
     "Time": "2022-08-18 16:21:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 721,
     "Left": 319,
     "Width": 274,
     "Height": 252,
     "Frame number": 246,
     "Time": "2022-08-18 15:11:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 766,
     "Left": 345,
     "Width": 557,
     "Height": 1871,
     "Frame number": 247,
     "Time": "2022-08-18 13:07:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 46,
     "Left": 1582,
     "Width": 451,
     "Height": 528,
     "Frame number": 248,
     "Time": "2022-08-18 14:31:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 421,
     "Left": 1387,
     "Width": 453,
     "Height": 1700,
     "Frame number": 249,
     "Time": "2022-08-18 16:54:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 2,
     "Left": 1223,
     "Width": 747,
     "Height": 1682,
     "Frame number": 250,
     "Time": "2022-08-18 12:54:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 24,
     "Left": 934,
     "Width": 339,
     "Height": 388,
     "Frame number": 251,
     "Time": "2022-08-18 16:39:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 679,
     "Left": 994,
     "Width": 305,
     "Height": 1214,
     "Frame number": 252,
     "Time": "2022-08-18 16:09:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 819,
     "Left": 242,
     "Width": 421,
     "Height": 205,
     "Frame number": 253,
     "Time": "2022-08-18 13:23:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 246,
     "Left": 1404,
     "Width": 322,
     "Height": 1718,
     "Frame number": 254,
     "Time": "2022-08-18 10:00:00",
     "Weekdays": "Thursday"
}

 ],
  "Face3": [
{
     "Name": "Sinh vien2",
     "Top": 534,
     "Left": 1285,
     "Width": 8,
     "Height": 1099,
     "Frame number": 255,
     "Time": "2022-08-18 11:26:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 580,
     "Left": 222,
     "Width": 782,
     "Height": 1099,
     "Frame number": 256,
     "Time": "2022-08-18 09:43:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 47,
     "Left": 1221,
     "Width": 590,
     "Height": 204,
     "Frame number": 257,
     "Time": "2022-08-18 16:02:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 642,
     "Left": 1525,
     "Width": 303,
     "Height": 934,
     "Frame number": 258,
     "Time": "2022-08-18 13:30:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 195,
     "Left": 693,
     "Width": 619,
     "Height": 845,
     "Frame number": 259,
     "Time": "2022-08-18 08:58:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 207,
     "Left": 606,
     "Width": 469,
     "Height": 1621,
     "Frame number": 260,
     "Time": "2022-08-18 15:00:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 435,
     "Left": 234,
     "Width": 137,
     "Height": 1242,
     "Frame number": 261,
     "Time": "2022-08-18 15:37:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 73,
     "Left": 283,
     "Width": 251,
     "Height": 891,
     "Frame number": 262,
     "Time": "2022-08-18 11:09:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 705,
     "Left": 1105,
     "Width": 121,
     "Height": 1525,
     "Frame number": 263,
     "Time": "2022-08-18 13:27:00",
     "Weekdays": "Thursday"
}

 ],
  "Face12": [
{
     "Name": "Sinh vien8",
     "Top": 567,
     "Left": 1028,
     "Width": 133,
     "Height": 770,
     "Frame number": 264,
     "Time": "2022-08-18 08:20:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 417,
     "Left": 427,
     "Width": 475,
     "Height": 1574,
     "Frame number": 265,
     "Time": "2022-08-18 12:54:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 58,
     "Left": 1745,
     "Width": 596,
     "Height": 645,
     "Frame number": 266,
     "Time": "2022-08-18 12:22:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 457,
     "Left": 342,
     "Width": 149,
     "Height": 113,
     "Frame number": 267,
     "Time": "2022-08-18 09:32:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 176,
     "Left": 1129,
     "Width": 430,
     "Height": 21,
     "Frame number": 268,
     "Time": "2022-08-18 16:23:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 472,
     "Left": 1143,
     "Width": 547,
     "Height": 518,
     "Frame number": 269,
     "Time": "2022-08-18 08:56:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 419,
     "Left": 877,
     "Width": 198,
     "Height": 578,
     "Frame number": 270,
     "Time": "2022-08-18 14:07:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 675,
     "Left": 609,
     "Width": 95,
     "Height": 302,
     "Frame number": 271,
     "Time": "2022-08-18 16:54:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 711,
     "Left": 1256,
     "Width": 200,
     "Height": 307,
     "Frame number": 272,
     "Time": "2022-08-18 10:50:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 660,
     "Left": 385,
     "Width": 547,
     "Height": 937,
     "Frame number": 273,
     "Time": "2022-08-18 09:06:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 358,
     "Left": 720,
     "Width": 325,
     "Height": 31,
     "Frame number": 274,
     "Time": "2022-08-18 14:23:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 336,
     "Left": 929,
     "Width": 179,
     "Height": 1091,
     "Frame number": 275,
     "Time": "2022-08-18 12:49:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 150,
     "Left": 439,
     "Width": 410,
     "Height": 989,
     "Frame number": 276,
     "Time": "2022-08-18 08:19:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 322,
     "Left": 1356,
     "Width": 207,
     "Height": 1825,
     "Frame number": 277,
     "Time": "2022-08-18 08:00:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 222,
     "Left": 717,
     "Width": 189,
     "Height": 1608,
     "Frame number": 278,
     "Time": "2022-08-18 16:00:00",
     "Weekdays": "Thursday"
}

 ],
  "Face10": [
{
     "Name": "Sinh vien7",
     "Top": 474,
     "Left": 658,
     "Width": 814,
     "Height": 140,
     "Frame number": 279,
     "Time": "2022-08-18 13:46:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 630,
     "Left": 1834,
     "Width": 293,
     "Height": 1385,
     "Frame number": 280,
     "Time": "2022-08-18 14:50:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 490,
     "Left": 502,
     "Width": 302,
     "Height": 1105,
     "Frame number": 281,
     "Time": "2022-08-18 16:33:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 695,
     "Left": 129,
     "Width": 575,
     "Height": 1418,
     "Frame number": 282,
     "Time": "2022-08-18 15:06:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 151,
     "Left": 256,
     "Width": 350,
     "Height": 606,
     "Frame number": 283,
     "Time": "2022-08-18 12:28:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 470,
     "Left": 794,
     "Width": 845,
     "Height": 1258,
     "Frame number": 284,
     "Time": "2022-08-18 11:35:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 662,
     "Left": 687,
     "Width": 176,
     "Height": 1882,
     "Frame number": 285,
     "Time": "2022-08-18 10:14:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 13,
     "Left": 931,
     "Width": 257,
     "Height": 1614,
     "Frame number": 286,
     "Time": "2022-08-18 10:58:00",
     "Weekdays": "Thursday"
}

 ],
  "Face10": [
{
     "Name": "Sinh vien8",
     "Top": 193,
     "Left": 1249,
     "Width": 562,
     "Height": 1499,
     "Frame number": 287,
     "Time": "2022-08-18 14:01:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 249,
     "Left": 795,
     "Width": 204,
     "Height": 1436,
     "Frame number": 288,
     "Time": "2022-08-18 08:57:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 669,
     "Left": 781,
     "Width": 282,
     "Height": 535,
     "Frame number": 289,
     "Time": "2022-08-18 16:08:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 764,
     "Left": 4,
     "Width": 381,
     "Height": 547,
     "Frame number": 290,
     "Time": "2022-08-18 12:37:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 405,
     "Left": 599,
     "Width": 854,
     "Height": 962,
     "Frame number": 291,
     "Time": "2022-08-18 15:05:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 228,
     "Left": 1167,
     "Width": 323,
     "Height": 906,
     "Frame number": 292,
     "Time": "2022-08-18 14:54:00",
     "Weekdays": "Thursday"
}

 ],
  "Face3": [
{
     "Name": "Sinh vien9",
     "Top": 501,
     "Left": 47,
     "Width": 385,
     "Height": 1656,
     "Frame number": 293,
     "Time": "2022-08-18 14:48:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 519,
     "Left": 269,
     "Width": 17,
     "Height": 776,
     "Frame number": 294,
     "Time": "2022-08-18 10:57:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 146,
     "Left": 1734,
     "Width": 278,
     "Height": 31,
     "Frame number": 295,
     "Time": "2022-08-18 11:19:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 483,
     "Left": 97,
     "Width": 411,
     "Height": 1544,
     "Frame number": 296,
     "Time": "2022-08-18 12:26:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 480,
     "Left": 1480,
     "Width": 217,
     "Height": 1015,
     "Frame number": 297,
     "Time": "2022-08-18 12:38:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 149,
     "Left": 1206,
     "Width": 797,
     "Height": 516,
     "Frame number": 298,
     "Time": "2022-08-18 14:00:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 841,
     "Left": 119,
     "Width": 233,
     "Height": 1475,
     "Frame number": 299,
     "Time": "2022-08-18 08:07:00",
     "Weekdays": "Thursday"
}

 ],
  "Face8": [
{
     "Name": "Sinh vien9",
     "Top": 85,
     "Left": 786,
     "Width": 587,
     "Height": 1769,
     "Frame number": 300,
     "Time": "2022-08-18 12:47:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 470,
     "Left": 675,
     "Width": 441,
     "Height": 1307,
     "Frame number": 301,
     "Time": "2022-08-18 11:51:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 632,
     "Left": 1381,
     "Width": 766,
     "Height": 1792,
     "Frame number": 302,
     "Time": "2022-08-18 15:52:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 585,
     "Left": 1747,
     "Width": 283,
     "Height": 695,
     "Frame number": 303,
     "Time": "2022-08-18 12:12:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 821,
     "Left": 1262,
     "Width": 818,
     "Height": 218,
     "Frame number": 304,
     "Time": "2022-08-18 12:02:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 351,
     "Left": 1830,
     "Width": 531,
     "Height": 340,
     "Frame number": 305,
     "Time": "2022-08-18 11:22:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 228,
     "Left": 958,
     "Width": 692,
     "Height": 588,
     "Frame number": 306,
     "Time": "2022-08-18 14:27:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 54,
     "Left": 1470,
     "Width": 173,
     "Height": 1142,
     "Frame number": 307,
     "Time": "2022-08-18 08:38:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 371,
     "Left": 1423,
     "Width": 646,
     "Height": 401,
     "Frame number": 308,
     "Time": "2022-08-18 08:20:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 535,
     "Left": 380,
     "Width": 33,
     "Height": 1642,
     "Frame number": 309,
     "Time": "2022-08-18 14:16:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 490,
     "Left": 1622,
     "Width": 191,
     "Height": 107,
     "Frame number": 310,
     "Time": "2022-08-18 12:15:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 849,
     "Left": 895,
     "Width": 186,
     "Height": 1223,
     "Frame number": 311,
     "Time": "2022-08-18 09:49:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 379,
     "Left": 219,
     "Width": 417,
     "Height": 772,
     "Frame number": 312,
     "Time": "2022-08-18 08:32:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 84,
     "Left": 871,
     "Width": 34,
     "Height": 84,
     "Frame number": 313,
     "Time": "2022-08-18 13:36:00",
     "Weekdays": "Thursday"
}

 ],
  "Face2": [
{
     "Name": "Sinh vien3",
     "Top": 816,
     "Left": 242,
     "Width": 847,
     "Height": 1905,
     "Frame number": 314,
     "Time": "2022-08-18 11:09:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 367,
     "Left": 1841,
     "Width": 484,
     "Height": 1174,
     "Frame number": 315,
     "Time": "2022-08-18 08:50:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 303,
     "Left": 582,
     "Width": 498,
     "Height": 593,
     "Frame number": 316,
     "Time": "2022-08-18 14:01:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 218,
     "Left": 1704,
     "Width": 205,
     "Height": 1453,
     "Frame number": 317,
     "Time": "2022-08-18 13:01:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 413,
     "Left": 1510,
     "Width": 136,
     "Height": 477,
     "Frame number": 318,
     "Time": "2022-08-18 15:37:00",
     "Weekdays": "Thursday"
}

 ],
  "Face9": [
{
     "Name": "Sinh vien7",
     "Top": 372,
     "Left": 1400,
     "Width": 36,
     "Height": 1061,
     "Frame number": 319,
     "Time": "2022-08-18 09:52:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 235,
     "Left": 912,
     "Width": 854,
     "Height": 1353,
     "Frame number": 320,
     "Time": "2022-08-18 08:43:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 707,
     "Left": 1223,
     "Width": 831,
     "Height": 389,
     "Frame number": 321,
     "Time": "2022-08-18 13:45:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 371,
     "Left": 246,
     "Width": 110,
     "Height": 472,
     "Frame number": 322,
     "Time": "2022-08-18 13:13:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 848,
     "Left": 1815,
     "Width": 223,
     "Height": 1130,
     "Frame number": 323,
     "Time": "2022-08-18 16:53:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 205,
     "Left": 132,
     "Width": 486,
     "Height": 1291,
     "Frame number": 324,
     "Time": "2022-08-18 14:55:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 81,
     "Left": 131,
     "Width": 313,
     "Height": 903,
     "Frame number": 325,
     "Time": "2022-08-18 16:48:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 790,
     "Left": 647,
     "Width": 24,
     "Height": 1249,
     "Frame number": 326,
     "Time": "2022-08-18 10:12:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 479,
     "Left": 648,
     "Width": 59,
     "Height": 1440,
     "Frame number": 327,
     "Time": "2022-08-18 09:03:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 554,
     "Left": 1915,
     "Width": 503,
     "Height": 957,
     "Frame number": 328,
     "Time": "2022-08-18 14:12:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 483,
     "Left": 69,
     "Width": 635,
     "Height": 755,
     "Frame number": 329,
     "Time": "2022-08-18 08:15:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 420,
     "Left": 517,
     "Width": 20,
     "Height": 1210,
     "Frame number": 330,
     "Time": "2022-08-18 08:40:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 790,
     "Left": 1823,
     "Width": 57,
     "Height": 1706,
     "Frame number": 331,
     "Time": "2022-08-18 08:50:00",
     "Weekdays": "Thursday"
}

 ],
  "Face11": [
{
     "Name": "Sinh vien1",
     "Top": 138,
     "Left": 1830,
     "Width": 183,
     "Height": 821,
     "Frame number": 332,
     "Time": "2022-08-18 12:33:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 691,
     "Left": 1020,
     "Width": 792,
     "Height": 951,
     "Frame number": 333,
     "Time": "2022-08-18 13:16:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 10,
     "Left": 763,
     "Width": 672,
     "Height": 1343,
     "Frame number": 334,
     "Time": "2022-08-18 09:08:00",
     "Weekdays": "Thursday"
}

 ],
  "Face3": [
{
     "Name": "Sinh vien8",
     "Top": 240,
     "Left": 1851,
     "Width": 771,
     "Height": 495,
     "Frame number": 335,
     "Time": "2022-08-18 16:32:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 587,
     "Left": 382,
     "Width": 466,
     "Height": 311,
     "Frame number": 336,
     "Time": "2022-08-18 12:06:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 654,
     "Left": 1843,
     "Width": 132,
     "Height": 684,
     "Frame number": 337,
     "Time": "2022-08-18 15:02:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 61,
     "Left": 74,
     "Width": 851,
     "Height": 48,
     "Frame number": 338,
     "Time": "2022-08-18 15:27:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 801,
     "Left": 82,
     "Width": 567,
     "Height": 1203,
     "Frame number": 339,
     "Time": "2022-08-18 08:48:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 205,
     "Left": 1830,
     "Width": 538,
     "Height": 594,
     "Frame number": 340,
     "Time": "2022-08-18 16:21:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 174,
     "Left": 693,
     "Width": 453,
     "Height": 199,
     "Frame number": 341,
     "Time": "2022-08-18 14:02:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 98,
     "Left": 116,
     "Width": 620,
     "Height": 495,
     "Frame number": 342,
     "Time": "2022-08-18 12:10:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 609,
     "Left": 849,
     "Width": 601,
     "Height": 173,
     "Frame number": 343,
     "Time": "2022-08-18 09:10:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 428,
     "Left": 1769,
     "Width": 95,
     "Height": 908,
     "Frame number": 344,
     "Time": "2022-08-18 11:37:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 856,
     "Left": 915,
     "Width": 402,
     "Height": 1737,
     "Frame number": 345,
     "Time": "2022-08-18 13:10:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 423,
     "Left": 1642,
     "Width": 96,
     "Height": 475,
     "Frame number": 346,
     "Time": "2022-08-18 16:09:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 612,
     "Left": 136,
     "Width": 528,
     "Height": 890,
     "Frame number": 347,
     "Time": "2022-08-18 16:35:00",
     "Weekdays": "Thursday"
}

 ],
  "Face2": [
{
     "Name": "Sinh vien5",
     "Top": 230,
     "Left": 743,
     "Width": 227,
     "Height": 630,
     "Frame number": 348,
     "Time": "2022-08-18 15:27:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 599,
     "Left": 1784,
     "Width": 674,
     "Height": 228,
     "Frame number": 349,
     "Time": "2022-08-18 11:33:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 403,
     "Left": 445,
     "Width": 306,
     "Height": 1832,
     "Frame number": 350,
     "Time": "2022-08-18 08:41:00",
     "Weekdays": "Thursday"
}

 ],
  "Face11": [
{
     "Name": "Sinh vien6",
     "Top": 197,
     "Left": 1717,
     "Width": 624,
     "Height": 65,
     "Frame number": 351,
     "Time": "2022-08-18 14:42:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 716,
     "Left": 441,
     "Width": 162,
     "Height": 1193,
     "Frame number": 352,
     "Time": "2022-08-18 15:38:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 646,
     "Left": 1539,
     "Width": 552,
     "Height": 1489,
     "Frame number": 353,
     "Time": "2022-08-18 11:12:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 656,
     "Left": 299,
     "Width": 797,
     "Height": 1793,
     "Frame number": 354,
     "Time": "2022-08-18 09:47:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 384,
     "Left": 629,
     "Width": 417,
     "Height": 798,
     "Frame number": 355,
     "Time": "2022-08-18 09:09:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 126,
     "Left": 1818,
     "Width": 422,
     "Height": 177,
     "Frame number": 356,
     "Time": "2022-08-18 15:57:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 179,
     "Left": 1890,
     "Width": 368,
     "Height": 298,
     "Frame number": 357,
     "Time": "2022-08-18 15:50:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 502,
     "Left": 96,
     "Width": 537,
     "Height": 853,
     "Frame number": 358,
     "Time": "2022-08-18 15:40:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 717,
     "Left": 1764,
     "Width": 483,
     "Height": 1001,
     "Frame number": 359,
     "Time": "2022-08-18 12:50:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 773,
     "Left": 1796,
     "Width": 384,
     "Height": 531,
     "Frame number": 360,
     "Time": "2022-08-18 10:13:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 10,
     "Left": 1892,
     "Width": 699,
     "Height": 269,
     "Frame number": 361,
     "Time": "2022-08-18 14:24:00",
     "Weekdays": "Thursday"
}

 ],
  "Face1": [
{
     "Name": "Sinh vien3",
     "Top": 836,
     "Left": 290,
     "Width": 208,
     "Height": 521,
     "Frame number": 362,
     "Time": "2022-08-18 15:21:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 4,
     "Left": 1363,
     "Width": 350,
     "Height": 189,
     "Frame number": 363,
     "Time": "2022-08-18 11:18:00",
     "Weekdays": "Thursday"
}

 ],
  "Face7": [
{
     "Name": "Sinh vien11",
     "Top": 175,
     "Left": 435,
     "Width": 468,
     "Height": 83,
     "Frame number": 364,
     "Time": "2022-08-18 10:31:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 816,
     "Left": 636,
     "Width": 290,
     "Height": 970,
     "Frame number": 365,
     "Time": "2022-08-18 13:52:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 842,
     "Left": 1215,
     "Width": 15,
     "Height": 1882,
     "Frame number": 366,
     "Time": "2022-08-18 10:08:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 30,
     "Left": 1321,
     "Width": 476,
     "Height": 1100,
     "Frame number": 367,
     "Time": "2022-08-18 13:12:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 249,
     "Left": 699,
     "Width": 521,
     "Height": 1057,
     "Frame number": 368,
     "Time": "2022-08-18 16:23:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 321,
     "Left": 1783,
     "Width": 125,
     "Height": 1036,
     "Frame number": 369,
     "Time": "2022-08-18 14:16:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 409,
     "Left": 1857,
     "Width": 212,
     "Height": 1048,
     "Frame number": 370,
     "Time": "2022-08-18 12:46:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 124,
     "Left": 1799,
     "Width": 263,
     "Height": 840,
     "Frame number": 371,
     "Time": "2022-08-18 13:49:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 773,
     "Left": 1125,
     "Width": 350,
     "Height": 864,
     "Frame number": 372,
     "Time": "2022-08-18 15:22:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 717,
     "Left": 321,
     "Width": 102,
     "Height": 1400,
     "Frame number": 373,
     "Time": "2022-08-18 16:58:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 775,
     "Left": 1635,
     "Width": 855,
     "Height": 966,
     "Frame number": 374,
     "Time": "2022-08-18 12:11:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 31,
     "Left": 106,
     "Width": 173,
     "Height": 637,
     "Frame number": 375,
     "Time": "2022-08-18 08:56:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 552,
     "Left": 748,
     "Width": 734,
     "Height": 658,
     "Frame number": 376,
     "Time": "2022-08-18 08:58:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien11",
     "Top": 663,
     "Left": 875,
     "Width": 797,
     "Height": 1582,
     "Frame number": 377,
     "Time": "2022-08-18 10:52:00",
     "Weekdays": "Thursday"
}

 ],
  "Face5": [
{
     "Name": "Sinh vien5",
     "Top": 718,
     "Left": 996,
     "Width": 414,
     "Height": 1190,
     "Frame number": 378,
     "Time": "2022-08-18 15:29:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 316,
     "Left": 1219,
     "Width": 729,
     "Height": 958,
     "Frame number": 379,
     "Time": "2022-08-18 08:16:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 480,
     "Left": 193,
     "Width": 307,
     "Height": 1665,
     "Frame number": 380,
     "Time": "2022-08-18 11:49:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 437,
     "Left": 64,
     "Width": 411,
     "Height": 1692,
     "Frame number": 381,
     "Time": "2022-08-18 14:58:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 403,
     "Left": 1624,
     "Width": 62,
     "Height": 1338,
     "Frame number": 382,
     "Time": "2022-08-18 13:21:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 460,
     "Left": 950,
     "Width": 30,
     "Height": 1078,
     "Frame number": 383,
     "Time": "2022-08-18 09:35:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 552,
     "Left": 1224,
     "Width": 383,
     "Height": 1227,
     "Frame number": 384,
     "Time": "2022-08-18 14:14:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 658,
     "Left": 670,
     "Width": 429,
     "Height": 1415,
     "Frame number": 385,
     "Time": "2022-08-18 15:17:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 686,
     "Left": 1643,
     "Width": 96,
     "Height": 816,
     "Frame number": 386,
     "Time": "2022-08-18 15:39:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 509,
     "Left": 137,
     "Width": 593,
     "Height": 957,
     "Frame number": 387,
     "Time": "2022-08-18 08:44:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 262,
     "Left": 690,
     "Width": 309,
     "Height": 875,
     "Frame number": 388,
     "Time": "2022-08-18 12:41:00",
     "Weekdays": "Thursday"
}

 ],
  "Face11": [
{
     "Name": "Sinh vien6",
     "Top": 84,
     "Left": 1577,
     "Width": 326,
     "Height": 1052,
     "Frame number": 389,
     "Time": "2022-08-18 10:02:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 334,
     "Left": 181,
     "Width": 646,
     "Height": 1089,
     "Frame number": 390,
     "Time": "2022-08-18 13:42:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 622,
     "Left": 48,
     "Width": 342,
     "Height": 411,
     "Frame number": 391,
     "Time": "2022-08-18 16:23:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 243,
     "Left": 578,
     "Width": 609,
     "Height": 473,
     "Frame number": 392,
     "Time": "2022-08-18 16:35:00",
     "Weekdays": "Thursday"
}

 ],
  "Face9": [
{
     "Name": "Sinh vien4",
     "Top": 766,
     "Left": 1181,
     "Width": 15,
     "Height": 324,
     "Frame number": 393,
     "Time": "2022-08-18 09:41:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 236,
     "Left": 1062,
     "Width": 716,
     "Height": 1021,
     "Frame number": 394,
     "Time": "2022-08-18 15:03:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 93,
     "Left": 551,
     "Width": 158,
     "Height": 1181,
     "Frame number": 395,
     "Time": "2022-08-18 15:38:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 689,
     "Left": 1192,
     "Width": 220,
     "Height": 524,
     "Frame number": 396,
     "Time": "2022-08-18 14:50:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 482,
     "Left": 1298,
     "Width": 669,
     "Height": 401,
     "Frame number": 397,
     "Time": "2022-08-18 14:39:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 225,
     "Left": 827,
     "Width": 593,
     "Height": 37,
     "Frame number": 398,
     "Time": "2022-08-18 11:27:00",
     "Weekdays": "Thursday"
}

 ],
  "Face9": [
{
     "Name": "Sinh vien3",
     "Top": 442,
     "Left": 970,
     "Width": 230,
     "Height": 1680,
     "Frame number": 399,
     "Time": "2022-08-18 13:09:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 110,
     "Left": 641,
     "Width": 582,
     "Height": 597,
     "Frame number": 400,
     "Time": "2022-08-18 15:09:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 434,
     "Left": 343,
     "Width": 112,
     "Height": 842,
     "Frame number": 401,
     "Time": "2022-08-18 10:41:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 202,
     "Left": 1460,
     "Width": 283,
     "Height": 1685,
     "Frame number": 402,
     "Time": "2022-08-18 15:52:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 726,
     "Left": 585,
     "Width": 665,
     "Height": 1232,
     "Frame number": 403,
     "Time": "2022-08-18 15:18:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 823,
     "Left": 946,
     "Width": 175,
     "Height": 526,
     "Frame number": 404,
     "Time": "2022-08-18 13:20:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 846,
     "Left": 1290,
     "Width": 69,
     "Height": 1631,
     "Frame number": 405,
     "Time": "2022-08-18 16:18:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 611,
     "Left": 377,
     "Width": 265,
     "Height": 548,
     "Frame number": 406,
     "Time": "2022-08-18 11:17:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 708,
     "Left": 1707,
     "Width": 800,
     "Height": 73,
     "Frame number": 407,
     "Time": "2022-08-18 13:07:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 824,
     "Left": 862,
     "Width": 91,
     "Height": 1061,
     "Frame number": 408,
     "Time": "2022-08-18 13:58:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 309,
     "Left": 835,
     "Width": 408,
     "Height": 1848,
     "Frame number": 409,
     "Time": "2022-08-18 11:13:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 647,
     "Left": 183,
     "Width": 188,
     "Height": 1450,
     "Frame number": 410,
     "Time": "2022-08-18 11:51:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 174,
     "Left": 105,
     "Width": 711,
     "Height": 1225,
     "Frame number": 411,
     "Time": "2022-08-18 13:00:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 510,
     "Left": 1547,
     "Width": 126,
     "Height": 1617,
     "Frame number": 412,
     "Time": "2022-08-18 12:11:00",
     "Weekdays": "Thursday"
}

 ],
  "Face3": [
{
     "Name": "Sinh vien5",
     "Top": 616,
     "Left": 15,
     "Width": 585,
     "Height": 1857,
     "Frame number": 413,
     "Time": "2022-08-18 15:49:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 666,
     "Left": 234,
     "Width": 814,
     "Height": 915,
     "Frame number": 414,
     "Time": "2022-08-18 08:14:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 51,
     "Left": 1068,
     "Width": 690,
     "Height": 1623,
     "Frame number": 415,
     "Time": "2022-08-18 09:19:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 662,
     "Left": 1291,
     "Width": 394,
     "Height": 1706,
     "Frame number": 416,
     "Time": "2022-08-18 11:16:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 70,
     "Left": 760,
     "Width": 642,
     "Height": 1560,
     "Frame number": 417,
     "Time": "2022-08-18 12:01:00",
     "Weekdays": "Thursday"
}

 ],
  "Face2": [
{
     "Name": "Sinh vien1",
     "Top": 595,
     "Left": 943,
     "Width": 721,
     "Height": 890,
     "Frame number": 418,
     "Time": "2022-08-18 15:22:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 201,
     "Left": 353,
     "Width": 326,
     "Height": 1061,
     "Frame number": 419,
     "Time": "2022-08-18 09:54:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 433,
     "Left": 105,
     "Width": 570,
     "Height": 1491,
     "Frame number": 420,
     "Time": "2022-08-18 11:55:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 5,
     "Left": 441,
     "Width": 601,
     "Height": 485,
     "Frame number": 421,
     "Time": "2022-08-18 16:46:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 228,
     "Left": 1221,
     "Width": 408,
     "Height": 800,
     "Frame number": 422,
     "Time": "2022-08-18 11:00:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 619,
     "Left": 267,
     "Width": 520,
     "Height": 1706,
     "Frame number": 423,
     "Time": "2022-08-18 09:11:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 354,
     "Left": 1690,
     "Width": 466,
     "Height": 1091,
     "Frame number": 424,
     "Time": "2022-08-18 14:24:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 851,
     "Left": 896,
     "Width": 350,
     "Height": 1772,
     "Frame number": 425,
     "Time": "2022-08-18 16:30:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 259,
     "Left": 1149,
     "Width": 751,
     "Height": 781,
     "Frame number": 426,
     "Time": "2022-08-18 14:14:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 244,
     "Left": 584,
     "Width": 32,
     "Height": 1285,
     "Frame number": 427,
     "Time": "2022-08-18 12:23:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 311,
     "Left": 488,
     "Width": 752,
     "Height": 1913,
     "Frame number": 428,
     "Time": "2022-08-18 13:42:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 179,
     "Left": 308,
     "Width": 677,
     "Height": 1179,
     "Frame number": 429,
     "Time": "2022-08-18 12:38:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 623,
     "Left": 1023,
     "Width": 647,
     "Height": 529,
     "Frame number": 430,
     "Time": "2022-08-18 15:09:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 588,
     "Left": 996,
     "Width": 74,
     "Height": 784,
     "Frame number": 431,
     "Time": "2022-08-18 11:10:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 330,
     "Left": 361,
     "Width": 207,
     "Height": 301,
     "Frame number": 432,
     "Time": "2022-08-18 10:01:00",
     "Weekdays": "Thursday"
}

 ],
  "Face5": [
{
     "Name": "Sinh vien9",
     "Top": 148,
     "Left": 108,
     "Width": 152,
     "Height": 519,
     "Frame number": 433,
     "Time": "2022-08-18 12:37:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 264,
     "Left": 175,
     "Width": 706,
     "Height": 943,
     "Frame number": 434,
     "Time": "2022-08-18 09:18:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 473,
     "Left": 657,
     "Width": 600,
     "Height": 437,
     "Frame number": 435,
     "Time": "2022-08-18 13:08:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 242,
     "Left": 32,
     "Width": 386,
     "Height": 1323,
     "Frame number": 436,
     "Time": "2022-08-18 14:38:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 470,
     "Left": 519,
     "Width": 57,
     "Height": 1872,
     "Frame number": 437,
     "Time": "2022-08-18 12:21:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 528,
     "Left": 1414,
     "Width": 533,
     "Height": 1242,
     "Frame number": 438,
     "Time": "2022-08-18 14:46:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 3,
     "Left": 423,
     "Width": 118,
     "Height": 1043,
     "Frame number": 439,
     "Time": "2022-08-18 14:17:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 623,
     "Left": 1753,
     "Width": 339,
     "Height": 1025,
     "Frame number": 440,
     "Time": "2022-08-18 09:07:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 124,
     "Left": 838,
     "Width": 192,
     "Height": 1049,
     "Frame number": 441,
     "Time": "2022-08-18 12:40:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 367,
     "Left": 553,
     "Width": 702,
     "Height": 634,
     "Frame number": 442,
     "Time": "2022-08-18 15:56:00",
     "Weekdays": "Thursday"
}

 ],
  "Face9": [
{
     "Name": "Sinh vien3",
     "Top": 750,
     "Left": 1889,
     "Width": 334,
     "Height": 1211,
     "Frame number": 443,
     "Time": "2022-08-18 12:47:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 74,
     "Left": 83,
     "Width": 734,
     "Height": 1415,
     "Frame number": 444,
     "Time": "2022-08-18 09:52:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 635,
     "Left": 1894,
     "Width": 564,
     "Height": 215,
     "Frame number": 445,
     "Time": "2022-08-18 08:27:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 760,
     "Left": 1050,
     "Width": 43,
     "Height": 1717,
     "Frame number": 446,
     "Time": "2022-08-18 11:24:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 127,
     "Left": 1309,
     "Width": 419,
     "Height": 201,
     "Frame number": 447,
     "Time": "2022-08-18 16:07:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 553,
     "Left": 255,
     "Width": 631,
     "Height": 414,
     "Frame number": 448,
     "Time": "2022-08-18 13:58:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 826,
     "Left": 15,
     "Width": 175,
     "Height": 529,
     "Frame number": 449,
     "Time": "2022-08-18 13:29:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 617,
     "Left": 1475,
     "Width": 387,
     "Height": 1749,
     "Frame number": 450,
     "Time": "2022-08-18 12:03:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 81,
     "Left": 45,
     "Width": 142,
     "Height": 7,
     "Frame number": 451,
     "Time": "2022-08-18 13:50:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 592,
     "Left": 1607,
     "Width": 333,
     "Height": 1156,
     "Frame number": 452,
     "Time": "2022-08-18 12:43:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 682,
     "Left": 1038,
     "Width": 527,
     "Height": 354,
     "Frame number": 453,
     "Time": "2022-08-18 10:22:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 173,
     "Left": 1437,
     "Width": 543,
     "Height": 1527,
     "Frame number": 454,
     "Time": "2022-08-18 15:19:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 72,
     "Left": 810,
     "Width": 144,
     "Height": 557,
     "Frame number": 455,
     "Time": "2022-08-18 10:20:00",
     "Weekdays": "Thursday"
}

 ],
  "Face1": [
{
     "Name": "Sinh vien3",
     "Top": 247,
     "Left": 1434,
     "Width": 498,
     "Height": 380,
     "Frame number": 456,
     "Time": "2022-08-18 09:42:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 79,
     "Left": 223,
     "Width": 554,
     "Height": 1316,
     "Frame number": 457,
     "Time": "2022-08-18 16:47:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 71,
     "Left": 1402,
     "Width": 392,
     "Height": 1698,
     "Frame number": 458,
     "Time": "2022-08-18 09:54:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 292,
     "Left": 1681,
     "Width": 539,
     "Height": 552,
     "Frame number": 459,
     "Time": "2022-08-18 10:29:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 124,
     "Left": 247,
     "Width": 411,
     "Height": 1390,
     "Frame number": 460,
     "Time": "2022-08-18 16:14:00",
     "Weekdays": "Thursday"
}

 ],
  "Face10": [
{
     "Name": "Sinh vien5",
     "Top": 265,
     "Left": 1399,
     "Width": 134,
     "Height": 514,
     "Frame number": 461,
     "Time": "2022-08-18 16:07:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 59,
     "Left": 914,
     "Width": 17,
     "Height": 499,
     "Frame number": 462,
     "Time": "2022-08-18 14:16:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 338,
     "Left": 996,
     "Width": 140,
     "Height": 597,
     "Frame number": 463,
     "Time": "2022-08-18 08:22:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 587,
     "Left": 768,
     "Width": 83,
     "Height": 1612,
     "Frame number": 464,
     "Time": "2022-08-18 13:00:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 822,
     "Left": 1364,
     "Width": 403,
     "Height": 294,
     "Frame number": 465,
     "Time": "2022-08-18 15:06:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 124,
     "Left": 1554,
     "Width": 495,
     "Height": 466,
     "Frame number": 466,
     "Time": "2022-08-18 08:37:00",
     "Weekdays": "Thursday"
}

 ],
  "Face9": [
{
     "Name": "Sinh vien7",
     "Top": 318,
     "Left": 139,
     "Width": 780,
     "Height": 214,
     "Frame number": 467,
     "Time": "2022-08-18 15:53:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 347,
     "Left": 978,
     "Width": 166,
     "Height": 1432,
     "Frame number": 468,
     "Time": "2022-08-18 15:19:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 245,
     "Left": 1730,
     "Width": 94,
     "Height": 800,
     "Frame number": 469,
     "Time": "2022-08-18 15:50:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 265,
     "Left": 592,
     "Width": 560,
     "Height": 1649,
     "Frame number": 470,
     "Time": "2022-08-18 09:49:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 62,
     "Left": 1266,
     "Width": 122,
     "Height": 1496,
     "Frame number": 471,
     "Time": "2022-08-18 10:08:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 660,
     "Left": 1127,
     "Width": 789,
     "Height": 138,
     "Frame number": 472,
     "Time": "2022-08-18 09:42:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 752,
     "Left": 487,
     "Width": 249,
     "Height": 247,
     "Frame number": 473,
     "Time": "2022-08-18 16:43:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 76,
     "Left": 1483,
     "Width": 736,
     "Height": 1236,
     "Frame number": 474,
     "Time": "2022-08-18 10:20:00",
     "Weekdays": "Thursday"
}

 ],
  "Face1": [
{
     "Name": "Sinh vien4",
     "Top": 832,
     "Left": 1707,
     "Width": 670,
     "Height": 433,
     "Frame number": 475,
     "Time": "2022-08-18 11:51:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 124,
     "Left": 669,
     "Width": 414,
     "Height": 1133,
     "Frame number": 476,
     "Time": "2022-08-18 10:22:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 207,
     "Left": 1697,
     "Width": 654,
     "Height": 1858,
     "Frame number": 477,
     "Time": "2022-08-18 15:35:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 568,
     "Left": 875,
     "Width": 365,
     "Height": 537,
     "Frame number": 478,
     "Time": "2022-08-18 12:31:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 311,
     "Left": 1595,
     "Width": 549,
     "Height": 1067,
     "Frame number": 479,
     "Time": "2022-08-18 14:15:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 623,
     "Left": 1177,
     "Width": 256,
     "Height": 265,
     "Frame number": 480,
     "Time": "2022-08-18 09:26:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 677,
     "Left": 907,
     "Width": 767,
     "Height": 366,
     "Frame number": 481,
     "Time": "2022-08-18 12:42:00",
     "Weekdays": "Thursday"
}

 ],
  "Face6": [
{
     "Name": "Sinh vien12",
     "Top": 717,
     "Left": 984,
     "Width": 658,
     "Height": 7,
     "Frame number": 482,
     "Time": "2022-08-18 14:12:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 834,
     "Left": 1489,
     "Width": 187,
     "Height": 88,
     "Frame number": 483,
     "Time": "2022-08-18 16:09:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 333,
     "Left": 1515,
     "Width": 301,
     "Height": 1489,
     "Frame number": 484,
     "Time": "2022-08-18 15:43:00",
     "Weekdays": "Thursday"
}

 ],
  "Face9": [
{
     "Name": "Sinh vien2",
     "Top": 412,
     "Left": 319,
     "Width": 60,
     "Height": 1785,
     "Frame number": 485,
     "Time": "2022-08-18 10:56:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 286,
     "Left": 1896,
     "Width": 252,
     "Height": 131,
     "Frame number": 486,
     "Time": "2022-08-18 15:45:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 545,
     "Left": 1546,
     "Width": 689,
     "Height": 1900,
     "Frame number": 487,
     "Time": "2022-08-18 14:51:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 730,
     "Left": 541,
     "Width": 57,
     "Height": 608,
     "Frame number": 488,
     "Time": "2022-08-18 13:43:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 473,
     "Left": 1242,
     "Width": 545,
     "Height": 298,
     "Frame number": 489,
     "Time": "2022-08-18 10:57:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 210,
     "Left": 1783,
     "Width": 276,
     "Height": 1673,
     "Frame number": 490,
     "Time": "2022-08-18 11:34:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 666,
     "Left": 1048,
     "Width": 594,
     "Height": 76,
     "Frame number": 491,
     "Time": "2022-08-18 15:13:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 726,
     "Left": 1545,
     "Width": 187,
     "Height": 905,
     "Frame number": 492,
     "Time": "2022-08-18 14:13:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 56,
     "Left": 789,
     "Width": 205,
     "Height": 208,
     "Frame number": 493,
     "Time": "2022-08-18 10:44:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 642,
     "Left": 103,
     "Width": 13,
     "Height": 1591,
     "Frame number": 494,
     "Time": "2022-08-18 16:40:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 555,
     "Left": 869,
     "Width": 517,
     "Height": 218,
     "Frame number": 495,
     "Time": "2022-08-18 15:24:00",
     "Weekdays": "Thursday"
}

 ],
  "Face12": [
{
     "Name": "Sinh vien2",
     "Top": 391,
     "Left": 1529,
     "Width": 136,
     "Height": 345,
     "Frame number": 496,
     "Time": "2022-08-18 16:43:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 573,
     "Left": 770,
     "Width": 242,
     "Height": 228,
     "Frame number": 497,
     "Time": "2022-08-18 08:17:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 697,
     "Left": 717,
     "Width": 148,
     "Height": 1125,
     "Frame number": 498,
     "Time": "2022-08-18 15:32:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 740,
     "Left": 1434,
     "Width": 232,
     "Height": 187,
     "Frame number": 499,
     "Time": "2022-08-18 14:33:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 833,
     "Left": 575,
     "Width": 45,
     "Height": 1904,
     "Frame number": 500,
     "Time": "2022-08-18 13:23:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 262,
     "Left": 1655,
     "Width": 22,
     "Height": 388,
     "Frame number": 501,
     "Time": "2022-08-18 14:46:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 558,
     "Left": 853,
     "Width": 744,
     "Height": 527,
     "Frame number": 502,
     "Time": "2022-08-18 10:04:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 165,
     "Left": 1021,
     "Width": 499,
     "Height": 694,
     "Frame number": 503,
     "Time": "2022-08-18 08:58:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 551,
     "Left": 324,
     "Width": 506,
     "Height": 1122,
     "Frame number": 504,
     "Time": "2022-08-18 13:26:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 70,
     "Left": 639,
     "Width": 773,
     "Height": 1117,
     "Frame number": 505,
     "Time": "2022-08-18 10:19:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 764,
     "Left": 971,
     "Width": 51,
     "Height": 1204,
     "Frame number": 506,
     "Time": "2022-08-18 14:45:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 625,
     "Left": 1683,
     "Width": 246,
     "Height": 1756,
     "Frame number": 507,
     "Time": "2022-08-18 14:10:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 410,
     "Left": 839,
     "Width": 88,
     "Height": 184,
     "Frame number": 508,
     "Time": "2022-08-18 12:29:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 494,
     "Left": 651,
     "Width": 349,
     "Height": 1861,
     "Frame number": 509,
     "Time": "2022-08-18 12:57:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 69,
     "Left": 504,
     "Width": 79,
     "Height": 471,
     "Frame number": 510,
     "Time": "2022-08-18 15:12:00",
     "Weekdays": "Thursday"
}

 ],
  "Face6": [
{
     "Name": "Sinh vien9",
     "Top": 561,
     "Left": 1903,
     "Width": 482,
     "Height": 735,
     "Frame number": 511,
     "Time": "2022-08-18 14:39:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 641,
     "Left": 620,
     "Width": 690,
     "Height": 562,
     "Frame number": 512,
     "Time": "2022-08-18 14:13:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 733,
     "Left": 1667,
     "Width": 669,
     "Height": 530,
     "Frame number": 513,
     "Time": "2022-08-18 08:32:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 507,
     "Left": 1577,
     "Width": 349,
     "Height": 1759,
     "Frame number": 514,
     "Time": "2022-08-18 09:08:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 792,
     "Left": 151,
     "Width": 538,
     "Height": 1393,
     "Frame number": 515,
     "Time": "2022-08-18 11:28:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 807,
     "Left": 113,
     "Width": 404,
     "Height": 605,
     "Frame number": 516,
     "Time": "2022-08-18 09:04:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 646,
     "Left": 1820,
     "Width": 556,
     "Height": 1042,
     "Frame number": 517,
     "Time": "2022-08-18 09:00:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 271,
     "Left": 493,
     "Width": 341,
     "Height": 79,
     "Frame number": 518,
     "Time": "2022-08-18 15:30:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 110,
     "Left": 955,
     "Width": 261,
     "Height": 1404,
     "Frame number": 519,
     "Time": "2022-08-18 16:29:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 793,
     "Left": 528,
     "Width": 154,
     "Height": 922,
     "Frame number": 520,
     "Time": "2022-08-18 10:15:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 696,
     "Left": 537,
     "Width": 148,
     "Height": 904,
     "Frame number": 521,
     "Time": "2022-08-18 16:06:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 179,
     "Left": 1487,
     "Width": 243,
     "Height": 267,
     "Frame number": 522,
     "Time": "2022-08-18 16:08:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 310,
     "Left": 927,
     "Width": 166,
     "Height": 243,
     "Frame number": 523,
     "Time": "2022-08-18 15:19:00",
     "Weekdays": "Thursday"
}

 ],
  "Face6": [
{
     "Name": "Sinh vien8",
     "Top": 128,
     "Left": 757,
     "Width": 759,
     "Height": 889,
     "Frame number": 524,
     "Time": "2022-08-18 16:05:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 19,
     "Left": 230,
     "Width": 752,
     "Height": 947,
     "Frame number": 525,
     "Time": "2022-08-18 08:06:00",
     "Weekdays": "Thursday"
}

 ],
  "Face11": [
{
     "Name": "Sinh vien7",
     "Top": 292,
     "Left": 609,
     "Width": 345,
     "Height": 766,
     "Frame number": 526,
     "Time": "2022-08-18 14:21:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 173,
     "Left": 299,
     "Width": 131,
     "Height": 1557,
     "Frame number": 527,
     "Time": "2022-08-18 08:23:00",
     "Weekdays": "Thursday"
}

 ],
  "Face11": [
{
     "Name": "Sinh vien10",
     "Top": 144,
     "Left": 1803,
     "Width": 496,
     "Height": 796,
     "Frame number": 528,
     "Time": "2022-08-18 14:16:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 201,
     "Left": 350,
     "Width": 54,
     "Height": 1408,
     "Frame number": 529,
     "Time": "2022-08-18 13:20:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 230,
     "Left": 7,
     "Width": 64,
     "Height": 877,
     "Frame number": 530,
     "Time": "2022-08-18 11:17:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 95,
     "Left": 1398,
     "Width": 658,
     "Height": 340,
     "Frame number": 531,
     "Time": "2022-08-18 10:15:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 290,
     "Left": 1219,
     "Width": 396,
     "Height": 1223,
     "Frame number": 532,
     "Time": "2022-08-18 14:54:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 568,
     "Left": 324,
     "Width": 16,
     "Height": 1691,
     "Frame number": 533,
     "Time": "2022-08-18 16:15:00",
     "Weekdays": "Thursday"
}

 ],
  "Face6": [
{
     "Name": "Sinh vien9",
     "Top": 182,
     "Left": 1729,
     "Width": 491,
     "Height": 1428,
     "Frame number": 534,
     "Time": "2022-08-18 10:41:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 768,
     "Left": 276,
     "Width": 67,
     "Height": 1491,
     "Frame number": 535,
     "Time": "2022-08-18 12:34:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 428,
     "Left": 1377,
     "Width": 281,
     "Height": 998,
     "Frame number": 536,
     "Time": "2022-08-18 13:58:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 349,
     "Left": 1694,
     "Width": 684,
     "Height": 291,
     "Frame number": 537,
     "Time": "2022-08-18 09:08:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 842,
     "Left": 996,
     "Width": 800,
     "Height": 495,
     "Frame number": 538,
     "Time": "2022-08-18 09:23:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 407,
     "Left": 1458,
     "Width": 373,
     "Height": 1821,
     "Frame number": 539,
     "Time": "2022-08-18 08:32:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 685,
     "Left": 1322,
     "Width": 237,
     "Height": 689,
     "Frame number": 540,
     "Time": "2022-08-18 13:52:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 251,
     "Left": 1820,
     "Width": 728,
     "Height": 614,
     "Frame number": 541,
     "Time": "2022-08-18 10:04:00",
     "Weekdays": "Thursday"
}

 ],
  "Face7": [
{
     "Name": "Sinh vien3",
     "Top": 737,
     "Left": 727,
     "Width": 576,
     "Height": 474,
     "Frame number": 542,
     "Time": "2022-08-18 10:50:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 339,
     "Left": 347,
     "Width": 76,
     "Height": 21,
     "Frame number": 543,
     "Time": "2022-08-18 09:19:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 467,
     "Left": 1885,
     "Width": 465,
     "Height": 1018,
     "Frame number": 544,
     "Time": "2022-08-18 12:42:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 525,
     "Left": 252,
     "Width": 714,
     "Height": 1550,
     "Frame number": 545,
     "Time": "2022-08-18 13:46:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 72,
     "Left": 1648,
     "Width": 460,
     "Height": 283,
     "Frame number": 546,
     "Time": "2022-08-18 13:54:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 312,
     "Left": 541,
     "Width": 61,
     "Height": 271,
     "Frame number": 547,
     "Time": "2022-08-18 11:40:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 792,
     "Left": 595,
     "Width": 258,
     "Height": 896,
     "Frame number": 548,
     "Time": "2022-08-18 11:33:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 496,
     "Left": 415,
     "Width": 722,
     "Height": 553,
     "Frame number": 549,
     "Time": "2022-08-18 16:06:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 435,
     "Left": 1661,
     "Width": 845,
     "Height": 1604,
     "Frame number": 550,
     "Time": "2022-08-18 16:54:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 150,
     "Left": 1393,
     "Width": 239,
     "Height": 1581,
     "Frame number": 551,
     "Time": "2022-08-18 16:47:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 307,
     "Left": 1821,
     "Width": 622,
     "Height": 30,
     "Frame number": 552,
     "Time": "2022-08-18 12:43:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 742,
     "Left": 593,
     "Width": 414,
     "Height": 419,
     "Frame number": 553,
     "Time": "2022-08-18 11:13:00",
     "Weekdays": "Thursday"
}

 ],
  "Face5": [
{
     "Name": "Sinh vien5",
     "Top": 628,
     "Left": 42,
     "Width": 18,
     "Height": 1661,
     "Frame number": 554,
     "Time": "2022-08-18 15:13:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 340,
     "Left": 1218,
     "Width": 408,
     "Height": 1505,
     "Frame number": 555,
     "Time": "2022-08-18 15:08:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 64,
     "Left": 395,
     "Width": 152,
     "Height": 782,
     "Frame number": 556,
     "Time": "2022-08-18 13:27:00",
     "Weekdays": "Thursday"
}

 ],
  "Face10": [
{
     "Name": "Sinh vien12",
     "Top": 26,
     "Left": 1455,
     "Width": 698,
     "Height": 1374,
     "Frame number": 557,
     "Time": "2022-08-18 15:39:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 628,
     "Left": 19,
     "Width": 496,
     "Height": 1550,
     "Frame number": 558,
     "Time": "2022-08-18 15:06:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 772,
     "Left": 1290,
     "Width": 758,
     "Height": 1217,
     "Frame number": 559,
     "Time": "2022-08-18 13:45:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 102,
     "Left": 789,
     "Width": 208,
     "Height": 10,
     "Frame number": 560,
     "Time": "2022-08-18 16:45:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 332,
     "Left": 1340,
     "Width": 755,
     "Height": 888,
     "Frame number": 561,
     "Time": "2022-08-18 16:07:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 351,
     "Left": 319,
     "Width": 629,
     "Height": 1751,
     "Frame number": 562,
     "Time": "2022-08-18 09:47:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 731,
     "Left": 550,
     "Width": 844,
     "Height": 1313,
     "Frame number": 563,
     "Time": "2022-08-18 12:07:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 431,
     "Left": 383,
     "Width": 74,
     "Height": 1270,
     "Frame number": 564,
     "Time": "2022-08-18 15:42:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 395,
     "Left": 1303,
     "Width": 580,
     "Height": 1712,
     "Frame number": 565,
     "Time": "2022-08-18 09:10:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 828,
     "Left": 308,
     "Width": 631,
     "Height": 898,
     "Frame number": 566,
     "Time": "2022-08-18 10:35:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 801,
     "Left": 928,
     "Width": 779,
     "Height": 1891,
     "Frame number": 567,
     "Time": "2022-08-18 10:29:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 135,
     "Left": 334,
     "Width": 240,
     "Height": 348,
     "Frame number": 568,
     "Time": "2022-08-18 09:40:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 719,
     "Left": 240,
     "Width": 770,
     "Height": 549,
     "Frame number": 569,
     "Time": "2022-08-18 16:58:00",
     "Weekdays": "Thursday"
}

 ],
  "Face1": [
{
     "Name": "Sinh vien1",
     "Top": 369,
     "Left": 159,
     "Width": 681,
     "Height": 908,
     "Frame number": 570,
     "Time": "2022-08-18 16:14:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 522,
     "Left": 905,
     "Width": 575,
     "Height": 1149,
     "Frame number": 571,
     "Time": "2022-08-18 09:58:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 266,
     "Left": 1516,
     "Width": 348,
     "Height": 1375,
     "Frame number": 572,
     "Time": "2022-08-18 14:51:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 562,
     "Left": 1707,
     "Width": 552,
     "Height": 474,
     "Frame number": 573,
     "Time": "2022-08-18 11:12:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 328,
     "Left": 910,
     "Width": 556,
     "Height": 1105,
     "Frame number": 574,
     "Time": "2022-08-18 14:46:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 798,
     "Left": 1439,
     "Width": 757,
     "Height": 218,
     "Frame number": 575,
     "Time": "2022-08-18 15:48:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 27,
     "Left": 383,
     "Width": 509,
     "Height": 1611,
     "Frame number": 576,
     "Time": "2022-08-18 08:24:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 493,
     "Left": 640,
     "Width": 855,
     "Height": 74,
     "Frame number": 577,
     "Time": "2022-08-18 15:31:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 34,
     "Left": 1785,
     "Width": 295,
     "Height": 319,
     "Frame number": 578,
     "Time": "2022-08-18 08:22:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 4,
     "Left": 414,
     "Width": 108,
     "Height": 1564,
     "Frame number": 579,
     "Time": "2022-08-18 16:40:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 238,
     "Left": 1287,
     "Width": 492,
     "Height": 1074,
     "Frame number": 580,
     "Time": "2022-08-18 10:40:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 177,
     "Left": 339,
     "Width": 579,
     "Height": 1478,
     "Frame number": 581,
     "Time": "2022-08-18 16:12:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 412,
     "Left": 1632,
     "Width": 666,
     "Height": 1892,
     "Frame number": 582,
     "Time": "2022-08-18 10:33:00",
     "Weekdays": "Thursday"
}

 ],
  "Face4": [
{
     "Name": "Sinh vien8",
     "Top": 248,
     "Left": 734,
     "Width": 548,
     "Height": 1457,
     "Frame number": 583,
     "Time": "2022-08-18 15:23:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 317,
     "Left": 1566,
     "Width": 465,
     "Height": 33,
     "Frame number": 584,
     "Time": "2022-08-18 13:47:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 303,
     "Left": 1017,
     "Width": 176,
     "Height": 1868,
     "Frame number": 585,
     "Time": "2022-08-18 11:33:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 634,
     "Left": 1407,
     "Width": 717,
     "Height": 31,
     "Frame number": 586,
     "Time": "2022-08-18 15:31:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 340,
     "Left": 1466,
     "Width": 583,
     "Height": 1195,
     "Frame number": 587,
     "Time": "2022-08-18 13:02:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 70,
     "Left": 516,
     "Width": 580,
     "Height": 472,
     "Frame number": 588,
     "Time": "2022-08-18 10:48:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 24,
     "Left": 1844,
     "Width": 62,
     "Height": 1516,
     "Frame number": 589,
     "Time": "2022-08-18 14:16:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 535,
     "Left": 1567,
     "Width": 103,
     "Height": 34,
     "Frame number": 590,
     "Time": "2022-08-18 10:50:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 506,
     "Left": 1701,
     "Width": 257,
     "Height": 1839,
     "Frame number": 591,
     "Time": "2022-08-18 15:15:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 435,
     "Left": 1024,
     "Width": 436,
     "Height": 901,
     "Frame number": 592,
     "Time": "2022-08-18 15:58:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 185,
     "Left": 1864,
     "Width": 598,
     "Height": 1630,
     "Frame number": 593,
     "Time": "2022-08-18 14:16:00",
     "Weekdays": "Thursday"
}

 ],
  "Face2": [
{
     "Name": "Sinh vien12",
     "Top": 178,
     "Left": 538,
     "Width": 777,
     "Height": 1541,
     "Frame number": 594,
     "Time": "2022-08-18 15:42:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 213,
     "Left": 1469,
     "Width": 622,
     "Height": 177,
     "Frame number": 595,
     "Time": "2022-08-18 10:03:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 436,
     "Left": 1891,
     "Width": 578,
     "Height": 576,
     "Frame number": 596,
     "Time": "2022-08-18 10:31:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 7,
     "Left": 1643,
     "Width": 593,
     "Height": 727,
     "Frame number": 597,
     "Time": "2022-08-18 12:39:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 748,
     "Left": 642,
     "Width": 310,
     "Height": 759,
     "Frame number": 598,
     "Time": "2022-08-18 11:30:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 174,
     "Left": 217,
     "Width": 58,
     "Height": 953,
     "Frame number": 599,
     "Time": "2022-08-18 09:46:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 409,
     "Left": 1011,
     "Width": 85,
     "Height": 404,
     "Frame number": 600,
     "Time": "2022-08-18 16:22:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 363,
     "Left": 1800,
     "Width": 144,
     "Height": 937,
     "Frame number": 601,
     "Time": "2022-08-18 10:32:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 462,
     "Left": 1549,
     "Width": 381,
     "Height": 1281,
     "Frame number": 602,
     "Time": "2022-08-18 10:38:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 161,
     "Left": 1393,
     "Width": 666,
     "Height": 647,
     "Frame number": 603,
     "Time": "2022-08-18 14:33:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 700,
     "Left": 1196,
     "Width": 377,
     "Height": 1468,
     "Frame number": 604,
     "Time": "2022-08-18 15:19:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 37,
     "Left": 295,
     "Width": 731,
     "Height": 1492,
     "Frame number": 605,
     "Time": "2022-08-18 14:51:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 15,
     "Left": 189,
     "Width": 384,
     "Height": 377,
     "Frame number": 606,
     "Time": "2022-08-18 15:16:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 819,
     "Left": 334,
     "Width": 548,
     "Height": 61,
     "Frame number": 607,
     "Time": "2022-08-18 14:08:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien12",
     "Top": 606,
     "Left": 538,
     "Width": 548,
     "Height": 799,
     "Frame number": 608,
     "Time": "2022-08-18 11:57:00",
     "Weekdays": "Thursday"
}

 ],
  "Face2": [
{
     "Name": "Sinh vien3",
     "Top": 773,
     "Left": 66,
     "Width": 660,
     "Height": 1169,
     "Frame number": 609,
     "Time": "2022-08-18 13:08:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 232,
     "Left": 1900,
     "Width": 552,
     "Height": 875,
     "Frame number": 610,
     "Time": "2022-08-18 08:39:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 226,
     "Left": 1272,
     "Width": 274,
     "Height": 435,
     "Frame number": 611,
     "Time": "2022-08-18 12:14:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 553,
     "Left": 1675,
     "Width": 648,
     "Height": 15,
     "Frame number": 612,
     "Time": "2022-08-18 13:56:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 565,
     "Left": 1495,
     "Width": 737,
     "Height": 959,
     "Frame number": 613,
     "Time": "2022-08-18 16:27:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 548,
     "Left": 1382,
     "Width": 65,
     "Height": 533,
     "Frame number": 614,
     "Time": "2022-08-18 10:34:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 154,
     "Left": 1859,
     "Width": 813,
     "Height": 1642,
     "Frame number": 615,
     "Time": "2022-08-18 15:02:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 449,
     "Left": 545,
     "Width": 88,
     "Height": 210,
     "Frame number": 616,
     "Time": "2022-08-18 14:50:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 363,
     "Left": 159,
     "Width": 732,
     "Height": 1080,
     "Frame number": 617,
     "Time": "2022-08-18 08:48:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 722,
     "Left": 1265,
     "Width": 91,
     "Height": 208,
     "Frame number": 618,
     "Time": "2022-08-18 10:58:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 341,
     "Left": 116,
     "Width": 162,
     "Height": 1384,
     "Frame number": 619,
     "Time": "2022-08-18 10:56:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 664,
     "Left": 1450,
     "Width": 802,
     "Height": 1387,
     "Frame number": 620,
     "Time": "2022-08-18 14:29:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 480,
     "Left": 210,
     "Width": 612,
     "Height": 1836,
     "Frame number": 621,
     "Time": "2022-08-18 14:56:00",
     "Weekdays": "Thursday"
}

 ],
  "Face3": [
{
     "Name": "Sinh vien10",
     "Top": 802,
     "Left": 38,
     "Width": 496,
     "Height": 684,
     "Frame number": 622,
     "Time": "2022-08-18 09:14:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 729,
     "Left": 629,
     "Width": 124,
     "Height": 287,
     "Frame number": 623,
     "Time": "2022-08-18 10:27:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 125,
     "Left": 742,
     "Width": 212,
     "Height": 1153,
     "Frame number": 624,
     "Time": "2022-08-18 08:15:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 775,
     "Left": 625,
     "Width": 844,
     "Height": 958,
     "Frame number": 625,
     "Time": "2022-08-18 08:47:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 149,
     "Left": 1573,
     "Width": 379,
     "Height": 1494,
     "Frame number": 626,
     "Time": "2022-08-18 15:04:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 259,
     "Left": 1750,
     "Width": 708,
     "Height": 1090,
     "Frame number": 627,
     "Time": "2022-08-18 09:54:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 554,
     "Left": 1229,
     "Width": 671,
     "Height": 380,
     "Frame number": 628,
     "Time": "2022-08-18 10:41:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 821,
     "Left": 451,
     "Width": 496,
     "Height": 1699,
     "Frame number": 629,
     "Time": "2022-08-18 13:58:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 393,
     "Left": 1894,
     "Width": 389,
     "Height": 555,
     "Frame number": 630,
     "Time": "2022-08-18 12:51:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 490,
     "Left": 1547,
     "Width": 718,
     "Height": 435,
     "Frame number": 631,
     "Time": "2022-08-18 12:23:00",
     "Weekdays": "Thursday"
}

 ],
  "Face6": [
{
     "Name": "Sinh vien1",
     "Top": 631,
     "Left": 1455,
     "Width": 287,
     "Height": 308,
     "Frame number": 632,
     "Time": "2022-08-18 16:08:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 704,
     "Left": 1514,
     "Width": 846,
     "Height": 431,
     "Frame number": 633,
     "Time": "2022-08-18 11:47:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 61,
     "Left": 549,
     "Width": 330,
     "Height": 1890,
     "Frame number": 634,
     "Time": "2022-08-18 13:43:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 110,
     "Left": 478,
     "Width": 696,
     "Height": 925,
     "Frame number": 635,
     "Time": "2022-08-18 14:38:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 686,
     "Left": 1114,
     "Width": 269,
     "Height": 743,
     "Frame number": 636,
     "Time": "2022-08-18 13:48:00",
     "Weekdays": "Thursday"
}

 ],
  "Face11": [
{
     "Name": "Sinh vien1",
     "Top": 35,
     "Left": 373,
     "Width": 121,
     "Height": 1311,
     "Frame number": 637,
     "Time": "2022-08-18 08:22:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 846,
     "Left": 1510,
     "Width": 515,
     "Height": 1838,
     "Frame number": 638,
     "Time": "2022-08-18 10:28:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 779,
     "Left": 1171,
     "Width": 273,
     "Height": 105,
     "Frame number": 639,
     "Time": "2022-08-18 11:34:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 87,
     "Left": 1320,
     "Width": 597,
     "Height": 805,
     "Frame number": 640,
     "Time": "2022-08-18 16:25:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 197,
     "Left": 1488,
     "Width": 417,
     "Height": 1471,
     "Frame number": 641,
     "Time": "2022-08-18 14:46:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 554,
     "Left": 329,
     "Width": 789,
     "Height": 1024,
     "Frame number": 642,
     "Time": "2022-08-18 09:44:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 524,
     "Left": 1817,
     "Width": 21,
     "Height": 314,
     "Frame number": 643,
     "Time": "2022-08-18 09:01:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 489,
     "Left": 218,
     "Width": 24,
     "Height": 1429,
     "Frame number": 644,
     "Time": "2022-08-18 15:30:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 471,
     "Left": 1479,
     "Width": 363,
     "Height": 1115,
     "Frame number": 645,
     "Time": "2022-08-18 11:52:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 193,
     "Left": 1102,
     "Width": 745,
     "Height": 1394,
     "Frame number": 646,
     "Time": "2022-08-18 08:27:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 833,
     "Left": 1800,
     "Width": 58,
     "Height": 938,
     "Frame number": 647,
     "Time": "2022-08-18 14:21:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 501,
     "Left": 1273,
     "Width": 818,
     "Height": 1846,
     "Frame number": 648,
     "Time": "2022-08-18 09:58:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 799,
     "Left": 1283,
     "Width": 239,
     "Height": 465,
     "Frame number": 649,
     "Time": "2022-08-18 11:57:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 196,
     "Left": 1166,
     "Width": 542,
     "Height": 1099,
     "Frame number": 650,
     "Time": "2022-08-18 15:40:00",
     "Weekdays": "Thursday"
}

 ],
  "Face4": [
{
     "Name": "Sinh vien4",
     "Top": 63,
     "Left": 1369,
     "Width": 588,
     "Height": 1613,
     "Frame number": 651,
     "Time": "2022-08-18 12:16:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 4,
     "Left": 158,
     "Width": 539,
     "Height": 1710,
     "Frame number": 652,
     "Time": "2022-08-18 09:41:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 567,
     "Left": 191,
     "Width": 601,
     "Height": 743,
     "Frame number": 653,
     "Time": "2022-08-18 13:30:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 225,
     "Left": 1279,
     "Width": 463,
     "Height": 1858,
     "Frame number": 654,
     "Time": "2022-08-18 09:40:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 514,
     "Left": 98,
     "Width": 820,
     "Height": 954,
     "Frame number": 655,
     "Time": "2022-08-18 15:30:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 387,
     "Left": 268,
     "Width": 290,
     "Height": 145,
     "Frame number": 656,
     "Time": "2022-08-18 10:08:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 647,
     "Left": 1685,
     "Width": 310,
     "Height": 1531,
     "Frame number": 657,
     "Time": "2022-08-18 13:24:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 818,
     "Left": 744,
     "Width": 436,
     "Height": 1106,
     "Frame number": 658,
     "Time": "2022-08-18 10:49:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 490,
     "Left": 1518,
     "Width": 87,
     "Height": 321,
     "Frame number": 659,
     "Time": "2022-08-18 15:02:00",
     "Weekdays": "Thursday"
}

 ],
  "Face11": [
{
     "Name": "Sinh vien7",
     "Top": 206,
     "Left": 405,
     "Width": 474,
     "Height": 1048,
     "Frame number": 660,
     "Time": "2022-08-18 10:51:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 460,
     "Left": 1493,
     "Width": 541,
     "Height": 1704,
     "Frame number": 661,
     "Time": "2022-08-18 08:06:00",
     "Weekdays": "Thursday"
}

 ],
  "Face3": [
{
     "Name": "Sinh vien6",
     "Top": 530,
     "Left": 1,
     "Width": 591,
     "Height": 1279,
     "Frame number": 662,
     "Time": "2022-08-18 15:23:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 573,
     "Left": 1217,
     "Width": 71,
     "Height": 1707,
     "Frame number": 663,
     "Time": "2022-08-18 10:52:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 697,
     "Left": 1841,
     "Width": 375,
     "Height": 938,
     "Frame number": 664,
     "Time": "2022-08-18 16:28:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 234,
     "Left": 341,
     "Width": 715,
     "Height": 100,
     "Frame number": 665,
     "Time": "2022-08-18 13:40:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 804,
     "Left": 557,
     "Width": 268,
     "Height": 1551,
     "Frame number": 666,
     "Time": "2022-08-18 13:32:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 647,
     "Left": 150,
     "Width": 278,
     "Height": 77,
     "Frame number": 667,
     "Time": "2022-08-18 12:17:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 359,
     "Left": 146,
     "Width": 773,
     "Height": 1064,
     "Frame number": 668,
     "Time": "2022-08-18 08:39:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 10,
     "Left": 431,
     "Width": 381,
     "Height": 209,
     "Frame number": 669,
     "Time": "2022-08-18 16:09:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 594,
     "Left": 1638,
     "Width": 531,
     "Height": 146,
     "Frame number": 670,
     "Time": "2022-08-18 14:23:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 752,
     "Left": 455,
     "Width": 701,
     "Height": 4,
     "Frame number": 671,
     "Time": "2022-08-18 09:50:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 657,
     "Left": 1402,
     "Width": 189,
     "Height": 1338,
     "Frame number": 672,
     "Time": "2022-08-18 14:53:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 414,
     "Left": 116,
     "Width": 378,
     "Height": 1713,
     "Frame number": 673,
     "Time": "2022-08-18 10:01:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 383,
     "Left": 1341,
     "Width": 219,
     "Height": 1544,
     "Frame number": 674,
     "Time": "2022-08-18 12:16:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 308,
     "Left": 767,
     "Width": 833,
     "Height": 901,
     "Frame number": 675,
     "Time": "2022-08-18 14:47:00",
     "Weekdays": "Thursday"
}

 ],
  "Face12": [
{
     "Name": "Sinh vien10",
     "Top": 13,
     "Left": 1060,
     "Width": 131,
     "Height": 1765,
     "Frame number": 676,
     "Time": "2022-08-18 16:31:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 124,
     "Left": 89,
     "Width": 517,
     "Height": 944,
     "Frame number": 677,
     "Time": "2022-08-18 09:25:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 240,
     "Left": 1897,
     "Width": 624,
     "Height": 604,
     "Frame number": 678,
     "Time": "2022-08-18 13:42:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 197,
     "Left": 360,
     "Width": 251,
     "Height": 1758,
     "Frame number": 679,
     "Time": "2022-08-18 13:27:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 84,
     "Left": 1,
     "Width": 607,
     "Height": 1481,
     "Frame number": 680,
     "Time": "2022-08-18 11:41:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 354,
     "Left": 1355,
     "Width": 647,
     "Height": 55,
     "Frame number": 681,
     "Time": "2022-08-18 11:00:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 283,
     "Left": 147,
     "Width": 142,
     "Height": 746,
     "Frame number": 682,
     "Time": "2022-08-18 12:13:00",
     "Weekdays": "Thursday"
}

 ],
  "Face1": [
{
     "Name": "Sinh vien3",
     "Top": 227,
     "Left": 1822,
     "Width": 742,
     "Height": 971,
     "Frame number": 683,
     "Time": "2022-08-18 08:39:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 178,
     "Left": 588,
     "Width": 658,
     "Height": 1642,
     "Frame number": 684,
     "Time": "2022-08-18 09:18:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 633,
     "Left": 14,
     "Width": 169,
     "Height": 374,
     "Frame number": 685,
     "Time": "2022-08-18 16:35:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 75,
     "Left": 940,
     "Width": 786,
     "Height": 1876,
     "Frame number": 686,
     "Time": "2022-08-18 12:04:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 484,
     "Left": 840,
     "Width": 252,
     "Height": 595,
     "Frame number": 687,
     "Time": "2022-08-18 16:38:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 825,
     "Left": 199,
     "Width": 575,
     "Height": 706,
     "Frame number": 688,
     "Time": "2022-08-18 09:19:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 373,
     "Left": 1376,
     "Width": 5,
     "Height": 366,
     "Frame number": 689,
     "Time": "2022-08-18 15:48:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 779,
     "Left": 547,
     "Width": 605,
     "Height": 1027,
     "Frame number": 690,
     "Time": "2022-08-18 14:47:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 374,
     "Left": 1131,
     "Width": 646,
     "Height": 1286,
     "Frame number": 691,
     "Time": "2022-08-18 16:52:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 837,
     "Left": 1916,
     "Width": 6,
     "Height": 466,
     "Frame number": 692,
     "Time": "2022-08-18 12:12:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 472,
     "Left": 473,
     "Width": 150,
     "Height": 1315,
     "Frame number": 693,
     "Time": "2022-08-18 13:55:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 150,
     "Left": 480,
     "Width": 2,
     "Height": 1375,
     "Frame number": 694,
     "Time": "2022-08-18 12:23:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 494,
     "Left": 1776,
     "Width": 536,
     "Height": 978,
     "Frame number": 695,
     "Time": "2022-08-18 12:50:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 170,
     "Left": 55,
     "Width": 519,
     "Height": 151,
     "Frame number": 696,
     "Time": "2022-08-18 13:11:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 395,
     "Left": 1268,
     "Width": 51,
     "Height": 1042,
     "Frame number": 697,
     "Time": "2022-08-18 14:01:00",
     "Weekdays": "Thursday"
}

 ],
  "Face9": [
{
     "Name": "Sinh vien10",
     "Top": 242,
     "Left": 124,
     "Width": 731,
     "Height": 568,
     "Frame number": 698,
     "Time": "2022-08-18 12:02:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 277,
     "Left": 20,
     "Width": 86,
     "Height": 29,
     "Frame number": 699,
     "Time": "2022-08-18 16:42:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 744,
     "Left": 516,
     "Width": 718,
     "Height": 1185,
     "Frame number": 700,
     "Time": "2022-08-18 16:38:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 762,
     "Left": 1362,
     "Width": 491,
     "Height": 1506,
     "Frame number": 701,
     "Time": "2022-08-18 13:24:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 776,
     "Left": 772,
     "Width": 53,
     "Height": 357,
     "Frame number": 702,
     "Time": "2022-08-18 08:38:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 6,
     "Left": 1134,
     "Width": 58,
     "Height": 461,
     "Frame number": 703,
     "Time": "2022-08-18 15:01:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 852,
     "Left": 1363,
     "Width": 638,
     "Height": 172,
     "Frame number": 704,
     "Time": "2022-08-18 08:41:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 380,
     "Left": 402,
     "Width": 175,
     "Height": 1514,
     "Frame number": 705,
     "Time": "2022-08-18 10:34:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 233,
     "Left": 1709,
     "Width": 333,
     "Height": 1677,
     "Frame number": 706,
     "Time": "2022-08-18 12:42:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 108,
     "Left": 1636,
     "Width": 655,
     "Height": 663,
     "Frame number": 707,
     "Time": "2022-08-18 09:16:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 574,
     "Left": 1542,
     "Width": 13,
     "Height": 432,
     "Frame number": 708,
     "Time": "2022-08-18 14:24:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 781,
     "Left": 1589,
     "Width": 51,
     "Height": 394,
     "Frame number": 709,
     "Time": "2022-08-18 10:43:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien10",
     "Top": 847,
     "Left": 737,
     "Width": 844,
     "Height": 1584,
     "Frame number": 710,
     "Time": "2022-08-18 14:29:00",
     "Weekdays": "Thursday"
}

 ],
  "Face2": [
{
     "Name": "Sinh vien3",
     "Top": 431,
     "Left": 33,
     "Width": 195,
     "Height": 354,
     "Frame number": 711,
     "Time": "2022-08-18 10:54:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 829,
     "Left": 1646,
     "Width": 622,
     "Height": 1436,
     "Frame number": 712,
     "Time": "2022-08-18 16:29:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 244,
     "Left": 1270,
     "Width": 165,
     "Height": 3,
     "Frame number": 713,
     "Time": "2022-08-18 16:26:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 565,
     "Left": 1552,
     "Width": 195,
     "Height": 1436,
     "Frame number": 714,
     "Time": "2022-08-18 10:14:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 17,
     "Left": 966,
     "Width": 341,
     "Height": 1910,
     "Frame number": 715,
     "Time": "2022-08-18 09:09:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 826,
     "Left": 573,
     "Width": 438,
     "Height": 273,
     "Frame number": 716,
     "Time": "2022-08-18 10:24:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 279,
     "Left": 28,
     "Width": 293,
     "Height": 1047,
     "Frame number": 717,
     "Time": "2022-08-18 12:38:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 68,
     "Left": 1365,
     "Width": 647,
     "Height": 1683,
     "Frame number": 718,
     "Time": "2022-08-18 12:31:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 536,
     "Left": 372,
     "Width": 770,
     "Height": 393,
     "Frame number": 719,
     "Time": "2022-08-18 16:11:00",
     "Weekdays": "Thursday"
}

 ],
  "Face7": [
{
     "Name": "Sinh vien1",
     "Top": 41,
     "Left": 1681,
     "Width": 143,
     "Height": 1347,
     "Frame number": 720,
     "Time": "2022-08-18 16:02:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 728,
     "Left": 1451,
     "Width": 223,
     "Height": 666,
     "Frame number": 721,
     "Time": "2022-08-18 12:05:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 564,
     "Left": 827,
     "Width": 483,
     "Height": 185,
     "Frame number": 722,
     "Time": "2022-08-18 12:14:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien1",
     "Top": 375,
     "Left": 52,
     "Width": 292,
     "Height": 628,
     "Frame number": 723,
     "Time": "2022-08-18 11:48:00",
     "Weekdays": "Thursday"
}

 ],
  "Face7": [
{
     "Name": "Sinh vien8",
     "Top": 121,
     "Left": 66,
     "Width": 606,
     "Height": 755,
     "Frame number": 724,
     "Time": "2022-08-18 14:48:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 105,
     "Left": 1768,
     "Width": 785,
     "Height": 734,
     "Frame number": 725,
     "Time": "2022-08-18 08:56:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 565,
     "Left": 1388,
     "Width": 385,
     "Height": 1295,
     "Frame number": 726,
     "Time": "2022-08-18 15:41:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 500,
     "Left": 1769,
     "Width": 657,
     "Height": 1453,
     "Frame number": 727,
     "Time": "2022-08-18 09:37:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 3,
     "Left": 905,
     "Width": 217,
     "Height": 1673,
     "Frame number": 728,
     "Time": "2022-08-18 15:50:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 679,
     "Left": 392,
     "Width": 395,
     "Height": 459,
     "Frame number": 729,
     "Time": "2022-08-18 12:40:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 478,
     "Left": 1065,
     "Width": 319,
     "Height": 523,
     "Frame number": 730,
     "Time": "2022-08-18 11:37:00",
     "Weekdays": "Thursday"
}

 ],
  "Face3": [
{
     "Name": "Sinh vien4",
     "Top": 304,
     "Left": 1595,
     "Width": 296,
     "Height": 1896,
     "Frame number": 731,
     "Time": "2022-08-18 09:22:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 227,
     "Left": 1553,
     "Width": 510,
     "Height": 1564,
     "Frame number": 732,
     "Time": "2022-08-18 09:22:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 9,
     "Left": 1504,
     "Width": 45,
     "Height": 1781,
     "Frame number": 733,
     "Time": "2022-08-18 14:35:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 145,
     "Left": 821,
     "Width": 346,
     "Height": 1732,
     "Frame number": 734,
     "Time": "2022-08-18 13:41:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 617,
     "Left": 304,
     "Width": 125,
     "Height": 1111,
     "Frame number": 735,
     "Time": "2022-08-18 14:16:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 484,
     "Left": 187,
     "Width": 82,
     "Height": 970,
     "Frame number": 736,
     "Time": "2022-08-18 11:19:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 782,
     "Left": 1581,
     "Width": 603,
     "Height": 987,
     "Frame number": 737,
     "Time": "2022-08-18 11:29:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 89,
     "Left": 1811,
     "Width": 217,
     "Height": 468,
     "Frame number": 738,
     "Time": "2022-08-18 13:21:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 708,
     "Left": 1444,
     "Width": 179,
     "Height": 1374,
     "Frame number": 739,
     "Time": "2022-08-18 12:43:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 230,
     "Left": 535,
     "Width": 618,
     "Height": 633,
     "Frame number": 740,
     "Time": "2022-08-18 16:10:00",
     "Weekdays": "Thursday"
}

 ],
  "Face11": [
{
     "Name": "Sinh vien9",
     "Top": 572,
     "Left": 27,
     "Width": 545,
     "Height": 891,
     "Frame number": 741,
     "Time": "2022-08-18 08:58:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 37,
     "Left": 684,
     "Width": 122,
     "Height": 484,
     "Frame number": 742,
     "Time": "2022-08-18 09:42:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 400,
     "Left": 1559,
     "Width": 51,
     "Height": 1431,
     "Frame number": 743,
     "Time": "2022-08-18 12:18:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 256,
     "Left": 672,
     "Width": 230,
     "Height": 114,
     "Frame number": 744,
     "Time": "2022-08-18 10:21:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 652,
     "Left": 581,
     "Width": 137,
     "Height": 1707,
     "Frame number": 745,
     "Time": "2022-08-18 15:38:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 98,
     "Left": 1613,
     "Width": 226,
     "Height": 953,
     "Frame number": 746,
     "Time": "2022-08-18 09:22:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 827,
     "Left": 915,
     "Width": 155,
     "Height": 897,
     "Frame number": 747,
     "Time": "2022-08-18 16:44:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 439,
     "Left": 1795,
     "Width": 778,
     "Height": 1105,
     "Frame number": 748,
     "Time": "2022-08-18 09:57:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 608,
     "Left": 343,
     "Width": 541,
     "Height": 368,
     "Frame number": 749,
     "Time": "2022-08-18 10:45:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 282,
     "Left": 316,
     "Width": 44,
     "Height": 487,
     "Frame number": 750,
     "Time": "2022-08-18 14:00:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien9",
     "Top": 364,
     "Left": 458,
     "Width": 749,
     "Height": 1749,
     "Frame number": 751,
     "Time": "2022-08-18 16:25:00",
     "Weekdays": "Thursday"
}

 ],
  "Face6": [
{
     "Name": "Sinh vien2",
     "Top": 820,
     "Left": 1756,
     "Width": 456,
     "Height": 534,
     "Frame number": 752,
     "Time": "2022-08-18 11:00:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 735,
     "Left": 154,
     "Width": 170,
     "Height": 1817,
     "Frame number": 753,
     "Time": "2022-08-18 14:53:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 344,
     "Left": 979,
     "Width": 474,
     "Height": 1083,
     "Frame number": 754,
     "Time": "2022-08-18 08:05:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 817,
     "Left": 540,
     "Width": 520,
     "Height": 1355,
     "Frame number": 755,
     "Time": "2022-08-18 08:00:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 724,
     "Left": 283,
     "Width": 702,
     "Height": 518,
     "Frame number": 756,
     "Time": "2022-08-18 10:45:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 318,
     "Left": 884,
     "Width": 819,
     "Height": 1790,
     "Frame number": 757,
     "Time": "2022-08-18 13:41:00",
     "Weekdays": "Thursday"
}

 ],
  "Face5": [
{
     "Name": "Sinh vien7",
     "Top": 546,
     "Left": 1527,
     "Width": 447,
     "Height": 1894,
     "Frame number": 758,
     "Time": "2022-08-18 14:06:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 7,
     "Left": 1619,
     "Width": 549,
     "Height": 718,
     "Frame number": 759,
     "Time": "2022-08-18 12:44:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 759,
     "Left": 1623,
     "Width": 767,
     "Height": 198,
     "Frame number": 760,
     "Time": "2022-08-18 12:00:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 102,
     "Left": 954,
     "Width": 842,
     "Height": 1120,
     "Frame number": 761,
     "Time": "2022-08-18 10:18:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 349,
     "Left": 374,
     "Width": 183,
     "Height": 1282,
     "Frame number": 762,
     "Time": "2022-08-18 11:14:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 104,
     "Left": 79,
     "Width": 664,
     "Height": 1178,
     "Frame number": 763,
     "Time": "2022-08-18 10:09:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 770,
     "Left": 1309,
     "Width": 716,
     "Height": 783,
     "Frame number": 764,
     "Time": "2022-08-18 12:30:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 608,
     "Left": 1107,
     "Width": 323,
     "Height": 1572,
     "Frame number": 765,
     "Time": "2022-08-18 14:03:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 688,
     "Left": 1772,
     "Width": 400,
     "Height": 1877,
     "Frame number": 766,
     "Time": "2022-08-18 14:55:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 290,
     "Left": 212,
     "Width": 258,
     "Height": 258,
     "Frame number": 767,
     "Time": "2022-08-18 16:41:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 93,
     "Left": 637,
     "Width": 18,
     "Height": 1080,
     "Frame number": 768,
     "Time": "2022-08-18 16:49:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien7",
     "Top": 473,
     "Left": 1762,
     "Width": 764,
     "Height": 509,
     "Frame number": 769,
     "Time": "2022-08-18 08:33:00",
     "Weekdays": "Thursday"
}

 ],
  "Face10": [
{
     "Name": "Sinh vien3",
     "Top": 238,
     "Left": 1695,
     "Width": 354,
     "Height": 107,
     "Frame number": 770,
     "Time": "2022-08-18 12:05:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 750,
     "Left": 834,
     "Width": 330,
     "Height": 1649,
     "Frame number": 771,
     "Time": "2022-08-18 12:47:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 619,
     "Left": 1392,
     "Width": 826,
     "Height": 1236,
     "Frame number": 772,
     "Time": "2022-08-18 16:39:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 752,
     "Left": 1621,
     "Width": 420,
     "Height": 1142,
     "Frame number": 773,
     "Time": "2022-08-18 11:51:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 732,
     "Left": 695,
     "Width": 91,
     "Height": 757,
     "Frame number": 774,
     "Time": "2022-08-18 14:23:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 855,
     "Left": 1136,
     "Width": 652,
     "Height": 1370,
     "Frame number": 775,
     "Time": "2022-08-18 12:30:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 50,
     "Left": 231,
     "Width": 761,
     "Height": 911,
     "Frame number": 776,
     "Time": "2022-08-18 09:56:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 549,
     "Left": 1702,
     "Width": 189,
     "Height": 1163,
     "Frame number": 777,
     "Time": "2022-08-18 12:12:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 100,
     "Left": 928,
     "Width": 150,
     "Height": 1757,
     "Frame number": 778,
     "Time": "2022-08-18 13:51:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 699,
     "Left": 1185,
     "Width": 39,
     "Height": 923,
     "Frame number": 779,
     "Time": "2022-08-18 10:12:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 506,
     "Left": 1382,
     "Width": 667,
     "Height": 1405,
     "Frame number": 780,
     "Time": "2022-08-18 11:38:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 809,
     "Left": 482,
     "Width": 605,
     "Height": 1674,
     "Frame number": 781,
     "Time": "2022-08-18 15:22:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 32,
     "Left": 1479,
     "Width": 351,
     "Height": 485,
     "Frame number": 782,
     "Time": "2022-08-18 14:20:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien3",
     "Top": 606,
     "Left": 485,
     "Width": 592,
     "Height": 11,
     "Frame number": 783,
     "Time": "2022-08-18 13:12:00",
     "Weekdays": "Thursday"
}

 ],
  "Face2": [
{
     "Name": "Sinh vien2",
     "Top": 541,
     "Left": 1798,
     "Width": 166,
     "Height": 829,
     "Frame number": 784,
     "Time": "2022-08-18 11:35:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 638,
     "Left": 720,
     "Width": 327,
     "Height": 910,
     "Frame number": 785,
     "Time": "2022-08-18 12:16:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 732,
     "Left": 767,
     "Width": 712,
     "Height": 1689,
     "Frame number": 786,
     "Time": "2022-08-18 12:34:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 512,
     "Left": 438,
     "Width": 486,
     "Height": 944,
     "Frame number": 787,
     "Time": "2022-08-18 12:21:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 608,
     "Left": 576,
     "Width": 81,
     "Height": 536,
     "Frame number": 788,
     "Time": "2022-08-18 08:12:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 250,
     "Left": 1500,
     "Width": 223,
     "Height": 498,
     "Frame number": 789,
     "Time": "2022-08-18 11:51:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien2",
     "Top": 801,
     "Left": 1219,
     "Width": 550,
     "Height": 1830,
     "Frame number": 790,
     "Time": "2022-08-18 15:47:00",
     "Weekdays": "Thursday"
}

 ],
  "Face6": [
{
     "Name": "Sinh vien8",
     "Top": 317,
     "Left": 1786,
     "Width": 558,
     "Height": 1614,
     "Frame number": 791,
     "Time": "2022-08-18 09:30:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 193,
     "Left": 489,
     "Width": 687,
     "Height": 94,
     "Frame number": 792,
     "Time": "2022-08-18 15:40:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 13,
     "Left": 1658,
     "Width": 425,
     "Height": 936,
     "Frame number": 793,
     "Time": "2022-08-18 10:37:00",
     "Weekdays": "Thursday"
}

 ],
  "Face8": [
{
     "Name": "Sinh vien5",
     "Top": 545,
     "Left": 97,
     "Width": 609,
     "Height": 1172,
     "Frame number": 794,
     "Time": "2022-08-18 13:39:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 180,
     "Left": 782,
     "Width": 587,
     "Height": 41,
     "Frame number": 795,
     "Time": "2022-08-18 10:21:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 62,
     "Left": 1379,
     "Width": 389,
     "Height": 1750,
     "Frame number": 796,
     "Time": "2022-08-18 13:36:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 141,
     "Left": 1103,
     "Width": 634,
     "Height": 905,
     "Frame number": 797,
     "Time": "2022-08-18 15:38:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 233,
     "Left": 404,
     "Width": 571,
     "Height": 976,
     "Frame number": 798,
     "Time": "2022-08-18 08:17:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 375,
     "Left": 222,
     "Width": 838,
     "Height": 1303,
     "Frame number": 799,
     "Time": "2022-08-18 11:56:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 667,
     "Left": 1652,
     "Width": 505,
     "Height": 973,
     "Frame number": 800,
     "Time": "2022-08-18 08:11:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 104,
     "Left": 172,
     "Width": 144,
     "Height": 649,
     "Frame number": 801,
     "Time": "2022-08-18 09:50:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 291,
     "Left": 1784,
     "Width": 580,
     "Height": 1028,
     "Frame number": 802,
     "Time": "2022-08-18 08:46:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien5",
     "Top": 373,
     "Left": 255,
     "Width": 209,
     "Height": 438,
     "Frame number": 803,
     "Time": "2022-08-18 12:43:00",
     "Weekdays": "Thursday"
}

 ],
  "Face2": [
{
     "Name": "Sinh vien4",
     "Top": 721,
     "Left": 1567,
     "Width": 455,
     "Height": 1161,
     "Frame number": 804,
     "Time": "2022-08-18 08:35:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 441,
     "Left": 1111,
     "Width": 314,
     "Height": 779,
     "Frame number": 805,
     "Time": "2022-08-18 13:42:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 551,
     "Left": 0,
     "Width": 403,
     "Height": 1491,
     "Frame number": 806,
     "Time": "2022-08-18 14:38:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 802,
     "Left": 757,
     "Width": 87,
     "Height": 1519,
     "Frame number": 807,
     "Time": "2022-08-18 13:45:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 637,
     "Left": 992,
     "Width": 830,
     "Height": 1212,
     "Frame number": 808,
     "Time": "2022-08-18 16:01:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 532,
     "Left": 1847,
     "Width": 61,
     "Height": 1475,
     "Frame number": 809,
     "Time": "2022-08-18 08:44:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 774,
     "Left": 1776,
     "Width": 769,
     "Height": 1157,
     "Frame number": 810,
     "Time": "2022-08-18 15:04:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 22,
     "Left": 77,
     "Width": 331,
     "Height": 1530,
     "Frame number": 811,
     "Time": "2022-08-18 16:00:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 236,
     "Left": 1658,
     "Width": 746,
     "Height": 263,
     "Frame number": 812,
     "Time": "2022-08-18 10:08:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 469,
     "Left": 1042,
     "Width": 381,
     "Height": 98,
     "Frame number": 813,
     "Time": "2022-08-18 13:03:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 801,
     "Left": 1177,
     "Width": 389,
     "Height": 270,
     "Frame number": 814,
     "Time": "2022-08-18 09:52:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 98,
     "Left": 375,
     "Width": 63,
     "Height": 507,
     "Frame number": 815,
     "Time": "2022-08-18 14:25:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 773,
     "Left": 1405,
     "Width": 462,
     "Height": 703,
     "Frame number": 816,
     "Time": "2022-08-18 09:38:00",
     "Weekdays": "Thursday"
}

 ],
  "Face4": [
{
     "Name": "Sinh vien6",
     "Top": 211,
     "Left": 351,
     "Width": 146,
     "Height": 813,
     "Frame number": 817,
     "Time": "2022-08-18 09:10:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 593,
     "Left": 778,
     "Width": 214,
     "Height": 1832,
     "Frame number": 818,
     "Time": "2022-08-18 15:53:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 855,
     "Left": 313,
     "Width": 685,
     "Height": 91,
     "Frame number": 819,
     "Time": "2022-08-18 14:01:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 407,
     "Left": 1826,
     "Width": 758,
     "Height": 1654,
     "Frame number": 820,
     "Time": "2022-08-18 14:51:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 659,
     "Left": 1306,
     "Width": 858,
     "Height": 501,
     "Frame number": 821,
     "Time": "2022-08-18 12:48:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 246,
     "Left": 1443,
     "Width": 30,
     "Height": 1658,
     "Frame number": 822,
     "Time": "2022-08-18 13:04:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 335,
     "Left": 417,
     "Width": 12,
     "Height": 1544,
     "Frame number": 823,
     "Time": "2022-08-18 09:21:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 835,
     "Left": 1537,
     "Width": 844,
     "Height": 1674,
     "Frame number": 824,
     "Time": "2022-08-18 09:54:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 682,
     "Left": 900,
     "Width": 26,
     "Height": 1462,
     "Frame number": 825,
     "Time": "2022-08-18 14:36:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 360,
     "Left": 453,
     "Width": 326,
     "Height": 657,
     "Frame number": 826,
     "Time": "2022-08-18 11:46:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 732,
     "Left": 1700,
     "Width": 22,
     "Height": 1304,
     "Frame number": 827,
     "Time": "2022-08-18 14:22:00",
     "Weekdays": "Thursday"
}

 ],
  "Face11": [
{
     "Name": "Sinh vien6",
     "Top": 857,
     "Left": 380,
     "Width": 417,
     "Height": 256,
     "Frame number": 828,
     "Time": "2022-08-18 11:00:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 725,
     "Left": 1133,
     "Width": 179,
     "Height": 524,
     "Frame number": 829,
     "Time": "2022-08-18 09:56:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 370,
     "Left": 1851,
     "Width": 356,
     "Height": 1406,
     "Frame number": 830,
     "Time": "2022-08-18 09:43:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 826,
     "Left": 696,
     "Width": 851,
     "Height": 323,
     "Frame number": 831,
     "Time": "2022-08-18 11:19:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 233,
     "Left": 119,
     "Width": 493,
     "Height": 1069,
     "Frame number": 832,
     "Time": "2022-08-18 16:08:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 573,
     "Left": 1716,
     "Width": 460,
     "Height": 73,
     "Frame number": 833,
     "Time": "2022-08-18 15:18:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 158,
     "Left": 671,
     "Width": 550,
     "Height": 1034,
     "Frame number": 834,
     "Time": "2022-08-18 11:41:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien6",
     "Top": 71,
     "Left": 739,
     "Width": 302,
     "Height": 139,
     "Frame number": 835,
     "Time": "2022-08-18 11:50:00",
     "Weekdays": "Thursday"
}

 ],
  "Face2": [
{
     "Name": "Sinh vien8",
     "Top": 695,
     "Left": 1485,
     "Width": 608,
     "Height": 423,
     "Frame number": 836,
     "Time": "2022-08-18 14:06:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 599,
     "Left": 268,
     "Width": 715,
     "Height": 1780,
     "Frame number": 837,
     "Time": "2022-08-18 15:46:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 186,
     "Left": 573,
     "Width": 376,
     "Height": 1487,
     "Frame number": 838,
     "Time": "2022-08-18 12:32:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 486,
     "Left": 369,
     "Width": 298,
     "Height": 1286,
     "Frame number": 839,
     "Time": "2022-08-18 11:41:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 361,
     "Left": 1024,
     "Width": 250,
     "Height": 1166,
     "Frame number": 840,
     "Time": "2022-08-18 16:46:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 375,
     "Left": 1553,
     "Width": 608,
     "Height": 43,
     "Frame number": 841,
     "Time": "2022-08-18 08:57:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 555,
     "Left": 433,
     "Width": 104,
     "Height": 538,
     "Frame number": 842,
     "Time": "2022-08-18 13:18:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 763,
     "Left": 936,
     "Width": 604,
     "Height": 600,
     "Frame number": 843,
     "Time": "2022-08-18 16:18:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 79,
     "Left": 1561,
     "Width": 210,
     "Height": 849,
     "Frame number": 844,
     "Time": "2022-08-18 12:33:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 740,
     "Left": 83,
     "Width": 278,
     "Height": 1081,
     "Frame number": 845,
     "Time": "2022-08-18 12:24:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 366,
     "Left": 356,
     "Width": 265,
     "Height": 270,
     "Frame number": 846,
     "Time": "2022-08-18 13:41:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 513,
     "Left": 991,
     "Width": 295,
     "Height": 558,
     "Frame number": 847,
     "Time": "2022-08-18 08:44:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 72,
     "Left": 830,
     "Width": 176,
     "Height": 1233,
     "Frame number": 848,
     "Time": "2022-08-18 09:03:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 754,
     "Left": 1554,
     "Width": 701,
     "Height": 227,
     "Frame number": 849,
     "Time": "2022-08-18 14:01:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 223,
     "Left": 418,
     "Width": 273,
     "Height": 780,
     "Frame number": 850,
     "Time": "2022-08-18 08:13:00",
     "Weekdays": "Thursday"
}

 ],
  "Face5": [
{
     "Name": "Sinh vien8",
     "Top": 22,
     "Left": 814,
     "Width": 633,
     "Height": 1262,
     "Frame number": 851,
     "Time": "2022-08-18 11:48:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 97,
     "Left": 131,
     "Width": 24,
     "Height": 457,
     "Frame number": 852,
     "Time": "2022-08-18 11:03:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 141,
     "Left": 281,
     "Width": 828,
     "Height": 1667,
     "Frame number": 853,
     "Time": "2022-08-18 09:43:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 799,
     "Left": 247,
     "Width": 621,
     "Height": 890,
     "Frame number": 854,
     "Time": "2022-08-18 13:11:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 626,
     "Left": 955,
     "Width": 591,
     "Height": 665,
     "Frame number": 855,
     "Time": "2022-08-18 16:31:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 744,
     "Left": 124,
     "Width": 262,
     "Height": 1350,
     "Frame number": 856,
     "Time": "2022-08-18 10:41:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 74,
     "Left": 255,
     "Width": 714,
     "Height": 549,
     "Frame number": 857,
     "Time": "2022-08-18 14:18:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 154,
     "Left": 1314,
     "Width": 611,
     "Height": 1317,
     "Frame number": 858,
     "Time": "2022-08-18 09:24:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 57,
     "Left": 1720,
     "Width": 91,
     "Height": 1299,
     "Frame number": 859,
     "Time": "2022-08-18 10:25:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 382,
     "Left": 843,
     "Width": 826,
     "Height": 635,
     "Frame number": 860,
     "Time": "2022-08-18 14:58:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 515,
     "Left": 788,
     "Width": 757,
     "Height": 1649,
     "Frame number": 861,
     "Time": "2022-08-18 10:42:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 381,
     "Left": 1294,
     "Width": 40,
     "Height": 678,
     "Frame number": 862,
     "Time": "2022-08-18 08:45:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien8",
     "Top": 585,
     "Left": 615,
     "Width": 222,
     "Height": 1134,
     "Frame number": 863,
     "Time": "2022-08-18 16:43:00",
     "Weekdays": "Thursday"
}

 ],
  "Face10": [
{
     "Name": "Sinh vien4",
     "Top": 626,
     "Left": 409,
     "Width": 324,
     "Height": 850,
     "Frame number": 864,
     "Time": "2022-08-18 10:28:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 712,
     "Left": 347,
     "Width": 166,
     "Height": 348,
     "Frame number": 865,
     "Time": "2022-08-18 13:22:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 323,
     "Left": 562,
     "Width": 665,
     "Height": 1344,
     "Frame number": 866,
     "Time": "2022-08-18 15:16:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 665,
     "Left": 1349,
     "Width": 762,
     "Height": 1671,
     "Frame number": 867,
     "Time": "2022-08-18 09:32:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 62,
     "Left": 645,
     "Width": 107,
     "Height": 1091,
     "Frame number": 868,
     "Time": "2022-08-18 16:41:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 781,
     "Left": 1257,
     "Width": 794,
     "Height": 582,
     "Frame number": 869,
     "Time": "2022-08-18 14:46:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 737,
     "Left": 1919,
     "Width": 725,
     "Height": 519,
     "Frame number": 870,
     "Time": "2022-08-18 13:42:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 668,
     "Left": 1012,
     "Width": 618,
     "Height": 1388,
     "Frame number": 871,
     "Time": "2022-08-18 16:39:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 359,
     "Left": 885,
     "Width": 589,
     "Height": 877,
     "Frame number": 872,
     "Time": "2022-08-18 08:09:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 846,
     "Left": 179,
     "Width": 488,
     "Height": 231,
     "Frame number": 873,
     "Time": "2022-08-18 08:05:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 441,
     "Left": 1009,
     "Width": 520,
     "Height": 1379,
     "Frame number": 874,
     "Time": "2022-08-18 16:38:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 402,
     "Left": 51,
     "Width": 676,
     "Height": 1659,
     "Frame number": 875,
     "Time": "2022-08-18 12:53:00",
     "Weekdays": "Thursday"
},
{
     "Name": "Sinh vien4",
     "Top": 126,
     "Left": 1577,
     "Width": 469,
     "Height": 1450,
     "Frame number": 876,
     "Time": "2022-08-18 16:33:00",
     "Weekdays": "Thursday"
}

 ]
}
const pieChartData = [
  { value: 40, name: "Ai, Machine Learning" },
  { value: 30, name: "Thiết kế số" },
  { value: 20, name: "Security" },
];

$(function () {
  "use strict";

  $(".form-control").on("input", function () {
    var $field = $(this).closest(".form-group");
    if (this.value) {
      $field.addClass("field--not-empty");
    } else {
      $field.removeClass("field--not-empty");
    }
  });

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.getElementsByClassName("needs-validation");
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
  // if (!isAuth) {
  //   VanillaToasts.create({
  //     title: "OK",
  //     text: "OK",
  //     type: "success",
  //     icon: "X",
  //     timeout: 3000,
  //   });
  // }

  // BreadCrumb

  var areaChartDom = document.getElementById("monthly-main-bar-chart");
  var pieChartDom = document.getElementById("pie-chart-lab-field__wrapper");
  var areaChartAllDom = document.getElementById("in-out-chart-all");

  if (window.location.pathname?.includes("/dashboard")) {
    initBarChart(areaChartDom, echarts, areaChartData);
  } else {
    initBarChart(areaChartAllDom, echarts, areaChartData);
  }
  initPieChart(pieChartDom, echarts, pieChartData);
});
