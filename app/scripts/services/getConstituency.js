

angular.module('socialcops').factory("getConstituency", function($resource) {
	return $resource('../../data/constituencies.json', {}, {
		query : {
			method : 'GET',
			isArray : false
		}
	});

});
