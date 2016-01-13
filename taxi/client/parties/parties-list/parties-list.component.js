angular.module('myPersonal').directive('partiesList', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/parties/parties-list/parties-list.html',
    controllerAs: 'partiesList',
    controller: function ($scope, $reactive, $mdDialog, $filter) {
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
          number: "0306" ,
          dbKey: "306"
        },
        { number: "0307",
          dbKey: "307"
        },
        { number: "0308",
          dbKey: "308"
        },
        { number: "0309",
          dbKey: "309"
        },
        { number: "0310",
          dbKey: "310"
        },
        { number: "0311",
          dbKey: "311"
        },
        { number: "0314",
          dbKey: "314"
        },
        { number: "0315",
          dbKey: "315"
        },
        { number: "0316",
          dbKey: "316"
        },
        { number: "0430",
          dbKey: "430"
        },
        { number: "0440",
          dbKey: "440"
        },
        { number: "0444",
          dbKey: "444"
        },
        { number: "0499",
          dbKey: "499"
        },
        { number: "0555",
          dbKey: "555"
        },
        { number: "1313",
          dbKey: "313"
        },
        { number: "2375",
          dbKey: "375"
        },
        { number: "34 CM 051",
          dbKey: "51"
        },

      ];

      
    } 
  }
});