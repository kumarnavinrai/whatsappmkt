var robot = require("robotjs");
var ncp = require("copy-paste");
var ext = require("exit");
var mysql = require("mysql");
var txt = '';
var users = [];
var links = [];
var index = 0;
var data = [];

var config = {
	user: 'root',
	password: 'Aa@12345',
	host: 'localhost',
	database: 'botdatabase',
	port: 3306
};

var con = mysql.createConnection({
	user: 'root',
	password: 'Aa@12345',
	host: 'localhost',
	database: 'botdatabase'
});

// Speed up the mouse.
robot.setMouseDelay(2);

var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;
var x = 1190;
var y = 68;

function sendLinkToPreLoad(){
   var userData = ncp.paste();
   console.log("------------------------");
   //[ '2', 'Niharika', 'Niharika' ]
   data = userData.split(',');
   setTimeout(() => {
	sendLinkToPreLoadBkp();
   }, 4000);
}

function sendLinkToPreLoadBkp(){

	
	
    con.connect(config, function (err){
		if(err) console.log(err);

			    con.query('select * from links where user ='+ data[0] + ' AND connection_sent = 0', function (errql, recordsetl) {
					if(errql) console.log(errql);
					
					if(recordsetl?.length > 0){
						console.log(recordsetl);
						links = recordsetl;
							ncp.copy(links[0]?.profile_links);
							//ncp.copy("https://www.linkedin.com/in/navin-kumar-05958750");
							//ncp.copy("https://www.linkedin.com/in/eshan-cheema");
							
							con.query('UPDATE links SET started = 1 WHERE links.id = ' + links[0]?.id, function (errqn, recordsetn) {
								if(errqn) console.log(errqn);
							
							});
							
							setTimeout(() => {
								openLinkInWindow();
							}, 2000);
					}else{
						sendLinkToPreLoadContinue();
					}
				});

	});

}

function sendLinkToPreLoadContinue(){ 
	if(links[0] !== undefined){
		ncp.copy(links[0]?.profile_links);
		setTimeout(() => {
			openLinkInWindow();
		}, 2000);
	}else{
		console.log('linkedinlogout');
		con.query('update users set linksent = 1 where id ='+ data[0], function (errql, recordsetl) {
			if(errql) console.log(errql);
			setTimeout(() => {
				openConsoleLogoutA();
			}, 10000);
		
		});
		
	}
}


function openConsoleLogoutA(){
	// press ctrl Q
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
    robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	setTimeout(() => {
		moveToLogoutMenuA();
	}, 1000);
	
}

function moveToLogoutMenuA(){
	robot.setKeyboardDelay(1);
	ncp.copy('var index=0,icon_list=document.querySelectorAll(".global-nav__nav");icon_list.forEach(l=>{l.querySelectorAll("li").forEach((l,e)=>{l.querySelectorAll("div").forEach((l,e)=>{l.querySelectorAll("button").forEach((l,e)=>{console.log(l);var r=l.getAttribute("id");document.getElementById(r).click()})})})}),setTimeout(()=>{var l;document.querySelectorAll(".global-nav__secondary-items").forEach(l=>{console.log(l),l.querySelectorAll(".global-nav__secondary-item").forEach((l,e)=>{console.log(l),l.querySelectorAll("a").forEach((l,e)=>{"Sign Out"===l.textContent.trim()&&l.click()})})})},3e3);');;
	setTimeout(() => {
		clickSignoutA();
	}, 2000);
}

function clickSignoutA(){
	robot.keyToggle('control','down');
    robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		clickSignoutCloseConsoleA();
	}, 10000);
	
}

function clickSignoutCloseConsoleA(){
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
    robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	setTimeout(() => {
		startUserProcessAgain();
	}, 10000);
	
}

function startUserProcessAgain(){
	robot.keyToggle('control','down');
    robot.keyTap('1');
	robot.keyToggle('control','up');
}



sendLinkToPreLoad();

function openLinkInWindow(){
	// press ctrl Q
	robot.keyToggle('control','down');
    robot.keyTap('j');
	robot.keyToggle('control','up');
	setTimeout(() => {
		openConsole();
		//keyMessageF1();
	}, 30000);
	
}

function openConsole(){
	// press ctrl Q
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
    robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	setTimeout(() => {
		startConsoling();
	}, 5000);
	
}

