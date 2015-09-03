

angular.module('socialcops').factory("getConstituencyData", function($resource) {
	return $resource('../../data/constituencyreportdata.json', {}, {
		query : {
			method : 'GET',
			isArray : false
		}
	});

});
