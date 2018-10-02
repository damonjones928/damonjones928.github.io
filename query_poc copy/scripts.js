// JavaScript Document

//function dashboardsFunction() {
//	document.getElementById("overlay").style.opacity = 1;
//	document.getElementById("buttons").style.display = "inline";
//    var x = document.getElementById("dashboards").value; 
//	if ( x === 'aum_overview' ) {
//     document.getElementById("dashboards").style.width = "126px";
//   }
//	if ( x === 'performance_attribution' ) {
//     document.getElementById("dashboards").style.width = "206px";
//   }
//	if ( x === 'value_added' ) {
//     document.getElementById("dashboards").style.width = "110px";
//   }
//	if ( x === 'equity_liquidity' ) {
//     document.getElementById("dashboards").style.width = "130px";
//   }
//	if ( x === 'positions_changes' ) {
//     document.getElementById("dashboards").style.width = "156px";
//   }
//	if ( x === 'price_variation' ) {
//     document.getElementById("dashboards").style.width = "136px";
//   }
//	if ( x === 'risk_overview' ) {
//     document.getElementById("dashboards").style.width = "120px";
//   }
//
// }
//
//function fundsFunction() {
//	document.getElementById("overlay").style.opacity = 1;
//	document.getElementById("buttons").style.display = "inline";
//    var x = document.getElementById("funds").value;
//	if ( x === 'account_groups' ) {
//		 document.getElementById("funds").style.width = "146px";
//	   }
//	if ( x === 'all_active_accounts' ) {
//		 document.getElementById("funds").style.width = "166px";
//	   }
//	if ( x === 'specific_accounts' ) {
//		 document.getElementById("funds").style.width = "165px";
//	   }
//}
//
//function timeFunction() {
//	document.getElementById("overlay").style.opacity = 1;
//	document.getElementById("buttons").style.display = "inline";
//    var x = document.getElementById("time").value;
//	if ( x === 'prior_day' ) {
//		 document.getElementById("time").style.width = "196px";
//	   }
//	if ( x === 'prior_month' ) {
//		 document.getElementById("time").style.width = "220px";
//	   }
//	if ( x === 'prior_year' ) {
//		 document.getElementById("time").style.width = "202px";
//	   }
//}
//
//function grossNetFunction() {
//	document.getElementById("overlay").style.opacity = 1;
//	document.getElementById("buttons").style.display = "inline";
//    var x = document.getElementById("grossNet").value;
//	if ( x === 'net' ) {
//		 document.getElementById("grossNet").style.width = "32px";
//	   }
//	if ( x === 'gross' ) {
//		 document.getElementById("grossNet").style.width = "52px";
//	   }
//}
//
//function currencyFunction() {
//	document.getElementById("overlay").style.opacity = 1;
//	document.getElementById("buttons").style.display = "inline";
//    var x = document.getElementById("currency").value;
//	if ( x === 'usd' ) {
//		 document.getElementById("currency").style.width = "36px";
//	   }
//	if ( x === 'cad' ) {
//		 document.getElementById("currency").style.width = "38px";
//	   }
//}
//function cancelFunction(){
//	document.getElementById("overlay").style.opacity = 0;
//	document.getElementById("buttons").style.display = "none";
//	document.getElementById("currency").value = "usd";
//	document.getElementById("currency").style.width = "36px";
//	document.getElementById("grossNet").value = "gross";
//	document.getElementById("grossNet").style.width = "52px";
//	document.getElementById("time").value = "prior_day";
//	document.getElementById("time").style.width = "196px";
//	document.getElementById("funds").value = "all_active_accounts";
//	document.getElementById("funds").style.width = "166px";
//	document.getElementById("dashboards").value = "aum_overview";
//	document.getElementById("dashboards").style.width = "126px";
//}
//function applyFunction(){
//	document.getElementById("overlay").style.opacity = 0;
//	document.getElementById("buttons").style.display = "none";
//}

var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);