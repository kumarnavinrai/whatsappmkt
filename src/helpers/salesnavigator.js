var robot = require("robotjs");
var ncp = require("copy-paste");
var ext = require("exit");
var mysql = require("mysql");
var txt = '';
var config = {
	user: 'root',
	password: 'Aa@12345',
	host: 'localhost',
	database: 'botdatabase',
	port: 3306
};
// Speed up the mouse.
robot.setMouseDelay(2);
var dayspassedaftersendconnect = 2;
var dayswithdrawonnect = 2;
var keywordsarray = [
        {contact_person:'{{First Name}}'},
        {company:'{{Company name}}'},
        {technical_recourse:'{{Technology}}'},
        {username:'{{Sender First Name}}'},
        {keyword5:'{{keyword5}}'},
        {keyword6:'{{keyword6}}'},
];
var msgarray = [];
var search_criteria = [];
var company_headcount = [];
var company_headquaters = [];
var company_industry = [];
var howmanygeos = 0;
var heightofgeo = 0;
var pageno = 1;
var toplimit = 8;
var noofresultstopick = 0;
var lengthofmsgarray = 0;
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
var links = [];
var window = window;
var con = mysql.createConnection({
    user: 'root',
    password: 'Aa@12345',
    host: 'localhost',
    database: 'botdatabase'
});

setTimeout(() => {
    moveToSalesNavigator();
}, 2000);
//checkDatabase();
function checkDatabase(){

    con.connect(config, function (err){
		if(err) console.log(err);
		con.query('select * from settings', function (errq, recordset) {
			if(errq) console.log(errq);
			console.log(recordset);
			console.log(recordset[0].f4nod);
			dayspassedaftersendconnect = recordset[0].f4nod;
			dayswithdrawonnect = recordset[0].wnod;
		});
		con.query('select * from users where DC = 1', function (errq, recordset) {
			if(errq) console.log(errq);
			if(index === 0){
				total = recordset?.length;
			}
			if(total > 0){
				console.log(recordset);
				allusers = recordset;
				if(allusers[0] !== undefined){
					username = 	recordset[0]?.email;
					password = 	recordset[0]?.password;
					index++;
					total--;
					
					
					setTimeout(() => {
						clickOnSignIn();
					}, 2000);
				}
			}
		});
	});
}

function checkDatabaseContinue(){
	con.query('select * from users where linksent = 0', function (errq, recordset) {
		if(errq) console.log(errq);
		allusers = recordset;
		if(allusers[0] !== undefined){
			username = 	allusers[0]?.email;
			password = 	allusers[0]?.password;
			clickOnSignIn();
		}
	});
}


function clickOnSignIn(){
	
	x = 1190;
	y = 68;
	robot.moveMouse(x, y);
	robot.mouseClick();
	setTimeout(() => {
		checkCommonSigninPageLoaded();
	}, 10000);
}


function checkCommonSigninPageLoaded(){
	// press ctrl Q
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
    robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	setTimeout(() => {
		moveToConsole();
	}, 1000);
	
}

function moveToConsole(){
	x = 987;
	y = 45;
	robot.moveMouse(x, y);
	robot.mouseClick();
	robot.keyToggle('control','down');
    robot.keyTap('l');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	ncp.copy('var obj = document.getElementsByClassName("member__profile");copy(obj?.length);');
	setTimeout(() => {
		pasteScriptA();
	}, 1000);
}

function pasteScriptA(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		moveToConsoleAfterPSA();
	}, 2000);
}

function moveToConsoleAfterPSA(){
	var eleExists = ncp.paste();
	if(parseInt(eleExists) > 0){
		robot.setKeyboardDelay(1);
		ncp.copy('var btn = document.getElementsByClassName("more-actions-btn");btn[0]?.click();');
		setTimeout(() => {
			pasteScriptBUser();
		}, 1000);			
	}else{
		setTimeout(() => {
			closeConsoleUser();
		}, 1000);
	}	
}


function pasteScriptBUser(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		moveToConsoleAfterPSB();
	}, 1000);
}

function moveToConsoleAfterPSB(){
	robot.setKeyboardDelay(1);
	ncp.copy('var icon_list = document.querySelectorAll(".body__banner-icon");icon_list.forEach(item => { if(item.parentNode.getAttribute("data-cie-control-urn") === "remove_account"){ item.parentNode.click(); } });');
	setTimeout(() => {
		pasteScriptC();
	}, 1000);
	
}


function pasteScriptC(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		closeConsoleUser();
	}, 1000);
}
		


function closeConsoleUser(){
	// press ctrl Q
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
    robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	setTimeout(() => {
		moveToLoginTextBox();
	}, 500);
	
}

function moveToLoginTextBox(){
	x = 544;
	y = 244;
	robot.moveMouse(x, y);
	robot.mouseClick();
	robot.typeString(username);
	//robot.typeString('swati.bhatnagar@search-value.com');
	setTimeout(() => {
		moveToPasswordTextBox();
	}, 500);
}

function moveToPasswordTextBox(){
	x = 540;
	y = 310;
	robot.moveMouse(x, y);
	robot.mouseClick();
	robot.typeString(password);
	//robot.typeString('Search@432');
	setTimeout(() => {
		moveToSignInButton();
	}, 500);
}


function moveToSignInButton(){
	x = 671;
	y = 416;
	robot.moveMouse(x, y);
	robot.mouseClick();
	var dataToCopy = allusers[0]?.id+","+allusers[0]?.firstname+","+allusers[0]?.lastname;
	ncp.copy(dataToCopy);
	setTimeout(() => {
		moveToSalesNavigator();
	}, 10000);

}

