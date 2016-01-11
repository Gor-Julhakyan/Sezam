angular.module('myPersonal').directive('partiesList', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/parties/parties-list/parties-list.html',
    controllerAs: 'partiesList',
    controller: function ($scope, $reactive, $mdDialog, $filter) {
      $reactive(this).attach($scope);
 
      this.date = "";
      this.day = $filter('date')(new Date(), 'dd');
      this.month = $filter('date')(this.date, 'MMM');
      this.year = $filter('date')(this.date, 'yyyy')  

 
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

      this.a = 11;


      this.carsErevan = [
        { number: "306" },
        { number: "307" },
        { number: "308" },
        { number: "309" },
        { number: "310" },
        { number: "311" },
        { number: "314" },
        { number: "315" },
        { number: "316" },
      ];


    } 
  }
});