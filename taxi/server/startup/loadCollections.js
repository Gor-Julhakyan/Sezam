Meteor.startup(function () {
  if (Parties.find().count() === 0) {
    var parties = [];
 
    for (var i = 0; i < parties.length; i++) {
      parseInt(parties[i], 10);
      Parties.insert(parties[i]);
    }
  }



  // If Globals Empty -> Add globals object into Globals in MongoDB
  if (Globals.find().count() === 0) {
  	var globals = [
  		{
  			cmpny: "Erevan",
  			cmpnyId: 0,
  			cars: [ 
				{ number: "0306", id: "0" },
				{ number: "0307", id: "1" },
				{ number: "0308", id: "2" },
				{ number: "0309", id: "3" },
				{ number: "0310", id: "4" },
				{ number: "0311", id: "5" },
				{ number: "0314", id: "6" },
				{ number: "0315", id: "7" },
				{ number: "0316", id: "8" },
				{ number: "0430", id: "9" },
				{ number: "0440", id: "10" },
				{ number: "0444", id: "11" },
				{ number: "0499", id: "12" },
				{ number: "0555", id: "13" },
				{ number: "1313", id: "14" },
				{ number: "2375", id: "15" },
				{ number: "34 CM 051", id: "16" }
			]
		},
		{
			cmpny: "Arcvatev",
			cmpnyId: 1,
			cars: [
				{number: "111", id: "17" },
				{number: "112", id: "18" }				
			]
		}
	];

  	for (var i = 0; i < globals.length; i++) {
  		parseInt(globals[1], 10);
  		Globals.insert(globals[i]);
  		console.info('Addid into DB' + i);
  	}
  }
});