function moveToSalesNavigator(){
	ncp.copy('https://www.linkedin.com/sales/index');
	setTimeout(() => {
		openLinkInWindowLinkNew();
	}, 2000);
}

function openLinkInWindowLinkNew(){
	// press ctrl Q
	robot.keyToggle('control','down');
    robot.keyTap('j');
	robot.keyToggle('control','up');
	setTimeout(() => {
		clickOnLeads();
	}, 30000);
	
}

function clickOnLeads(){
	x = 742;
	y = 133;
	robot.moveMouse(x, y);
	robot.mouseClick();
	setTimeout(() => {
		clickOnAccount();
	}, 2000);
	
}

function clickOnAccount(){
	x = 165;
	y = 116;
	robot.moveMouse(x, y);
	robot.mouseClick();
    con.query('select * from search where use_this = 1', function (errq, recordset) {
		if(errq) console.log(errq);
		console.log(recordset);
		search_criteria = recordset;
	});
	setTimeout(() => {
		company_headcount = search_criteria[0].headcount.split(",");
		company_headquaters = search_criteria[0].geography.split(",");
		company_industry = search_criteria[0].industry.split(",");
		clickOnCompanyHeadCount();
	}, 2000);
	
}

function clickOnCompanyHeadCount(){
	x = 211;
	y = 309;
	robot.moveMouse(x, y);
	robot.mouseClick();
	setTimeout(() => {
		openClipboardConsole();
	}, 2000);
	
}

function openClipboardConsole(){
	// press ctrl Q
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	setTimeout(() => {
		startUsingScript();
	}, 2000);
}

//check for connect btn present at first start
function startUsingScript(){
	robot.keyToggle('control','down');
		robot.keyTap('l');
		robot.keyToggle('control','up');
		robot.setKeyboardDelay(1);
        var scripttochange = 'var icon_list_btn_check_pending=document.querySelectorAll("fieldset");icon_list_btn_check_pending?.length>0&&icon_list_btn_check_pending.forEach((t,e)=>{if("COMPANY_HEADCOUNT"===t.getAttribute("data-x-search-filter")?.trim()){console.log("COMPANY_HEADCOUNT");var n=t.querySelectorAll("button");n?.length>0&&n.forEach((t,e)=>{t.textContent.trim().indexOf("changethis")===0&&t.click()})}});';
        scripttochange = scripttochange.replace('changethis',company_headcount[0]);
		ncp.copy(scripttochange);
		setTimeout(() => {
			pasteScriptConnectBtn();
		}, 2000);
}

function pasteScriptConnectBtn(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		closeClipboardConsole();
	}, 2000);
}

function closeClipboardConsole(){
	// press ctrl Q
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
    company_headcount.splice(0,1);
    if(company_headcount.length > 0){
        setTimeout(() => {
            openClipboardConsole();
        }, 2000);
    }else{
        setTimeout(() => {
            closeCompanyHeadCount();
        }, 2000);
    }
}

function closeCompanyHeadCount(){
	x = 211;
	y = 309;
	robot.moveMouse(x, y);
	robot.mouseClick();
    setTimeout(() => {
        openHeadquatersLocation();
    }, 2000);
}


function openHeadquatersLocation(){
	x = 212;
	y = 436;
	robot.moveMouse(x, y);
	robot.mouseClick();
	setTimeout(() => {
		clickOnBoxAndType();
	}, 2000);
	
}

function clickOnBoxAndType(){
	//Add locations
	x = 37;
	y = 474;
	robot.moveMouse(x, y);
	robot.mouseClick();
	robot.typeString(company_headquaters[0].trim());
	setTimeout(() => {
		openHeadQuaterLocationConsole();
	}, 2000);
	
}

function openHeadQuaterLocationConsole(){
	// press ctrl Q
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	setTimeout(() => {
		startUsingScriptHeadQuaterLocation();
	}, 2000);
}

//check for connect btn present at first start
function startUsingScriptHeadQuaterLocation(){
	robot.keyToggle('control','down');
		robot.keyTap('l');
		robot.keyToggle('control','up');
		robot.setKeyboardDelay(1);
        var scripttochange = 'var icon_list_btn_check_pending=document.querySelectorAll("fieldset");icon_list_btn_check_pending?.length>0&&icon_list_btn_check_pending.forEach((e,t)=>{if("HEADQUARTERS_LOCATION"===e.getAttribute("data-x-search-filter")?.trim()){console.log("HEADQUARTERS_LOCATION");var n=e.querySelectorAll("span");n?.length>0&&n.forEach((e,t)=>{if(e.textContent.trim().indexOf("changethis")===0){var n;e.parentNode.querySelectorAll("button").forEach((e,t)=>{0===t&&e.click()})}})}});';
		console.log(company_headquaters[0]);
        scripttochange = scripttochange.replace('changethis',company_headquaters[0].trim());
		ncp.copy(scripttochange);
		setTimeout(() => {
			pasteScriptConnectBtnHeadQuaterLocation();
		}, 2000);
}

function pasteScriptConnectBtnHeadQuaterLocation(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		closeClipboardConsoleHeadQuaterLocation();
	}, 2000);
}

function closeClipboardConsoleHeadQuaterLocation(){
	// press ctrl Q
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	company_headquaters.splice(0,1);
    if(company_headquaters.length > 0){
        setTimeout(() => {
            x = 212;
			y = 436;
			robot.moveMouse(x, y);
			robot.mouseClick();
			openConsoleForAddLocation();
        }, 2000);
    }else{
        setTimeout(() => {
			closeHeadQuaterLocation();
		}, 2000);
    }
}
//clicking on closed add btn start
function openConsoleForAddLocation(){
	howmanygeos = 0;
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	setTimeout(() => {
		openAddLocation();
	}, 2000);
}

