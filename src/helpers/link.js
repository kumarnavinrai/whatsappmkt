var robot = require("robotjs");
var ncp = require("copy-paste");
var ext = require("exit");
var mysql = require("mysql");
var txt = '';
var config = {
	user: 'root',
	password: 'Aa@12345',
	host: 'localhost',
	database: 'malay',
	port: 3306
};
// Speed up the mouse.
robot.setMouseDelay(2);

var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;
var x = 1190;
var y = 68;
var index = 0;
var useitem = {};
var total = 0;
var username = '';
var password = '';
var allusers = [];
var alladds = [];
var window = window;
var curr_category = "electronics";
var curr_page = 1;
var indexonpage = 1;
var location = '';
var name = '';
var phone = '';
var raw_data = '';
var contact_type = '';
var current_addid = '';
var con = mysql.createConnection({
	user: 'root',
	password: 'Aa@12345',
	host: 'localhost',
	database: 'malay'
});

checkDatabase();
function checkDatabase(){

    con.connect(config, function (err){
		if(err) console.log(err);
		con.query('select * from settings where id = 1', function (errq, recordset) {
			if(errq) console.log(errq);
			console.log(recordset);
			curr_page = recordset[0]?.current_page;
			curr_category = recordset[0]?.current_category;
		});
		con.query('select addid from adds_visted where info_collected = 1', function (errq, recordset) {
			if(errq) console.log(errq);
			total = recordset?.length;
			alladds = recordset;
			console.log(alladds);
			setTimeout(() => {
				openMudha();
			}, 2000);
		});
	});
}

function checkDatabaseContinue(){
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
    robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	con.connect(config, function (err){
		if(err) console.log(err);
		con.query('select * from settings where id = 1', function (errq, recordset) {
			if(errq) console.log(errq);
			console.log(recordset);
			curr_page = recordset[0]?.current_page;
			curr_category = recordset[0]?.current_category;
		});
		con.query('select addid from adds_visted where info_collected = 1', function (errq, recordset) {
			if(errq) console.log(errq);
			total = recordset?.length;
			alladds = recordset;
			console.log(alladds);
			setTimeout(() => {
				openMudhaNext();
			}, 2000);
		});
	});
}

function openMudha(){
	// press ctrl Q
	robot.keyToggle('control','down');
    robot.keyTap('m');
	robot.keyToggle('control','up');
	setTimeout(() => {
		openMudhaNext();
	}, 10000);
}

function openMudhaNext(){
	// press ctrl Q
	// robot.keyToggle('control','down');
    // robot.keyTap('3');
	// robot.keyToggle('control','up');
	x = 344;
	y = 62;
	robot.moveMouse(x, y);
	robot.mouseClick();
	console.log(curr_category);
	if(curr_category === 'cars'){
		robot.typeString('https://www.mudah.my/kuala-lumpur/cars-for-sale?o='+curr_page);
	}
	if(curr_category === 'electronics'){
		robot.typeString('https://www.mudah.my/kuala-lumpur/electronics-for-sale?o='+curr_page);
	}
	
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	setTimeout(() => {
		openInspectTools();
	}, 10000);
	
}


function openInspectTools(){
	// press ctrl Q
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
    robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	setTimeout(() => {
		getAddIdWhichIsGoingToOpen();
	}, 5000);
	
}

//from line 105 to 204 bypass for now
function getAddIdWhichIsGoingToOpen(){
	robot.keyToggle('control','down');
    robot.keyTap('l');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	ncp.copy('var inx = 1;var ind = '+indexonpage+';var allaelements = document.querySelectorAll("div"); if(allaelements?.length>0){ for(var item of allaelements){var t = item.getAttribute("data-testid");if(t !== null){var tarr = t.split("-");if(tarr?.length > 3){if(inx === ind){var addid = tarr[3].trim();copy(addid);console.log(addid);break;}inx++;}}} }');
	setTimeout(() => {
		pasteTheAddIdInsertInConsole();
	}, 1000);		
}

function pasteTheAddIdInsertInConsole(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		pasteTheCopiedAddIdInBacendForInserTion();
	}, 1000);
}


