angular.module('myPersonal', [
	'angular-meteor',
	'ui.router',
//	'accounts.ui',
//	'angularUtils.directives.dirPagination',
//	'uiGmapgoogle-maps', 
	'ngMaterial'
])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('green')
    .accentPalette('orange');
});