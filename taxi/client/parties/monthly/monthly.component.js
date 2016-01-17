angular.module('myPersonal').directive('monthly', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/parties/monthly/monthly.html',
    controllerAs: 'monthly',
    controller: function ($scope, $reactive, $mdDialog, $filter) {
      $reactive(this).attach($scope);

      this.helpers({
        parties: () => {
          return Parties.find({});   
        },
        globals: () => {
          return Globals.find({});
        }
      });



    }
  }
});