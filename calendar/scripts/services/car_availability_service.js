define([], function() {
	function carAvailabilityService($q){
		var unavailableDates = [
		  "2015-10-01",
		  "2015-10-08",
		  "2015-10-15",
		  "2015-10-16",
		  "2015-10-17",
		  "2015-11-03",
		  "2015-11-04",
		  "2015-11-05",
		  "2015-11-12",
		  "2015-11-29"
		];
		return {
			getUnavailableDates: function() {
				return $q(function(resolve) {
					var unavailableDatesAsMap = {};
					unavailableDates.forEach(function(date) {
						unavailableDatesAsMap[date] = true;
					});
					resolve(unavailableDatesAsMap);
				});
			}
		};
	}
	carAvailabilityService.$inject = ['$q'];
	return carAvailabilityService;
});