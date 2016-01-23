angular.module('myPersonal').directive('partiesList', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/parties/parties-list/parties-list.html',
    controllerAs: 'partiesList',
    controller: function ($scope, $reactive, $mdDialog, $filter) {
      $reactive(this).attach($scope);

      this.newParty = [];


this.aray = {};

this.db = function () {
  var ob = this.newParty;
  var lent = ob.length;
  console.log(lent);

  if (lent > 0) {
    for (var i = 0; i < lent; i++) {
      parseInt(i, 10);
      if (ob[i].sum1 === null) {
        console.log(ob[i].sum1 + "is Null");
      }
      var sum = ob[i].sum1 + ob[i].sum1 + ob[i].sum3;
      this.newParty[i].total = sum;
/*
      this.newParty = this.newParty.concat([
        {total : sum},
      ]);
      */
      console.log('I');
      console.log(sum);
      //console.log(i);
    } 
  }

}

      this.helpers({
        parties: () => {
          return Parties.find({});   
        },
        globals: () => {
          return Globals.find({});
        }
      });

 console.log('Ther IS Mongo');     
 console.log(this.newParty);
 console.dir(this.newParty);
 console.log('Mongo End');


      this.addParty = () => {
        Parties.insert(this.newParty);
        this.newParty = {};
      };
 
      this.removeParty = (party) => {
        Parties.remove({_id: party._id});
      }

      this.carsErevan = [

      ];
this.sum1 = 0;
this.a = 0;
this.calc = 0;
this.tot = 0;

this.abc = function (a1, a2, a3) {
  this.s1=a1
this.s2=a2
this.s3=a3
  this.tot = this.s1 + this.s2 + this.s3;
  //console.log(this.tot);
  return this.tot;
}

      this.cmpny = "erevan";
    //  this.partiesList.newParty[car.dbKey].sum1 =;
    //  console.log(this.partiesList.newParty[car.dbKey].sum1);
 this.vobj = []; 
  this.total = () => {
        var sum1 = document.getElementById('sum1').value;
        var sum2 = document.getElementById('sum2').value;
        var sum3 = document.getElementById('sum3').value;
        var s1 = parseInt(sum1 ,10);
        var s2 = parseInt(sum2 ,10);        
        var s3 = parseInt(sum3 ,10);
        var sum = s1 + s2 + s3;
       // console.log(sum);
        document.getElementById('ttt').value=sum;

        /*
        this.s1 = parseInt(sum1, 10);
        this.s2 = parseInt(sum2, 10);
        this.s3 = parseInt(sum3, 10);
    //    this.vobj.push(parseInt(sum1));
     //   console.log(this.vobj);
        this.calc = this.s1 + this.s2 + this.s3;
       //console.log(total);
        return this.calc;*/
      };


     // this.aaaa = this.total()
    } 
  }
});