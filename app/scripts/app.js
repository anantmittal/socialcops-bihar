'use strict';

/**
 * @ngdoc overview
 * @name socialcops
 * @description
 * # socialcops
 *
 * Main module of the application.
 */


angular.module('socialcops', [ 'ui.router', 'ngAnimate', 'ngResource' ]).config(
		function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.when('/dashboard', '/dashboard/overview');
			$urlRouterProvider.otherwise('/dashboard');

			$stateProvider.state('base', {
				abstract : true,
				url : '',
				templateUrl : 'views/base.html'
			}).state('dashboard', {
				url : '/dashboard',
				parent : 'base',
				templateUrl : 'views/dashboard.html',
				controller : 'DashboardCtrl'
			}).state('overview', {
				url : '/overview',
				parent : 'dashboard',
				templateUrl : 'views/dashboard/overview.html'
			}).state('censusreport', {
				url : '/censusreport',
				parent : 'dashboard',
				templateUrl : 'views/dashboard/censusreport.html',
				controller : 'CensusReportCtrl'
			}).state('partiesreport', {
        url : '/partiesreport',
        parent : 'dashboard',
        templateUrl : 'views/dashboard/partiesreport.html',
        controller : 'PartiesReportCtrl'
      }).state('districtreport', {
        url : '/districtreport',
        parent : 'dashboard',
        templateUrl : 'views/dashboard/districtreport.html',
        controller : 'DistrictReportCtrl'
      }).state('electionsummary', {
        url : '/electionsummary',
        parent : 'dashboard',
        templateUrl : 'views/dashboard/electionsummary.html',
        controller : 'ElectionSummaryCtrl'
      }).state('voterssummary', {
        url : '/voterssummary',
        parent : 'dashboard',
        templateUrl : 'views/dashboard/voterssummary.html',
        controller : 'VotersSummaryCtrl'
      });

		});


google.load("visualization", "1", {packages:["corechart","bar","orgchart"]});
google.load("visualization", "1.1", {packages:["table"]});

