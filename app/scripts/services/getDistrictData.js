

angular.module('socialcops').factory("getDistrictData", function($resource) {
	return $resource('../../data/districtreportdata.json', {}, {
		query : {
			method : 'GET',
			isArray : false
		}
	});

});
