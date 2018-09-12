// JavaScript Document

function dashboardsFunction() {
	document.getElementById("overlay").style.opacity = 1;
	document.getElementById("buttons").style.display = "inline";
    var x = document.getElementById("dashboards").value; 
	if ( x === 'aum_overview' ) {
     document.getElementById("dashboards").style.width = "126px";
   }
	if ( x === 'performance_attribution' ) {
     document.getElementById("dashboards").style.width = "206px";
   }
	if ( x === 'value_added' ) {
     document.getElementById("dashboards").style.width = "110px";
   }
	if ( x === 'equity_liquidity' ) {
     document.getElementById("dashboards").style.width = "130px";
   }
	if ( x === 'positions_changes' ) {
     document.getElementById("dashboards").style.width = "156px";
   }
	if ( x === 'price_variation' ) {
     document.getElementById("dashboards").style.width = "136px";
   }
	if ( x === 'risk_overview' ) {
     document.getElementById("dashboards").style.width = "120px";
   }

 }

function fundsFunction() {
	document.getElementById("overlay").style.opacity = 1;
	document.getElementById("buttons").style.display = "inline";
    var x = document.getElementById("funds").value;
	if ( x === 'account_groups' ) {
		 document.getElementById("funds").style.width = "146px";
	   }
	if ( x === 'all_active_accounts' ) {
		 document.getElementById("funds").style.width = "166px";
	   }
	if ( x === 'specific_accounts' ) {
		 document.getElementById("funds").style.width = "165px";
	   }
}

function timeFunction() {
	document.getElementById("overlay").style.opacity = 1;
	document.getElementById("buttons").style.display = "inline";
    var x = document.getElementById("time").value;
	if ( x === 'prior_day' ) {
		 document.getElementById("time").style.width = "196px";
	   }
	if ( x === 'prior_month' ) {
		 document.getElementById("time").style.width = "220px";
	   }
	if ( x === 'prior_year' ) {
		 document.getElementById("time").style.width = "202px";
	   }
}

function grossNetFunction() {
	document.getElementById("overlay").style.opacity = 1;
	document.getElementById("buttons").style.display = "inline";
    var x = document.getElementById("grossNet").value;
	if ( x === 'net' ) {
		 document.getElementById("grossNet").style.width = "32px";
	   }
	if ( x === 'gross' ) {
		 document.getElementById("grossNet").style.width = "52px";
	   }
}

function currencyFunction() {
	document.getElementById("overlay").style.opacity = 1;
	document.getElementById("buttons").style.display = "inline";
    var x = document.getElementById("currency").value;
	if ( x === 'usd' ) {
		 document.getElementById("currency").style.width = "36px";
	   }
	if ( x === 'cad' ) {
		 document.getElementById("currency").style.width = "38px";
	   }
}
function cancelFunction(){
	document.getElementById("overlay").style.opacity = 0;
	document.getElementById("buttons").style.display = "none";
	document.getElementById("currency").value = "usd";
	document.getElementById("currency").style.width = "36px";
	document.getElementById("grossNet").value = "gross";
	document.getElementById("grossNet").style.width = "52px";
	document.getElementById("time").value = "prior_day";
	document.getElementById("time").style.width = "196px";
	document.getElementById("funds").value = "all_active_accounts";
	document.getElementById("funds").style.width = "166px";
	document.getElementById("dashboards").value = "aum_overview";
	document.getElementById("dashboards").style.width = "126px";
}
function applyFunction(){
	document.getElementById("overlay").style.opacity = 0;
	document.getElementById("buttons").style.display = "none";
}