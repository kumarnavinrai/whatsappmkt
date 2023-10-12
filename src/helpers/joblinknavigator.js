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
var totalresultsfound = 0;
var pagearray = [];
var pageindex = 1;
var noofpage = 0;
var sldata = [];
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

    con.query('select * from sldatacollection where used = 0', function (errq, recordset) {
        if(errq) console.log(errq);
        console.log(recordset);
        sldata = recordset;
        console.log(sldata[0].link);
        ncp.copy(sldata[0].link);
    });

	setTimeout(() => {
		openLinkInWindowLinkNew();
	}, 2000);
}

function moveToSalesNavigatorCont(){
    ncp.copy(sldata[0].link);
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
		openClipboardConsoleSr();
	}, 30000);
	
}

function openClipboardConsoleSr(){
	// press ctrl Q
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	setTimeout(() => {
		startUsingScriptSr();
	}, 5000);
}

function startUsingScriptSr(){
	robot.keyToggle('control','down');
		robot.keyTap('l');
		robot.keyToggle('control','up');
		robot.setKeyboardDelay(1);
        var scripttochange = 'var pageLi=document.querySelectorAll("li-icon");pageLi?.length>0&&pageLi.forEach((e,r)=>{"Open dropdown menu for more account actions"===e.getAttribute("aria-label")&&(e.parentElement.click(),setTimeout(()=>{var e=document.querySelectorAll(".artdeco-dropdown__content-inner");e?.length>0&&e.forEach((e,r)=>{var t=e.querySelectorAll("div");t?.length>0&&t.forEach((e,r)=>{"copy_li_url"===e.getAttribute("data-control-name")&&e.click()})})},1e3))});';
		ncp.copy(scripttochange);
		setTimeout(() => {
			pasteScriptSr();
		}, 2000);
}

function pasteScriptSr(){
	//totalresultsfound
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	setTimeout(() => {
		getLink();
	}, 7000);
}


function getLink(){
	var link = ncp.paste();
	console.log(link);
	setTimeout(() => {
        con.query("UPDATE sldatacollection SET job_link = '"+link+"', used = 1 WHERE sldatacollection.id = " + sldata[0]?.id, function (errq, recordset) {
            if(errq) console.log(errq);
            sldata.splice(0,1);
            moveToSalesNavigatorCont();
        });
	}, 2000);
}

