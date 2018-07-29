(function (angular) {

    // Création de tous les modules et définition des dépendances
    // pour être qu'ils existent et sont chargés dans l'ordre correct
    // pour satisfaire l'injection de dépendances avant que les autres
    // fichiers javascript soient concaténés par Gulp

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
