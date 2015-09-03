'use strict';


angular.module('socialcops')
  .controller('DistrictReportCtrl', function ($scope, $state, getDistrictData, getConstituencyData, getConstituencyPie) {

    $scope.$state = $state;

    getDistrictData.query(function (data) {
      var chart_data = angular.fromJson(angular.toJson(data));

      getConstituencyPie.query(function (data){
        var pie_data = angular.fromJson(angular.toJson(data));

        var report_data = pie_data[0];
        var data_report = [['TYPE OF CONSTITUENCY', 'NO OF CONSTITUENCIES']];

        for(var key in report_data){
          var element = [key, parseInt(report_data[key])];
          data_report.push(element);
        }
        var data = google.visualization.arrayToDataTable(data_report);

        var options = {
          title:'Number Of Constituencies',
          fontSize:20,
          pieHole: 0.4
        };

        var chart1 = new google.visualization.PieChart(document.getElementById('chart_div1'));

        chart1.draw(data, options);

        var report_data = pie_data[1];
        var data_report = [['"NO. OF CONTESTANTS IN A CONSTITUENCY"', 'NO. OF SUCH CONSTITUENCIES']];

        for(var key in report_data){
          var element = [key, parseInt(report_data[key])];
          data_report.push(element);
        }

        var data = google.visualization.arrayToDataTable(data_report);

        var options = {
          title:'Number Of Contestants in each Constituency',
          fontSize:20,
          pieHole: 0.4
        };

        var chart2 = new google.visualization.PieChart(document.getElementById('chart_div2'));

        chart2.draw(data, options);
      });

      getConstituencyData.query(function (data) {

        var constituency_data = angular.fromJson(angular.toJson(data));


        function style(feature) {
          return {
            fillColor: '#FFEDA0',
            weight: 2,
            opacity: 1,
            color: 'black',
            dashArray: '1',
            fillOpacity: 0.1
          };
        }

        function highlightFeature(e) {
          var layer = e.target;

          layer.setStyle({
            weight: 5,
            color: 'black',
            dashArray: '',
            fillOpacity: 0.7
          });

          if (!L.Browser.ie && !L.Browser.opera) {
            layer.bringToFront();
          }
          info.update(layer.feature.properties);
        }

        function resetHighlight(e) {
          geojson.resetStyle(e.target);
          info.update();
        }

        function zoomToFeature(e) {
          //map.fitBounds(e.target.getBounds());

          var layer = e.target;

          constituency.update(layer.feature.properties);

        }

        function onEachFeature(feature, layer) {
          layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
          });
        }


        var geojson;

        var info = L.control();
        var constituency = L.control();

        constituency.update = function (props) {
          var constituencies = constituency_data[props.NAME_2];

          var data = new google.visualization.DataTable();
          data.addColumn('string', props.NAME_2 + ' Constituencies');
          data.addColumn('string', ' MLA');
          data.addColumn('string', ' Party');
          data.addColumn('number', ' Criminal Cases');
          data.addColumn('string', ' Education');
          data.addColumn('string', ' Total Assets');
          data.addColumn('string', ' Liabilities');


          data.addRows(constituencies);


          var table = new google.visualization.Table(document.getElementById('table_div'));

          table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});

        };

        info.onAdd = function (map) {
          this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
          this.update();
          return this._div;
        };

// method that we will use to update the control based on feature properties passed
        info.update = function (props) {
          this._div.innerHTML = '<h4>Bihar Districs</h4>' + (props ?
            '<b>' + props.NAME_2 + '</b><br />'
              : 'Hover over a district');
        };
        var map = L.map('map', {
          center: [25.698009, 85.521896],
          zoom: 7,
          zoomControl:false,
          scrollWheelZoom: false,
          dragging: false,
          touchZoom: false,
          doubleClickZoom: false
        });
        info.addTo(map);
        L.tileLayer.provider('CartoDB.Positron', {}).addTo(map);
        geojson = L.geoJson(chart_data, {style: style, onEachFeature: onEachFeature}).addTo(map);
      });


    });


  });
