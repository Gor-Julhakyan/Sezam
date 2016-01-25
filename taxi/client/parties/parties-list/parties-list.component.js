angular.module('myPersonal').directive('partiesList', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/parties/parties-list/parties-list.html',
    controllerAs: 'partiesList',
    controller: function ($scope, $reactive, $mdDialog, $filter) {
      $reactive(this).attach($scope);

      this.newParty = [];

// Find Mongo Collections and returns that   
      this.helpers({
        parties: () => {
          return Parties.find({});   
        },
        globals: () => {
          return Globals.find({});
        }
      });


//  Globals cars count
      var totalCars = this.globals.length;
      var carsDbObj = this.globals;
      var amount = 0;

      this.autorun(function() {
        var cmpnyCarsCount= [];
        //var amount = 0;
        parseInt(amount, 10);

        for (var i = 0; i < totalCars; i++) {
          parseInt(i, 10);
          var count = carsDbObj[i].cars.length;
          cmpnyCarsCount[i] = count;
          amount += count;
        }
        return amount;
      });

//  Insert Valus to newParty => Mongo Collection
      this.db = function () {
        var ob = this.newParty;
        var lent = ob.length;
        var totalArray = [];
        var ttl = 0;

        if (lent > 0) {
          for (var i = 0; i < lent; i++) {

         //   if (ob[i] != null) {
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
      //      } else {
    //         i++
       //     }
          }         
        }
      };

//  Sending & Deleting users inputs values into Mongo Collection
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