function initBarChart(chartDom, echarts, data) {
  var myChart = echarts.init(chartDom);
  var option;

  let arrSum = Object.values(data)
    ?.reduce((result, item) => result.concat(item), [])
    ?.map((turn) => turn.Time);

  let finalData = [...new Set(arrSum)].map((item) => [
    +new Date(item),
    arrSum.filter((time) => item === time).length,
  ]);

  option = {
    tooltip: {
      trigger: "axis",
      position: function (pt) {
        return [pt[0], "10%"];
      },
    },
    title: {
      left: "center",
      text: "Large Ara Chart",
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        restore: {},
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "time",
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
    },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 20,
      },
      {
        start: 0,
        end: 20,
      },
    ],
    series: [
      {
        name: "Fake Data",
        type: "line",
        smooth: true,
        symbol: "none",
        areaStyle: {},
        data: finalData,
      },
    ],
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

const areaChartData = {
  Face1: [
    {
      Name: "Face 1",
      Top: 151,
      Left: 837,
      Width: 251,
      Height: 267,
      "Frame number": 37,
      Time: "2022-04-19 23:59:48",
    },
  ],
  Face2: [
    {
      Name: "Face 2",
      Top: 155,
      Left: 837,
      Width: 217,
      Height: 265,
      "Frame number": 38,
      Time: "2022-04-19 23:59:48",
    },
    {
      Name: "Face 2",
      Top: 90,
      Left: 823,
      Width: 233,
      Height: 295,
      "Frame number": 44,
      Time: "2022-04-19 23:59:49",
    },
    {
      Name: "Face 2",
      Top: 95,
      Left: 806,
      Width: 230,
      Height: 303,
      "Frame number": 59,
      Time: "2022-04-19 23:59:51",
    },
    {
      Name: "Face 2",
      Top: 191,
      Left: 709,
      Width: 211,
      Height: 283,
      "Frame number": 62,
      Time: "2022-04-19 23:59:52",
    },
    {
      Name: "Face 2",
      Top: 249,
      Left: 660,
      Width: 207,
      Height: 272,
      "Frame number": 67,
      Time: "2022-04-19 23:59:53",
    },
  ],
};

const pieChartData = [
  {value:40, name:'Ai, Machine Learning'},
  {value: 30, name:'Thiết kế số'},
  {value: 20, name:'Security'}
]

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
  var pieChartDom = document.getElementById('pie-chart-lab-field__wrapper');


  initBarChart(areaChartDom, echarts, areaChartData);
  initPieChart(pieChartDom,echarts,  pieChartData);
});
