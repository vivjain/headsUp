import { Config } from 'angular-ecmascript/module-helpers';
 
export default class RoutesConfig extends Config {
  configure() {
    this.$stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'client/templates/tabs.html'
      })
      .state('tab.newsfeed', {
        url: '/newsfeed',
        views: {
          'tab-newsfeed': {
            templateUrl: 'client/templates/newsfeed.html'
          }
        }
      });
 
    this.$urlRouterProvider.otherwise('tab/newsfeed');
  }
}
 
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];