'use strict';

angular.module('socialcops')
  .controller('VotersSummaryCtrl', function ($scope, $state, getVotersData) {

    $scope.$state = $state;

    getVotersData.query(function (data) {
      var chart_data = angular.fromJson(angular.toJson(data));


      /*
       * Report 1
       */

      var report_data = chart_data[0];
      var data_report = [['Category', 'Number of Electors', 'Number of Electors who Voted', { role: 'annotation' }]];
      var element = ['Total', parseInt(report_data["number_of_electors"]["total"]), parseInt(report_data["number_of_electors_who_voted"]["total"]), report_data["total_polling_percentage"]];
      data_report.push(element);
      var element = ['Male', parseInt(report_data["number_of_electors"]["male"]), parseInt(report_data["number_of_electors_who_voted"]["male"]), report_data["male_polling_percentage"]];
      data_report.push(element);
      var element = ['Female', parseInt(report_data["number_of_electors"]["female"]), parseInt(report_data["number_of_electors_who_voted"]["female"]), report_data["female_polling_percentage"]];
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
      * Report 1
      */

      var report_data = chart_data[1];
      var data_report = [['Category', 'Number of Electors']];
      var element = ['Total', parseInt(report_data["number_of_electors"]["total"])];
      data_report.push(element);
      var element = ['Male', parseInt(report_data["number_of_electors"]["male"])];
      data_report.push(element);
      var element = ['Female', parseInt(report_data["number_of_electors"]["female"])];
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

      var chart2 = new google.visualization.ColumnChart(document.getElementById('chart_div2'));

      chart2.draw(data, options);


    });


  });
