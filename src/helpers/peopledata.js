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
var desi = [];
var cforprofile = 0;
var linkdata = [];
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

    con.query('select * from sldatacollection where people = 0', function (errq, recordset) {
        if(errq) console.log(errq);
        console.log(recordset);

        if(recordset.length > 0){
			linkdata = recordset;
            //ncp.copy(sldata[0].link);
            for (let index = 0; index < recordset.length; index++) {
                sldata.push(recordset[index].job_link);
            }
            sldata = removeDuplicates(sldata);
        }
        sldata = removeItem(sldata, 'undefined');
        function removeDuplicates(arr) { return Array.from(new Set(arr)); }
        function removeItem(arr, item) { return arr.filter(el => el !== item); }
        ncp.copy(sldata[0]);
        setTimeout(() => {
            openLinkInWindowLinkNew();
        }, 2000);
    });


}

function moveToSalesNavigatorCont(){
	console.log(sldata[0]);
	if(sldata[0]){
		ncp.copy(sldata[0]);
		setTimeout(() => {
			openLinkInWindowLinkNew();
		}, 2000);
	}
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
        var scripttochange = 'var pageLi=document.querySelectorAll(".org-page-navigation__items");pageLi?.length>0&&pageLi.forEach((e,t)=>{var l=e.querySelectorAll("button");l?.length>0&&l.forEach((t,l)=>{t.click(),setTimeout(()=>{var l=e.querySelectorAll("div");l?.length>0&&l.forEach((e,l)=>{if(console.log(-1===parseInt(e.getAttribute("tabindex"))),-1===parseInt(e.getAttribute("tabindex"))){e.click();var r,i=e.childNodes[0].querySelectorAll("a");i?.length>0&&i.forEach((e,l)=>{"People"===e.textContent.trim()&&(e.click(),setTimeout(()=>{t.click()},1e3))})}})},1e3)})});';
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
	setTimeout(() => {
		startUsingScriptSrp();
	}, 4000);
}

function startUsingScriptSrp(){
	robot.keyToggle('control','down');
		robot.keyTap('l');
		robot.keyToggle('control','up');
		robot.setKeyboardDelay(1);
        var scripttochange = 'document.getElementById("people-search-keywords").scrollIntoView();';
		ncp.copy(scripttochange);
		setTimeout(() => {
			pasteScriptSrp();
		}, 2000);
}

function pasteScriptSrp(){
	//totalresultsfound
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	
	setTimeout(() => {
		moveToTextBox1();
	}, 4000);
}

function moveToTextBox1(){
	x = 794;
	y = 36;
	robot.moveMouse(x, y);
	robot.mouseClick();
	setTimeout(() => {
		moveToTextBox2();
	}, 500);
}

function moveToTextBox2(){
	x = 794;
	y = 36;
	robot.moveMouse(x, y);
	robot.mouseClick();
	setTimeout(() => {
		moveToTextBox3();
	}, 500);
}

function moveToTextBox3(){
	x = 794;
	y = 36;
	robot.moveMouse(x, y);
	robot.mouseClick();
	setTimeout(() => {
		moveToTextBox4();
	}, 500);
}

function moveToTextBox4(){
	x = 794;
	y = 36;
	robot.moveMouse(x, y);
	robot.mouseClick();
	setTimeout(() => {
		moveToTextBox5();
	}, 500);
}

function moveToTextBox5(){
	x = 794;
	y = 36;
	robot.moveMouse(x, y);
	robot.mouseClick();
	setTimeout(() => {
		clickTextBox();
	}, 500);
}

function clickTextBox(){
	x = 62;
	y = 249;
	robot.moveMouse(x, y);
	robot.mouseClick();
	robot.mouseClick();
	robot.mouseClick();
	robot.keyTap('backspace');
	setTimeout(() => {
		pasteDesignation();
	}, 500);
}

function pasteDesignation(){
	var tablename = 'designation';
	var size = linkdata[0].comments?linkdata[0].comments:linkdata[0].size;
	if(size.indexOf('11-50') != -1 || size.indexOf('1-10') != -1){
		tablename = 'designation';
	}else if(size.indexOf('51-200') != -1 || size.indexOf('201-500') != -1){
		tablename = 'designation51';
	}else {
		tablename = 'designation501';
	}

	if(desi?.length === 0){
		con.query('select * from ' + tablename + ' ORDER BY id asc', function (errq, recordset) {
			if(errq) console.log(errq);
			if(recordset?.length > 0){
				desi = recordset;
				ncp.copy(desi[0].title);
				setTimeout(() => {		
					pasteDesignationNow();
				}, 500);
			}
		});
	}else{
		ncp.copy(desi[0].title);
		setTimeout(() => {		
			pasteDesignationNow();
		}, 500);
	}
}

function pasteDesignationNow(){
		robot.keyToggle('control','down');
		robot.keyTap('v');
		robot.keyToggle('shift','up');
		robot.keyTap('enter');
		setTimeout(() => {
			closeConsoleOne();
		}, 2000);
}

function closeConsoleOne(){
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	setTimeout(() => {
		openConsoleOne();
	}, 2000);
}

function openConsoleOne(){
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	setTimeout(() => {
		startUsingScripten();
	}, 2000);
}

function startUsingScripten(){
	robot.keyToggle('control','down');
		robot.keyTap('l');
		robot.keyToggle('control','up');
		robot.setKeyboardDelay(1);
        var scripttochange = 'var pageLi=document.querySelectorAll(".org-grid__content-height-enforcer");pageLi?.length>0&&pageLi.forEach((e,r)=>{var t=e.querySelectorAll("h2");t?.length>0&&t.forEach((e,r)=>{var t=e.textContent.trim();-1!==t.indexOf("employees")&&copy((t=t.replace("employees","")).trim())})});';
		ncp.copy(scripttochange);
		setTimeout(() => {
			pasteScripten();
		}, 2000);
}