function pasteTheCopiedAddIdInBacendForInserTion(){
	var addidtoinsert = ncp.paste();
	current_addid = addidtoinsert.trim();
	//check if addidtoinsert === "changepage" then click on next page and start the sequence again
	console.log(addidtoinsert.trim());
	con.query("select * from adds_visted where addid = '"+addidtoinsert.trim()+"'", function (errql, recordsetl) {
		if(errql) console.log(errql);
		console.log(recordsetl?.length);
		//if recoredset lenght is greater than 0 then go to next add else click on add and get info
		if(recordsetl?.length > 0){
			indexonpage++;
			setTimeout(() => {
				getAddIdWhichIsGoingToOpen();
			}, 1000);
		}else{
			setTimeout(() => {
				clickOnAddByPressCtrl(addidtoinsert);
			}, 1000);
		}
	});
}

function clickOnAddByPressCtrl(addidtoinsert){
	robot.keyToggle('control','down');
    robot.keyTap('l');
	robot.keyToggle('control','up');
	var str = 'var allaelements = document.querySelectorAll("div"); if(allaelements?.length>0){ for(var item of allaelements){  var t = item.getAttribute("data-testid");if(t !== null){var tarr = t.split("-");if(tarr?.length > 3){var addid = tarr[3].trim();if(addid === "changethis"){var allanchortagsinsideitem = item.querySelectorAll("a");for(var itemanchor of allanchortagsinsideitem){ itemanchor.click(); break; }console.log(addid);break;}}}} }';
	str = str.replace("changethis",addidtoinsert.trim());
	ncp.copy(str);
	setTimeout(() => {
		pasteAddIdCodeToClickOnAdd();
	}, 1000);
	
}

function pasteAddIdCodeToClickOnAdd(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		getLocationOfAdd();
	}, 1000);
}

//THIS IS THE FUNCTION WHICH IS BEING CALLED AFTER NEXT PAGE CLICK

function getAddIdAfterClickingNextAdd(){
	robot.keyToggle('control','down');
    robot.keyTap('l');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	ncp.copy('var allaelements = document.querySelectorAll("span"); if(allaelements?.length>0){ for(var item of allaelements){if(item?.textContent.trim().indexOf("List-ID: ") !== -1){ var add_id = item?.textContent.trim(); add_id = add_id.replace("List-ID: ",""); add_id = add_id.replace("Report this ad (",""); add_id = add_id.replace(")",""); console.log(add_id.trim());copy(add_id.trim());}}}');
	
	setTimeout(() => {
		pasteCodeAfterGettingAddId();
	}, 1000);
}

function pasteCodeAfterGettingAddId(){
	robot.keyToggle('control','down');
    robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		var add_id = ncp.paste();
		current_addid = add_id.trim();
		console.log("current add id");
		console.log(current_addid);
			setTimeout(() => {
				getLocationOfAdd();
			}, 1000);
		}, 1000);
}

function getLocationOfAdd(){
	// press ctrl Q
	robot.keyToggle('control','down');
    robot.keyTap('l');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	ncp.copy('var mainsidediv = "";var allaelements = document.querySelectorAll("div"); if(allaelements?.length>0){ for(var item of allaelements){  var t = item.textContent.trim();if(t === "Price"){console.log("yes price found");mainsidediv = item.parentElement.parentElement;}} }var allaelements = mainsidediv.querySelectorAll("div"); if(allaelements?.length>0){ for(var item of allaelements){var t = item.textContent.trim();if(t === "Location"){console.log("yes location found");copy(item.nextSibling.textContent.trim());}} }');
	
	setTimeout(() => {
		pasteCodeToGetLocation();
	}, 1000);
}

function pasteCodeToGetLocation(){
	robot.keyToggle('control','down');
    robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		getCopiedLocationAndStoreInVariable();
	}, 10000);
	
}

function getCopiedLocationAndStoreInVariable(){
	location = ncp.paste();
	console.log(location);
	// press ctrl Q
	robot.keyToggle('control','down');
    robot.keyTap('l');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	//this script will find name in muday
	ncp.copy('var mainsidediv = "";var allaelements = document.querySelectorAll("a"); if(allaelements?.length>0){ for(var item of allaelements){var t = item.getAttribute("data-label");if(t === "pro_profile" || t === "public_profile"){console.log("yes name found");copy(item.textContent.trim());mainsidediv = item.parentElement.parentElement.parentElement;}} }');
	setTimeout(() => {
		pasteScriptWhichFindName();
	}, 5000);
	
}

function pasteScriptWhichFindName(){
	robot.keyToggle('control','down');
    robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		getCopiedNameAndStoreInVariable();
	}, 10000);
	
}