function openAddLocation(){
	robot.keyToggle('control','down');
		robot.keyTap('l');
		robot.keyToggle('control','up');
		robot.setKeyboardDelay(1);
        var scripttochange = 'var icon_list_btn_check_pending=document.querySelectorAll("fieldset");icon_list_btn_check_pending?.length>0&&icon_list_btn_check_pending.forEach((t,e)=>{if("HEADQUARTERS_LOCATION"===t.getAttribute("data-x-search-filter")?.trim()){console.log("HEADQUARTERS_LOCATION");var c=t.querySelectorAll("button");c?.length>0&&c.forEach((t,e)=>{t.getAttribute("class").indexOf("search-filter__focus-target--button")>-1&&t.click()})}});';
		ncp.copy(scripttochange);
		setTimeout(() => {
			pasteScriptOpenAddLocation();
		}, 2000);
}

function pasteScriptOpenAddLocation(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		checkHowManyGeosPresent();
	}, 2000);
}

function checkHowManyGeosPresent(){
	robot.keyToggle('control','down');
		robot.keyTap('l');
		robot.keyToggle('control','up');
		robot.setKeyboardDelay(1);
        var scripttochange = 'var icon_list_btn_check_pending = document.querySelectorAll("fieldset");icon_list_btn_check_pending?.length > 0&&icon_list_btn_check_pending.forEach((t, e) => {if ("HEADQUARTERS_LOCATION" === t.getAttribute("data-x-search-filter")?.trim()) {console.log("HEADQUARTERS_LOCATION");var c = t.querySelectorAll(".list-style-none");c?.length > 0&&c.forEach((t, e) => { console.log(t);copy(t.offsetHeight);});}});';
		ncp.copy(scripttochange);
		setTimeout(() => {
			pasteHowManyGeos();
		}, 2000);
}

function pasteHowManyGeos(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		howmanygeos = ncp.paste();
		addScriptToAddLocation();
	}, 2000);
}

function addScriptToAddLocation(){
	robot.keyToggle('control','down');
		robot.keyTap('l');
		robot.keyToggle('control','up');
		robot.setKeyboardDelay(1);
		setTimeout(() => {
			pasteScriptAddLocation();
		}, 2000);
}

function pasteScriptAddLocation(){

	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');

	setTimeout(() => {
		
		//{ x: 46, y: 433 } { x: 54, y: 433 }
		//{ x: 38, y: 469 } +30 { x: 64, y: 468 }
		//{ x: 35, y: 510 } input + 40 { x: 79, y: 511 }
		var totalgeography = search_criteria[0].geography.split(",");
		var noofgeoused = parseInt(totalgeography.length) - parseInt(company_headquaters.length);
		var basex = 46;
		var basey = 433;
		console.log('before devide (howmanygeos)');
		console.log(parseInt(howmanygeos));
		howmanygeos = parseInt(parseInt(howmanygeos)/31);
		console.log('parseInt(howmanygeos)');
		console.log(parseInt(howmanygeos));
		console.log('basey');
		console.log(basey);
		console.log('(30*howmanygeos) + 40');
		console.log((30*howmanygeos) + 40);
		howmanygeos = howmanygeos>0?parseInt(howmanygeos):0;
		basey = basey + (30*howmanygeos) + 40;
		console.log(basex);
		heightofgeo = parseInt(basey);
		console.log(basey);
		robot.moveMouse(basex, basey);
		robot.mouseClick();
		robot.typeString(company_headquaters[0].trim());
		setTimeout(() => {
			openHeadQuaterLocationConsole();
		}, 2000);
	}, 2000);
}
//clicking on closed add btn end
function closeHeadQuaterLocation(){
	x = 212;
	y = 436;
	robot.moveMouse(x, y);
	robot.mouseClick();
	setTimeout(() => {
		openIndustry();
	}, 2000);
	
}

function openIndustry(){
	console.log('heightofgeo');
	console.log(heightofgeo);
	//533 is output of above with 3
	//503 is output with 2
	//0 is output with 1
	//{ x: 118, y: 521 }
	//{ x: 106, y: 572 } -- with 3 options
	//{ x: 62, y: 492 } -- with 2 options
	//{ x: 101, y: 570 } -- position of industry with 3 
	//{ x: 94, y: 544 } -- position of industry with 2
	//{ x: 92, y: 518 } -- position of industry with 1 
	if(parseInt(heightofgeo) > -1 && parseInt(heightofgeo) < 434){
		x = 193;
		y = 518;
	}else if(parseInt(heightofgeo) > 433 && parseInt(heightofgeo) < 504){
		x = 193;
		y = 544;
	}else if(parseInt(heightofgeo) > 503 && parseInt(heightofgeo) < 534){
		x = 193;
		y = 576;
	}else{
		x = 193;
		y = 598;	
	}
	robot.moveMouse(x, y);
	robot.mouseClick();
	setTimeout(() => {
		openIndustryConsole();
	}, 2000);
	
}

//check for industry start

function openIndustryConsole(){
	// press ctrl Q
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	setTimeout(() => {
		startUsingIndustryLocation();
	}, 2000);
}

