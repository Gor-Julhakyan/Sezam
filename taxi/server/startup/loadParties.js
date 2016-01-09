Meteor.startup(function () {
  if (Parties.find().count() === 0) {
    var parties = [
      {
        'carNumber': '0306',
        'sumFirst': 0,
        'sumSecond': 0,
        'sumThred': 0
      },
      {
        'carNumber': '0307',
        'sumFirst': 0,
        'sumSecond': 0,
        'sumThred': 0
      },
      {
        'carNumber': '0308',
        'sumFirst': 0,
        'sumSecond': 0,
        'sumThred': 0
      }
    ];
 
    for (var i = 0; i < parties.length; i++) {
      parseInt(parties[i], 10);
      Parties.insert(parties[i]);
    }
  }
});