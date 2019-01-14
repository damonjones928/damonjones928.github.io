// JavaScript Document
  document.addEventListener('click', _handleMouseClick,true);
            document.addEventListener('keydown',_keydown,true);
            function _handleMouseClick(event){
                if(event.detail){
                    document.getElementsByTagName("body")[0].classList.add("disableOutline");
                }
            }
            function _keydown(e){
                document.getElementsByTagName("body")[0].classList.remove("disableOutline");
            }
function panelToggle() {
    var dashboardPanel = document.getElementById("dashboardPanel");
    var buttons = document.getElementById("panelToggleButton");
	var animationToLeft = document.getElementById("animation-to-left");
    var animationToRight = document.getElementById("animation-to-right");
	var header = document.getElementById("header");
	if (dashboardPanel.className === "expandedPanel") {
        dashboardPanel.className = "collapsedPanel";
		animationToRight.beginElement();
		header.className = "stretchedHeader";
    } else {
        dashboardPanel.className = "expandedPanel";
		animationToLeft.beginElement();
		header.className = "compressedHeader";
    }
}

function dashboardToggle() {
    var dashboardPanel = document.getElementById("dashboardPanel");
    var buttons = document.getElementById("panelToggleButton");
	var animationToLeft = document.getElementById("animation-to-left");
    var animationToRight = document.getElementById("animation-to-right");
	var header = document.getElementById("header");
	if (dashboardPanel.className === "collapsedPanel") {
        dashboardPanel.className = "expandedPanel";
		header.className = "compressedHeader";
		animationToLeft.beginElement();
    } else {
    }
}






function recentToggle(){
	var recentAccordion = document.getElementById("recentAccordion");
	var alphaAccordion = document.getElementById("alphaAccordion");
	var betaAccordion = document.getElementById("betaAccordion");
	var gammaAccordion = document.getElementById("gammaAccordion");
	var deltaAccordion = document.getElementById("deltaAccordion");
	var animationToUpR = document.getElementById("animation-to-up");
    var animationToDownR = document.getElementById("animation-to-down");
    var animationToDownA = document.getElementById("animation-to-down-A");
    var animationToDownB = document.getElementById("animation-to-down-B");
    var animationToDownG = document.getElementById("animation-to-down-G");
    var animationToDownD = document.getElementById("animation-to-down-D");
	if (recentAccordion.className === "closedAccordion") {
        recentAccordion.className = "openAccordion";
		alphaAccordion.className = "closedAccordion";
		betaAccordion.className = "closedAccordion";
		gammaAccordion.className = "closedAccordion";
		deltaAccordion.className = "closedAccordion";
		animationToDownA.beginElement();	
		animationToDownB.beginElement();
		animationToDownG.beginElement();
		animationToDownD.beginElement();
		animationToUpR.beginElement();
    } else {
        recentAccordion.className = "closedAccordion";
		animationToDownR.beginElement();
    }
}

function alphaToggle(){
	var recentAccordion = document.getElementById("recentAccordion");
	var alphaAccordion = document.getElementById("alphaAccordion");
	var betaAccordion = document.getElementById("betaAccordion");
	var gammaAccordion = document.getElementById("gammaAccordion");
	var deltaAccordion = document.getElementById("deltaAccordion");
	var animationToUpA = document.getElementById("animation-to-up-A");
    var animationToDownA = document.getElementById("animation-to-down-A");
    var animationToDownR = document.getElementById("animation-to-down");
    var animationToDownB = document.getElementById("animation-to-down-B");
    var animationToDownG = document.getElementById("animation-to-down-G");
    var animationToDownD = document.getElementById("animation-to-down-D");
	if (alphaAccordion.className === "openAccordion") {
        alphaAccordion.className = "closedAccordion";
		animationToDownA.beginElement();
    } else {
        alphaAccordion.className = "openAccordion";
		recentAccordion.className = "closedAccordion";
		betaAccordion.className = "closedAccordion";
		gammaAccordion.className = "closedAccordion";
		deltaAccordion.className = "closedAccordion";
		animationToUpA.beginElement();
		animationToDownR.beginElement();	
		animationToDownB.beginElement();
		animationToDownG.beginElement();
		animationToDownD.beginElement();
    }
}

function betaToggle(){
	var recentAccordion = document.getElementById("recentAccordion");
	var alphaAccordion = document.getElementById("alphaAccordion");
	var betaAccordion = document.getElementById("betaAccordion");
	var gammaAccordion = document.getElementById("gammaAccordion");
	var deltaAccordion = document.getElementById("deltaAccordion");
    var animationToDownA = document.getElementById("animation-to-down-A");
    var animationToDownR = document.getElementById("animation-to-down");
	var animationToUpB = document.getElementById("animation-to-up-B");
    var animationToDownB = document.getElementById("animation-to-down-B");
    var animationToDownG = document.getElementById("animation-to-down-G");
    var animationToDownD = document.getElementById("animation-to-down-D");
	if (betaAccordion.className === "openAccordion") {
        betaAccordion.className = "closedAccordion";
		animationToDownB.beginElement();
    } else {
        betaAccordion.className = "openAccordion";
		recentAccordion.className = "closedAccordion";
		gammaAccordion.className = "closedAccordion";
		alphaAccordion.className = "closedAccordion";
		deltaAccordion.className = "closedAccordion";
		animationToUpB.beginElement();
		animationToDownR.beginElement();	
		animationToDownA.beginElement();
		animationToDownG.beginElement();
		animationToDownD.beginElement();
    }
}