function startUsingIndustryLocation(){
	robot.keyToggle('control','down');
		robot.keyTap('l');
		robot.keyToggle('control','up');
		robot.setKeyboardDelay(1);
        var scripttochange = 'var icon_list_btn_check_pending=document.querySelectorAll("fieldset");icon_list_btn_check_pending?.length>0&&icon_list_btn_check_pending.forEach((e,t)=>{if("INDUSTRY"===e.getAttribute("data-x-search-filter")?.trim()){console.log("INDUSTRY");var n=e.querySelectorAll("span");n?.length>0&&n.forEach((e,t)=>{if(e.textContent.trim().indexOf("changethis")===0){var n;e.parentNode.querySelectorAll("button").forEach((e,t)=>{0===t&&e.click()})}})}});';
        scripttochange = scripttochange.replace('changethis',company_industry[0]);
		ncp.copy(scripttochange);
		setTimeout(() => {
			pasteIndustry();
		}, 2000);
}

function pasteIndustry(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		closeIndustryConsole();
	}, 2000);
}

function closeIndustryConsole(){
	// press ctrl Q
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	company_industry.splice(0,1);

	if(company_industry?.length > 0){
		setTimeout(() => {
			openIndustryConsole();
		}, 2000);
    }else{
		setTimeout(() => {
			closeIndustry();
		}, 2000);
	}
	
}


function closeIndustry(){
	x = 193;
	y = 520;
	robot.moveMouse(x, y);
	robot.mouseClick();
	setTimeout(() => {
		expandIndustry();
	}, 2000);
}

function expandIndustry(){
	x = 313;
	y = 113;
	robot.moveMouse(x, y);
	robot.mouseClick();
	setTimeout(() => {
		clickOnIndustryJo();
	}, 2000);
}

function clickOnIndustryJo(){
	x = 571;
	y = 255;
	robot.moveMouse(x, y);
	robot.mouseClick();
	setTimeout(() => {
		clickOnPostedOnLinkedin();
	}, 2000);
}

function clickOnPostedOnLinkedin(){
	x = 461;
	y = 296;
	robot.moveMouse(x, y);
	robot.mouseClick();
	setTimeout(() => {
		expandIndustryAgain();
	}, 2000);
}

function expandIndustryAgain(){
	x = 684;
	y = 111;
	robot.moveMouse(x, y);
	robot.mouseClick();
	setTimeout(() => {
		pickDatafromSettings();
	}, 2000);
}
//window.hostory.go(-1); -- go back to previus history page
function pickDatafromSettings(){
	con.query('SELECT * FROM settings', function (errq, recordset) {
		if(errq) console.log(errq);
		console.log(recordset);
		noofresultstopick = recordset[0]?.totalnoslrtc;
	});
	
	setTimeout(() => {
		slideSideBarTillBottom();
	}, 2000);

}

function slideSideBarTillBottom(){
	x=1350;
	y=241;
	robot.moveMouse(x,y);
	robot.mouseToggle('down');
	x=1350;
	y=341;
	robot.dragMouse(x,y);
	setTimeout(() => {
		slideSideBarTillBottom1();
	}, 5000);
}

function slideSideBarTillBottom1(){
	x=1350;
	y=441;
	robot.dragMouse(x,y);
	setTimeout(() => {
		slideSideBarTillBottom2();
	}, 5000);
}

function slideSideBarTillBottom2(){
	x=1350;
	y=541;
	robot.dragMouse(x,y);
	setTimeout(() => {
		slideSideBarTillBottom3();
	}, 5000);
}

function slideSideBarTillBottom3(){
	x=1350;
	y=641;
	robot.dragMouse(x,y);
	setTimeout(() => {
		slideSideBarTillBottom4();
	}, 5000);
}

function slideSideBarTillBottom4(){
	x=1350;
	y=682;
	robot.dragMouse(x,y);
	setTimeout(() => {
		slideSideBarTillTop();
	}, 5000);
}


function slideSideBarTillTop(){
	x=1350;
	y=253;
	robot.dragMouse(x,y);
	robot.mouseToggle('up');
	setTimeout(() => {
		openDc();
	}, 5000);
}

//check for industry ends
function openDc(){
	// press ctrl Q
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	setTimeout(() => {
		startConsolingDc();
	}, 2000);
}

function startConsolingDc(){
		robot.keyToggle('control','down');
		robot.keyTap('l');
		robot.keyToggle('control','up');
		robot.setKeyboardDelay(1);

		ncp.copy('var resultarray=[],searchResult=document.getElementById("search-results-container"),pageLi=searchResult.querySelectorAll("li");pageLi?.length>0&&pageLi.forEach((e,r)=>{var t=e.querySelectorAll("a");t?.length>0&&t.forEach((e,r)=>{"company-name"===e.getAttribute("data-anonymize")&&resultarray.push(e?.href+"@"+e.textContent.trim())})});');
		setTimeout(() => {
			pasteScriptDc();
		}, 2000);
}


function pasteScriptDc(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		cConsolingDc();
	}, 2000);
}

function cConsolingDc(){
	ncp.copy('var res = resultarray.join("$");copy(res);');
	setTimeout(() => {
		cScriptDc();
	}, 2000);
}

function cScriptDc(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		getCDcData();
	}, 2000);
}

function getCDcData(){
	var data = ncp.paste();
 	var tempData = data.split("$");
	var cid = '';
	var dataToInsert = [];
    var insertedIds = [];
	var splitdata = [];
	if(tempData.length > 0){
		for (let index = 0; index < tempData.length; index++) {
			splitdata = tempData[index].split("@");
			cid = splitdata[0].split("?");
			cid = cid[0].split("/");
			cid = cid[cid.length-1];
			dataToInsert.push({cid:cid,link:splitdata[0],cname:splitdata[1]});
		}	
			con.query('SELECT company_id FROM sldatacollection', function (errq, recordset) {
				if(errq) console.log(errq);
				
				for (let index = 0; index < recordset.length; index++) {
					insertedIds.push(recordset[index].company_id);	
				}
				processCDcData(dataToInsert,insertedIds);
			});
			
		
	}
}

