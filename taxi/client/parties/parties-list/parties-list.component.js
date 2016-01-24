angular.module('myPersonal').directive('partiesList', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/parties/parties-list/parties-list.html',
    controllerAs: 'partiesList',
    controller: function ($scope, $reactive, $mdDialog, $filter) {
      $reactive(this).attach($scope);

      this.newParty = [];
var amount = amount;
console.log(amount + "partieslist");

      this.db = function () {
        var ob = this.newParty;
        var lent = ob.length;
        var totalArray = [];
        var ttl = 0;
        console.log(lent);

        if (lent > 0) {
          for (var i = 0; i < lent; i++) {
            parseInt(i, 10);

            if (ob[i].sum1 && ob[i].sum2 && ob[i].sum3 > 0) {
              var sum = ob[i].sum1 + ob[i].sum2 + ob[i].sum3;
            } else if (ob[i].sum1 && ob[i].sum2 > 0) {
              var sum = ob[i].sum1 + ob[i].sum2;
            } else {
              var sum = ob[i].sum1;
            }

            this.newParty[i].total = sum;

            totalArray[i] = sum;
            var ttl = ttl + totalArray[i];
            this.newParty.totalSum = ttl;
          }          
        }
      };

      this.helpers({
        parties: () => {
          return Parties.find({});   
        },
        globals: () => {
          return Globals.find({});
        }
      });

      this.addParty = () => {
        Parties.insert(this.newParty);
        this.newParty = [];
      };
 
      this.removeParty = (party) => {
        Parties.remove({_id: party._id});
      }

    } 
  }
});