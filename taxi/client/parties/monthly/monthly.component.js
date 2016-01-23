angular.module('myPersonal').directive('monthly', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/parties/monthly/monthly.html',
    controllerAs: 'monthly',
    controller: function ($scope, $reactive, $mdDialog, $filter, $stateParams) {
      $reactive(this).attach($scope);

      this.helpers({
        parties: () => {
          return Parties.find({});   
        },
        globals: () => {
          return Globals.find({});
        },
        party: () => {
          return Parties.findOne({_id: $stateParams.partyId});
        }
      });
/*
console.log(this.party);
this.a = "";
console.log(this.a);
*/
      this.cmpny = "erevan";

      this.len = 95 * this.globals.length;

      this.months = [
        {
          sezons: "winter", 
          months: [
            { name: 'December', abbrev: 'Dec' },
            { name: 'January', abbrev: 'Jan' },
            { name: 'February', abbrev: 'Feb' }
          ]
        },
        {
          sezons: "spring", 
          months: [
            { name: 'March', abbrev: 'Mar' },
            { name: 'April', abbrev: 'Apr' },
            { name: 'May', abbrev: 'May' }
          ]
        },
        {
          sezons: "summer", 
          months: [
            { name: 'June', abbrev: 'Jun' },
            { name: 'July', abbrev: 'Jul' },
            { name: 'August', abbrev: 'Aug' }
          ]
        },       
        {
          sezons: "autumn", 
          months: [
            { name: 'September', abbrev: 'Sep' },
            { name: 'October', abbrev: 'Oct' },
            { name: 'November', abbrev: 'Nov' }
          ]
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