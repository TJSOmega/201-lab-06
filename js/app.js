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

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }


// function getRandomArbitrary(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);

// }

// var averageCookies = 6.3

// function simulatedCookies(randomCustomers, seattleCookieavrg) {
//   return Math.floor(randomCustomers * seattleCookieavrg)
// }



// for (var i = 6; i < 13; i++) {

//   var customers = getRandomArbitrary(23,65)

//   var simCookies = simulatedCookies(customers, averageCookies)

//   if (i === 12) {
//   // console.log(`${i}pm:${simCookies}`)
//   }  else {
//   // console.log(`${i}am:${simCookies}`)
//   }
// }
//  for (var i = 1; i < 8; i++) {

//   var customers = getRandomArbitrary(23,65)

//   var simCookies = simulatedCookies(customers, averageCookies)

//   // console.log(`${i}pm:${simCookies}`)
// }

// var seattle = {
//   name: `Seattle Store`,
//   minCust: 23,
//   maxCust: 65,
//   avgCookies: 6.3,
//   randomCust: 0,
//   total: 0,

//   numbergen: function () {
//     this.randomCust = getRandomArbitrary(this.minCust, this.maxCust);
//     return this.randomCust

//   },
//   salesReport: [],

//   render: function () {

//     for (var i = 6; i < 13; i++) {

//       var customers = getRandomArbitrary(23, 65)

//       var simCookies = simulatedCookies(customers, this.avgCookies)
//       this.total += simCookies
//       if (i === 12) {
//         this.salesReport.push(`${i}pm: ${simCookies}`)
//       } else {
//         this.salesReport.push(`${i}am: ${simCookies}`)
//       }
//     }
//     for (var i = 1; i < 8; i++) {

//       var customers = getRandomArbitrary(23, 65)

//       var simCookies = simulatedCookies(customers, this.avgCookies)
//       this.total += simCookies
//       this.salesReport.push(`${i}pm: ${simCookies}`)
//     }
//     this.salesReport.push(`Total: ${this.total}`)

//     var parent = document.getElementById('stores')
//     var h2 = document.createElement('h2')
//     h2.textContent = `${this.name}`
//     parent.appendChild(h2)
//     var ul = document.createElement('ul')

//     parent.appendChild(ul)

//     for (var i = 0; i < this.salesReport.length; i++) {
//       var li = document.createElement('li')
//       li.textContent = this.salesReport[i]
//       ul.appendChild(li)
//     }
//   },


// }


// var tokyo = {
//   name: `Tokyo Store`,
//   minCust: 3,
//   maxCust: 24,
//   avgCookies: 1.2,
//   randomCust: 0,
//   total: 0,
//   numbergen: function () {
//     this.randomCust = getRandomArbitrary(this.minCust, this.maxCust);
//     return this.randomCust

//   },
//   salesReport: [],

//   render: function () {

//     for (var i = 6; i < 13; i++) {

//       var customers = getRandomArbitrary(3, 24)

//       var simCookies = simulatedCookies(customers, this.avgCookies)
//       this.total += simCookies
//       if (i === 12) {
//         this.salesReport.push(`${i}pm: ${simCookies}`)
//       } else {
//         this.salesReport.push(`${i}am: ${simCookies}`)
//       }
//     }
//     for (var i = 1; i < 8; i++) {

//       var customers = getRandomArbitrary(3, 24)

//       var simCookies = simulatedCookies(customers, this.avgCookies)
//       this.total += simCookies
//       this.salesReport.push(`${i}pm: ${simCookies}`)
//     }
//     this.salesReport.push(`Total: ${this.total}`)

//     var parent = document.getElementById('stores')
//     var h2 = document.createElement('h2')
//     h2.textContent = `${this.name}`
//     parent.appendChild(h2)
//     var ul = document.createElement('ul')

//     parent.appendChild(ul)

//     for (var i = 0; i < this.salesReport.length; i++) {
//       var li = document.createElement('li')
//       li.textContent = this.salesReport[i]
//       ul.appendChild(li)
//     }
//   },


// }

// var dubai = {
//   name: `Dubai Store`,
//   minCust: 11,
//   maxCust: 38,
//   avgCookies: 3.7,
//   randomCust: 0,
//   total: 0,
//   numbergen: function () {
//     this.randomCust = getRandomArbitrary(this.minCust, this.maxCust);
//     return this.randomCust

//   },
//   salesReport: [],

//   render: function () {

//     for (var i = 6; i < 13; i++) {

//       var customers = getRandomArbitrary(11, 38)

//       var simCookies = simulatedCookies(customers, this.avgCookies)
//       this.total += simCookies
//       if (i === 12) {
//         this.salesReport.push(`${i}pm: ${simCookies}`)
//       } else {
//         this.salesReport.push(`${i}am: ${simCookies}`)
//       }
//     }
//     for (var i = 1; i < 8; i++) {

