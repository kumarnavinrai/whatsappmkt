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


checkDatabase();
function checkDatabase(){

    con.connect(config, function (err){
		if(err) console.log(err);
		con.query('select * from settings', function (errq, recordset) {
			if(errq) console.log(errq);
			console.log(recordset);
			console.log(recordset[0].f3nod);
			dayspassedaftersendconnect = recordset[0].f3nod;
			dayswithdrawonnect = recordset[0].wnod;
		});
		con.query('select * from users where linksent = 0', function (errq, recordset) {
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
	}, 1000);
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
		sendLinkToPreLoadBkp();
	}, 10000);

}

// start changeing function from here

function sendLinkToPreLoadBkp(){
	
  
    con.query('select * from links where user ='+ allusers[0]?.id + ' AND f3_sent = 0 AND participate = 0 AND connection_accepted = 1 ORDER BY id ASC', function (errql, recordsetl) {
        if(errql) console.log(errql);
        
        if(recordsetl?.length > 0){
            console.log(recordsetl);
            links = recordsetl;
                ncp.copy(links[0]?.profile_links);
                //ncp.copy("https://www.linkedin.com/in/navin-kumar-05958750");
                //ncp.copy("https://www.linkedin.com/in/eshan-cheema");
                
                setTimeout(() => {
                    openLinkInWindowLink();
                }, 2000);
        }else{
            //sendLinkToPreLoadContinueLink();
			console.log("Links finished");
			con.query('UPDATE users SET linksent = 1 WHERE id ='+ allusers[0]?.id, function (errq, recordset) {
				if(errq) console.log(errq);
				openConsoleLogout();
			});
        }
    });

}

function sendLinkToPreLoadContinueLink(){
	if(links[0] !== undefined){
		ncp.copy(links[0]?.profile_links);
		setTimeout(() => {
			openLinkInWindowLink();
		}, 2000);
	}else{
		
		console.log("Links finished!");
		console.log('linkedinlogout');
		setTimeout(() => {
			con.query('UPDATE users SET linksent = 1 WHERE id ='+ allusers[0]?.id, function (errq, recordset) {
				if(errq) console.log(errq);
				openConsoleLogout();
			});
			// con.query('select * from links where user ='+ allusers[0]?.id + ' AND f1_sent = 0 ORDER BY id ASC', function (errql, recordsetl) {
			// 	if(errql) console.log(errql);
			// 	links = recordsetl;
            //     ncp.copy(links[0]?.profile_links);
            //     setTimeout(() => {
            //         openLinkInWindowLink();
            //     }, 2000);
			// });
		}, 1000);
		
	}
}

//check for any msg window start

function openLinkInWindowLink(){
	console.log("Links length now");
	console.log(links.length);
	// press ctrl Q
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
    robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	setTimeout(() => {
		checkForMsgDialog();
	}, 3000);
	
}

function checkForMsgDialog(){
	robot.keyToggle('control','down');
		robot.keyTap('l');
		robot.keyToggle('control','up');
		robot.setKeyboardDelay(1);

		ncp.copy('var icon_list=document.querySelectorAll(".msg-overlay-conversation-bubble");icon_list.length>0&&icon_list.forEach(e=>{if("dialog"===e.getAttribute("role")){var t;e.querySelectorAll(".artdeco-button__icon").forEach(e=>{"close"===e.getAttribute("type")&&e.parentNode.click()})}});');
		setTimeout(() => {
			pastecheckForMsgDialog();
		}, 2000);
}

function pastecheckForMsgDialog(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		checkpastecheckForMsgDialog();
	}, 2000);
}

function checkpastecheckForMsgDialog(){
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
    robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	ncp.copy(links[0]?.profile_links);
	setTimeout(() => {
		openLinkInWindowLinkNew();
	}, 2000);
}

//check for any msg window end