function gammaToggle(){
	var recentAccordion = document.getElementById("recentAccordion");
	var alphaAccordion = document.getElementById("alphaAccordion");
	var betaAccordion = document.getElementById("betaAccordion");
	var gammaAccordion = document.getElementById("gammaAccordion");
	var deltaAccordion = document.getElementById("deltaAccordion");
	var animationToUpG = document.getElementById("animation-to-up-G");
    var animationToDownR = document.getElementById("animation-to-down");
    var animationToDownA = document.getElementById("animation-to-down-A");
    var animationToDownB = document.getElementById("animation-to-down-B");
    var animationToDownG = document.getElementById("animation-to-down-G");
    var animationToDownD = document.getElementById("animation-to-down-D");
	if (gammaAccordion.className === "openAccordion") {
        gammaAccordion.className = "closedAccordion";
		animationToDownG.beginElement();
    } else {
        gammaAccordion.className = "openAccordion";
		recentAccordion.className = "closedAccordion";
		betaAccordion.className = "closedAccordion";
		alphaAccordion.className = "closedAccordion";
		deltaAccordion.className = "closedAccordion";
		animationToUpG.beginElement();
		animationToDownR.beginElement();	
		animationToDownA.beginElement();
		animationToDownB.beginElement();
		animationToDownD.beginElement();
    }
}
function deltaToggle(){
	var recentAccordion = document.getElementById("recentAccordion");
	var alphaAccordion = document.getElementById("alphaAccordion");
	var betaAccordion = document.getElementById("betaAccordion");
	var gammaAccordion = document.getElementById("gammaAccordion");
	var deltaAccordion = document.getElementById("deltaAccordion");
	var animationToUpG = document.getElementById("animation-to-up-G");
    var animationToDownR = document.getElementById("animation-to-down");
    var animationToDownA = document.getElementById("animation-to-down-A");
    var animationToDownB = document.getElementById("animation-to-down-B");
    var animationToDownG = document.getElementById("animation-to-down-G");
    var animationToDownD = document.getElementById("animation-to-down-D");
	if (deltaAccordion.className === "openAccordion") {
        deltaAccordion.className = "closedAccordion";
		animationToDownD.beginElement();
    } else {
        gammaAccordion.className = "closedAccordion";
		recentAccordion.className = "closedAccordion";
		betaAccordion.className = "closedAccordion";
		alphaAccordion.className = "closedAccordion";
		deltaAccordion.className = "openAccordion";
		animationToUpG.beginElement();
		animationToDownR.beginElement();	
		animationToDownA.beginElement();
		animationToDownB.beginElement();
		animationToDownD.beginElement();
    }
}

function recentOver(){
	var recentArrow = document.getElementById("recentArrow");
	recentArrow.style.stroke = "#EFAD11";
}
function recentOut(){
	var recentArrow = document.getElementById("recentArrow");
	recentArrow.style.stroke = "#FFFFFF";
}
function alphaOver(){
	var alphaArrow = document.getElementById("alphaArrow");
	alphaArrow.style.stroke = "#EFAD11";
}
function alphaOut(){
	var alphaArrow = document.getElementById("alphaArrow");
	alphaArrow.style.stroke = "#FFFFFF";
}
function betaOver(){
	var betaArrow = document.getElementById("betaArrow");
	betaArrow.style.stroke = "#EFAD11";
}
function betaOut(){
	var betaArrow = document.getElementById("betaArrow");
	betaArrow.style.stroke = "#FFFFFF";
}
function gammaOver(){
	var gammaArrow = document.getElementById("gammaArrow");
	gammaArrow.style.stroke = "#EFAD11";
}
function gammaOut(){
	var gammaArrow = document.getElementById("gammaArrow");
	gammaArrow.style.stroke = "#FFFFFF";
}
function deltaOver(){
	var deltaArrow = document.getElementById("deltaArrow");
	deltaArrow.style.stroke = "#EFAD11";
}
function deltaOut(){
	var deltaArrow = document.getElementById("deltaArrow");
	deltaArrow.style.stroke = "#FFFFFF";
}



function profileHover(){
	var profileCircle = document.getElementById("profile_circle");
	profileCircle.style.stroke = "EFAD11";
}
function profileOut(){
	var profileCircle = document.getElementById("profile_circle");
	profileCircle.style.stroke = "#FFFFFF";
}
function reportsHover(){
	var reportsIcon = document.getElementById("reports");
	reportsIcon.style.stroke = "#EFAD11";
}
function reportsOut(){
	var reportsIcon = document.getElementById("reports");
	reportsIcon.style.stroke = "#FFFFFF";
}
function searchHover(){
	var searchIcon = document.getElementById("search");
	searchIcon.style.stroke = "#EFAD11";
}
function searchOut(){
	var searchIcon = document.getElementById("search");
	searchIcon.style.stroke = "#FFFFFF";
}
function dashboardHover(){
	var dashboardIcon = document.getElementById("dashboard_icon");
	dashboardIcon.style.stroke = "#EFAD11";
}
function dashboardOut(){
	var dashboardIcon = document.getElementById("dashboard_icon");
	dashboardIcon.style.stroke = "#FFFFFF";
}
function arrowHover(){
	var toggleArrow = document.getElementById("toggle_arrow");
	toggleArrow.style.stroke = "#EFAD11";
}
function arrowOut(){
	var toggleArrow = document.getElementById("toggle_arrow");
	toggleArrow.style.stroke = "#FFFFFF";
}