function getCopiedNameAndStoreInVariable(){
	name = ncp.paste();
	console.log(name.trim());
	//now write a script to get contact type
	ncp.copy('var allaelements = mainsidediv.querySelectorAll("div"); if(allaelements?.length>0){ for(var item of allaelements){var t = item.textContent.trim();if(t === "Company"){console.log("yes company found");copy("Company")}if(t === "Private"){console.log("yes private found");copy("Private");}} }');
	setTimeout(() => {
		pasteContactTypeGetterScript();
	}, 1000);

}

function pasteContactTypeGetterScript(){
	robot.keyToggle('control','down');
    robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		getCopiedContactTypeAndStoreInVariable();
	}, 10000);
}

// var location = '';
// var name = '';
// var phone = '';
// var raw_data = '';
// var contact_type = '';
//write a script to get button with current_add_id
function getCopiedContactTypeAndStoreInVariable(){
	contact_type = ncp.paste();
	console.log(contact_type.trim());
	//this script will get phone number
	var s = '';
	if(curr_category === "cars"){
		s = 'var myElement = "";var allaelements = document.querySelectorAll("button"); if(allaelements?.length>0){ for(var item of allaelements){var t = item.getAttribute("data-id");if(t?.trim() === "changethis"){  myElement = item.parentElement; var allSpan = myElement.querySelectorAll("span"); for(var itemnext of allSpan){ if(itemnext?.textContent?.trim() === "VIEW PHONE NUMBER"){ console.log("yes button found"); copy("yes button found"); console.log(itemnext); const rect = myElement.getBoundingClientRect();  const scrollTop = window.pageYOffset || document.documentElement.scrollTop; const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; const elementTop = rect.top + scrollTop; const elementLeft = rect.left + scrollLeft; console.log("Element position: " + elementLeft + "," + elementTop); window.scrollTo(0, elementTop);} }}} }';
	}
	if(curr_category === "electronics"){
		s = 'var myElement = "";var allaelements = document.querySelectorAll("button"); if(allaelements?.length>0){ for(var item of allaelements){var t = item.getAttribute("tabindex");if(t?.trim() === "0"){ console.log(item);  myElement = item.parentElement; var allSpan = myElement.querySelectorAll("span"); for(var itemnext of allSpan){ if(itemnext?.textContent?.trim() === "VIEW NUMBER"){ console.log("yes button found"); copy("yes button found"); console.log(itemnext); const rect = myElement.getBoundingClientRect();  const scrollTop = window.pageYOffset || document.documentElement.scrollTop; const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; const elementTop = rect.top + scrollTop; const elementLeft = rect.left + scrollLeft; console.log("Element position: " + elementLeft + "," + elementTop); window.scrollTo(0, elementTop);} }}} }';
	}
	s = s.replace("changethis",current_addid);	
	ncp.copy(s);
	setTimeout(() => {
		pasteScriptToGetPhoneNumber();
	}, 1000);
}



function pasteScriptToGetPhoneNumber(){
	robot.keyToggle('control','down');
    robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		checkViewNumberBtnFoundOrNot();
	}, 2000);
}

//check that view number button is found or not
function checkViewNumberBtnFoundOrNot(){
	var check = ncp.paste();
	//this is first case where button is found
	if(check?.trim() === "yes button found"){
		x = 274;
		y = 799;	
		robot.moveMouse(x, y);
		robot.mouseToggle("down");
		x = 710;
		y = 798;
		robot.dragMouse(x, y);
		robot.mouseToggle("up");
		setTimeout(() => {
			//clicking on view number
			if(curr_category === "cars"){
				x = 554;
				y = 171;
			}
			if(curr_category === 'electronics'){
				x = 558;
				y = 97;
			}
			robot.moveMouse(x, y);
			robot.mouseClick();
			//snipping tool
			robot.keyToggle('control','down');
			robot.keyToggle('shift','down');
			robot.keyTap('s');
			robot.keyToggle('shift','up');
			robot.keyToggle('control','up');
			//now snipping tool is on now press ctrl n after 2 sec
			setTimeout(() => {
				robot.keyToggle('control','down');
				robot.keyTap('n');
				robot.keyToggle('control','up');
				setTimeout(() => {
					clickOnTheNumber();
				}, 2000);
			}, 4000);
		}, 2000);	
	}else{
		//when no view number button found
		setTimeout(() => {
			ifViewNUmberNotThere();
		}, 1000);
	}
}