function startConsoling(){
		robot.keyToggle('control','down');
		robot.keyTap('l');
		robot.keyToggle('control','up');
		robot.setKeyboardDelay(1);
		//ncp.copy('var connect_btn_present=0,index_btn_check=0,icon_list_btn_check=document.querySelectorAll(".pv-top-card-v2-ctas");icon_list_btn_check?.length>0&&icon_list_btn_check.forEach((e,t)=>{var n=e.querySelectorAll(".pvs-profile-actions");n?.length>0&&n.forEach((e,t)=>{var n=e.getElementsByTagName("div");if(n?.length>0){var c,l=n[0].getElementsByTagName("button");if(l?.length>0){var r,a=l[0],i=a.getElementsByTagName("span");if(i?.length>0&&"Connect"===i[0].innerHTML.trim()){var o=a.getAttribute("id");document.getElementById(o).click(),connect_btn_present=1}}}})});if(connect_btn_present === 0){var index=0,icon_list=document.querySelectorAll(".pvs-profile-actions__action");icon_list.forEach(e=>{"More actions"===e.getAttribute("aria-label")&&(index>0&&e.click(),index++)}),setTimeout(()=>{var e,t=0;document.querySelectorAll(".artdeco-dropdown__content-inner").forEach(e=>{t>0&&e.querySelectorAll("ul").forEach(e=>{e.querySelectorAll("li").forEach((e,t)=>{if(3===t){var l,r=e.getElementsByTagName("div")[0].getAttribute("id");document.getElementById(r).click()}})}),t++})},1e3);}');
		// working for connect underneath
		// ncp.copy('var connect_btn_present=0,index_btn_check=0,icon_list_btn_check=document.querySelectorAll(".pv-top-card-v2-ctas");if(icon_list_btn_check?.length>0&&icon_list_btn_check.forEach((e,t)=>{var r=e.querySelectorAll(".pvs-profile-actions");r?.length>0&&r.forEach((e,t)=>{var r=e.getElementsByTagName("div");if(r?.length>0){var c,n=r[0].getElementsByTagName("button");if(n?.length>0){var l,o=n[0],a=o.getElementsByTagName("span");if(a?.length>0&&"Connect"===a[0].innerHTML.trim()){var i=o.getAttribute("id");document.getElementById(i).click(),connect_btn_present=1}}}})}),0===connect_btn_present){var e,t=0;document.querySelectorAll(".pvs-profile-actions__action").forEach(e=>{"More actions"===e.getAttribute("aria-label")&&(t>0&&e.click(),t++)}),setTimeout(()=>{var e,t=0;document.querySelectorAll(".artdeco-dropdown__content-inner").forEach(e=>{t>0&&e.querySelectorAll("ul").forEach(e=>{e.querySelectorAll("li").forEach((e,t)=>{e.querySelectorAll("div").forEach((e,t)=>{var r=e,c=t,n=e.querySelectorAll("span").forEach((e,t)=>{var c;if("Connect"===e.childNodes[0].textContent){var n=r.getAttribute("id");document.getElementById(n).click()}})})})}),t++})},1e3)}');

		ncp.copy('var btn_present_pending=0,index_btn_check_pending=0,icon_list_btn_check_pending=document.querySelectorAll(".pv-top-card-v2-ctas");if(icon_list_btn_check_pending?.length>0&&icon_list_btn_check_pending.forEach((e,t)=>{var r=e.querySelectorAll(".pvs-profile-actions");r?.length>0&&r.forEach((e,t)=>{var r=e.querySelectorAll(".pvs-profile-actions__action");r?.length>0&&r.forEach((e,t)=>{var r=e.querySelectorAll(".artdeco-button");r?.length>0&&r.forEach((e,t)=>{var r=e.querySelectorAll(".artdeco-button__text");r?.length>0&&r.forEach((e,t)=>{"Pending"===e.textContent&&(console.log("Penging request"),btn_present_pending=1)})})})})}),0===btn_present_pending){var e=0,t=0,r=document.querySelectorAll(".pv-top-card-v2-ctas");r?.length>0&&r.forEach((t,r)=>{var n=t.querySelectorAll(".pvs-profile-actions");n?.length>0&&n.forEach((t,r)=>{var n=t.getElementsByTagName("div");if(n?.length>0){var l,c=n[0].getElementsByTagName("button");if(c?.length>0){var o,a=c[0],i=a.getElementsByTagName("span");if(i?.length>0&&"Connect"===i[0].innerHTML.trim()){var g=a.getAttribute("id");document.getElementById(g).click(),e=1}}}})})}if(0===e){var n,l=0;document.querySelectorAll(".pvs-profile-actions__action").forEach(e=>{"More actions"===e.getAttribute("aria-label")&&(l>0&&e.click(),l++)}),setTimeout(()=>{var e,t=0;document.querySelectorAll(".artdeco-dropdown__content-inner").forEach(e=>{t>0&&e.querySelectorAll("ul").forEach(e=>{e.querySelectorAll("li").forEach((e,t)=>{e.querySelectorAll("div").forEach((e,t)=>{var r=e,n=t,l=e.querySelectorAll("span").forEach((e,t)=>{var n;if("Connect"===e.childNodes[0].textContent){var l=r.getAttribute("id");document.getElementById(l).click()}})})})}),t++})},1e3)}');
		setTimeout(() => {
			pasteScriptA();
		}, 2000);
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
		modalConsolingOthersAndConnect();
	}, 5000);
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
		modalConsolingEmailCheck();
	}, 2000);
}