function processCDcData(dataToInsert,insertedIds){
	if(dataToInsert.length > 0){
		for (let index = 0; index < dataToInsert.length; index++) {
					if(insertedIds.indexOf(parseInt(dataToInsert[index].cid)) === -1){
						con.query("INSERT INTO sldatacollection (company_id, name_of_company, comments, searchid,link) VALUES ('"+dataToInsert[index].cid+"', '"+dataToInsert[index].cname+"', '"+search_criteria[0].headcount+"', '"+search_criteria[0].id+"', '"+ dataToInsert[index].link +"');", function (errq, recordset) {
							if(errq) console.log(errq);
							
						});		
					}
		}
		setTimeout(() => {
			pageConsolingDc();
		}, 8000);
	}
}

//pageno
function pageConsolingDc(){

		robot.keyToggle('control','down');
		robot.keyTap('l');
		robot.keyToggle('control','up');
		robot.setKeyboardDelay(1);
		var s = 'var nextbtn = document.querySelector(".artdeco-pagination__button--next");nextbtn.click();';
		ncp.copy(s);

	setTimeout(() => {
		pageScriptDc();
	}, 2000);
}

function pageScriptDc(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		closeDc();
	}, 20000);

}

function closeDc(){
	// press ctrl Q
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	noofresultstopick = noofresultstopick - 22;
	if(noofresultstopick>=0){
		setTimeout(() => {
			slideSideBarTillBottom();
		}, 2000);
	}else{
		setTimeout(() => {
			con.query('UPDATE search SET use_this = 0 WHERE search.id = ' + search_criteria[0]?.id, function (errq, recordset) {
				if(errq) console.log(errq);
				moveToSalesNavigator();
			});
		}, 2000);
	}
}

function checkConnectionAccepted(){
    var eleExists = ncp.paste();
	// true means connection accepted now msg
	console.log("clipboard");
	console.log(eleExists);
	if(parseInt(eleExists) === 0){
		console.log("connection accepted");
		writeToConsole3();
    }else{
		// false means connection not accepted
		console.log("connection not accepted");
		//chech how many days passed
		console.log("days passed");
		console.log(howManyDaysPassed());
		var dayspassed =  howManyDaysPassed();
		if(parseInt(dayspassed) > dayspassedaftersendconnect){
			withdrawConnectionA();
		}else{
			setTimeout(() => {
				clearConsoleSendConnect();
			}, 2000);
		}
		
	}
}

function withdrawConnectionA(){
	robot.keyToggle('control','down');
	robot.keyTap('l');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	ncp.copy('var btn_present_pending=0,icon_list_btn_check_pending=document.querySelectorAll(".pv-top-card-v2-ctas");icon_list_btn_check_pending?.length>0&&icon_list_btn_check_pending.forEach((e,n)=>{var t=e.querySelectorAll(".pvs-profile-actions");t?.length>0&&t.forEach((e,n)=>{var t=e.querySelectorAll(".artdeco-button__text"),c=e;t?.length>0&&t.forEach((e,n)=>{"Pending"===e.textContent.trim()&&(console.log("Penging request"),btn_present_pending=1,e.parentNode.click())})})});');
	setTimeout(() => {
		pasteScriptWcA();
	}, 2000);
}

function pasteScriptWcA(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		withdrawConnectionB();
	}, 2000);
}

function withdrawConnectionB(){
	robot.keyToggle('control','down');
	robot.keyTap('l');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	ncp.copy('var icon_list_btn_check_msg=document.querySelectorAll(".artdeco-modal");icon_list_btn_check_msg?.length>0&&icon_list_btn_check_msg.forEach((t,c)=>{var e=t.querySelectorAll(".artdeco-modal__confirm-dialog-btn");e?.length>0&&e.forEach((t,c)=>{var e=t,l=t.querySelectorAll(".artdeco-button__text");l?.length>0&&l.forEach((t,c)=>{"Withdraw"===t.textContent.trim()&&e.click()})})});');
	setTimeout(() => {
		pasteScriptWcB();
	}, 2000);
}

function pasteScriptWcB(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	con.query('UPDATE links SET f4_sent = 1 WHERE links.id = ' + links[0]?.id, function (errq, recordset) {
		if(errq) console.log(errq);
	
	});
	setTimeout(() => {
		clearConsoleSendConnect();
	}, 2000);
}

function clearConsoleSendConnect(){
	// press ctrl Q
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	ncp.copy('https://www.linkedin.com/feed/');
	setTimeout(() => {
		backToLoggedInProfileFf();
	}, 5000);
	
}

function backToLoggedInProfileFf(){
	// press ctrl Q
	robot.keyToggle('control','down');
    robot.keyTap('j');
	robot.keyToggle('control','up');
	links.splice(0,1);
	setTimeout(() => {
		sendLinkToPreLoadContinueLink();
	}, 30000);
	
}


