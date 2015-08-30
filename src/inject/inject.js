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
	};
	
	//Months
	if (hoursToBuy >= 730.484){
		var months = Math.floor(hoursToBuy/730.484);
		hoursToBuy = hoursToBuy - (months * 730.484);
		totalTime.months = months+" months";
	};
	
	//Weeks
	if (hoursToBuy >= 168){
		var weeks = Math.floor(hoursToBuy/168);
		hoursToBuy = hoursToBuy - (weeks * 168);
		totalTime.weeks = weeks+" weeks";
	};
	
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

/*
function printResult(totalObj) {
		  var result = "";
			  for (var i in totalObj) {
			    if (totalObj.hasOwnProperty(i)) {
			        result += " " + totalObj[i];
			    }
			  }
		  return result;
		};
*/


function changePrices(userDph){

var regexp = /(\$(\d{1,3},)*(\d{1,3}))(?:\.[0-9]{2})?(?!\.|\\|\"|\-|\)|,|_|')/i;
var $ = jQuery;
 
// Find all `span` & `td`
$('span,td').filter(function(){
  // Filter element's text matches our regexp
  return regexp.test($(this).text())
}).each( function( i, element ) { // Iterate through each filtered element
      var $element = $(element);
      var content = $element.text();
      // get changed text & wrap with new span(just in case we want to change style of changed text)
      content = content.replace(regexp, function(i, text){
           return '<span class="search-found">' + "NEW" + text + '</span>'
      });
      // finally replace new text for that element
      $element.html( content );
 });
};


/*
	var pageText = document.body.innerHTML;
	document.body.innerHTML = pageText.replace(/(\$(\d{1,3},)*(\d{1,3}))(?:\.[0-9]{2})?(?!\.|\\|\"|\-|\)|,|_|')/g,
		function (string) {
			    var number = string.replace('$','');
			    number = number.replace(',','');
			    var timeReplace = printResult(priceToTime(number, userDph));//dph needs to be set in settings
			    console.log(timeReplace+" <-timeReplaced");
			    return timeReplace;
	});
};//end of changePrices
*/

var userDph;

chrome.storage.sync.get({
		dph: '1'
		}, function(items) {
		userDph = items.dph;
		console.log(items.dph+" retreived");
		
		changePrices(userDph);
		
});//end sync



	





