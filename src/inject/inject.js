
console.log("In-ject Started -v 0003");

//Takes a price and converts it into time using their salary
var priceToTime = function(price,dph){
	var hoursToBuy = price/dph;
	var totalTime = {}; //object
	
	//Now need to calculate years, months, days, hours, minutes
	// Plan: If greater than 1x, divide and minus that from total and move to the next one.
	
	//Years
	if (hoursToBuy >= 8765.81){
		var years = Math.floor(hoursToBuy/8765.81);
		hoursToBuy = hoursToBuy - (years * 8765.81);
		totalTime.years = years+" years"; //Add if totaltime is more than 2 -> years, if less -> Year etc.
	}
	
	//Months
	if (hoursToBuy >= 730.484){
		var months = Math.floor(hoursToBuy/730.484);
		hoursToBuy = hoursToBuy - (months * 730.484);
		totalTime.months = months+" months";
	}
	
	//Weeks
	if (hoursToBuy >= 168){
		var weeks = Math.floor(hoursToBuy/168);
		hoursToBuy = hoursToBuy - (weeks * 168);
		totalTime.weeks = weeks+" weeks";
	}
	
	//Days
	if (hoursToBuy >= 24){
		var days = Math.floor(hoursToBuy/24);
		hoursToBuy = hoursToBuy - (days * 24);
		totalTime.days = days+" days";
	}
	
	var hours = Math.floor(hoursToBuy);
	if (hours > 0){
	totalTime.hours = hours+"hrs";
	};
	
	var minutes = ((hoursToBuy - Math.floor(hoursToBuy)).toFixed(1))*10;
	
	if (minutes > 0){
	totalTime.minutes = minutes+"mins";
	};
	
	return totalTime;
	
};

function printResult(totalObj) {
		  var result = "";
			  for (var i in totalObj) {
			    if (totalObj.hasOwnProperty(i)) {
			        result += " " + totalObj[i];
			    }
			  }
		  return result;
		};


function changePrices(userDph){
	var pageText = document.body.innerHTML;
	console.log("changePrices Fired");
	document.body.innerHTML = pageText.replace(/\$[0-9]*,?.?\d{1,2}(\.\d{1,2})?/g,
		function (string) {
		    var number = string.replace('$','');
		    number = number.replace(',','');
		    var timeReplace = printResult(priceToTime(number, userDph));//dph needs to be set in settings
		    return timeReplace;
	});
};//end of changePrices

var userDph;

chrome.storage.sync.get({
		dph: '1'
		}, function(items) {
		userDph = items.dph;
		console.log(items.dph+" retreived");
		
		changePrices(userDph);
		
});//end sync



	





