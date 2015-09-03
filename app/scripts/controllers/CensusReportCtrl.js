'use strict';

angular.module('socialcops')
  .controller('CensusReportCtrl', function ($scope, $state, getCensusData) {

    $scope.$state = $state;

    getCensusData.query(function (data) {
      var chart_data = angular.fromJson(angular.toJson(data));


      /*
       * Report 1
       */

      var report_data = chart_data[0];
      var data_report = [['Category', '2001', '2011']];
      var element = ['Actual Population', parseInt(report_data["2001"]["actual_population"]), parseInt(report_data["2011"]["actual_population"])];
      data_report.push(element);
      var element = ['Male Population', parseInt(report_data["2001"]["male"]), parseInt(report_data["2011"]["male"])];
      data_report.push(element);
      var element = ['Female Population', parseInt(report_data["2001"]["female"]), parseInt(report_data["2011"]["female"])];
      data_report.push(element);
      var data = google.visualization.arrayToDataTable(data_report);

      var options = {
        showTip: true,
        chartArea: {width: '80%'},
        hAxis: {
          minValue: 0
        },
        series: {0: {color: '#FFD800'}, 1: {color: '#272928'}},
        legend: {
          position: 'top'
        }
      };

      var chart1 = new google.visualization.ColumnChart(document.getElementById('chart_div1'));

      chart1.draw(data, options);


      /*
       * Report 2
       */

      var report_data = chart_data[1];
      var data_report = [['Category', '2001', '2011']];
      var element = ['Population Growth', parseFloat(report_data["2001"]["population_growth"]), parseFloat(report_data["2011"]["population_growth"])];
      data_report.push(element);
      var data = google.visualization.arrayToDataTable(data_report);

      var options = {
        showTip: true,
        chartArea: {width: '80%'},
        hAxis: {
          minValue: 0
        },
        vAxis: {
          minValue: 0
        },
        series: {0: {color: '#FFD800'}, 1: {color: '#272928'}},
        legend: {
          position: 'top'
        }
      };

      var chart2 = new google.visualization.ColumnChart(document.getElementById('chart_div2'));

      chart2.draw(data, options);

      /*
       * Report 3
       */

      var report_data = chart_data[2];

      var data_report = [['Category', '2001', '2011']];
      var element = ['Percentage of Total Population', parseFloat(report_data["2001"]["percentage_of_total_population"]), parseFloat(report_data["2011"]["percentage_of_total_population"])];
      data_report.push(element);
      var data = google.visualization.arrayToDataTable(data_report);

      var options = {
        showTip: true,
        chartArea: {width: '80%'},
        hAxis: {
          minValue: 0
        },
        vAxis: {
          minValue: 0
        },
        series: {0: {color: '#FFD800'}, 1: {color: '#272928'}},
        legend: {
          position: 'top'
        }
      };

      var chart3 = new google.visualization.ColumnChart(document.getElementById('chart_div3'));

      chart3.draw(data, options);

      /*
       * Report 4
       */

      var report_data = chart_data[3];
      var data_report = [['Category', '2001', '2011']];
      var element = ['Sex Ratio', parseFloat(report_data["2001"]["sex_ratio"]), parseFloat(report_data["2011"]["sex_ratio"])];
      data_report.push(element);
      var data = google.visualization.arrayToDataTable(data_report);

      var options = {
        showTip: true,
        chartArea: {width: '80%'},
        hAxis: {
          minValue: 0
        },
        vAxis: {
          minValue: 0
        },
        series: {0: {color: '#FFD800'}, 1: {color: '#272928'}},
        legend: {
          position: 'top'
        }
      };

      var chart4 = new google.visualization.ColumnChart(document.getElementById('chart_div4'));

      chart4.draw(data, options);

    });


  });
