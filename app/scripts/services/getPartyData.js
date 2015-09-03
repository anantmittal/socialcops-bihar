

angular.module('socialcops').factory("getPartyData", function($resource) {
	return $resource('../../data/partyreportdata.json', {}, {
		query : {
			method : 'GET',
			isArray : false
		}
	});

});
