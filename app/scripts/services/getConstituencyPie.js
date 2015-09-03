

angular.module('socialcops').factory("getConstituencyPie", function($resource) {
	return $resource('../../data/constituencypie.json', {}, {
		query : {
			method : 'GET',
			isArray : false
		}
	});

});