//       var customers = getRandomArbitrary(11, 38)

//       var simCookies = simulatedCookies(customers, this.avgCookies)
//       this.total += simCookies
//       this.salesReport.push(`${i}pm: ${simCookies}`)
//     }
//     this.salesReport.push(`Total: ${this.total}`)

//     var parent = document.getElementById('stores')
//     var h2 = document.createElement('h2')
//     h2.textContent = `${this.name}`
//     parent.appendChild(h2)
//     var ul = document.createElement('ul')

//     parent.appendChild(ul)

//     for (var i = 0; i < this.salesReport.length; i++) {
//       var li = document.createElement('li')
//       li.textContent = this.salesReport[i]
//       ul.appendChild(li)
//     }
//   },

// }


// var paris = {
//   name: `Paris Store`,
//   minCust: 20,
//   maxCust: 38,
//   avgCookies: 2.3,
//   randomCust: 0,
//   total: 0,
//   numbergen: function () {
//     this.randomCust = getRandomArbitrary(this.minCust, this.maxCust);
//     return this.randomCust

//   },
//   salesReport: [],

//   render: function () {

//     for (var i = 6; i < 13; i++) {

//       var customers = getRandomArbitrary(20, 38)

//       var simCookies = simulatedCookies(customers, this.avgCookies)
//       this.total += simCookies
//       if (i === 12) {
//         this.salesReport.push(`${i}pm: ${simCookies}`)
//       } else {
//         this.salesReport.push(`${i}am: ${simCookies}`)
//       }
//     }
//     for (var i = 1; i < 8; i++) {

//       var customers = getRandomArbitrary(20, 38)

//       var simCookies = simulatedCookies(customers, this.avgCookies)
//       this.total += simCookies
//       this.salesReport.push(`${i}pm: ${simCookies}`)
//     }
//     this.salesReport.push(`Total: ${this.total}`)

//     var parent = document.getElementById('stores')
//     var h2 = document.createElement('h2')
//     h2.textContent = `${this.name}`
//     parent.appendChild(h2)
//     var ul = document.createElement('ul')

//     parent.appendChild(ul)

//     for (var i = 0; i < this.salesReport.length; i++) {
//       var li = document.createElement('li')
//       li.textContent = this.salesReport[i]
//       ul.appendChild(li)
//     }
//   },

// }

// var lima = {
//   name: `Lima Store`,
//   minCust: 2,
//   maxCust: 16,
//   avgCookies: 4.6,
//   randomCust: 0,
//   total: 0,
//   numbergen: function () {
//     this.randomCust = getRandomArbitrary(this.minCust, this.maxCust);
//     return this.randomCust

//   },
//   salesReport: [],

//   render: function () {

//     for (var i = 6; i < 13; i++) {

//       var customers = getRandomArbitrary(2, 16)

//       var simCookies = simulatedCookies(customers, this.avgCookies)
//       this.total += simCookies
//       if (i === 12) {
//         this.salesReport.push(`${i}pm: ${simCookies}`)
//       } else {
//         this.salesReport.push(`${i}am: ${simCookies}`)
//       }
//     }
//     for (var i = 1; i < 8; i++) {

//       var customers = getRandomArbitrary(2, 16)

//       var simCookies = simulatedCookies(customers, this.avgCookies)
//       this.total += simCookies
//       this.salesReport.push(`${i}pm: ${simCookies}`)
//     }
//     this.salesReport.push(`Total: ${this.total}`)

//     var parent = document.getElementById('stores')
//     var h2 = document.createElement('h2')
//     h2.textContent = `${this.name}`
//     parent.appendChild(h2)
//     var ul = document.createElement('ul')

//     parent.appendChild(ul)

//     for (var i = 0; i < this.salesReport.length; i++) {
//       var li = document.createElement('li')
//       li.textContent = this.salesReport[i]
//       ul.appendChild(li)
//     }
//   },

// }

// seattle.render();

// tokyo.render();

// dubai.render();

// paris.render();

// lima.render();

// function getRandomArbitrary(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// };

//       var simCookies = simulatedCookies(customers, this.avgCookies)
//       this.total += simCookies
//       if (i === 12) {
//         this.salesReport.push(`${i}pm: ${simCookies}`)
//       } else {
//         this.salesReport.push(`${i}am: ${simCookies}`)
//       }

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

Stores.prototype.render = function() {
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

   var td = document.createElement
   var tr = document.createElement

   td.textContent = this.totalCookies

   tr.appendChild(td)
  


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


var seattle = new Stores('Seattle Store', 23, 65, 6.3)

seattle.render()

// console.log(seattle.salesReport)

// seattle.numbergen()

//   console.log(`Random customer ${seattle.randomCust}`)
