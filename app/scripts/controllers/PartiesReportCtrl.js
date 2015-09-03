'use strict';


angular.module('socialcops')
  .controller('PartiesReportCtrl', function ($scope, $state, getPartyData) {

    $scope.$state = $state;

    getPartyData.query(function (data) {
      var chart_data = angular.fromJson(angular.toJson(data));


      /*
       * Report 1
       */

      var report_data = chart_data[0];
      var data_report = [['Party Type', 'Number of Parties']];
      var element = ['National', parseInt(report_data["national"]
        )]
        ;
      data_report.push(element);
      var element = ['State', parseInt(report_data["state"]
        )]
        ;
      data_report.push(element);
      var element = ['Other States', parseInt(report_data["other_states"])]
        ;
      data_report.push(element);
      var element = ['Unrecognizeds', parseInt(report_data["unrecognized"])];
      data_report.push(element);
      var data = google.visualization.arrayToDataTable(data_report);

      var options = {
        fontSize: 20,
        pieHole: 0.4,
      };

      var chart1 = new google.visualization.PieChart(document.getElementById('chart_div1'));

      chart1.draw(data, options);


      /*
       * Report 2
       */

      var report_data = chart_data[1];


      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Name');
      data.addColumn('string', 'Parent');

      var data_report = new Array;
      for (var key in report_data) {

        var element = [key, report_data[key]];
        data_report.push(element);

      }
      data.addRows(data_report);


      var options = {color: '#fff', size: 'large'};


      var chart2 = new google.visualization.OrgChart(document.getElementById('chart_div2'));

      chart2.draw(data, options);

      /*
       * Report 3 and 4
       */

      var report_data = chart_data[2][2010];
      var data_report = [['Party', 'Seats']];

      for(var key in report_data){
        var element = [key, parseInt(report_data[key])];
        data_report.push(element);
      }

      var data = google.visualization.arrayToDataTable(data_report);

      var options = {
        title:'2010',
        pieHole: 0.4
      };

      var chart3 = new google.visualization.PieChart(document.getElementById('chart_div3'));

      chart3.draw(data, options);

      var report_data = chart_data[2][2005];
      var data_report = [['Party', 'Seats']];

      for(var key in report_data){
        var element = [key, parseInt(report_data[key])];
        data_report.push(element);
      }

      var data = google.visualization.arrayToDataTable(data_report);

      var options = {
        title:'2005',
        pieHole: 0.4
      };

      var chart4 = new google.visualization.PieChart(document.getElementById('chart_div4'));

      chart4.draw(data, options);


    });


  });
