angular.module('myPersonal').directive('monthly', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/parties/monthly/monthly.html',
    controllerAs: 'monthly',
    controller: function ($scope, $reactive, $mdDialog, $filter, $stateParams, $rootScope) {
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

      this.cmpny = [];

/*

this.totalCarSIndex =
      this.autorun(function() {
        var cars = this.globals;
        var carsLength = cars.length;
        var cmpanyes = this.cmpny;
        var cmpnyLength = this.cmpny.length;

      console.log('companies');
      console.log(this.cmpny);
      console.log('cmpny end');

         for (var i = 0; i < carsLength; i++) {
           parseInt(i, 10);
           var cmpnyName = cars[i].cmpny;
           //this.cmpny[i] = cmpnyName;
           console.log(cmpnyName);
         }
         if (cmpnyLength > 0) {
           console.log('All Dane');
         } else {
           console.log('Error To Add'); 
         }
      });
*/

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