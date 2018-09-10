// JavaScript Document

function icHover() {
	document.getElementById("ac_text").style.opacity = "1";
	document.getElementById("re_text").style.opacity = "1";
	document.getElementById("accounting_text").style.opacity = "0";
	document.getElementById("reports_text").style.opacity = "0";
	document.getElementById("ac_button").style.width = "75px";
	document.getElementById("re_button").style.width = "75px";
	document.getElementById("ic_button").style.width = "212px";
}

function icOut() {
	document.getElementById("ac_button").style.width = "0px";
	document.getElementById("re_button").style.width = "0px";
	document.getElementById("ic_button").style.width = "212px";
	document.getElementById("ac_text").style.opacity = "0";
	document.getElementById("ic_text").style.opacity = "1";
	document.getElementById("re_text").style.opacity = "0";
	document.getElementById("accounting_text").style.opacity = "0";
	document.getElementById("reports_text").style.opacity = "0";
}

function reHover() {
	document.getElementById("ac_text").style.opacity = "1";
	document.getElementById("re_text").style.opacity = "0";
	document.getElementById("accounting_text").style.opacity = "0";
	document.getElementById("reports_text").style.opacity = "1";
	document.getElementById("ac_button").style.width = "75px";
	document.getElementById("re_button").style.width = "212px";
	document.getElementById("ic_button").style.width = "212px";
}

function reOut() {
	document.getElementById("ac_button").style.width = "0px";
	document.getElementById("re_button").style.width = "0px";
	document.getElementById("ic_button").style.width = "212px";
	document.getElementById("ac_text").style.opacity = "0";
	document.getElementById("ic_text").style.opacity = "1";
	document.getElementById("re_text").style.opacity = "0";
	document.getElementById("accounting_text").style.opacity = "0";
	document.getElementById("reports_text").style.opacity = "0";
}

function acHover() {
	document.getElementById("ac_text").style.opacity = "0";
	document.getElementById("re_text").style.opacity = "1";
	document.getElementById("accounting_text").style.opacity = "1";
	document.getElementById("reports_text").style.opacity = "0";
	document.getElementById("ac_button").style.width = "212px";
	document.getElementById("re_button").style.width = "75px";
	document.getElementById("ic_button").style.width = "212px";
}

function acOut() {
	document.getElementById("ac_button").style.width = "0px";
	document.getElementById("re_button").style.width = "0px";
	document.getElementById("ic_button").style.width = "212px";
	document.getElementById("ac_text").style.opacity = "0";
	document.getElementById("ic_text").style.opacity = "1";
	document.getElementById("re_text").style.opacity = "0";
	document.getElementById("accounting_text").style.opacity = "0";
	document.getElementById("reports_text").style.opacity = "0";
}

function icClick() {
	document.getElementById("ac_text").style.opacity = "1";
	document.getElementById("re_text").style.opacity = "1";
	document.getElementById("accounting_text").style.opacity = "0";
	document.getElementById("reports_text").style.opacity = "0";
	document.getElementById("ic_dropdown").style.top = "40px";
	document.getElementById("re_dropdown").style.top = "-520px";
	document.getElementById("ac_dropdown").style.top = "-520px";
	document.getElementById("re_bleed").style.height = "0px";
	document.getElementById("ac_bleed").style.height = "0px";
	document.getElementById("ic_bleed").style.height = "378px";
	document.getElementById("re_content").style.marginTop = "-520px";
	document.getElementById("ac_content").style.marginTop = "-520px";
	document.getElementById("ic_content").style.marginTop = "0";
}

function reClick() {
	document.getElementById("ac_text").style.opacity = "1";
	document.getElementById("re_text").style.opacity = "0";
	document.getElementById("accounting_text").style.opacity = "0";
	document.getElementById("reports_text").style.opacity = "1";
	document.getElementById("re_dropdown").style.top = "40px";
	document.getElementById("ic_dropdown").style.top = "-520px";
	document.getElementById("ac_dropdown").style.top = "-520px";
	document.getElementById("re_bleed").style.height = "378px";
	document.getElementById("ac_bleed").style.height = "0px";
	document.getElementById("ic_bleed").style.height = "0px";
	document.getElementById("re_content").style.marginTop = "0";
	document.getElementById("ac_content").style.marginTop = "-520px";
	document.getElementById("ic_content").style.marginTop = "-520px";
}

function acClick() {
	document.getElementById("ac_text").style.opacity = "0";
	document.getElementById("re_text").style.opacity = "1";
	document.getElementById("accounting_text").style.opacity = "1";
	document.getElementById("reports_text").style.opacity = "0";
	document.getElementById("ac_dropdown").style.top = "40px";
	document.getElementById("re_dropdown").style.top = "-520px";
	document.getElementById("ic_dropdown").style.top = "-520px";
	document.getElementById("ac_bleed").style.height = "378px";
	document.getElementById("re_bleed").style.height = "0px";
	document.getElementById("ic_bleed").style.height = "0px";
	document.getElementById("re_content").style.marginTop = "-520px";
	document.getElementById("ac_content").style.marginTop = "0";
	document.getElementById("ic_content").style.marginTop = "-520px";
}

function bgHover() {
	document.getElementById("ac_text").style.opacity = "0";
	document.getElementById("ic_text").style.opacity = "1";
	document.getElementById("re_text").style.opacity = "0";
	document.getElementById("accounting_text").style.opacity = "0";
	document.getElementById("reports_text").style.opacity = "0";
	document.getElementById("ac_dropdown").style.top = "-520px";
	document.getElementById("re_dropdown").style.top = "-520px";
	document.getElementById("ic_dropdown").style.top = "-520px";
	document.getElementById("re_bleed").style.height = "0px";
	document.getElementById("ac_bleed").style.height = "0px";
	document.getElementById("ic_bleed").style.height = "0px";
	document.getElementById("re_content").style.marginTop = "-520px";
	document.getElementById("ac_content").style.marginTop = "-520px";
	document.getElementById("ic_content").style.marginTop = "-520px";
	document.getElementById("ac_button").style.width = "0px";
	document.getElementById("re_button").style.width = "0px";
	document.getElementById("ic_button").style.width = "212px";
	document.getElementById("ac_text").style.opacity = "0";
	document.getElementById("ic_text").style.opacity = "1";
	document.getElementById("re_text").style.opacity = "0";
	document.getElementById("accounting_text").style.opacity = "0";
	document.getElementById("reports_text").style.opacity = "0";
}

function queryHover() {
	document.getElementById("ac_text").style.opacity = "0";
	document.getElementById("ic_text").style.opacity = "1";
	document.getElementById("re_text").style.opacity = "0";
	document.getElementById("accounting_text").style.opacity = "0";
	document.getElementById("reports_text").style.opacity = "0";
}

function queryOut() {
	document.getElementById("ac_text").style.opacity = "0";
	document.getElementById("ic_text").style.opacity = "1";
	document.getElementById("re_text").style.opacity = "0";
	document.getElementById("accounting_text").style.opacity = "0";
	document.getElementById("reports_text").style.opacity = "0";
}

function recentClick() {
	document.getElementById("recentBtn").setAttribute("class","tabBtnFocus");
}