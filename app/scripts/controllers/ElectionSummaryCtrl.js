'use strict';

angular.module('socialcops')
  .controller('ElectionSummaryCtrl', function ($scope, $state, getElectionSummaryData, getConstituency) {

    $scope.$state = $state;

    getElectionSummaryData.query(function (data) {
      var chart_data = angular.fromJson(angular.toJson(data));


      /*
       * Report 1
       */

      var canidates = chart_data[0];

      var data_report = [['Category', 'Candidates']];

      var element = ['Total Candidates', parseInt(canidates["total_candidates"])];
      data_report.push(element);

      var element = ['Candidates with declared criminal cases', parseInt(canidates["candidates_with_declared_criminal_cases"])];
      data_report.push(element);

      var element = ['Candidates with declared serious criminal case', parseInt(canidates["candidates_with_declared_serious_criminal_cases"])];
      data_report.push(element);

      var element = ['Crorepati candidates', parseInt(canidates["crorepati_candidates"])];
      data_report.push(element);

      var element = ['Candidates who are graduate or above', parseInt(canidates["candidates_who_are_gradudate_or_above"])];
      data_report.push(element);

      var element = ['Candidates who have not declared PAN ', parseInt(canidates["candidates_who_have_not_declared_pan"])];
      data_report.push(element);

      var element = ['Total women candidates', parseInt(canidates["total_women_candidates"])];
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

      var winners = chart_data[1];
      var data_report = [['Category', 'Winners']];

      var element = ['Total Winners', parseInt(winners["total_candidates"])];
      data_report.push(element);

      var element = ['Winners with declared criminal cases', parseInt(winners["candidates_with_declared_criminal_cases"])];
      data_report.push(element);

      var element = ['Winners with declared serious criminal case', parseInt(winners["candidates_with_declared_serious_criminal_cases"])];
      data_report.push(element);

      var element = ['Crorepati winners', parseInt(winners["crorepati_candidates"])];
      data_report.push(element);

      var element = ['Winners who are graduate or above', parseInt(winners["candidates_who_are_gradudate_or_above"])];
      data_report.push(element);

      var element = ['Winners who have not declared PAN ', parseInt(winners["candidates_who_have_not_declared_pan"])];
      data_report.push(element);

      var element = ['Total women winners', parseInt(winners["total_women_candidates"])];
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


      /*
       * Report 3
       */

      var report_data = chart_data[2];

      var data = new google.visualization.DataTable();
      data.addColumn('string', ' Party');
      data.addColumn('number', ' Candidates');
      data.addColumn('number', ' Winners');

      data.addRows(report_data);


      var table = new google.visualization.Table(document.getElementById('chart_div3'));

      table.draw(data, {width: '100%', height: '100%'});

      /*
       * Report 32
       */

      var report_data = chart_data[32];

      var data = new google.visualization.DataTable();
      data.addColumn('string', ' Party');
      data.addColumn('number', ' Total MLAs Analyzed');
      data.addColumn('number', ' MLAs with pending Criminal cases');

      data.addColumn('number', ' % of MLAs with pending Criminal cases');
      data.addColumn('number', ' % of MLAs with pending Criminal cases');
      data.addColumn('number', ' % of MLAs with pending Serious Criminal Cases');


      data.addRows(report_data);


      var table = new google.visualization.Table(document.getElementById('chart_div32'));

      table.draw(data, {width: '100%', height: '100%'});


      /*
       * Report 33
       */

      var report_data = chart_data[33];

      var data = new google.visualization.DataTable();
      data.addColumn('string', ' Party');
      data.addColumn('number', ' Total MLAs Analyzed');
      data.addColumn('string', ' Avg assets');

      data.addRows(report_data);


      var table = new google.visualization.Table(document.getElementById('chart_div33'));

      table.draw(data, {width: '100%', height: '100%'});


      /*

      Report 4
       */

      var report_data = chart_data[3];
      var data_report = [['Education', 'Level']];


      for(var i=0;i<report_data.length;i++){
        var element = [report_data[i][0],report_data[i][1]];
        data_report.push(element);
      }

      var data = google.visualization.arrayToDataTable(data_report);

      var options = {
        pieHole: 0.4,
        fontSize: 20
      };

      var chart4 = new google.visualization.PieChart(document.getElementById('chart_div4'));

      chart4.draw(data, options);



      getConstituency.query(function (data) {

        var chart_data = angular.fromJson(angular.toJson(data));

        var report_data = chart_data[0];


        var data = new google.visualization.DataTable();
        data.addColumn('string', ' Constituencies');
        data.addColumn('string', ' MLA');
        data.addColumn('string', ' Party');
        data.addColumn('number', ' Criminal Cases');
        data.addColumn('string', ' Education');
        data.addColumn('string', ' Total Assets');
        data.addColumn('string', ' Liabilities');


        data.addRows(report_data);


        var table = new google.visualization.Table(document.getElementById('chart_div5'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});

      });


    });


  });
