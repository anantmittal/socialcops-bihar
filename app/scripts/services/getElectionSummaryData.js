

angular.module('socialcops').factory("getElectionSummaryData", function($resource) {
	return $resource('../../data/electionsummarydata.json', {}, {
		query : {
			method : 'GET',
			isArray : false
		}
	});

});
