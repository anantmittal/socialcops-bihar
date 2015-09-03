

angular.module('socialcops').factory("getVotersData", function($resource) {
	return $resource('../../data/votersreportdata.json', {}, {
		query : {
			method : 'GET',
			isArray : false
		}
	});

});
