angular.module('myPersonal').directive('partiesList', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/parties/parties-list/parties-list.html',
    controllerAs: 'partiesList',
    controller: function ($scope, $reactive) {
      $reactive(this).attach($scope);
 
      this.newParty = {};
 
      this.helpers({
        parties: () => {
          return Parties.find({});
        }
      });
 
      this.addParty = () => {
        Parties.insert(this.newParty);
        this.newParty = {};
      };
 
      this.removeParty = (party) => {
        Parties.remove({_id: party._id});
      }

      this.carsErevan = [
        {
          number: "00306",
          mmm: 1
        },
        {
          number: "0307",
          mmm: 2
        },
        {
          number: "0308",
          mmm: 3
        },
        {
          number: "0305",
          mmm: 4
        },
        {
          number: "0307",
          mmm: 5
        },
        {
          number: "0309",
          mmm: 6
        },
        {
          number: "0306",
          mmm: 7
        },
        {
          number: "0306",
          mmm: 8
        },
        {
          number: "0306",
          mmm: 9
        },
      ];
    }
  }
});