function clickOnTheNumber(){
	x = 411;
	y = 155;	
	robot.moveMouse(x, y);
	robot.mouseToggle("down");
	x = 696;
	y = 187;
	robot.dragMouse(x, y);
	robot.mouseToggle("up");
	setTimeout(() => {
		robot.keyToggle('control','down');
		robot.keyTap('s');
		robot.keyToggle('control','up');
		
		setTimeout(() => {
			let rn = Math.random()*1000000000000000;
			rn = parseInt(rn);
			robot.typeString(rn);
			robot.keyTap('enter');
			setTimeout(() => {
				robot.keyToggle('alt','down');
				robot.keyTap('f4');
				robot.keyToggle('alt','up');
				setTimeout(() => {
					x = 774;
					y = 187;
					robot.moveMouse(x, y);
					robot.mouseClick();
					robot.keyToggle('control','down');
					robot.keyTap('t');
					robot.keyToggle('control','up');
					robot.typeString('https://www.imagetotext.info/');
					robot.keyTap('enter');
					setTimeout(() => {
						nowExtractTextFromImage(rn);
					}, 1000);
				}, 1000);
			}, 1000);
		}, 1000);
	}, 1000);	
}

function nowExtractTextFromImage(rn){
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('shift','up');
	robot.keyToggle('control','up');
	setTimeout(() => {
		robot.keyToggle('control','down');
		robot.keyTap('l');
		robot.keyToggle('control','up');
		clickOnBrowse(rn);
	}, 1000);
}

function clickOnBrowse(rn){
	var s = 'document.getElementById("file").click();';
	robot.typeString(s);
	robot.keyTap('enter');
	setTimeout(() => {
		robot.typeString(rn);
		robot.keyTap('enter');
		setTimeout(() => {
			s = 'var myElement = document.getElementById("jsShadowRoot"); if(myElement){const rect = myElement.getBoundingClientRect();  const scrollTop = window.pageYOffset || document.documentElement.scrollTop; const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; const elementTop = rect.top + scrollTop; const elementLeft = rect.left + scrollLeft; console.log("Element position: " + elementLeft + "," + elementTop); window.scrollTo(0, elementTop);}';
			ncp.copy(s);
			setTimeout(() => {
				robot.keyToggle('control','down');
				robot.keyTap('v');
				robot.keyToggle('control','up');
				robot.keyTap('enter');
				robot.keyTap('enter');
				nowClickOnSubmit();
			}, 1000);
		}, 1000);
	}, 2000);	
}

function nowClickOnSubmit(){
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('shift','up');
	robot.keyToggle('control','up');
	setTimeout(() => {
		x = 543;
		y = 102;	
		robot.moveMouse(x, y);
		robot.mouseClick();

		setTimeout(() => {
				robot.keyToggle('control','down');
				robot.keyToggle('shift','down');
				robot.keyTap('i');
				robot.keyToggle('shift','up');
				robot.keyToggle('control','up');
				setTimeout(() => {
					robot.keyToggle('control','down');
					robot.keyTap('l');
					robot.keyToggle('control','up');
					s = 'var allaelements = document.querySelectorAll("button"); if(allaelements?.length>0){ for(var item of allaelements){if(item?.textContent.trim().indexOf("Copy To Clipboard") !== -1){ console.log(item);const rect = item.getBoundingClientRect();  const scrollTop = window.pageYOffset || document.documentElement.scrollTop; const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; const elementTop = rect.top + scrollTop; const elementLeft = rect.left + scrollLeft; console.log("Element position: " + elementLeft + "," + elementTop); window.scrollTo(0, elementTop); }}}';
					ncp.copy(s);
					setTimeout(() => {
						robot.keyToggle('control','down');
						robot.keyTap('v');
						robot.keyToggle('control','up');
						robot.keyTap('enter');
						robot.keyTap('enter');
						nowCloseTheTabAndPassNumberToClip();
					}, 1000);
				}, 5000);	
		}, 10000);		
	}, 2000);
}

