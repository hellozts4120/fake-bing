var setting = document.getElementById("setting");
var officeShow = document.getElementById("show-office");
var mainSearch = document.getElementById("main-search");
var leftBg = document.getElementsByClassName("left_one")[0];
var rightBg = document.getElementsByClassName("right_one")[0];
var imageNum = 1;

function hideBlock(tag, target) {
	var obj = document.getElementsByClassName(target)[0] || document.getElementById(target);
	console.log(obj);
	if (tag) {
		obj.className += " hide";
	} else {
		var reg = new RegExp('(\\s|^)' + "hide" + '(\\s|$)');  
		obj.className = obj.className.replace(reg, ' ');  
	}
}

function changeBackground(tag) {
	var bg = document.getElementsByTagName("body")[0];
    var right = document.getElementsByClassName("right_one")[0];
    var left = document.getElementsByClassName("left_one")[0];
	if(tag == 1) {
		if(imageNum == 1) {
	   		left.style.opacity = "1";
	   	}
	    if(imageNum < 6) {
	        imageNum++;
	        bg.style.backgroundImage = "url(images/bgd_" + imageNum + ".jpg)";
	        if(imageNum == 6) {
	            right.style.opacity="0.5";
	        }
		}
	} 
	else {
		if(imageNum == 6) {
            right.style.opacity = "1";
        }

        if(imageNum > 1) {
            imageNum--;
            bg.style.backgroundImage="url(images/bgd_" + imageNum + ".jpg)";
            if(imageNum == 1) {
                left.style.opacity = "0.5";
            }
		}
	}
}

leftBg.onclick = function () {
	changeBackground(0);
}

rightBg.onclick = function () {
	changeBackground(1);
}

officeShow.onmouseover = function () {
	hideBlock(0, "office-toggle");
}

officeShow.onmouseout = function () {
	hideBlock(1, "office-toggle");
}

setting.onclick = function () {
	var panel = document.getElementById("setting-panel")
	if (panel.className.indexOf("hide") === -1) {
		hideBlock(1, "setting-panel");
	} else {
		hideBlock(0, "setting-panel");
	}
}

mainSearch.onfocus = function () {
	var mask = document.getElementById("body-mask");
	hideBlock(0, "body-mask");
}

mainSearch.onblur = function () {
	var mask = document.getElementById("body-mask");
	hideBlock(1, "body-mask");
}