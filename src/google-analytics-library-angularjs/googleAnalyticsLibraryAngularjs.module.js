(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('googleAnalyticsLibraryAngularjs.config', [])
      .value('googleAnalyticsLibraryAngularjs.config', {
          debug: true
      });

  // Modules
  angular.module('googleAnalyticsLibraryAngularjs.directives', []);
  angular.module('googleAnalyticsLibraryAngularjs.filters', []);
  angular.module('googleAnalyticsLibraryAngularjs.services', []);
  angular.module('googleAnalyticsLibraryAngularjs',
      [
          'googleAnalyticsLibraryAngularjs.config',
          'googleAnalyticsLibraryAngularjs.directives',
          'googleAnalyticsLibraryAngularjs.filters',
          'googleAnalyticsLibraryAngularjs.services',
          'ngResource',
          'ngCookies',
          'ngSanitize'
      ]);

})(angular);
