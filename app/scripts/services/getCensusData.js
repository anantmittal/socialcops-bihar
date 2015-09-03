

angular.module('socialcops').factory("getCensusData", function($resource) {
	return $resource('../../data/censusreportdata.json', {}, {
		query : {
			method : 'GET',
			isArray : false
		}
	});

});