function writeToConsole3(){
	robot.keyToggle('control','down');
	robot.keyTap('l');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	ncp.copy('var icon_list_btn_check_msg=document.querySelectorAll(".pv-top-card-v2-ctas");icon_list_btn_check_msg?.length>0&&icon_list_btn_check_msg.forEach((t,e)=>{var c=t.querySelectorAll(".pvs-profile-actions");c?.length>0&&c.forEach((t,e)=>{var c=t,l=t.querySelectorAll(".artdeco-button__text");l?.length>0&&l.forEach((t,e)=>{if("Message"===t.textContent.trim()){c.click();var l=t.parentNode.getAttribute("id");document.getElementById(l).click()}})})});');
	setTimeout(() => {
		pasteScript3();
	}, 2000);
}

function pasteScript3(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		writeToConsole4();
	}, 2000);
}

function writeToConsole4(){
	robot.keyToggle('control','down');
	robot.keyTap('l');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	ncp.copy('var icon_list_btn_check_msg=document.querySelectorAll(".pv-top-card-v2-ctas");icon_list_btn_check_msg?.length>0&&icon_list_btn_check_msg.forEach((c,e)=>{var t=c.querySelectorAll(".pvs-profile-actions");t?.length>0&&t.forEach((c,e)=>{var t=c.querySelectorAll("a");t?.length>0&&t.forEach((c,e)=>{"Message"===c.textContent.trim()&&(c.click(),console.log("click on msg"))})})});');
	setTimeout(() => {
		pasteScript4();
	}, 2000);
}

function pasteScript4(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		writeToConsoleOmw();
	}, 2000);
}

function writeToConsoleOmw(){
	robot.keyToggle('control','down');
	robot.keyTap('l');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	ncp.copy('var number_of_msg = 0,icon_list_btn_check_msg = document.querySelectorAll(".msg-s-message-list__event"); if(icon_list_btn_check_msg?.length>0){ icon_list_btn_check_msg.forEach((item,i) => {number_of_msg = icon_list_btn_check_msg?.length;if(parseInt(number_of_msg) > 4){ copy("Connection replied!") }}); }');
	setTimeout(() => {
		pasteScriptOmw();
	}, 2000);
}

function pasteScriptOmw(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		checkConnectionReplyed();
	}, 2000);
}

function checkConnectionReplyed(){
	var check = ncp.paste();
	if(check === "Connection replied!"){
		setTimeout(() => {
			connectionReplyedOrNot();
		}, 2000);
	}else{
		//chech how many days passed
		console.log("days passed");
		console.log(howManyDaysPassed());
		var dayspassed =  howManyDaysPassed();
		if(parseInt(dayspassed) > dayspassedaftersendconnect){
			clickInMsgWindow();
		}else{
			clearConsoleConnectionReplied();
		}
		
	}
}

function howManyDaysPassed(){
	// Get the current date
    const today = new Date();
	// Set the target date
	const targetDate = new Date(links[0].connection_sent_date);
	// Calculate the number of milliseconds in one day
	const oneDay = 24 * 60 * 60 * 1000;

	// Calculate the difference in milliseconds
	const diff = today - targetDate;

	// Convert the difference to days
	const days = Math.floor(diff / oneDay);

	// Print the number of days
	return days;
}

function connectionReplyedOrNot(){
	//closeing connection window
	// x = 457;
	// y = 342;
	// robot.moveMouse(x, y);
	// robot.mouseClick();
	const d = new Date();
	var month = d.getMonth() + 1;
	var datetosave = d.getFullYear() + "-" + month + "-" + d.getDate();
		
	con.query('UPDATE links SET f4_sent = 1, lead_responded = 1 WHERE links.id = ' + links[0]?.id, function (errq, recordset) {
		if(errq) console.log(errq);
	
	});
	setTimeout(() => {
		clearConsoleConnectionReplied();
	}, 2000);	
}


function clearConsoleConnectionReplied(){
	// press ctrl Q
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	ncp.copy('https://www.linkedin.com/feed/');
	setTimeout(() => {
		backToLoggedInProfileConnectionReplied();
	}, 5000);
	
}

function backToLoggedInProfileConnectionReplied(){
	// press ctrl Q
	robot.keyToggle('control','down');
    robot.keyTap('j');
	robot.keyToggle('control','up');
	links.splice(0,1);
	setTimeout(() => {
		sendLinkToPreLoadContinueLink();
	}, 30000);
	
}

function clickInMsgWindow(){
	x = 246;
	y = 636;
	robot.moveMouse(x, y);
	robot.mouseClick();

	con.query("select * from msg where typemsg = 'f4'", function (errq, recordset) {
		if(errq) console.log(errq);
		console.log(recordset);
		msgarray = recordset;
		lengthofmsgarray = recordset.length;
		setTimeout(() => {
			keyMessage2();
		}, 1000);
	});
}

function keyMessage2paste(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.keyTap('enter');
}

function keyMessage2enter(){
	robot.keyTap('enter');
}

function changeKeywords(temp){
	if(temp.indexOf(keywordsarray[0].contact_person)>-1){
		temp = temp.replace(keywordsarray[0].contact_person,links[0]?.contact_person);
	}

	if(temp.indexOf(keywordsarray[1].company)>-1){
		temp = temp.replace(keywordsarray[1].company,links[0]?.company);
	}

	if(temp.indexOf(keywordsarray[2].technical_recourse)>-1){
		temp = temp.replace(keywordsarray[2].technical_recourse,links[0]?.technical_recourse);
	}

	if(temp.indexOf(keywordsarray[3].username)>-1){
		temp = temp.replace(keywordsarray[3].username,username);
	}

	if(temp.indexOf(keywordsarray[4].keyword4)>-1){
		temp = temp.replace(keywordsarray[4].keyword4,links[0]?.keyword4);
	}

	if(temp.indexOf(keywordsarray[5].keyword5)>-1){
		temp = temp.replace(keywordsarray[5].keyword5,links[0]?.keyword5);
	}
    ncp.copy(temp);
}