function nowCloseTheTabAndPassNumberToClip(){
	x = 329;
	y = 102;
	robot.moveMouse(x,y);
	robot.mouseClick();
	setTimeout(() => {
		robot.keyToggle('control','down');
		robot.keyToggle('shift','down');
		robot.keyTap('i');
		robot.keyToggle('shift','up');
		robot.keyToggle('control','up');
		setTimeout(() => {
			robot.keyToggle('control','down');
			robot.keyToggle('shift','down');
			robot.keyTap('i');
			robot.keyToggle('shift','up');
			robot.keyToggle('control','up');
			setTimeout(() => {
				robot.keyToggle('control','down');
				robot.keyTap('l');
				robot.keyToggle('control','up');
				robot.typeString('copy("');
				robot.keyToggle('control','down');
				robot.keyTap('v');
				robot.keyToggle('control','up');
				robot.typeString('");');
				robot.keyTap('enter');
				robot.keyTap('enter');
				setTimeout(() => {
					robot.keyToggle('control','down');
					robot.keyTap('w');
					robot.keyToggle('control','up');
					setTimeout(() => {
						robot.keyToggle('control','down');
						robot.keyToggle('shift','down');
						robot.keyTap('i');
						robot.keyToggle('shift','up');
						robot.keyToggle('control','up');
						setTimeout(() => {
							getNumberFromClipBoard();
						}, 1000);
					}, 1000);	
				}, 1000);
			}, 1000);
		}, 1000);
	}, 1000);
	
		
}

function getNumberFromClipBoard(){
	var n = ncp.paste();
	n = n.trim();
	phone = n;
	console.log(phone);
	//PRINT HERE WHOLE INFO BEFORE PROCEEDING
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('shift','up');
	robot.keyToggle('control','up');
	setTimeout(() => {
		ifViewNUmberNotThere();
	}, 1000);
}

//this sequence will run if there is no view number START
function ifViewNUmberNotThere(){

	//CLICKING ON CONTINUE READING IF EXISTS
	robot.keyToggle('control','down');
	robot.keyTap('l');
	robot.keyToggle('control','up');
	s = 'var allaelements = document.querySelectorAll("li"); if(allaelements?.length>0){ for(var item of allaelements){if(item?.textContent.trim().indexOf("Description") !== -1){ var otherul = item.parentElement; var ultosearch = otherul.nextSibling; var allaelementsnext = ultosearch.querySelectorAll("span"); if(allaelementsnext?.length>0){ for(var itemnext of allaelementsnext){ if(itemnext?.textContent.trim().indexOf("Continue Reading") !== -1){ itemnext.parentElement.click(); }}}}}}';
	ncp.copy(s);
	setTimeout(() => {
		robot.keyToggle('control','down');
		robot.keyTap('v');
		robot.keyToggle('control','up');
		robot.keyTap('enter');
		robot.keyTap('enter');
		clickOnShowNumberIfExists()
	}, 1000);

}

//click on show numbers if exists
function clickOnShowNumberIfExists(){

	//CLICKING ON SHOW NUMBER IF EXISTS
	robot.keyToggle('control','down');
	robot.keyTap('l');
	robot.keyToggle('control','up');
	s = 'var allaelements = document.querySelectorAll("li"); if(allaelements?.length>0){ for(var item of allaelements){if(item?.textContent.trim().indexOf("Description") !== -1){ var otherul = item.parentElement; var ultosearch = otherul.nextSibling; var allaelementsnext = ultosearch.querySelectorAll("span"); if(allaelementsnext?.length>0){ for(var itemnext of allaelementsnext){ if(itemnext?.textContent.trim().indexOf("Show contact number") !== -1){ itemnext.parentElement.click(); }}}}}}';
	ncp.copy(s);
	setTimeout(() => {
		robot.keyToggle('control','down');
		robot.keyTap('v');
		robot.keyToggle('control','up');
		robot.keyTap('enter');
		robot.keyTap('enter');
		getHtmlFromUlAndGetUniquePhoneNumbers();
	}, 1000);

}

