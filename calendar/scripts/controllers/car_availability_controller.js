define([], function() {
	function carAvailabilityController($scope, carAvailabilityService){
		var unavailableDates;
		carAvailabilityService.getUnavailableDates().then(function(unavailableDates){
			$scope.unavailableDates = unavailableDates;
		});
	}
	carAvailabilityController.$inject = [ '$scope','carAvailabilityService'];
	return carAvailabilityController;
})