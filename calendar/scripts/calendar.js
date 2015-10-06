define(['templates','angular','services/car_availability_service', 'controllers/car_availability_controller', 'directives/calendar_widget'], function(templates, angular, carAvailabilityService, carAvailabilityController, calendarWidget){
	return function() {
		return {
			start: function() {
				var app = angular.module('calendar', ['ngRoute', 'templates']);
				app.controller('carAvailabilityController', carAvailabilityController);
				app.service('carAvailabilityService', carAvailabilityService);
				app.config(['$routeProvider', function($routeProvider){
					$routeProvider.when('/', {
						templateUrl: 'templates/directives/calendar.html',
						controller: 'carAvailabilityController'
					});	
				}]);
				app.directive('calendarWidget', calendarWidget);
				angular.bootstrap(document.body, ['calendar']);
			}
		}
	}
});