//GET HTML IN UL ND REMOVE HTML TAGS AND THEN GET UNIQUE PHONE NUMBERS
//https://raw.githubusercontent.com/kumarnavinrai/qna/main/phonescript.txt
function getHtmlFromUlAndGetUniquePhoneNumbers(){

	//GET HTML FROM UL AND NUMBERS
	robot.keyToggle('control','down');
	robot.keyTap('t');
	robot.keyToggle('control','up');
	//the script has been saved to this url to copy
	robot.typeString('https://raw.githubusercontent.com/kumarnavinrai/qna/main/phonescript.txt');
	/*var allaelements = document.querySelectorAll("li"); if(allaelements?.length>0){ for(var item of allaelements){if(item?.textContent.trim().indexOf("Description") !== -1){ var otherul = item.parentElement; var ultosearch = otherul.nextSibling; const myListHTML = ultosearch.innerHTML; let cleanStr = myListHTML.replace(/<[^>]*>/g, ""); var re = /(?:[-+() ]*\d){10,13}/gm; var res = cleanStr.match(re)?.map(function(s){return s.trim();});console.log("printing res");console.log(res);let phoneRegex = /[(]?([0-9]{3})[)]?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})/g;let phoneNumbers = cleanStr.match(phoneRegex);console.log("printing phoneNumbers");console.log(phoneNumbers); const arr3 = [...res, ...phoneNumbers];const uniqueArr = [...new Set(arr3)];console.log("printing uniqueArr");console.log(uniqueArr); copy(uniqueArr.join(","))}}} */
	robot.keyTap('enter');
	x = 635;
	y = 366;
	robot.moveMouse(x,y);
	robot.mouseClick();

	//{ x: 635, y: 366 }
	setTimeout(() => {
		robot.keyToggle('control','down');
		robot.keyTap('a');
		robot.keyToggle('control','up');
		robot.keyToggle('control','down');
		robot.keyTap('c');
		robot.keyToggle('control','up');
		robot.keyToggle('control','down');
		robot.keyTap('w');
		robot.keyToggle('control','up');
		setTimeout(() => {
			robot.keyToggle('control','down');
			robot.keyToggle('shift','down');
			robot.keyTap('i');
			robot.keyToggle('shift','up');
			robot.keyToggle('control','up');
			setTimeout(() => {
				robot.keyToggle('control','down');
				robot.keyToggle('shift','down');
				robot.keyTap('i');
				robot.keyToggle('shift','up');
				robot.keyToggle('control','up');
					setTimeout(() => {
						robot.keyToggle('control','down');
						robot.keyTap('v');
						robot.keyToggle('control','up');
						robot.keyTap('enter');
						robot.keyTap('enter');
							setTimeout(() => {
									getCopiedPhoneNumbers();
							}, 2000);
					}, 2000);
			}, 1000);
		}, 1000);
	}, 1000);
}

function getCopiedPhoneNumbers(){
	var phonestring = ncp.paste();
	if(phonestring.indexOf('var allaelements = document.querySelectorAll("li");') === -1){
		phone = phone+","+phonestring;
	}
	console.log(phone);

	setTimeout(() => {
		getRawData();
	}, 1000);
}

function getRawData(){
	robot.keyToggle('control','down');
	robot.keyTap('l');
	robot.keyToggle('control','up');
	s = 'var allaelements = document.querySelectorAll("li"); if(allaelements?.length>0){ for(var item of allaelements){if(item?.textContent.trim().indexOf("Description") !== -1){ var otherul = item.parentElement; var ultosearch = otherul.nextSibling; const myListHTML = ultosearch.innerHTML; var cleanStr = myListHTML.replace(/<[^>]*>/g, ""); copy(cleanStr);}}}';
	ncp.copy(s);
	setTimeout(() => {
		robot.keyToggle('control','down');
		robot.keyTap('v');
		robot.keyToggle('control','up');
		robot.keyTap('enter');
		robot.keyTap('enter');
		setTimeout(() => {
			var rawdata = ncp.paste();
			raw_data = rawdata;
			console.log(rawdata);
			printAllDataAndInsertInDatabase();
		}, 1000);
	}, 1000);

}

function createSqlQueryBasedOnArray(phoneArray){
	return "SELECT id FROM phone_data WHERE phone = '9'";
	var queryToReturn = "SELECT id FROM phone_data WHERE phone = '";
	if (typeof phoneArray === 'undefined' || !Array.isArray(phoneArray) || phoneArray === undefined || phoneArray?.length === 0) {
		return "SELECT id FROM phone_data WHERE phone = '9'";
	}
	phoneArray = phoneArray.filter(Boolean);

	if (phoneArray[0] !== undefined && phoneArray[0].indexOf("var ") === -1) {
		queryToReturn = queryToReturn + phoneArray[0]+"' ";
	}

	if (phoneArray[1] !== undefined && phoneArray[1].indexOf("var ") === -1) {
		queryToReturn = queryToReturn + "OR phoneone = '"+phoneArray[1]+"' ";
	}

	if (phoneArray[2] !== undefined && phoneArray[2].indexOf("var ") === -1) {
		queryToReturn = queryToReturn + "OR phonetwo = '"+phoneArray[2]+"' ";
	}

	if (phoneArray[3] !== undefined && phoneArray[3].indexOf("var ") === -1) {
		queryToReturn = queryToReturn + "OR phonethree = '"+phoneArray[3]+"' ";
	}
	return queryToReturn;
}

