
var arrYears = [2000,2010,1999,2004,1900];
var leapYears = arrYears.filter(function(element){
	return (((element % 4 === 0 ) && (element % 100 != 0)) || (element % 400 === 0) )  
});
console.log(leapYears);