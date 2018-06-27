var employees = [ {
	id : 234,
	active : true,
	details : {
		fname : "Mack",
		lname : "Grabber",
		city : "Chicago",
		country : "United States"
	},
	fullName : function() {
		return this.details.fname + " " + this.details.lname;
	},
	address : function() {
		return this.details.city + ", " + this.details.country;
	},
}, {
	id : 235,
	active : false,
	details : {
		fname : "Julie",
		lname : "Hopscotch",
		city : "Berlin",
		country : "Germany"
	},
	fullName : function() {
		return this.details.fname + " " + this.details.lname;
	},
	address : function() {
		return this.details.city + ", " + this.details.country;
	},
}, {
	id : 236,
	active : true,
	details : {
		fname : "Charlie",
		lname : "Nguyen",
		city : "Hanoi",
		country : "Vietnam"
	},
	fullName : function() {
		return this.details.fname + " " + this.details.lname;
	},
	address : function() {
		return this.details.city + ", " + this.details.country;
	},
} ];

function showEmpByID(empId, actOnly, rev) {
	for (var i = 0, j = employees.length; i < j; i++) {
		if ( (employees[i].active == true && actOnly == 1)
				|| (actOnly !== 1) ) {
			if (employees[i].id == empId) {
				switch (rev) {
				case 1:
					var str = "Name:    " + employees[i].fullName() + "\n"
							+ "Address: " + employees[i].address();
					return console.log(str.split("").reverse().join(""));
				default:
					return console.log("Name: " + employees[i].fullName()
							+ "\n" + "Address: " + employees[i].address());
				}
			}
		}
	}
};

showEmpByID(234, 1, 0);
showEmpByID(235, 0, 1);
showEmpByID(236, 1, 1);

var sports = {
	running : "5km",
	swimming : "1km"
};

console.log("running" in sports);