function modalConsolingEmailCheck(){
	robot.keyToggle('control','down');
	robot.keyTap('l');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	ncp.copy('var modal_message=document.querySelectorAll(".artdeco-modal__content");modal_message?.length>0&&modal_message.forEach((e,a)=>{console.log(e);var l=e.getElementsByTagName("label");if(l?.length>0){var t,o=l[0].getAttribute("for");console.log(o),"email"===o&&copy("skip this link")}});');
	setTimeout(() => {
		pasteScriptEmailCheck();
	}, 2000);
}

function pasteScriptEmailCheck(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	setTimeout(() => {
		checkWeShouldSkipOrNot();
	}, 5000);
}

function checkWeShouldSkipOrNot(){
	var check = ncp.paste();
	if(check === 'skip this link'){
		setTimeout(() => {
			clearConsoleSendConnect();
		}, 3000);
	}else{
		setTimeout(() => {
			modalConsolingOthers();
		}, 5000);
    }
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
		clearConsole();
	}, 5000);
}

function clearConsole(){
	// press ctrl Q
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	setTimeout(() => {
		typeMessage();
	}, 5000);
	
}

function typeMessage(){
	robot.setKeyboardDelay(500);
	robot.keyTap('tab');
	robot.setKeyboardDelay(500);
	setTimeout(() => {
		keyMessageF1();
	}, 5000);	
}

function keyMessageF1(){
	var firstline = 'Hi ' + links[0]?.contact_person + ',';
	var secondline = 'I noticed '+ links[0]?.company +' is hiring for '+ links[0]?.technical_recourse +'.';
	var thirdline = 'Would you be interested in an offshore technology partner who can help you with ‘'+ links[0]?.technical_recourse +'’ engineers?';
	var forthline = data[1] + ' ' + data[2];
	ncp.copy(firstline);
	setTimeout(() => {
		keyMessageF1New();
	}, 1000);
}

function keyMessageF1New(){
	var firstline = 'Hi ' + links[0]?.contact_person + ',';
	var secondline = 'I noticed '+ links[0]?.company +' is hiring for '+ links[0]?.technical_recourse +'.';
	var thirdline = 'Would you be interested in an offshore technology partner who can help you with ‘'+ links[0]?.technical_recourse +'’ engineers?';
	var forthline = data[1] + ' ' + data[2];
	robot.setKeyboardDelay(500);
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	ncp.copy(secondline);
	setTimeout(() => {
		keyMessageF1NewOneThird();
	}, 1000);
}

function keyMessageF1NewOneThird(){
	var thirdline = 'Would you be interested in an offshore technology partner who can help you with ‘'+ links[0]?.technical_recourse +'’ engineers?';
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
	ncp.copy(thirdline);
	setTimeout(() => {
		keyMessageF1NewOne();
	}, 1000);
}

function keyMessageF1NewOne(){
	var firstline = 'Hi ' + links[0]?.contact_person + ',';
	var secondline = 'I noticed '+ links[0]?.company +' is hiring for '+ links[0]?.technical_recourse +'.';
	var thirdline = 'Would you be interested in an offshore technology partner who can help you with ‘'+ links[0]?.technical_recourse +'’ engineers?';
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
		keyMessageF1NewOneA();
	}, 1000);
}

