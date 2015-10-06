"use strict";
define(['angular'], function(angular) {
	angular.module("templates/directives/calendar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/directives/calendar.html",
	"<calendar-widget unavailable-dates=\"unavailableDates\"> </calendar-modal> "
	);
	}]);
	angular.module("templates/directives/calendar_widget.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/directives/calendar_widget.html",
    "<div class=\"date-range\"> " +
    "	<div> " + 
    "		Choose your car " +
    "	</div> " +
    " <div class=\"datepicker-title\"> " +
    "   <div class=\"icon-left\" ng-click=\"getPreviousWeek()\" ng-class=\"{'not-clickable':!previousWeekClickable(), 'clickable':previousWeekClickable()}\"> " +
    " < " +
    "   </div>" +
    " <div class=\"month\" > {{ startDate.format() | date:'MMMM' }} </div>" + 
     "  <div class=\"icon-right\" ng-click=\"getNextWeek()\" ng-class=\"{'not-clickable':!nextWeekClickable(), 'clickable':nextWeekClickable()}\"> " +
    ">" +
    "   </div> " +
    "	</div> " +
    "   <div class=\"calendar-week\"> " +
    "   <div class=\"date\" ng-repeat=\"day in weekFormat\" >" +
    "           {{ day }} " +
    "   </div> " +
    "   </div> " +
    "   <div class=\"calendar-week\"> " +
    "	<div class=\"date\" ng-repeat=\"day in week\" ng-class=\"{'not-selectable':!isDayAvailable(day), 'selectable':isDayAvailable(day)}\"> " +
    "			{{ day.format() | date:'d' }} " +
    "	</div> " +
        "   </div> " +

   
     "</div>");
	}]);
	angular.module('templates', ['templates/directives/calendar.html', 'templates/directives/calendar_widget.html']);
});