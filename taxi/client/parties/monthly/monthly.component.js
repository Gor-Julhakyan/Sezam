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

      this.months = [
        {
          sezons: "winter", 
          months: ['December', 'Jenuary', 'February']
        },
        {
          sezons: "spring", 
          months: ['March','April', 'May']
        },
        {
          sezons: "summer", 
          months: ['June', 'July', 'August']
        },       
        {
          sezons: "autumn", 
          months: ['September', 'October', 'November']
        }
      ];

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





    }
  }
});