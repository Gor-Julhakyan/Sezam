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
    var blueTheme = $mdThemingProvider.theme('blueTheme', 'default');
  var bluePalette = $mdThemingProvider.extendPalette('blue', {
    '500': '#03A9F4'
  });
  $mdThemingProvider.definePalette('bluePalette', bluePalette);
  blueTheme.primaryPalette('bluePalette');
});