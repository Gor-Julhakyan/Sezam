Meteor.startup(function () {
  if (Parties.find().count() === 0) {
    var parties = [ ];
 
    for (var i = 0; i < parties.length; i++) {
      parseInt(parties[i], 10);
      Parties.insert(parties[i]);
    }
  }

  // If Globals Empty -> Add globals object into Globals
  if (Globals.find().count() === 0) {
  	var globals = [ 
		{ number: "0306", dbKey: "306", cmpny: "erevan" },
		{ number: "0307", dbKey: "307", cmpny: "erevan" },
		{ number: "0308", dbKey: "308", cmpny: "erevan"	},
		{ number: "0309", dbKey: "309", cmpny: "erevan"	},
		{ number: "0310", dbKey: "310", cmpny: "erevan"	},
		{ number: "0311", dbKey: "311", cmpny: "erevan"	},
		{ number: "0314", dbKey: "314", cmpny: "erevan"	},
		{ number: "0315", dbKey: "315", cmpny: "erevan"	},
		{ number: "0316", dbKey: "316", cmpny: "erevan"	},
		{ number: "0430", dbKey: "430", cmpny: "erevan"	},
		{ number: "0440", dbKey: "440", cmpny: "erevan"	},
		{ number: "0444", dbKey: "444", cmpny: "erevan"	},
		{ number: "0499", dbKey: "499", cmpny: "erevan"	},
		{ number: "0555", dbKey: "555", cmpny: "erevan"	},
		{ number: "1313", dbKey: "313", cmpny: "erevan"	},
		{ number: "2375", dbKey: "375", cmpny: "erevan"	},
		{ number: "34 CM 051", dbKey: "51", cmpny: "erevan"	}
	];

  	for (var i = 0; i < globals.length; i++) {
  		parseInt(globals[1], 10);
  		Globals.insert(globals[i]);
  		console.info('Addid into DB' + i);
  	}
  }
});