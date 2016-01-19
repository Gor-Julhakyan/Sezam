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

      this.cmpny = "erevan";

      this.sstyle = 150;

      this.len = 95 * this.globals.length;

      console.log(this.len);

      this.save = () => {
        Parties.update({_id: $stateParams.partyId}, {
          $set: {
            name: this.party.name,
            description: this.party.description
          }
        }, (error) => {
          if (error) {
            console.log('Oops, unable to update the party...');
          }
          else {
            console.log('Done!');
          }
        });
      };

      // Toolbar

      this.topDirections = ['left', 'up'];
      this.bottomDirections = ['down', 'right'];
      this.isOpen = false;
      this.availableModes = ['md-fling', 'md-scale'];
      this.selectedMode = 'md-scale';
      this.availableDirections = ['up', 'down', 'left', 'right'];
      this.selectedDirection = 'left';


    }
  }
});