function keyMessageF1NewOneA(){
	var firstline = 'Hi ' + links[0]?.contact_person + ',';
	var secondline = 'I noticed '+ links[0]?.company +' is hiring for '+ links[0]?.technical_recourse +'.';
	var thirdline = '‘'+ links[0]?.technical_recourse +'’ engineers?';
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
		keyMessageF1NewTwo();
	}, 1000);
}
 
function keyMessageF1NewTwo(){
	var firstline = 'Hi ' + links[0]?.contact_person + ',';
	var secondline = 'I noticed '+ links[0]?.company +' is hiring for '+ links[0]?.technical_recourse +'.';
	var thirdline = '‘'+ links[0]?.technical_recourse +'’ engineers?';
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
		keyMessageF1NewThree();
	}, 5000);
}

function keyMessageF1NewThree(){
	var firstline = 'Hi ' + links[0]?.contact_person + ',';
	var secondline = 'I noticed '+ links[0]?.company +' is hiring for '+ links[0]?.technical_recourse +'.';
	var thirdline = '‘'+ links[0]?.technical_recourse +'’ engineers?';
	var forthline = data[1] + ' ' + data[2];
	robot.setKeyboardDelay(500);
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	//robot.typeString('www.steadyrabbit.in');
	setTimeout(() => {
		saveConnectiData();
	}, 2000);
}

function saveConnectiData(){
	const d = new Date();
	var month = d.getMonth() + 1;
	var datetosave = d.getFullYear() + "-" + month + "-" + d.getDate();
  
		
	con.query('UPDATE links SET connection_sent = 1, ended = 1, connection_sent_date = "'+datetosave+'" WHERE links.id = ' + links[0]?.id, function (errq, recordset) {
		if(errq) console.log(errq); 
	
	});
	
	
	setTimeout(() => {
		openConsoleSendConnect();
	}, 2000);	
}

function openConsoleSendConnect(){
	// press ctrl Q
	robot.keyToggle('control','down');
	robot.keyToggle('shift','down');
	robot.keyTap('i');
	robot.keyToggle('control','up');
	robot.keyToggle('shift','up');
	setTimeout(() => {
		modalConsolingSendConnect();
	}, 2000);
	
}

function modalConsolingSendConnect(){
	robot.keyToggle('control','down');
	robot.keyTap('l');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	ncp.copy('var modal_check_inside=0,modal_counter_inside=0,modal_search_inside=document.querySelectorAll(".artdeco-modal__actionbar");modal_search_inside?.length>0&&modal_search_inside.forEach((e,a)=>{var l=e.getElementsByTagName("button");if(l?.length>0)for(let t=0;t<l.length;t++){let i=l[t];var r=i.getAttribute("aria-label");if("Send now"===r){console.log(r),i.click();break}}});');
	setTimeout(() => {
		pasteScriptSendConnect();
	}, 2000);
}


function pasteScriptSendConnect(){
	robot.keyToggle('control','down');
	robot.keyTap('v');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(1);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
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
		backToLoggedInProfile();
	}, 5000);
	
}

function backToLoggedInProfile(){
	// press ctrl Q
	robot.keyToggle('control','down');
    robot.keyTap('j');
	robot.keyToggle('control','up');
	links.splice(0,1);
	setTimeout(() => {
		sendLinkToPreLoadContinue();
	}, 30000);
	
}

// function openConsoleLogout(){
// 	// press ctrl Q
// 	robot.keyToggle('control','down');
// 	robot.keyToggle('shift','down');
//     robot.keyTap('i');
// 	robot.keyToggle('control','up');
// 	robot.keyToggle('shift','up');
// 	setTimeout(() => {
// 		moveToLogoutMenu();
// 	}, 1000);
	
// }

// function moveToLogoutMenu(){
// 	robot.setKeyboardDelay(1);
// 	ncp.copy('var index=0,icon_list=document.querySelectorAll(".global-nav__nav");icon_list.forEach(l=>{l.querySelectorAll("li").forEach((l,e)=>{l.querySelectorAll("div").forEach((l,e)=>{l.querySelectorAll("button").forEach((l,e)=>{console.log(l);var r=l.getAttribute("id");document.getElementById(r).click()})})})}),setTimeout(()=>{var l;document.querySelectorAll(".global-nav__secondary-items").forEach(l=>{console.log(l),l.querySelectorAll(".global-nav__secondary-item").forEach((l,e)=>{console.log(l),l.querySelectorAll("a").forEach((l,e)=>{"Sign Out"===l.textContent.trim()&&l.click()})})})},3e3);');;
// 	setTimeout(() => {
// 		clickSignout();
// 	}, 2000);
// }