function pasteScripten(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		getEmployeesNumber();
	}, 2000);
}

function getEmployeesNumber(){
	var n = ncp.paste();
	if(parseInt(n) > 0){
		//get employee data
		setTimeout(() => {
			startUsingScriptCd();
		}, 2000);
	}else{
		setTimeout(() => {
			desi.splice(0,1);
			startUsingScriptCa();
		}, 2000);
	} 
}

function startUsingScriptCa(){
	robot.keyToggle('control','down');
	robot.keyTap('l');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	var scripttochange = 'var startele=document.getElementById("people-search-keywords"),divele=startele.parentElement,liele=divele.querySelectorAll("li");liele?.length>0&&liele.forEach((e,l)=>{var t=e.querySelectorAll("button");t?.length>0&&t.forEach((e,l)=>{"Clear all"===e.textContent.trim()&&e.click()})});';
	ncp.copy(scripttochange);
	setTimeout(() => {
		pasteScriptCa();
	}, 2000);
}

function pasteScriptCa(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		startUsingScriptSrp();
	}, 2000);
}

function startUsingScriptCd(){
	robot.keyToggle('control','down');
	robot.keyTap('l');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	var scripttochange = 'function removeDuplicates(e){return Array.from(new Set(e))}var data=[],liele=document.querySelectorAll(".org-grid__content-height-enforcer");liele?.length>0&&liele.forEach((e,r)=>{var l=e.querySelectorAll("li");l?.length>0&&l.forEach((r,l)=>{var t=e.querySelectorAll(".org-people-profile-card");t?.length>0&&t.forEach((e,r)=>{var l=e.querySelectorAll(".org-people-profile-card__profile-info");l?.length>0&&l.forEach((e,r)=>{var l=e.querySelectorAll(".artdeco-entity-lockup__content");l?.length>0&&l.forEach((e,r)=>{var l="";-1!==e.children[0].className.indexOf("artdeco-entity-lockup__title")&&(l=l+e.children[0].children[0].children[0].textContent.trim()+"*"+e.children[0].children[0].getAttribute("href")),-1!==e.children[2].className.indexOf("artdeco-entity-lockup__subtitle")&&(l=l+"*"+e.children[2].children[0].children[0].textContent.trim()),data.push(l)})})})})}),copy(removeDuplicates(data).join("$"));';
	ncp.copy(scripttochange);
	setTimeout(() => {
		pasteScriptCd();
	}, 2000);
}

function pasteScriptCd(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		profileDataProcess();
	}, 2000);
}

function profileDataProcess(){
	var d = ncp.paste();
	var darr = d.split('$');
	var name = '';
	var desig = '';
	var link = '';
	var tdata = [];
	var companyname = linkdata[0]?.name_of_company;
	//linkdata
	for (let index = 0; index < darr.length; index++) {
		tdata = darr[index].split('*');
		name = tdata[0];
		link = tdata[1];
		desig = tdata[2];
		console.log("------------------------");
		console.log(companyname);
		console.log(name);
		console.log(link);
		console.log(desig);
		cforprofile++;
		con.query("INSERT INTO linksdata(contact_person, designation, company, profile_links) VALUES ('"+name+"', '"+desig+"', '"+companyname+"', '"+link+"')", function (errq, recordset) {
            if(errq) console.log(errq);
           
        });
		con.query("UPDATE sldatacollection SET people = '4' WHERE sldatacollection.id = " + linkdata[0]?.id , function (errq, recordset) {
            if(errq) console.log(errq);
            
        });
	}

	setTimeout(() => {
		if(cforprofile >= 4){
			setTimeout(() => {
				desi = [];
				cforprofile = 0;
				linkdata.splice(0,1);
				sldata.splice(0,1);
				robot.keyToggle('control','down');
				robot.keyToggle('shift','down');
				robot.keyTap('i');
				robot.keyToggle('control','up');
				robot.keyToggle('shift','up');
				moveToSalesNavigatorCont();
			}, 2000);
			
		}else if(desi?.length <= 0){
			setTimeout(() => {
				desi = [];
				cforprofile = 0;
				linkdata.splice(0,1);
				sldata.splice(0,1);
				robot.keyToggle('control','down');
				robot.keyToggle('shift','down');
				robot.keyTap('i');
				robot.keyToggle('control','up');
				robot.keyToggle('shift','up');
				moveToSalesNavigatorCont();
			}, 2000);

		}else{
			setTimeout(() => {
				if(desi?.length > 0){
					desi?.splice(0,1);
				}
				startUsingScriptCa();
			}, 2000);
		}
	}, 2000);	
}

function clickTextBoxContinue(){
	x = 62;
	y = 249;
	robot.moveMouse(x, y);
	robot.mouseClick();
	setTimeout(() => {
    robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
		sldata.splice(0,1);
            moveToSalesNavigatorCont();
	}, 500);
}
//{ x: 62, y: 249 }

//{ x: 62, y: 249 }

function getLink(){
	var link = ncp.paste();
	console.log(link);
	setTimeout(() => {
        con.query("UPDATE sldatacollection SET people = '4' WHERE sldatacollection.id = " + linkdata[0]?.id , function (errq, recordset) {
            if(errq) console.log(errq);
            
        });
	}, 2000);
}

