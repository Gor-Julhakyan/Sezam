angular.module('myPersonal').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
 
  $stateProvider
    .state('parties', {
      url: '/parties',
      views: {
        "viewA": { template: "<parties-list></parties-list>" },
        "viewB": { template: "" }
      }
//      template: '<parties-list></parties-list>'
    })
    .state('partyDetails', {
      url: '/parties/:partyId',
      template: '<party-details></party-details>'
    });
 
  $urlRouterProvider.otherwise("/parties");
});