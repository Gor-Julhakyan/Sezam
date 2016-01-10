Meteor.startup(function () {
  if (Parties.find().count() === 0) {
    var parties = [ ];
 
    for (var i = 0; i < parties.length; i++) {
      parseInt(parties[i], 10);
      Parties.insert(parties[i]);
    }
  }
});