'use strict';
// Calculate number of cookies each location must make to manage supplies, inventory baking schedule

// The number of cookies to make depends on the hours of operation, and all factors unique to each location. The minimum number of customers per hour, the maximum number of customers per hour, the average number of cookies purchased per customer.

// Because we are early in the life of this business, we will need to build an application that is adaptable. Pat will need to be able to add and remove locations from the daily projections report, and Pat will also need to be able to easily modify the input numbers for each location based on day of the week, special events, and other factors. Pat would like to see these numbers with nice formatting in a web application.

// Pat is requesting your assistance in the design of the documents, color scheme, fonts, and any additional images for the public facing site.

// Location	Min / Cust	Max / Cust	Avg Cookie / Sale
// Seattle	  23	          65	            6.3
// Tokyo	    3	            24	            1.2
// Dubai	    11	          38            	3.7
// Paris	    20	          38	            2.3
// Lima   	  2	            16	            4.6

// Within your javascript file (example: app.js), create separate JS object literals for each shop location that outputs the following to the sales.html file:

// Stores the min/max hourly customers, and the average cookies per customer, in object properties
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:

function numbergen(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var timesArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//Store Constructor
function Stores(name, mincustomers, maxcustomers, cookiesavg) {
  this.name = name;
  this.mincustomers = mincustomers;
  this.maxcustomers = maxcustomers;
  this.cookiesavg = cookiesavg;
  this.totalCookies = 0;
  this.report = []

}

Stores.prototype.customerRandom = function () {
  return numbergen(this.mincustomers, this.maxcustomers)
};

Stores.prototype.hourlytotal = function () {
  var hourly = Math.ceil(this.customerRandom() * this.cookiesavg);
  this.report.push(hourly);
  return hourly
};

Stores.prototype.totalCookiesSold = function () {
  for (var i = 0; i < timesArray.length; i++) {
    this.totalCookies += this.hourlytotal();
  }
};

Stores.prototype.render = function () {
  this.totalCookiesSold()
  var tr = document.createElement('tr')
  var td = document.createElement('td')
  td.textContent = this.name

  tr.appendChild(td)


  for (var i = 0; i < this.report.length; i++) {
    var td = document.createElement('td')
    td.textContent = this.report[i]
    tr.appendChild(td)
  };
  parentElement.appendChild(tr)

  var td = document.createElement('td')

  tr.appendChild(td)
  td.textContent = this.totalCookies


};




var parentElement = document.getElementById('table')
var tr = document.createElement('tr')
var td = document.createElement('td')
td.textContent = ''
tr.appendChild(td)
parentElement.appendChild(tr)

for (var i = 0; i < timesArray.length; i++) {
  var td = document.createElement('td')
  td.textContent = timesArray[i]
  tr.appendChild(td)
}
parentElement.appendChild(tr)

var td = document.createElement('td')
td.textContent = 'Location totals'
tr.appendChild(td)


var seattle = new Stores('Seattle Store', 23, 65, 6.3)
var tokyo =	 new Stores ('Tokyo Store', 3, 24, 1.2)
var dubai =	 new Stores ('Dubia Store', 11, 38, 3.7)
var paris =	 new Stores ('Paris Store', 20, 38, 2.3)
var lima =	 new Stores ('Lima Store', 2, 16, 4.6)


seattle.render()
tokyo.render()
dubai.render()
paris.render()
lima.render()