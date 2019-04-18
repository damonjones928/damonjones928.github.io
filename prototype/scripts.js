// JavaScript Document

// Hide / Show Filters
function showFilters() {
	document.getElementById("filtersPanel").className = "expandedPanel";
	document.getElementById("filters").style.opacity = "1";
}
function filtersToggle() {
    var filter = document.getElementById("filtersPanel");
    var buttons = document.getElementById("filters");
	if (filter.className === "expandedPanel") {
        filter.className = "collapsedPanel";
		buttons.style.opacity = "0"
    } else {
        filter.className = "expandedPanel";
		buttons.style.opacity = "1"
    }
}

//Filters Accordions
function heightToggle1() {
    var filter1 = document.getElementById("filter1");
    if (filter1.className === "filterTall1") {
        filter1.className = "filterShort";
    } else {
        filter1.className = "filterTall1";
    }
	var expandBtn1 = document.getElementById("expandBtn1");
    if (expandBtn1.innerHTML === "+") {
        expandBtn1.innerHTML = "–";
		expandBtn1.style.border = "1px solid #000000";
    } else {
        expandBtn1.innerHTML = "+";
		expandBtn1.style.border = "none";
    }
}
function heightToggle2() {
    var filter2 = document.getElementById("filter2");
    if (filter2.className === "filterTall2") {
        filter2.className = "filterShort";
    } else {
        filter2.className = "filterTall2";
    }
	var expandBtn2 = document.getElementById("expandBtn2");
    if (expandBtn2.innerHTML === "+") {
        expandBtn2.innerHTML = "–";
		expandBtn2.style.border = "1px solid #000000";
    } else {
        expandBtn2.innerHTML = "+";
		expandBtn2.style.border = "none";
    }	
}
function heightToggle3() {
    var filter3 = document.getElementById("filter3");
    if (filter3.className === "filterTall3") {
        filter3.className = "filterShort";
    } else {
        filter3.className = "filterTall3";
    }
	var expandBtn3 = document.getElementById("expandBtn3");
    if (expandBtn3.innerHTML === "+") {
        expandBtn3.innerHTML = "–";
		expandBtn3.style.border = "1px solid #000000";
    } else {
        expandBtn3.innerHTML = "+";
		expandBtn3.style.border = "none";
    }	
}
function heightToggle4() {
    var filter4 = document.getElementById("filter4");
    if (filter4.className === "filterTall4") {
        filter4.className = "filterShort";
    } else {
        filter4.className = "filterTall4";
    }
	var expandBtn4 = document.getElementById("expandBtn4");
    if (expandBtn4.innerHTML === "+") {
        expandBtn4.innerHTML = "–";
		expandBtn4.style.border = "1px solid #000000";
    } else {
        expandBtn4.innerHTML = "+";
		expandBtn4.style.border = "none";
    }	
}
function heightToggle5() {
    var filter5 = document.getElementById("filter5");
    if (filter5.className === "filterTall5") {
        filter5.className = "filterShort";
    } else {
        filter5.className = "filterTall5";
    }
	var expandBtn5 = document.getElementById("expandBtn5");
    if (expandBtn5.innerHTML === "+") {
        expandBtn5.innerHTML = "–";
		expandBtn5.style.border = "1px solid #000000";
    } else {
        expandBtn5.innerHTML = "+";
		expandBtn5.style.border = "none";
    }	
}
function showMenu() {
	document.getElementById("navPanel").className = "expandedNav";
}
function hideMenu() {
	document.getElementById("navPanel").className = "collapsedNav";
}
function showGuideBtn() {
	document.getElementById("pdfGuidesBtn").style.opacity = "1";
}
function hideGuideBtn() {
	document.getElementById("pdfGuidesBtn").style.opacity = "0";
}
function hideDropdown() {
	document.getElementById("menuDropdown").style.display = "none";
}
function menuToggle() {
    var dotMenu = document.getElementById("menuDropdown");
	if (dotMenu.style.display === "block") {
        dotMenu.style.display = "none";
    } else {
		dotMenu.style.display = "block"
    }
}
function oneL() {
	document.getElementById("welcome1").style.display = "none";
	document.getElementById("welcome3").style.display = "block";
}
function oneR() {
	document.getElementById("welcome1").style.display = "none";
	document.getElementById("welcome2").style.display = "block";
}
function twoL() {
	document.getElementById("welcome2").style.display = "none";
	document.getElementById("welcome1").style.display = "block";
}
function twoR() {
	document.getElementById("welcome2").style.display = "none";
	document.getElementById("welcome3").style.display = "block";
}
function threeL() {
	document.getElementById("welcome3").style.display = "none";
	document.getElementById("welcome2").style.display = "block";
}
function threeR() {
	document.getElementById("welcome3").style.display = "none";
	document.getElementById("welcome1").style.display = "block";
}
function showModal() {
	document.getElementById("welcomeModal").style.opacity = "1";
	document.getElementById("overlay").style.opacity = "1";
}