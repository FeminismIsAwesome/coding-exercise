define(['moment'], function(moment) {
	function calendarWidget() {
		return {
			scope: {
	        unavailableDates: '='
      		},
	      templateUrl: 'templates/directives/calendar_widget.html',
	      link: function link(scope) {
	      		scope.weekFormat = ['Sun','Mon','Tues','Wed','Thu','Fri', 'Sat']
	      		scope.startDate = moment().startOf('week');
	      		scope.lastWeek = moment().startOf('week').add(3,'months');
	      		scope.week = generateWeekStartingWith(scope.startDate);
	      		function generateWeekStartingWith(day) {
	      			var endOfWeek = moment(day).add(1,'week');
	      			week = [];
	      			for(var currentDay = moment(day); !currentDay.isAfter(endOfWeek) && !currentDay.isSame(endOfWeek); currentDay = moment(currentDay).add('1','days')){
	      				week.push(moment(currentDay));
	      			}
	      			return week;
	      		}
	      		scope.getNextWeek = function() {
	      			if(scope.nextWeekClickable()) {
						scope.startDate = moment(scope.startDate).add(1,'week');
	      				scope.week = generateWeekStartingWith(scope.startDate);	      				
	      			}
	      		}
	      		scope.getPreviousWeek = function() {
	      			if(scope.previousWeekClickable()) {
	      				scope.startDate = moment(scope.startDate).add(-1,'week');
	      				scope.week = generateWeekStartingWith(scope.startDate);
	      			}
	      		}
	      		scope.nextWeekClickable = function() {
	      			return scope.startDate.isBefore(scope.lastWeek);
	      		}
	      		scope.previousWeekClickable = function() {
	      			return scope.startDate.isAfter(moment().startOf('week'));
	      		}
	      		scope.isDayAvailable = function(day) {
	      			return day && !(scope.unavailableDates && scope.unavailableDates[day.format("YYYY-MM-DD")])
	      		}
			}
		} 
	}
	calendarWidget.$inject = [];
	return calendarWidget;
});