function createInsertSqlQueryBasedOnArray(phoneArray){
	var queryToReturn = "";
	

	if (typeof phoneArray === 'undefined' || !Array.isArray(phoneArray) || phoneArray === undefined || phoneArray?.length === 0) {
		return "INSERT INTO phone_data (location, name, raw_data, contact_type, addid) VALUES ('"+location+"','"+name+"','"+raw_data+"','"+contact_type+"','"+current_addid+"')";
	}else{
		phoneArray = phoneArray.filter(Boolean);
	}

	if (phoneArray[0] !== undefined && phoneArray[0].indexOf("var ") === -1) {
		queryToReturn = "INSERT INTO phone_data (location, name, phone, raw_data, contact_type, addid) VALUES ('"+location+"','"+name+"','"+phoneArray[0]+"','"+raw_data+"','"+contact_type+"','"+current_addid+"')";
	}

	if (phoneArray[1] !== undefined && phoneArray[1].indexOf("var ") === -1) {
		queryToReturn = "INSERT INTO phone_data (location, name, phone, phoneone, raw_data, contact_type, addid) VALUES ('"+location+"','"+name+"','"+phoneArray[0]+"','"+phoneArray[1]+"','"+raw_data+"','"+contact_type+"','"+current_addid+"')";
	}

	if (phoneArray[2] !== undefined && phoneArray[2].indexOf("var ") === -1) {
		return "INSERT INTO phone_data (location, name, phone, phoneone, phonetwo, raw_data, contact_type, addid) VALUES ('"+location+"','"+name+"','"+phoneArray[0]+"','"+phoneArray[1]+"','"+phoneArray[2]+"','"+raw_data+"','"+contact_type+"','"+current_addid+"')";
	}

	if (phoneArray[3] !== undefined && phoneArray[3].indexOf("var ") === -1) {
		queryToReturn = "INSERT INTO phone_data (location, name, phone, phoneone, phonetwo, phonethree, raw_data, contact_type, addid) VALUES ('"+location+"','"+name+"','"+phoneArray[0]+"','"+phoneArray[1]+"','"+phoneArray[2]+"','"+phoneArray[3]+"','"+raw_data+"','"+contact_type+"','"+current_addid+"')";
	}
	return queryToReturn;
}