function openLinkInWindowLinkNew(){
	x = 113;
	y = 13;
	robot.moveMouse(x, y); 
	robot.mouseClick();
	// press ctrl Q
	robot.keyToggle('control','down');
    robot.keyTap('j');
	robot.keyToggle('control','up');
	setTimeout(() => {
		openConsoleLink();
		//keyMessageF1();
	}, 30000);
	
}

function openConsoleLink(){
	// press ctrl Q
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
    robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	setTimeout(() => {
		chechForConnectBtn();
	}, 5000);
	
}

//check for connect btn present at first start
function chechForConnectBtn(){
	robot.keyToggle('control','down');
		robot.keyTap('l');
		robot.keyToggle('control','up');
		robot.setKeyboardDelay(1);

		ncp.copy('var check_btn="",icon_list=document.querySelectorAll(".pv-top-card-v2-ctas");icon_list.length>0&&icon_list.forEach(t=>{var c;t.querySelectorAll(".artdeco-button__text").forEach(t=>{console.log(t),"Connect"===t.textContent.trim()&&(copy(check_btn="connect btn present"),t.parentNode.click())})});');
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
		checkMemForConnectBtn();
	}, 5000);
}

function checkMemForConnectBtn(){
	var check = ncp.paste();
	console.log("check of connect btn")
	console.log(check);
	if(check === "connect btn present"){
		setTimeout(() => {
			con.query('UPDATE links SET f3_sent = 1 WHERE links.id = ' + links[0]?.id, function (errq, recordset) {
				if(errq) console.log(errq);
			
			});
			clearConsoleSendConnect();
		}, 2000);
	}else{
		setTimeout(() => {
			startConsolingLink();
		}, 2000);
	}
}

//check for connect btn present at first end

function startConsolingLink(){
		robot.keyToggle('control','down');
		robot.keyTap('l');
		robot.keyToggle('control','up');
		robot.setKeyboardDelay(1);

		ncp.copy('var btn_present_pending=0,index_btn_check_pending=0,icon_list_btn_check_pending=document.querySelectorAll(".pv-top-card-v2-ctas");if(icon_list_btn_check_pending?.length>0&&icon_list_btn_check_pending.forEach((e,n)=>{var t=e.querySelectorAll(".pvs-profile-actions");t?.length>0&&t.forEach((e,n)=>{var t=e.querySelectorAll(".artdeco-button__text");t?.length>0&&t.forEach((e,n)=>{"Pending"===e.textContent.trim()&&(console.log("Penging request"),btn_present_pending=1),copy(1)})})}),0===btn_present_pending){copy(btn_present_pending);var e=document.querySelectorAll(".artdeco-dropdown__content");e?.length>0&&e.forEach((e,n)=>{var t=e.querySelectorAll("li");t?.length>0&&t.forEach((e,n)=>{var t=e.querySelectorAll("span");t?.length>0&&t.forEach((e,n)=>{"Connect"===e.textContent.trim()&&copy(1)})})})}');
		setTimeout(() => {
			pasteScriptALink();
		}, 2000);
}

function pasteScriptALink(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		checkConnectionAccepted();
	}, 5000);
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
	con.query('UPDATE links SET f3_sent = 1 WHERE links.id = ' + links[0]?.id, function (errq, recordset) {
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
	ncp.copy('var number_of_msg = 0,icon_list_btn_check_msg = document.querySelectorAll(".msg-s-message-list__event"); if(icon_list_btn_check_msg?.length>0){ icon_list_btn_check_msg.forEach((item,i) => {number_of_msg = icon_list_btn_check_msg?.length;if(parseInt(number_of_msg) > 3){ copy("Connection replied!") }}); }');
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
		
	con.query('UPDATE links SET f3_sent = 1, lead_responded = 1 WHERE links.id = ' + links[0]?.id, function (errq, recordset) {
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

	con.query("select * from msg where typemsg = 'f3'", function (errq, recordset) {
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
	con.query('UPDATE links SET f3_sent = 1 WHERE links.id = ' + links[0]?.id, function (errq, recordset) {
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