function keyMessage2(){
	var workingarray = msgarray[0];
	switch (true) {
		case msgarray[0]?.action === 'paste':
			changeKeywords(msgarray[0].matter);
			setTimeout(() => {
				keyMessage2paste();
			}, 1000);
	    break;
		case msgarray[0]?.action === 'enter':
			setTimeout(() => {
				keyMessage2enter();
			}, 1000);
	    break;
		default:
			true;
			break;
	}
   
	if(msgarray.length > 0){
		msgarray.splice(0,1);
		setTimeout(() => {
			keyMessage2();
		}, 2000);
	}else{
		clickOnSendBtn();
	}
}


function clickOnSendBtn(){
	robot.keyTap('enter');
	setTimeout(() => {
		closeConsoleSend();
	}, 2000);

}

function closeConsoleSend(){
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	setTimeout(() => {
		openConsoleSend();
	}, 2000);
}
function openConsoleSend(){
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	robot.keyToggle('control','down');
	robot.keyTap('l');
	robot.keyToggle('control','up');
	setTimeout(() => {
		copyScriptSend();
	}, 2000);
}

function copyScriptSend(){
	ncp.copy('var btn_present_pending=0,icon_list_btn_check_pending=document.querySelectorAll(".msg-convo-wrapper");icon_list_btn_check_pending?.length>0&&icon_list_btn_check_pending.forEach((e,n)=>{var t=e.querySelectorAll(".msg-form__footer");t?.length>0&&t.forEach((e,n)=>{var t=e.querySelectorAll(".msg-form__send-button"),r=e;t?.length>0&&t.forEach((e,n)=>{"Send"===e.textContent.trim()&&(console.log("Send request"),btn_present_pending=1,e.click())})})});');
	setTimeout(() => {
		pasteScriptSend();
	}, 2000);
}

function pasteScriptSend(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		clickOnCrossBtn();
	}, 2000);
}


function clickOnCrossBtn(){
	con.query('UPDATE links SET f4_sent = 1 WHERE links.id = ' + links[0]?.id, function (errq, recordset) {
		if(errq) console.log(errq);
	
	});
	
	setTimeout(() => {
		clearConsoleConnectionReplied();
	}, 6000);

}


function modalConsolingOthersAndConnect(){
	robot.keyToggle('control','down');
	robot.keyTap('l');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	ncp.copy('var modal_check=0,modal_counter=0,modal_search=document.querySelectorAll(".artdeco-modal__actionbar");modal_search?.length>0&&modal_search.forEach((e,t)=>{var a=e.getElementsByTagName("button");if(a?.length>0){var l,r=a[0],o=r.getElementsByTagName("span");if(o?.length>0&&"Connect"===o[0].innerHTML.trim()){console.log("Connect ....");var n=r.getAttribute("id");console.log(n);var c=0,g=0,m=document.querySelectorAll(".artdeco-modal__content");m?.length>0&&m.forEach((e,t)=>{var a=e.getElementsByTagName("button");if(a?.length>0)for(let l=0;l<a.length;l++){let r=a[l];var o=r.getAttribute("aria-label");if("Other"===o){console.log(o),r.click(),document.getElementById(n).click();break}}})}}});');
	setTimeout(() => {
		pasteScriptBOthersAndConnect();
	}, 2000);
}

function pasteScriptBOthersAndConnect(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		modalConsoling();
	}, 2000);
}


function modalConsoling(){
	robot.keyToggle('control','down');
	robot.keyTap('l');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	ncp.copy('var modal_check=0,modal_counter=0,modal_search=document.querySelectorAll(".artdeco-modal__actionbar");modal_search?.length>0&&modal_search.forEach((e,a)=>{var t=e.getElementsByTagName("button");if(t?.length>0){var l,o=t[0],r=o.getElementsByTagName("span");if(r?.length>0&&"Add a note"===r[0].innerHTML.trim()){console.log("add note exista");var n=o.getAttribute("id");console.log(n),document.getElementById(n).click()}}});');
	setTimeout(() => {
		pasteScriptB();
	}, 2000);
}

function pasteScriptB(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		modalConsolingOthers();
	}, 2000);
}

function modalConsolingOthers(){
	robot.keyToggle('control','down');
	robot.keyTap('l');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	ncp.copy('var modal_check=0,modal_counter=0,modal_search=document.querySelectorAll(".artdeco-modal__actionbar");modal_search?.length>0&&modal_search.forEach((e,a)=>{var t=e.getElementsByTagName("button");if(t?.length>0){var l,n=t[0],o=n.getElementsByTagName("span");if(o?.length>0&&"Connect"===o[0].innerHTML.trim()){console.log("Connect ....");var r=n.getAttribute("id");console.log(r),document.getElementById(r).click()}}});');
	setTimeout(() => {
		pasteScriptOthers();
	}, 2000);
}


function pasteScriptOthers(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		clearConsoleLink();
	}, 5000);
}

function clearConsoleLink(){
	// press ctrl Q
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	setTimeout(() => {
		typeMessageLink();
	}, 5000);
	
}

function typeMessageLink(){
	robot.setKeyboardDelay(500);
	robot.keyTap('tab');
	robot.setKeyboardDelay(500);
	setTimeout(() => {
		keyMessageF1Link();
	}, 5000);	
}

