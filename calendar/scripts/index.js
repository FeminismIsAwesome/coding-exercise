require.config({
  paths: {
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    'angular-route': {
      exports: 'angular-route',
      deps: ['angular']
    },
    'angular-translate': {
      exports: 'angular-translate',
      deps: ['angular']
    },
    'angular-aria': {
      exports: 'angular-aria',
      deps: ['angular']
    },
    'moment': {
      exports: 'moment'
    }
  }
});

console = console || {
    log: function() {}
};

define(['angular', 'calendar', 'angular-route'], function(angular, calendar, angular_route) {
  angular.element(document).ready(function() {
    calendar().start();
  });
});