//print all data and insert it in database
function printAllDataAndInsertInDatabase(){
	// location = 'abc';
	// name = 'xyz';
	// phone = '32324dfdgd,undefined';
	// raw_data = 'fdsfsfsfsfsf';
	// contact_type = 'dsfssfsf';
	// current_addid = '332223423';
	// console.log("location");
	// console.log(location);
	// console.log("name");
	// console.log(name);
	// console.log("phone");
	// console.log(phone);
	// console.log("raw data");
	// console.log(raw_data);
	// console.log("contact type");
	// console.log(contact_type);
	// console.log("current add id");
	// console.log(current_addid);
	var phonearr = phone?.split(",");
	var selectQuery = createSqlQueryBasedOnArray(phonearr);
	var insertQuery = createInsertSqlQueryBasedOnArray(phonearr);
    //removing ' as it was casing insert to fail.
	var charToRemove = "'";
	raw_data = raw_data.replace(new RegExp(charToRemove, "g"), "");

	// var curr_category = "Cars";
	// var curr_page = 1;
	// var indexonpage = 1;
    
	con.query(selectQuery, function (err, record) {
		if(err) console.log(err);
		console.log("Selected number from db length");
		if(record?.length === 0){
			console.log("New mobile number");
			con.query(insertQuery, function (errqn, recordsetn) {
				if(errqn) console.log(errqn);

				con.query("INSERT INTO adds_visted (addid, info_collected) VALUES ('"+current_addid+"',1)", function (errqn, recordsetn) {
					if(errqn) console.log(errqn);
					//now check index is less than 40 then increase it
					//if index is greater equal to  forty update page no in table
					indexonpage++;
					if(indexonpage < 40){
						//click on next page
						robot.keyToggle('control','down');
						robot.keyTap('l');
						robot.keyToggle('control','up');
						var s = 'var allaelements = document.querySelectorAll("a"); if(allaelements?.length>0){ for(var item of allaelements){var t = item.getAttribute("data-testid");if(t?.trim() === "next"){ item.click();}} }';
						ncp.copy(s);
						setTimeout(() => {
							robot.keyToggle('control','down');
							robot.keyTap('v');
							robot.keyToggle('control','up');
							robot.keyTap('enter');
							robot.keyTap('enter');
							setTimeout(() => {
								setTimeout(() => {
									//need to check here next page loaded or not
									getAddIdAfterClickingNextAdd();
								}, 7000);
							}, 1000);
						}, 1000);
						
					}else if(indexonpage >= 40){
						//update page number
						curr_page++;
						indexonpage = 1;
						curr_category = "Cars";
							con.query("UPDATE settings SET current_page = '"+curr_page+"',current_category = '"+curr_category+"' WHERE id = 1", function (errql, recordsetl) {
								if(errql) console.log(errql);
								setTimeout(() => {
									checkDatabaseContinue();
								}, 1000);
							});

					}
				
				});
			
			});
		}else{
			console.log("Old mobile number");
			indexonpage++;
			if(indexonpage < 40){
				//click on next page
				robot.keyToggle('control','down');
				robot.keyTap('l');
				robot.keyToggle('control','up');
				var s = 'var allaelements = document.querySelectorAll("a"); if(allaelements?.length>0){ for(var item of allaelements){var t = item.getAttribute("data-testid");if(t?.trim() === "next"){ item.click();}} }';
				ncp.copy(s);
				setTimeout(() => {
					robot.keyToggle('control','down');
					robot.keyTap('v');
					robot.keyToggle('control','up');
					robot.keyTap('enter');
					robot.keyTap('enter');
					setTimeout(() => {
						setTimeout(() => {
							getAddIdAfterClickingNextAdd();
						}, 7000);
					}, 1000);
				}, 1000);
				
			}else if(indexonpage >= 40){
				//update page number
				curr_page++;
				indexonpage = 1;
				curr_category = "Cars";
					con.query("UPDATE settings SET current_page = '"+curr_page+"',current_category = '"+curr_category+"' WHERE id = 1", function (errql, recordsetl) {
						if(errql) console.log(errql);
						setTimeout(() => {
							checkDatabaseContinue();
						}, 1000);
					});

			}	
		}

	});	

}

//this sequence will run if there is no view number END
//there are 3 cases 
//1 company which is verified
//2 company which is not verified
//3 private
//4 company or private with no number

// function getCopiedContactTypeAndStoreInVariable(){
// 	contact_type = ncp.paste();
// 	console.log(contact_type.trim());
// 	//now write a script to get contact type
// 	ncp.copy('var allaelements = mainsidediv.querySelectorAll("div"); if(allaelements?.length>0){ for(var item of allaelements){var t = item.textContent.trim();if(t === "Company"){console.log("yes company found");copy("Company")}if(t === "Private"){console.log("yes private found");copy("Private");}} }');
// 	setTimeout(() => {
// 		pasteContactTypeGetterScript();
// 	}, 1000);
// }



// setTimeout(() => {
// 	robot.moveMouse(x, y);
// 	robot.mouseClick();

// 	robot.typeString('swati.bhatnagar@search-value.com');
// 	x = 132;
//     y = 388;
// 	robot.moveMouse(x, y);
// 	robot.mouseClick();
// 	robot.typeString('Search@432');
// 	x = 323;
//     y = 540;
// 	robot.moveMouse(x, y);
// 	robot.mouseClick();
// 	x = 132;
//     y = 338;
// 	robot.moveMouse(x, y);
// 	robot.mouseClick();
// 	robot.mouseClick();
// 	robot.mouseClick();
// 	// robot.keyToggle('control','down');
//     // robot.keyTap('c');
// 	// robot.keyToggle('control','up');
	
// 	// txt = ncp.paste();
// 	// console.log(txt);
//     ext(5);
// }, 1000);

// for (var x = 0; x < width; x++)
// {
// 	y = height * Math.sin((twoPI * x) / width) + height;
// 	robot.moveMouse(x, y);
// }