function keyMessageF1Link(){
	var firstline = 'Hi ' + links[index]?.contact_person + ',';
	var secondline = 'I noticed '+ links[index]?.company +' is hiring for '+ links[index]?.technical_recourse +'.';
	var thirdline = '‘'+ links[index]?.technical_recourse +'’ engineers?';
	var forthline = data[1] + ' ' + data[2];
	ncp.copy(firstline);
	setTimeout(() => {
		keyMessageF1NewLink();
	}, 1000);
}

function keyMessageF1NewLink(){
	var firstline = 'Hi ' + links[index]?.contact_person + ',';
	var secondline = 'I noticed '+ links[index]?.company +' is hiring for '+ links[index]?.technical_recourse +'.';
	var thirdline = '‘'+ links[index]?.technical_recourse +'’ engineers?';
	var forthline = data[1] + ' ' + data[2];
	robot.setKeyboardDelay(500);
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	ncp.copy(secondline+thirdline);
	setTimeout(() => {
		keyMessageF1NewOneLink();
	}, 1000);
}

function keyMessageF1NewOneLink(){
	var firstline = 'Hi ' + links[index]?.contact_person + ',';
	var secondline = 'I noticed '+ links[index]?.company +' is hiring for '+ links[index]?.technical_recourse +'.';
	var thirdline = '‘'+ links[index]?.technical_recourse +'’ engineers?';
	var forthline = data[1] + ' ' + data[2];
	robot.setKeyboardDelay(500);
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
    //robot.typeString(thirdline);
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	ncp.copy('Regards,');
	setTimeout(() => {
		keyMessageF1NewOneALink();
	}, 1000);
}

function keyMessageF1NewOneALink(){
	var firstline = 'Hi ' + links[index]?.contact_person + ',';
	var secondline = 'I noticed '+ links[index]?.company +' is hiring for '+ links[index]?.technical_recourse +'.';
	var thirdline = '‘'+ links[index]?.technical_recourse +'’ engineers?';
	var forthline = data[1] + ' ' + data[2];
	robot.setKeyboardDelay(500);
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
    //robot.typeString(thirdline);
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	ncp.copy(forthline);
	setTimeout(() => {
		keyMessageF1NewTwoLink();
	}, 1000);
}
 
function keyMessageF1NewTwoLink(){
	var firstline = 'Hi ' + links[index]?.contact_person + ',';
	var secondline = 'I noticed '+ links[index]?.company +' is hiring for '+ links[index]?.technical_recourse +'.';
	var thirdline = '‘'+ links[index]?.technical_recourse +'’ engineers?';
	var forthline = data[1] + ' ' + data[2];
	robot.setKeyboardDelay(500);
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	//robot.typeString('www.steadyrabbit.in');
	ncp.copy('www.steadyrabbit.in');
	setTimeout(() => {
		keyMessageF1NewThreeLink();
	}, 5000);
}

function keyMessageF1NewThreeLink(){
	var firstline = 'Hi ' + links[index]?.contact_person + ',';
	var secondline = 'I noticed '+ links[index]?.company +' is hiring for '+ links[index]?.technical_recourse +'.';
	var thirdline = '‘'+ links[index]?.technical_recourse +'’ engineers?';
	var forthline = data[1] + ' ' + data[2];
	robot.setKeyboardDelay(500);
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	//robot.typeString('www.steadyrabbit.in');
	setTimeout(() => {
		saveConnectiDataLink();
	}, 2000);
}

function saveConnectiDataLink(){
	const d = new Date();
	var month = d.getMonth() + 1;
	var datetosave = d.getFullYear() + "-" + month + "-" + d.getDate();
	var con = mysql.createConnection({
		user: 'root',
		password: 'Aa@12345',
		host: 'localhost',
		database: 'botdatabase'
	});
    con.connect(config, function (err){
		if(err) console.log(err);
		
		con.query('UPDATE links SET connection_sent = 1, connection_sent_date = "'+datetosave+'" WHERE links.id = ' + links[index]?.id, function (errq, recordset) {
			if(errq) console.log(errq);
		
		});
	});
	
	setTimeout(() => {
		openConsoleSendConnectLink();
	}, 2000);	
}



// end changeing function from here


function startSendConnect(){
	// robot.keyToggle('control','down');
    // robot.keyTap('u');
	// robot.keyToggle('control','up');

}

function openConsoleLogout(){
	// press ctrl Q
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
    robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	setTimeout(() => {
		moveToLogoutMenu();
	}, 1000);
	
}

function moveToLogoutMenu(){
	robot.setKeyboardDelay(1);
	ncp.copy('var index=0,icon_list=document.querySelectorAll(".global-nav__nav");icon_list.forEach(l=>{l.querySelectorAll("li").forEach((l,e)=>{l.querySelectorAll("div").forEach((l,e)=>{l.querySelectorAll("button").forEach((l,e)=>{console.log(l);var r=l.getAttribute("id");document.getElementById(r).click()})})})}),setTimeout(()=>{var l;document.querySelectorAll(".global-nav__secondary-items").forEach(l=>{console.log(l),l.querySelectorAll(".global-nav__secondary-item").forEach((l,e)=>{console.log(l),l.querySelectorAll("a").forEach((l,e)=>{"Sign Out"===l.textContent.trim()&&l.click()})})})},3e3);');;
	setTimeout(() => {
		clickSignout();
	}, 2000);
}

function clickSignout(){
	robot.keyToggle('control','down');
    robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		clickSignoutCloseConsole();
	}, 10000);
	
}

function clickSignoutCloseConsole(){
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
    robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	allusers.splice(0,1);
	setTimeout(() => {
		checkDatabaseContinue();
	}, 5000);
	
}
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