// function clickSignout(){
// 	robot.keyToggle('control','down');
//     robot.keyTap('v');
// 	robot.keyToggle('control','up');
// 	robot.setKeyboardDelay(1);
// 	robot.keyTap('enter');
// 	robot.setKeyboardDelay(500);
// 	robot.keyTap('enter');
// 	setTimeout(() => {
// 		clickSignoutCloseConsole();
// 	}, 10000);
	
// }

// function clickSignoutCloseConsole(){
// 	robot.keyToggle('control','down');
// 	robot.keyToggle('shift','down');
//     robot.keyTap('i');
// 	robot.keyToggle('control','up');
// 	robot.keyToggle('shift','up');
// 	allusers.splice(0,1);
// 	setTimeout(() => {
// 		checkDatabaseContinue();
// 	}, 5000);
	
// }

function moveToConnectLink(){
	x = 437;
	y = 635;
	robot.moveMouse(x, y);
	robot.mouseClick();
    setTimeout(() => {
		moveToOthers();
	}, 1000);
}

function moveToOthers(){
	x = 461;
	y = 227;
	robot.moveMouse(x, y);
	robot.mouseClick();
    setTimeout(() => {
		moveToConnectBtn();
	}, 500);
}

function moveToConnectBtn(){
	x = 886;
	y = 288;
	robot.moveMouse(x, y);
	robot.mouseClick();
    setTimeout(() => {
		addNotesBtn();
	}, 500);
}

function addNotesBtn(){
	x = 793;
	y = 206;
	robot.moveMouse(x, y);
	robot.mouseClick();
}

function moveToMore(){
	x = 395;
	y = 509;
	robot.moveMouse(x, y);
	robot.mouseClick();
	robot.keyToggle('control','down');
    robot.keyTap('l');
	robot.keyToggle('control','up');
	robot.setKeyboardDelay(500);
	robot.typeString('var obj = document.getElementsByClassName("member__profile");copy(obj?.length);');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	robot.setKeyboardDelay(500);
	robot.keyTap('enter');
	var eleExists = ncp.paste();
	console.log(eleExists);
 	if(parseInt(eleExists) > 0){
		robot.setKeyboardDelay(500);
		robot.typeString('var btn = document.getElementsByClassName("more-actions-btn");btn[0]?.click();');
		robot.setKeyboardDelay(500);
		robot.keyTap('enter');
	    robot.setKeyboardDelay(500);
	    robot.keyTap('enter');
		robot.setKeyboardDelay(500);
		robot.typeString('var icon_list = document.querySelectorAll(".body__banner-icon");icon_list.forEach(item => { if(item.parentNode.getAttribute("data-cie-control-urn") === "remove_account"){ item.parentNode.click(); } });');
		robot.setKeyboardDelay(500);
		robot.keyTap('enter');
	    robot.setKeyboardDelay(500);
	    robot.keyTap('enter'); 
				
	}

	setTimeout(() => {
		closeConsole();
	}, 500);
}

function closeConsole(){
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
	robot.typeString('swati.bhatnagar@search-value.com');
	setTimeout(() => {
		moveToPasswordTextBox();
	}, 500);
}

function moveToPasswordTextBox(){
	x = 540;
	y = 310;
	robot.moveMouse(x, y);
	robot.mouseClick();
	robot.typeString('Search@432');
	setTimeout(() => {
		moveToSignInButton();
	}, 500);
}


function moveToSignInButton(){
	x = 671;
	y = 416;
	robot.moveMouse(x, y);
	robot.mouseClick();
	setTimeout(() => {
		//moveToLogoutMenu();
	}, 10000);
}

function moveToLogoutMenu(){
	x = 1050;
	y = 66;
	robot.moveMouse(x, y);
	robot.mouseClick();
	setTimeout(() => {
		clickSignout();
	}, 1000);
}

function clickSignout(){
	x = 858;
	y = 472;
	robot.moveMouse(x, y);
	robot.mouseClick();
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