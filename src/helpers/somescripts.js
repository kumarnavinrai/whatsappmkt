const { copy } = require("copy-paste");

pvs-profile-actions__action
var obj = document.getElementById("ember548");obj.click();


var icon_list = document.querySelectorAll(".msg-overlay-conversation-bubble");
if(icon_list.length > 0){ 
    icon_list.forEach(item => {
        if(item.getAttribute("role") === "dialog"){
            var inner = item.querySelectorAll(".artdeco-button__icon");
            inner.forEach(itemnext => {
                if(itemnext.getAttribute("type") === "close"){
                    itemnext.parentNode.click()
                }
            });
        } 
    });
}

var check_btn="", icon_list = document.querySelectorAll(".pv-top-card-v2-ctas");
if(icon_list.length > 0){ 
    icon_list.forEach(item => {
            var inner = item.querySelectorAll(".artdeco-button__text");
            inner.forEach(itemnext => {
                console.log(itemnext);
                if(itemnext.textContent.trim() === "Connect"){
                    copy(check_btn="connect btn present")
                    itemnext.parentNode.click()
                }
            });
    });
}

var icon_list=document.querySelectorAll(".msg-overlay-conversation-bubble");icon_list.length>0&&icon_list.forEach(e=>{if("dialog"===e.getAttribute("role")){var t;e.querySelectorAll(".artdeco-button__icon").forEach(e=>{"close"===e.getAttribute("type")&&e.parentNode.click()})}});

var index = 0; var icon_list = document.querySelectorAll(".pvs-profile-actions__action");icon_list.forEach(item => { if(item.getAttribute("aria-label") === "More actions"){ if(index > 0) { item.click(); } index++; } });


var icon_list = document.querySelectorAll(".pvs-profile-actions__action");icon_list.forEach(item => { console.log(item); });

var obj = document.getElementById("ember548");obj.click();
if(obj === undefined){ var objn = document.getElementById("ember91");objn.click(); }


ember548
var objnext = document.getElementById("ember87");objnext.click();
artdeco-modal
var icon_list = document.querySelectorAll(".artdeco-modal");icon_list.forEach(item => { console.log(item); });

$("#ember91").click();$("#ember95").click();
$(".artdeco-dropdown__content-inner ul li:nth-child(4n)").click();

var j = $; var index = 0; var icon_list = document.querySelectorAll(".pvs-profile-actions__action");icon_list.forEach(item => { if(item.getAttribute("aria-label") === "More actions"){ if(index > 0) { item.click(); } index++; } });
setTimeout(() => {
    var inx = 0; var icon_list_next = document.querySelectorAll(".artdeco-dropdown__content-inner");icon_list_next.forEach(item => { if(inx > 0){ console.log(item.childNodes); } inx++; });  
}, 1000);

var inx = 0; var icon_list_next = document.querySelectorAll(".artdeco-dropdown__content-inner");icon_list_next.forEach(item => { if(inx > 0){ console.log(item); } });

var index = 0; var icon_list = document.querySelectorAll(".pvs-profile-actions__action");icon_list.forEach(item => { if(item.getAttribute("aria-label") === "More actions"){ if(index > 0) { item.click(); } index++; } });
setTimeout(() => {
    var inx = 0; var icon_list_next = document.querySelectorAll(".artdeco-dropdown__content-inner");icon_list_next.forEach(item => { if(inx > 0){ item.querySelectorAll("ul").forEach(itemnext => {
        itemnext.querySelectorAll("li").forEach((nextitem,i) => {
            if(i === 3){
                var connect_btn = nextitem.getElementsByTagName("div")[0];
                var id_of_btn = connect_btn.getAttribute("id"); 
                document.getElementById(id_of_btn).click();
            }
        })
    }); } inx++; });  
}, 1000);


var index = 0; var icon_list = document.querySelectorAll(".pvs-profile-actions__action");

var index_btn_check = 0; var icon_list_btn_check = document.querySelectorAll(".pvs-profile-actions__action"); console.log(icon_list_btn_check); if(icon_list_btn_check?.length>0){console.log(icon_list_btn_check[index_btn_check]);}


var connect_btn_present = 0; var index_btn_check = 0; var icon_list_btn_check = document.querySelectorAll(".artdeco-button__text"); if(icon_list_btn_check?.length>0){ icon_list_btn_check.forEach((item,i) => {  if( item.innerHTML.trim() === 'Connect'){  if(item.parentNode.getAttribute("aria-label").indexOf("Invite ") === 0){ if(index_btn_check > 0  && index_btn_check < 2){ item.parentNode.click(); connect_btn_present++; } index_btn_check++;} } }); }
if(connect_btn_present === 0){
    var index=0,icon_list=document.querySelectorAll(".pvs-profile-actions__action");icon_list.forEach(e=>{"More actions"===e.getAttribute("aria-label")&&(index>0&&e.click(),index++)}),setTimeout(()=>{var e,t=0;document.querySelectorAll(".artdeco-dropdown__content-inner").forEach(e=>{t>0&&e.querySelectorAll("ul").forEach(e=>{e.querySelectorAll("li").forEach((e,t)=>{if(3===t){var l,r=e.getElementsByTagName("div")[0].getAttribute("id");document.getElementById(r).click()}})}),t++})},1e3);
}

var connect_btn_present = 0; var index_btn_check = 0; var icon_list_btn_check = document.querySelectorAll(".artdeco-button__text"); if(icon_list_btn_check?.length>0){ icon_list_btn_check.forEach((item,i) => {  if( item.innerHTML.trim() === 'Connect'){  if(item.parentNode.getAttribute("aria-label").indexOf("Invite ") === 0){ if(index_btn_check > 0  && index_btn_check < 2){ item.parentNode.click(); connect_btn_present++; } index_btn_check++;} } }); }
if(connect_btn_present === 1){
    console.log("connect_btn_present")
}

var number_of_msg = 0,icon_list_btn_check_msg = document.querySelectorAll(".msg-s-message-list__event"); if(icon_list_btn_check_msg?.length>0){ icon_list_btn_check_msg.forEach((item,i) => {number_of_msg = icon_list_btn_check_msg?.length;if(parseInt(number_of_msg) > 1){ console.log("Connection replied!") }}); }

if(connect_btn_present === 1){
    console.log("connect_btn_present")
}
pvs-profile-actions 

var connect_btn_present = 0; var index_btn_check = 0; var icon_list_btn_check = document.querySelectorAll(".pv-top-card-v2-ctas"); if(icon_list_btn_check?.length>0){ icon_list_btn_check.forEach((item,i) => {  
    var cbp = item.querySelectorAll(".pvs-profile-actions");
        if(cbp?.length > 0){
            cbp.forEach((itemnext, z) => {
                var fcbp = itemnext.getElementsByTagName("div");
                if(fcbp?.length > 0){
                    var cnt_btn_div = fcbp[0];
                    var btn = cnt_btn_div.getElementsByTagName("button");
                    if(btn?.length > 0){
                        var btn_span = btn[0]; 
                        var span_btn = btn_span.getElementsByTagName("span");
                        if(span_btn?.length > 0){
                            var ctn_btn = span_btn[0];
                            if(ctn_btn.innerHTML.trim() === 'Connect'){
                                var id_ctn = btn_span.getAttribute("id");
                                document.getElementById(id_ctn).click(); 
                                connect_btn_present = 1;
                            }

                        }
                    }
                }  
            }); 
        }    

}); }


var connect_btn_present=0,index_btn_check=0,icon_list_btn_check=document.querySelectorAll(".pv-top-card-v2-ctas");icon_list_btn_check?.length>0&&icon_list_btn_check.forEach((e,t)=>{var n=e.querySelectorAll(".pvs-profile-actions");n?.length>0&&n.forEach((e,t)=>{var n=e.getElementsByTagName("div");if(n?.length>0){var c,l=n[0].getElementsByTagName("button");if(l?.length>0){var r,a=l[0],i=a.getElementsByTagName("span");if(i?.length>0&&"Connect"===i[0].innerHTML.trim()){var o=a.getAttribute("id");document.getElementById(o).click(),connect_btn_present=1}}}})});
if(connect_btn_present === 0){var index=0,icon_list=document.querySelectorAll(".pvs-profile-actions__action");icon_list.forEach(e=>{"More actions"===e.getAttribute("aria-label")&&(index>0&&e.click(),index++)}),setTimeout(()=>{var e,t=0;document.querySelectorAll(".artdeco-dropdown__content-inner").forEach(e=>{t>0&&e.querySelectorAll("ul").forEach(e=>{e.querySelectorAll("li").forEach((e,t)=>{if(3===t){var l,r=e.getElementsByTagName("div")[0].getAttribute("id");document.getElementById(r).click()}})}),t++})},1e3);}


artdeco-modal__actionbar

var modal_check = 0; var modal_counter = 0; var modal_search = document.querySelectorAll(".artdeco-modal__actionbar"); if(modal_search?.length>0){ modal_search.forEach((item,i) => {  
    var div_in_modal = item.getElementsByTagName("button");
    if(div_in_modal?.length > 0){
        var btn_span = div_in_modal[0];
        var span_btn = btn_span.getElementsByTagName("span");
        if(span_btn?.length > 0){
            var ctn_btn = span_btn[0];
            if(ctn_btn.innerHTML.trim() === 'Add a note'){
                console.log("add note exista");
                var id_ctn = btn_span.getAttribute("id");
                console.log(id_ctn);
                document.getElementById(id_ctn).click();
            }
        }    
    }
}); }

var modal_check = 0; var modal_counter = 0; var modal_search = document.querySelectorAll(".artdeco-modal__actionbar"); if(modal_search?.length>0){ modal_search.forEach((item,i) => {  
    var div_in_modal = item.getElementsByTagName("button");
    if(div_in_modal?.length > 0){
        var btn_span = div_in_modal[0];
        var span_btn = btn_span.getElementsByTagName("span");
        if(span_btn?.length > 0){
            var ctn_btn = span_btn[0];
            if(ctn_btn.innerHTML.trim() === 'Connect'){
                console.log("Connect ....");
                var id_ctn = btn_span.getAttribute("id");
                console.log(id_ctn);
                document.getElementById(id_ctn).click();
            }
        }    
    }
}); }


artdeco-modal__content

var modal_message = document.querySelectorAll(".artdeco-modal__content"); if(modal_message?.length>0){ modal_message.forEach((item,i) => {  
    var div_in_modal = item.getElementsByTagName("button");
    if(div_in_modal?.length > 0){
        var btn_span = div_in_modal[0];
        var span_btn = btn_span.getElementsByTagName("span");
        if(span_btn?.length > 0){
            var ctn_btn = span_btn[0];
            if(ctn_btn.innerHTML.trim() === 'Add a note'){
                console.log("add note exista");
                var id_ctn = btn_span.getAttribute("id");
                console.log(id_ctn);
                document.getElementById(id_ctn).click();
            }
        }    
    }
}); }


var modal_message = document.querySelectorAll(".artdeco-modal__content"); if(modal_message?.length>0){ modal_message.forEach((item,i) => {  
    var label_in_modal = item.getElementsByTagName("label");
    if(label_in_modal?.length > 0){
      console.log(label_in_modal);   
    }
}); }


var modal_message = document.querySelectorAll(".artdeco-modal__content"); if(modal_message?.length>0){ modal_message.forEach((item,i) => {  
    console.log(item);
    var lbl_modal = item.getElementsByTagName("label");
    if(lbl_modal?.length > 0){
        var lbl_first = lbl_modal[0];
        var id_to_cm = lbl_first.getAttribute("for");
        console.log(id_to_cm);
        if( id_to_cm === 'email'){
                copy("skip this link");    
        } 
    }
}); }

document.getElementById("custom-message");

var modal_message=document.querySelectorAll(".artdeco-modal__content");modal_message?.length>0&&modal_message.forEach((e,a)=>{console.log(e);var l=e.getElementsByTagName("label");if(l?.length>0){var t,o=l[0].getAttribute("for");console.log(o),"email"===o&&setTimeout(()=>{copy("skip this link")},100)}});


var modal_check = 0; var modal_counter = 0; var modal_search = document.querySelectorAll(".artdeco-modal__actionbar"); if(modal_search?.length>0){ modal_search.forEach((item,i) => {  
    console.log(item);
    var div_in_modal = item.getElementsByTagName("button");
    if(div_in_modal?.length > 0){
        var btn_span = div_in_modal[0];
        var span_btn = btn_span.getElementsByTagName("span");
        if(span_btn?.length > 0){
            var ctn_btn = span_btn[0];
            console.log(ctn_btn);
            if(ctn_btn.innerHTML.trim() === 'Connect'){
                console.log("Connect ....");
                var id_ctn = btn_span.getAttribute("id");
                console.log(id_ctn);
                document.getElementById(id_ctn).click();
            }
        }    
    }
}); }


var modal_check_inside = 0; var modal_counter_inside = 0; var modal_search_inside = document.querySelectorAll(".artdeco-modal__content"); if(modal_search_inside?.length>0){ modal_search_inside.forEach((item,i) => {
    var div_in_modal_inside = item.getElementsByTagName("button");
        if(div_in_modal_inside?.length > 0){
            for (let index_inside = 0; index_inside < div_in_modal_inside.length; index_inside++) {
                const element_inside = div_in_modal_inside[index_inside];
                var id_ctn_inside = element_inside.getAttribute("aria-label");
                if(id_ctn_inside === 'Other'){
                    console.log(id_ctn_inside);
                    element_inside.click();
                    break;
                }
            }
        }    
}); }


//sensing others and on connect
var modal_check = 0; var modal_counter = 0; var modal_search = document.querySelectorAll(".artdeco-modal__actionbar"); if(modal_search?.length>0){ modal_search.forEach((item,i) => {  
    var div_in_modal = item.getElementsByTagName("button");
    if(div_in_modal?.length > 0){
        var btn_span = div_in_modal[0];
        var span_btn = btn_span.getElementsByTagName("span");
        if(span_btn?.length > 0){
            var ctn_btn = span_btn[0];
            if(ctn_btn.innerHTML.trim() === 'Connect'){
                console.log("Connect ....");
                var id_ctn = btn_span.getAttribute("id");
                console.log(id_ctn);
                //document.getElementById(id_ctn).click();
                //checking others start
                var modal_check_inside = 0; var modal_counter_inside = 0; var modal_search_inside = document.querySelectorAll(".artdeco-modal__content"); if(modal_search_inside?.length>0){ modal_search_inside.forEach((item,i) => {
                    var div_in_modal_inside = item.getElementsByTagName("button");
                        if(div_in_modal_inside?.length > 0){
                            for (let index_inside = 0; index_inside < div_in_modal_inside.length; index_inside++) {
                                const element_inside = div_in_modal_inside[index_inside];
                                var id_ctn_inside = element_inside.getAttribute("aria-label");
                                if(id_ctn_inside === 'Other'){
                                    console.log(id_ctn_inside);
                                    element_inside.click();
                                    document.getElementById(id_ctn).click();
                                    break;
                                }
                            }
                        }    
                }); }
                //checking others end
            }
        }    
    }
}); }

var modal_check=0,modal_counter=0,modal_search=document.querySelectorAll(".artdeco-modal__actionbar");modal_search?.length>0&&modal_search.forEach((e,t)=>{var a=e.getElementsByTagName("button");if(a?.length>0){var l,r=a[0],o=r.getElementsByTagName("span");if(o?.length>0&&"Connect"===o[0].innerHTML.trim()){console.log("Connect ....");var n=r.getAttribute("id");console.log(n);var c=0,g=0,m=document.querySelectorAll(".artdeco-modal__content");m?.length>0&&m.forEach((e,t)=>{var a=e.getElementsByTagName("button");if(a?.length>0)for(let l=0;l<a.length;l++){let r=a[l];var o=r.getAttribute("aria-label");if("Other"===o){console.log(o),r.click(),document.getElementById(n).click();break}}})}}});


//sensing send and on send connect
var modal_check = 0; var modal_counter = 0; var modal_search = document.querySelectorAll(".artdeco-modal__actionbar"); if(modal_search?.length>0){ modal_search.forEach((item,i) => {  
    var div_in_modal = item.getElementsByTagName("button");
    if(div_in_modal?.length > 0){
        var btn_span = div_in_modal[0];
        var span_btn = btn_span.getElementsByTagName("span");
        if(span_btn?.length > 0){
            var ctn_btn = span_btn[0];
            if(ctn_btn.innerHTML.trim() === 'Connect'){
                console.log("Connect ....");
                var id_ctn = btn_span.getAttribute("id");
                console.log(id_ctn);
                //document.getElementById(id_ctn).click();

            }
        }    
    }
}); }


                //checking others start
                var modal_check_inside = 0; var modal_counter_inside = 0; var modal_search_inside = document.querySelectorAll(".artdeco-modal__actionbar"); if(modal_search_inside?.length>0){ modal_search_inside.forEach((item,i) => {
                    var div_in_modal_inside = item.getElementsByTagName("button");
                        if(div_in_modal_inside?.length > 0){
                            for (let index_inside = 0; index_inside < div_in_modal_inside.length; index_inside++) {
                                const element_inside = div_in_modal_inside[index_inside];
                                var id_ctn_inside = element_inside.getAttribute("aria-label");
                                if(id_ctn_inside === 'Send now'){
                                    console.log(id_ctn_inside);
                                    element_inside.click();
                                    break;
                                }
                            }
                        }    
                }); }
                //checking others end

                var modal_check_inside=0,modal_counter_inside=0,modal_search_inside=document.querySelectorAll(".artdeco-modal__actionbar");modal_search_inside?.length>0&&modal_search_inside.forEach((e,a)=>{var l=e.getElementsByTagName("button");if(l?.length>0)for(let t=0;t<l.length;t++){let i=l[t];var r=i.getAttribute("aria-label");if("Send now"===r){console.log(r),i.click();break}}});

//sensing your connection accepted or not
var connect_btn_present = 0,
    index_btn_check = 0,
    icon_list_btn_check = document.querySelectorAll(".pv-top-card-v2-ctas");
icon_list_btn_check?.length > 0 &&
    icon_list_btn_check.forEach((e, t) => {
        var n = e.querySelectorAll(".pvs-profile-actions");
        n?.length > 0 &&
            n.forEach((e, t) => {
                var n = e.getElementsByTagName("div");
                if (n?.length > 0) {
                    var c,
                        l = n[0].getElementsByTagName("button");
                    if (l?.length > 0) {
                        var r,
                            a = l[0],
                            i = a.getElementsByTagName("span");
                        if (i?.length > 0 && "Connect" === i[0].innerHTML.trim()) {
                            var o = a.getAttribute("id");
                            document.getElementById(o).click(), (connect_btn_present = 1);
                        }
                    }
                }
            });
    });
if (connect_btn_present === 0) {
    var index = 0,
        icon_list = document.querySelectorAll(".pvs-profile-actions__action");
    icon_list.forEach((e) => {
        "More actions" === e.getAttribute("aria-label") && (index > 0 && e.click(), index++);
    }),
        setTimeout(() => {
            var e,
                t = 0;
            document.querySelectorAll(".artdeco-dropdown__content-inner").forEach((e) => {
                t > 0 &&
                    e.querySelectorAll("ul").forEach((e) => {
                        e.querySelectorAll("li").forEach((e, t) => {
                            if (3 === t) {
                                var l,
                                    r = e.getElementsByTagName("div")[0].getAttribute("id");
                                document.getElementById(r).click();
                            }
                        });
                    }),
                    t++;
            });
        }, 1e3);
}
 



//////////////////////


var btn_present_pending = 0,
    index_btn_check_pending = 0,
    icon_list_btn_check_pending = document.querySelectorAll(".pv-top-card-v2-ctas");
    icon_list_btn_check_pending?.length > 0 &&
    icon_list_btn_check_pending.forEach((e, t) => {
        var n = e.querySelectorAll(".pvs-profile-actions");
        n?.length > 0 &&
            n.forEach((e, t) => {
                var z = e.querySelectorAll(".pvs-profile-actions__action");
                 if (z?.length > 0) {
                    z.forEach((x, y) => {
                        var p = x.querySelectorAll(".artdeco-button");
                        if (p?.length > 0) {
                            p.forEach((q, r) => {
                                var t = q.querySelectorAll(".artdeco-button__text");
                                if (t?.length > 0) {
                                    t.forEach((v, w) => {
                                        if(v.textContent==='Pending'){
                                            console.log("Penging request");
                                            btn_present_pending = 1;
                                        }
                                    });
                                }
                            });
                        }
                    });
                 }
            });
    });

if(btn_present_pending === 0){
    var connect_btn_present = 0,
        index_btn_check = 0,
        icon_list_btn_check = document.querySelectorAll(".pv-top-card-v2-ctas");
    icon_list_btn_check?.length > 0 &&
        icon_list_btn_check.forEach((e, t) => {
            var n = e.querySelectorAll(".pvs-profile-actions");
            n?.length > 0 &&
                n.forEach((e, t) => {
                    var n = e.getElementsByTagName("div");
                    if (n?.length > 0) {
                        var c,
                            l = n[0].getElementsByTagName("button");
                        if (l?.length > 0) {
                            var r,
                                a = l[0],
                                i = a.getElementsByTagName("span");
                            if (i?.length > 0 && "Connect" === i[0].innerHTML.trim()) {
                                var o = a.getAttribute("id");
                                document.getElementById(o).click(), (connect_btn_present = 1);
                            }
                        }
                    }
                });
        });
}    
if (connect_btn_present === 0) {
    var index = 0,
    icon_list = document.querySelectorAll(".pvs-profile-actions__action");
    icon_list.forEach((e) => {
    "More actions" === e.getAttribute("aria-label") && (index > 0 && e.click(), index++);
    }),
    setTimeout(() => {
        var e,
            t = 0;
        document.querySelectorAll(".artdeco-dropdown__content-inner").forEach((e) => {
            t > 0 &&
                e.querySelectorAll("ul").forEach((e) => {
                    e.querySelectorAll("li").forEach((e, t) => {
                        e.querySelectorAll("div").forEach((e, t) => {
                            var divele = e;
                            var divindx = t;
                            var s = e.querySelectorAll("span").forEach((e, t) => {
                                var check = e.childNodes[0];
                                    if(check.textContent === 'Connect'){
                                    var r = divele.getAttribute("id");
                                    document.getElementById(r).click();
                                }
                            });    
                        });
                    });
                }),
                t++;
        });
    }, 1e3);
}


var index = 0,
icon_list = document.querySelectorAll(".pvs-profile-actions__action");
icon_list.forEach((e) => {
"More actions" === e.getAttribute("aria-label") && (index > 0 && e.click(), index++);
}),
setTimeout(() => {
    var e,
        t = 0;
    document.querySelectorAll(".artdeco-dropdown__content-inner").forEach((e) => {
        t > 0 &&
            e.querySelectorAll("ul").forEach((e) => {
                e.querySelectorAll("li").forEach((e, t) => {
                    e.querySelectorAll("div").forEach((e, t) => {
                        var divele = e;
                        var divindx = t;
                        var s = e.querySelectorAll("span").forEach((e, t) => {
                            var check = e.childNodes[0];
                                if(check.textContent === 'Connect'){
                                var r = divele.getAttribute("id");
                                document.getElementById(r).click();
                            }
                        });    
                    });
                });
            }),
            t++;
    });
}, 1e3);

var connect_btn_present=0,index_btn_check=0,icon_list_btn_check=document.querySelectorAll(".pv-top-card-v2-ctas");if(icon_list_btn_check?.length>0&&icon_list_btn_check.forEach((e,t)=>{var r=e.querySelectorAll(".pvs-profile-actions");r?.length>0&&r.forEach((e,t)=>{var r=e.getElementsByTagName("div");if(r?.length>0){var c,n=r[0].getElementsByTagName("button");if(n?.length>0){var l,o=n[0],a=o.getElementsByTagName("span");if(a?.length>0&&"Connect"===a[0].innerHTML.trim()){var i=o.getAttribute("id");document.getElementById(i).click(),connect_btn_present=1}}}})}),0===connect_btn_present){var e,t=0;document.querySelectorAll(".pvs-profile-actions__action").forEach(e=>{"More actions"===e.getAttribute("aria-label")&&(t>0&&e.click(),t++)}),setTimeout(()=>{var e,t=0;document.querySelectorAll(".artdeco-dropdown__content-inner").forEach(e=>{t>0&&e.querySelectorAll("ul").forEach(e=>{e.querySelectorAll("li").forEach((e,t)=>{e.querySelectorAll("div").forEach((e,t)=>{var r=e,c=t,n=e.querySelectorAll("span").forEach((e,t)=>{var c;if("Connect"===e.childNodes[0].textContent){var n=r.getAttribute("id");document.getElementById(n).click()}})})})}),t++})},1e3)}



var index = 0,
icon_list = document.querySelectorAll(".global-nav__nav");
icon_list.forEach((e) => {
"More actions" === e.getAttribute("aria-label") && (index > 0 && e.click(), index++);
}),
setTimeout(() => {
    var e,
        t = 0;
    document.querySelectorAll(".artdeco-dropdown__content-inner").forEach((e) => {
        t > 0 &&
            e.querySelectorAll("ul").forEach((e) => {
                e.querySelectorAll("li").forEach((e, t) => {
                    e.querySelectorAll("div").forEach((e, t) => {
                        var divele = e;
                        var divindx = t;
                        var s = e.querySelectorAll("span").forEach((e, t) => {
                            var check = e.childNodes[0];
                                if(check.textContent === 'Connect'){
                                var r = divele.getAttribute("id");
                                document.getElementById(r).click();
                            }
                        });    
                    });
                });
            }),
            t++;
    });
}, 1e3);

var index = 0,
icon_list = document.querySelectorAll(".global-nav__nav");
icon_list.forEach((item) => {
    item.querySelectorAll("li").forEach((itemnext, i) => {
        itemnext.querySelectorAll("div").forEach((itemnextnew, i) => {
            itemnextnew.querySelectorAll("button").forEach((itemnextnewnew, i) => {
                console.log(itemnextnewnew);
                var idtoclick = itemnextnewnew.getAttribute("id");
                document.getElementById(idtoclick).click();
            });
        });
    });
});setTimeout(() => {
    var icon_list_new = document.querySelectorAll(".global-nav__secondary-items");
    icon_list_new.forEach((item) => {
            console.log(item);
        item.querySelectorAll(".global-nav__secondary-item").forEach((itemnext, i) => {
            console.log(itemnext);
            itemnext.querySelectorAll("a").forEach((itemnextnew, i) => {
                if(itemnextnew.textContent.trim() === 'Sign Out'){
                    itemnextnew.click();
                }
            });
        });
    });
}, 3000);

setTimeout(() => {
    debugger;
}, 5000);


var index=0,icon_list=document.querySelectorAll(".global-nav__nav");icon_list.forEach(l=>{l.querySelectorAll("li").forEach((l,e)=>{l.querySelectorAll("div").forEach((l,e)=>{l.querySelectorAll("button").forEach((l,e)=>{console.log(l);var r=l.getAttribute("id");document.getElementById(r).click()})})})}),setTimeout(()=>{var l;document.querySelectorAll(".global-nav__secondary-items").forEach(l=>{console.log(l),l.querySelectorAll(".global-nav__secondary-item").forEach((l,e)=>{console.log(l),l.querySelectorAll("a").forEach((l,e)=>{"Sign Out"===l.textContent.trim()&&l.click()})})})},3e3);





var btn_present_pending = 0,
    index_btn_check_pending = 0,
    icon_list_btn_check_pending = document.querySelectorAll(".pv-top-card-v2-ctas");
if (icon_list_btn_check_pending?.length > 0) {
        icon_list_btn_check_pending.forEach((e, t) => {
            var r = e.querySelectorAll(".pvs-profile-actions");
            r?.length > 0 &&
                r.forEach((e, t) => {
                    var r = e.querySelectorAll(".pvs-profile-actions__action");
                    r?.length > 0 &&
                        r.forEach((e, t) => {
                            var r = e.querySelectorAll(".artdeco-button");
                            r?.length > 0 &&
                                r.forEach((e, t) => {
                                    var r = e.querySelectorAll(".artdeco-button__text");
                                    r?.length > 0 &&
                                        r.forEach((e, t) => {
                                            "Pending" === e.textContent && (console.log("Penging request"), (btn_present_pending = 1));
                                        });
                                });
                        });
                });
        });
}
if(btn_present_pending === 0){
    var icon_list_btn_check_msg = document.querySelectorAll(".pv-top-card-v2-ctas");
    if (icon_list_btn_check_msg?.length > 0) {
            icon_list_btn_check_msg.forEach((e, t) => {
                var r = e.querySelectorAll(".pvs-profile-actions");
                r?.length > 0 &&
                    r.forEach((e, t) => {
                        var r = e.querySelectorAll(".pvs-profile-actions__action");
                        r?.length > 0 &&
                            r.forEach((e, t) => {
                                if(e.getAttribute('role') === 'button' && e.textContent.trim() === 'Message'){
                                    e.click();
                                }
                            });
                    });
            });
    }
}


var icon_list_btn_check_msg = document.querySelectorAll(".pv-top-card-v2-ctas");
if (icon_list_btn_check_msg?.length > 0) {
        icon_list_btn_check_msg.forEach((e, t) => {
            var r = e.querySelectorAll(".pvs-profile-actions");
            r?.length > 0 &&
                r.forEach((e, t) => {
                    var r = e.querySelectorAll(".pvs-profile-actions__action");
                    r?.length > 0 &&
                        r.forEach((e, t) => {
                            if(e.getAttribute('role') === 'button' && e.textContent.trim() === 'Message'){
                                e.click();
                            }
                        });
                });
        });
}




var btn_present_pending = 0,
    index_btn_check_pending = 0,
    icon_list_btn_check_pending = document.querySelectorAll(".pv-top-card-v2-ctas");
if (
    (icon_list_btn_check_pending?.length > 0 &&
        icon_list_btn_check_pending.forEach((e, t) => {
            var r = e.querySelectorAll(".pvs-profile-actions");
            r?.length > 0 &&
                r.forEach((e, t) => {
                    var r = e.querySelectorAll(".pvs-profile-actions__action");
                    r?.length > 0 &&
                        r.forEach((e, t) => {
                            var r = e.querySelectorAll(".artdeco-button");
                            r?.length > 0 &&
                                r.forEach((e, t) => {
                                    var r = e.querySelectorAll(".artdeco-button__text");
                                    r?.length > 0 &&
                                        r.forEach((e, t) => {
                                            "Pending" === e.textContent && (console.log("Penging request"), (btn_present_pending = 1));
                                        });
                                });
                        });
                });
        }),
    0 === btn_present_pending)
) {
    var e = 0,
        t = 0,
        r = document.querySelectorAll(".pv-top-card-v2-ctas");
    r?.length > 0 &&
        r.forEach((t, r) => {
            var n = t.querySelectorAll(".pvs-profile-actions");
            n?.length > 0 &&
                n.forEach((t, r) => {
                    var n = t.getElementsByTagName("div");
                    if (n?.length > 0) {
                        var l,
                            c = n[0].getElementsByTagName("button");
                        if (c?.length > 0) {
                            var o,
                                a = c[0],
                                i = a.getElementsByTagName("span");
                            if (i?.length > 0 && "Connect" === i[0].innerHTML.trim()) {
                                var g = a.getAttribute("id");
                                document.getElementById(g).click(), (e = 1);
                            }
                        }
                    }
                });
        });
}
if (0 === e) {
    var n,
        l = 0;
    document.querySelectorAll(".pvs-profile-actions__action").forEach((e) => {
        "More actions" === e.getAttribute("aria-label") && (l > 0 && e.click(), l++);
    }),
        setTimeout(() => {
            var e,
                t = 0;
            document.querySelectorAll(".artdeco-dropdown__content-inner").forEach((e) => {
                t > 0 &&
                    e.querySelectorAll("ul").forEach((e) => {
                        e.querySelectorAll("li").forEach((e, t) => {
                            e.querySelectorAll("div").forEach((e, t) => {
                                var r = e,
                                    n = t,
                                    l = e.querySelectorAll("span").forEach((e, t) => {
                                        var n;
                                        if ("Connect" === e.childNodes[0].textContent) {
                                            var l = r.getAttribute("id");
                                            document.getElementById(l).click();
                                        }
                                    });
                            });
                        });
                    }),
                    t++;
            });
        }, 1e3);
}


icon_list_btn_check_pending?.length > 0 &&
        icon_list_btn_check_pending.forEach((e, t) => {
            var n = e.querySelectorAll(".pvs-profile-actions");
            n?.length > 0 &&
                n.forEach((e, t) => {
                    var n = e.querySelectorAll(".pvs-profile-actions__action");
                    n?.length > 0 &&
                        n.forEach((e, t) => {
                            var n = e.querySelectorAll(".artdeco-button");
                            n?.length > 0 &&
                                n.forEach((e, t) => {
                                    var n = e.querySelectorAll(".artdeco-button__text");
                                    n?.length > 0 &&
                                        n.forEach((e, t) => {
                                            "Pending" === e.textContent && (console.log("Penging request"), (btn_present_pending = 1),(copy(1)));
                                        });
                                });
                        });
                });
        })


var btn_present_pending = 0,
    index_btn_check_pending = 0,
    icon_list_btn_check_pending = document.querySelectorAll(".pv-top-card-v2-ctas");
if (
    (icon_list_btn_check_pending?.length > 0 &&
        icon_list_btn_check_pending.forEach((e, t) => {
            var n = e.querySelectorAll(".pvs-profile-actions");
            n?.length > 0 &&
                n.forEach((e, t) => {
                    var n = e.querySelectorAll(".pvs-profile-actions__action");
                    n?.length > 0 &&
                        n.forEach((e, t) => {
                            var n = e.querySelectorAll(".artdeco-button");
                            n?.length > 0 &&
                                n.forEach((e, t) => {
                                    var n = e.querySelectorAll(".artdeco-button__text");
                                    n?.length > 0 &&
                                        n.forEach((e, t) => {
                                            "Pending" === e.textContent && (console.log("Penging request"), (btn_present_pending = 1),(copy(1)));
                                        });
                                });
                        });
                });
        }),
    0 === btn_present_pending)
) {
    copy(btn_present_pending);var e = document.querySelectorAll(".artdeco-dropdown__content");
    e?.length > 0 &&
        e.forEach((e, t) => {
            var n = e.querySelectorAll("li");
            n?.length > 0 &&
                n.forEach((e, t) => {
                    var n = e.querySelectorAll("span");
                    n?.length > 0 &&
                        n.forEach((e, t) => {
                            "Connect" === e.textContent.trim() && copy(1);
                        });
                });
        });
}



var btn_present_pending = 0,
    icon_list_btn_check_pending = document.querySelectorAll(".pv-top-card-v2-ctas");
    icon_list_btn_check_pending?.length > 0 &&
        icon_list_btn_check_pending.forEach((e, t) => {
            var n = e.querySelectorAll(".pvs-profile-actions");
            n?.length > 0 &&
                n.forEach((e, t) => { 
                    var n = e.querySelectorAll(".pvs-profile-actions__action");
                    n?.length > 0 &&
                        n.forEach((e, t) => {
                            var n = e.querySelectorAll(".artdeco-button");
                            n?.length > 0 &&
                                n.forEach((e, t) => {
                                    var n = e.querySelectorAll(".artdeco-button__text");var btn = e;
                                    n?.length > 0 &&
                                        n.forEach((e, t) => {
                                            "Message" === e.textContent.trim() && (console.log("Message request"), (btn_present_pending = 1),(btn.click()));
                                        });
                                });
                        });
                });
        })

        
        var icon_list_btn_check_msg = document.querySelectorAll(".pv-top-card-v2-ctas");
        if (icon_list_btn_check_msg?.length > 0) {
                icon_list_btn_check_msg.forEach((e, t) => {
                    var r = e.querySelectorAll(".pvs-profile-actions");
                    r?.length > 0 &&
                        r.forEach((e, t) => {
                            var btntoclick = e;
                            var r = e.querySelectorAll(".artdeco-button__text");
                            r?.length > 0 &&
                                r.forEach((e, t) => { 
                                    if(e.textContent.trim() === 'Message'){
                                        btntoclick.click();
                                        var idtoclick = e.parentNode.getAttribute("id");
                                        document.getElementById(idtoclick).click();
                                    }
                                });
                        });
                });
        }

        var icon_list_btn_check_msg = document.querySelectorAll(".pv-top-card-v2-ctas");
        if (icon_list_btn_check_msg?.length > 0) {
                icon_list_btn_check_msg.forEach((e, t) => {
                    var r = e.querySelectorAll(".pvs-profile-actions");
                    r?.length > 0 &&
                        r.forEach((e, t) => {
                            var r = e.querySelectorAll("a");
                            r?.length > 0 &&
                                r.forEach((e, t) => { 
                                    if(e.textContent.trim() === 'Message'){
                                        e.click();
                                        console.log("click on msg");
                                    }
                                });
                        });
                });
        }


        var icon_list_btn_check_msg = document.querySelectorAll(".artdeco-modal");
        if (icon_list_btn_check_msg?.length > 0) {
                icon_list_btn_check_msg.forEach((e, t) => {
                    var r = e.querySelectorAll(".artdeco-modal__confirm-dialog-btn");
                    r?.length > 0 &&
                        r.forEach((e, t) => {
                            var btntoclick = e;
                            var r = e.querySelectorAll(".artdeco-button__text");
                            r?.length > 0 &&
                                r.forEach((e, t) => { 
                                    if(e.textContent.trim() === 'Withdraw'){
                                        btntoclick.click();
                                    }
                                });
                        });
                });
        }


        var check_btn='',
        e = 0,
        t = 0,
        r = document.querySelectorAll(".pv-top-card-v2-ctas");
    r?.length > 0 &&
        r.forEach((t, r) => {
            var n = t.querySelectorAll(".pvs-profile-actions");
            n?.length > 0 &&
                n.forEach((t, r) => {
                    var n = t.getElementsByTagName("div");
                    if (n?.length > 0) {
                        var l,
                            c = n[0].getElementsByTagName("button");
                        if (c?.length > 0) {
                            var o,
                                a = c[0],
                                i = a.getElementsByTagName("span");
                            if (i?.length > 0 && "Connect" === i[0].innerHTML.trim()) {
                                check_btn="connect btn present";
                                copy(check_btn), (e = 1);
                            }
                        }
                    }
                });
        });
        


var btn_present_pending = 0,
index_btn_check_pending = 0,
icon_list_btn_check_pending = document.querySelectorAll(".pv-top-card-v2-ctas");
if (
    (icon_list_btn_check_pending?.length > 0 &&
        icon_list_btn_check_pending.forEach((e, n) => {
            var t = e.querySelectorAll(".pvs-profile-actions");
            t?.length > 0 &&
                t.forEach((e, n) => {
                    var t = e.querySelectorAll(".artdeco-button__text");
                    t?.length > 0 &&
                        t.forEach((e, n) => {
                            "Pending" === e.textContent.trim() && (console.log("Penging request"), (btn_present_pending = 1)), copy(1);
                        });
                });
        }),
    0 === btn_present_pending)
) {
    copy(btn_present_pending);
    var e = document.querySelectorAll(".artdeco-dropdown__content");
    e?.length > 0 &&
        e.forEach((e, n) => {
            var t = e.querySelectorAll("li");
            t?.length > 0 &&
                t.forEach((e, n) => {
                    var t = e.querySelectorAll("span");
                    t?.length > 0 &&
                        t.forEach((e, n) => {
                            "Connect" === e.textContent.trim() && copy(1);
                        });
                });
        });
}


var icon_list_btn_check_pending = document.querySelectorAll("fieldset");
icon_list_btn_check_pending?.length > 0 &&
    icon_list_btn_check_pending.forEach((e, t) => {
        if(e.getAttribute('data-x-search-filter')?.trim() === "COMPANY_HEADCOUNT"){
            console.log("COMPANY_HEADCOUNT")
        var n = e.querySelectorAll("button");
        n?.length > 0 &&
            n.forEach((e, t) => {  
                if(e.textContent.trim() === 'changethis'){
                    e.click();
                } 
            });
        }
    });

    var icon_list_btn_check_pending = document.querySelectorAll("fieldset");
icon_list_btn_check_pending?.length > 0 &&
    icon_list_btn_check_pending.forEach((e, t) => {
        if(e.getAttribute('data-x-search-filter')?.trim() === "INDUSTRY"){
            console.log("INDUSTRY")
        var n = e.querySelectorAll("span");
        n?.length > 0 &&
            n.forEach((e, t) => {
                if(e.textContent.trim().indexOf('changethis') > -1){
                    var btn = e.parentNode.querySelectorAll("button");
                    btn.forEach((e, t) => {
                        if(t===0){
                            e.click();
                        }
                    });
                } 
            });
        }
    });

    var icon_list_btn_check_pending = document.querySelectorAll("fieldset");
    icon_list_btn_check_pending?.length > 0 &&
        icon_list_btn_check_pending.forEach((e, t) => {
            if ("HEADQUARTERS_LOCATION" === e.getAttribute("data-x-search-filter")?.trim()) {
                console.log("HEADQUARTERS_LOCATION");
                var n = e.querySelectorAll("input");
                n?.length > 0 &&
                    n.forEach((e, t) => {
                        
                        if (e.getAttribute('placeholder') === 'Add locations') {
                            e.focus();
                        }
                    });
            }
        });

        console.log(document.getElementById("ember1528").childNodes[0].childNodes[1])
    
        var icon_list_btn_check_pending = document.querySelectorAll("fieldset");
    icon_list_btn_check_pending?.length > 0 &&
        icon_list_btn_check_pending.forEach((e, t) => {
            if ("HEADQUARTERS_LOCATION" === e.getAttribute("data-x-search-filter")?.trim()) {
                console.log("HEADQUARTERS_LOCATION");
                var n = e.querySelectorAll("button");
                n?.length > 0 &&
                    n.forEach((e, t) => {
                        
                        if(e.getAttribute("class").indexOf('search-filter__focus-target--button')>-1){
                            e.click();
                        }
                    });
            }
        });

        var icon_list_btn_check_pending=document.querySelectorAll("fieldset");icon_list_btn_check_pending?.length>0&&icon_list_btn_check_pending.forEach((t,e)=>{if("HEADQUARTERS_LOCATION"===t.getAttribute("data-x-search-filter")?.trim()){console.log("HEADQUARTERS_LOCATION");var c=t.querySelectorAll("button");c?.length>0&&c.forEach((t,e)=>{t.getAttribute("class").indexOf("search-filter__focus-target--button")&&t.click()})}});


var icon_list_btn_check_pending = document.querySelectorAll("fieldset");
icon_list_btn_check_pending?.length > 0&&icon_list_btn_check_pending.forEach((t, e) => {if ("HEADQUARTERS_LOCATION" === t.getAttribute("data-x-search-filter")?.trim()) {
console.log("HEADQUARTERS_LOCATION");var c = t.querySelectorAll(".list-style-none");c?.length > 0&&c.forEach((t, e) => { console.log(t);console.log(t.style.height);var l = t.querySelectorAll("li");
console.log(l.length);copy(l.length);});}});

var icon_list_btn_check_pending = document.querySelectorAll("fieldset");
icon_list_btn_check_pending?.length > 0&&icon_list_btn_check_pending.forEach((t, e) => {if ("HEADQUARTERS_LOCATION" === t.getAttribute("data-x-search-filter")?.trim()) {
console.log("HEADQUARTERS_LOCATION");var c = t.querySelectorAll(".list-style-none");c?.length > 0&&c.forEach((t, e) => { console.log(t);copy(t.offsetHeight);});}});

    var icon_list_btn_check_pending=document.querySelectorAll("fieldset");icon_list_btn_check_pending?.length>0&&icon_list_btn_check_pending.forEach((e,l)=>{if("HEADQUARTERS_LOCATION"===e.getAttribute("data-x-search-filter")?.trim()){console.log("HEADQUARTERS_LOCATION");var t=e.querySelectorAll(".list-style-none");t?.length>0&&t.forEach((e,l)=>{var t;console.log(e),copy(e.querySelectorAll("li").length)})}});

    var icon_list_btn_check_pending = document.querySelectorAll("form");
    icon_list_btn_check_pending?.length > 0&&icon_list_btn_check_pending.forEach((t, e) => {console.log(t.offsetHeight);});    

    var resultarray = []; var searchResult = document.getElementById('search-results-container');
    var pageLi = searchResult.querySelectorAll("li");
    pageLi?.length > 0&&pageLi.forEach((t, e) => {
        var ahrefs = t.querySelectorAll("a");
        ahrefs?.length > 0&&ahrefs.forEach((l, m) => {
           
            if(l.getAttribute('data-anonymize') === 'company-name'){
                resultarray.push(l?.href);
                console.log(l);
            }
            
        });
    });
    setTimeout((copy) => {
        console.log(JSON.stringify(resultarray));
        var res = resultarray.join(",");
		console.log(res);
        copy(res);
	}, 1000);
    
    
    var resultarray = [];
    var pageLi = document.querySelectorAll(".scaffold-layout__list-container");
    pageLi?.length > 0&&pageLi.forEach((t, e) => { 
        var jobtitle = []; var joblink = []; var clink = []; var cname = []; var location = [];
        var ahrefs = t.querySelectorAll("a");
        ahrefs?.length > 0&&ahrefs.forEach((l, m) => {
    
            if(l.getAttribute('href').indexOf('/jobs/view/') !== -1 && l.textContent.trim() !== ''){
                jobtitle.push(l.textContent.trim());
                joblink.push(l.getAttribute('href'));
            }
            if(l.getAttribute('href').indexOf('/company/') !== -1 && l.textContent.trim() !== ''){
                clink.push(l.getAttribute('href'));
                cname.push(l.textContent.trim());
            }   
            
        });
        var loc = t.querySelectorAll(".job-card-container__metadata-item");
        loc?.length > 0&&loc.forEach((l, m) => {
            location.push(l.textContent.trim()); 
        });
        for (let index = 0; index < jobtitle.length; index++) {
            resultarray.push(jobtitle[index]+'*'+joblink[index]+'*'+clink[index]+'*'+cname[index]+'*'+location[index]);
        }
        console.log(resultarray);
    });

    
    var resultarray = [];
    var pageLi = document.querySelectorAll(".scaffold-layout__detail");
    pageLi?.length > 0&&pageLi.forEach((t, e) => { 
         var loc = t.querySelectorAll(".jobs-unified-top-card__job-insight");
         loc?.length > 0&&loc.forEach((l, m) => {
            var span = l.querySelectorAll("span");
            span?.length > 0&&span.forEach((n, o) => {
                if(n.textContent.trim().indexOf('employees') !== -1){
                    var tech = n.textContent.trim().split('·');
                    copy(tech[1].trim());
                } 
            });
         });
    });

    var pageLi = document.querySelectorAll("header");
    pageLi?.length > 0&&pageLi.forEach((t, e) => { 
        var loc = t.querySelectorAll("small");
        loc?.length > 0&&loc.forEach((l, m) => {
            var nortemp = l.textContent.trim();
            var norarr = nortemp.split(' ');
            copy(norarr[0]); 
        });
    });
    
    var pageindex = changethis;var pageLi = document.querySelectorAll(".scaffold-layout__list-container");
    pageLi?.length > 0&&pageLi.forEach((t, e) => { 
        var loc = t.querySelectorAll(".job-card-container");
        loc?.length > 0&&loc.forEach((l, m) => {
            if(pageindex === m){l.click();
            }
        });
    });

    var pageindex = changethis;var pageLi = document.querySelectorAll(".artdeco-pagination__pages");
    pageLi?.length > 0&&pageLi.forEach((t, e) => { 
        var loc = t.querySelectorAll("li");
        loc?.length > 0&&loc.forEach((l, m) => { 
            if(pageindex === m){
                var btn = l.querySelectorAll("button");
                console.log(btn[0]);
                btn[0].click();
            }
        });
    });

    artdeco-dropdown__content-inner

    var pageLi = document.querySelectorAll("li-icon");
    pageLi?.length > 0&&pageLi.forEach((t, e) => {  
        if(t.getAttribute('aria-label') === "Open dropdown menu for more account actions"){
            t.parentElement.click();
            setTimeout(() => {
                var viewdown = document.querySelectorAll(".artdeco-dropdown__content-inner");
                viewdown?.length > 0&&viewdown.forEach((m, n) => { 
                    var divitem = m.querySelectorAll("div");
                    divitem?.length > 0&&divitem.forEach((o, p) => { 
                        if(o.getAttribute('data-control-name') === "copy_li_url"){
                            o.click();
                        }
                    });
                });
            }, 1000);
        }
    });

     

    var pageLi = document.querySelectorAll(".org-page-navigation__items");
    pageLi?.length > 0&&pageLi.forEach((t, e) => {  

        var viewdown = t.querySelectorAll("button");
        viewdown?.length > 0&&viewdown.forEach((m, n) => { 
            m.click();
            setTimeout(() => {
                var divitem = t.querySelectorAll("div");
                divitem?.length > 0&&divitem.forEach((o, p) => { 
                    console.log(parseInt(o.getAttribute('tabindex')) === -1);
                    if(parseInt(o.getAttribute('tabindex')) === -1){
                        o.click();
                        var a = o.childNodes[0];
                        var aitem = a.querySelectorAll("a");
                        aitem?.length > 0&&aitem.forEach((u, v) => {
                        if(u.textContent.trim() === 'People'){
                            u.click();
                            setTimeout(() => {
                                m.click();
                            }, 1000);
                        }
                        });
                    }
                });
            }, 1000);
        });
    });
    document.getElementById("people-search-keywords").scrollIntoView();
    { x: 63, y: 277 }

    const element = document.getElementById("my-element"); window.scrollTo(0, element.offsetTop);

    org-grid__content-height-enforcer


    var pageLi = document.querySelectorAll(".org-grid__content-height-enforcer");
    pageLi?.length > 0&&pageLi.forEach((t, e) => {  
        var viewdown = t.querySelectorAll("h2");
        viewdown?.length > 0&&viewdown.forEach((m, n) => { 
            var s = m.textContent.trim();
            if(s.indexOf('employees') !== -1){
                s = s.replace('employees','');
                copy(s.trim());
            }
        });
    });

    var startele = document.getElementById("people-search-keywords");
    var divele = startele.parentElement; 
    var liele = divele.querySelectorAll("li");
    liele?.length > 0&&liele.forEach((t, e) => {  
        var btnele = t.querySelectorAll("button");
        btnele?.length > 0&&btnele.forEach((m, n) => { 
            if(m.textContent.trim() === 'Clear all'){
                m.click();
            }
        });
    });

    function removeDuplicates(arr) { return Array.from(new Set(arr)); }
    var data = [];var liele = document.querySelectorAll(".org-grid__content-height-enforcer");
    liele?.length > 0&&liele.forEach((t, e) => {  
        var btnele = t.querySelectorAll("li");
        btnele?.length > 0&&btnele.forEach((m, n) => { 
            var sectionele = t.querySelectorAll(".org-people-profile-card");
            sectionele?.length > 0&&sectionele.forEach((p, q) => { 
                var profilenele = p.querySelectorAll(".org-people-profile-card__profile-info");
                profilenele?.length > 0&&profilenele.forEach((u, i) => { 
                    var anele = u.querySelectorAll(".artdeco-entity-lockup__content");
                    anele?.length > 0&&anele.forEach((y, z) => {
                        var str = '';
                        if(y.children[0].className.indexOf('artdeco-entity-lockup__title') !== -1){
                            str = str + y.children[0].children[0].children[0].textContent.trim()+'*'+y.children[0].children[0].getAttribute('href');
                        }
                        if(y.children[2].className.indexOf('artdeco-entity-lockup__subtitle') !== -1){
                            str = str +'*'+ y.children[2].children[0].children[0].textContent.trim();
                        }
                        data.push(str);
                });
                });
            });
        });
    });
    copy(removeDuplicates(data).join('$'));

var resultarray = [];
var searchResult = document.getElementById("search-results-container");
var pageLi = searchResult.querySelectorAll("li");
pageLi?.length > 0 &&
    pageLi.forEach((t, e) => {
        var ahrefs = t.querySelectorAll("a");
        ahrefs?.length > 0 &&
            ahrefs.forEach((l, m) => {
                if (l.getAttribute("data-anonymize") === "company-name") {
                    resultarray.push(l?.href+'*'+l.textContent.trim());
                }
            });
    });
    var res = resultarray.join(",");copy(res);




    var allaelements = document.querySelectorAll("a"); if(allaelements?.length>0){ allaelements.forEach((item,i) => {  
        console.log(item);
        // var div_in_modal = item.getElementsByTagName("button");
        // if(div_in_modal?.length > 0){
        //     var btn_span = div_in_modal[0];
        //     var span_btn = btn_span.getElementsByTagName("span");
        //     if(span_btn?.length > 0){
        //         var ctn_btn = span_btn[0];
        //         if(ctn_btn.innerHTML.trim() === 'Add a note'){
        //             console.log("add note exista");
        //             var id_ctn = btn_span.getAttribute("id");
        //             console.log(id_ctn);
        //             document.getElementById(id_ctn).click();
        //         }
        //     }    
        // }
    }); }

    
    var allaelements = document.querySelectorAll("a"); if(allaelements?.length>0){ allaelements.forEach((item,i) => {  
        var t = item.getAttribute("title");
        if(t?.trim() === 'Cars'){
            console.log(t);
            item.click();
        }
    }); }

    var allaelements = document.querySelectorAll("div"); if(allaelements?.length>0){ allaelements.forEach((item,i) => {  
        var t = item.getAttribute("data-testid");
        if(t?.trim() === 'sort-filter-button'){
            console.log(t);
            item.click();
        }
    }); }

    var allaelements = document.querySelectorAll("ul"); if(allaelements?.length>0){ allaelements.forEach((item,i) => {  
        var t = item.getAttribute("data-testid");
        if(t?.trim() === 'sort-filter-dropdown'){
            var liitems = item.querySelectorAll("li");
            if(liitems?.length>0){ 
                liitems.forEach((itemli,ili) => {
                    var divinsideli = itemli.querySelectorAll("div");
                    if(divinsideli?.length>0){
                        divinsideli.forEach((itemdiv,idiv) => {
                            if(itemdiv.textContent.trim() === "Price: Low to High"){
                                var eletoclick = itemli.querySelector("a"); 
                                eletoclick.click();
                                
                            }
                        });
                    }
                });
            }
        }
    }); }

    var allaelements = document.querySelectorAll("div"); if(allaelements?.length>0){ for(var item of allaelements){  
        var t = item.getAttribute("data-testid");
        if(t !== null){
            var tarr = t.split("-");
            if(tarr?.length > 3){
                var addid = tarr[3].trim();
                console.log(addid);
                if(adidsins.indexOf(addid) === -1){
                    copy(addid);
                    break;
                }else{
                    copy("changepage");
                }
            }
        }
    } }

    var allaelements = document.querySelectorAll("div"); if(allaelements?.length>0){ for(var item of allaelements){  
        var t = item.textContent.trim();
        if(t === 'Price'){
            console.log('yes price found');
        }
    } }

    var allaelements = document.querySelectorAll("div"); if(allaelements?.length>0){ for(var item of allaelements){  var t = item.getAttribute("data-testid");if(t !== null){var tarr = t.split("-");if(tarr?.length > 3){var addid = tarr[3].trim();if(addid === "changethis"){var allanchortagsinsideitem = item.querySelectorAll("a");for(var itemanchor of allanchortagsinsideitem){ itemanchor.click(); break; }console.log(addid);break;}}}} }

    var mainsidediv = '';var allaelements = document.querySelectorAll("div"); if(allaelements?.length>0){ for(var item of allaelements){  
        var t = item.textContent.trim();
        if(t === 'Price'){
            console.log('yes price found');
            mainsidediv = item.parentElement.parentElement;
        }
    } }
    var allaelements = mainsidediv.querySelectorAll("div"); if(allaelements?.length>0){ for(var item of allaelements){  
        var t = item.textContent.trim();
        if(t === 'Location'){
            console.log('yes location found');
            copy(item.nextSibling.textContent.trim())
        }
    } }


    var mainsidediv = '';var allaelements = document.querySelectorAll("a"); if(allaelements?.length>0){ for(var item of allaelements){  
        var t = item.getAttribute("data-label");
        if(t === 'pro_profile'){
            console.log('yes price found');
            copy(item.textContent.trim());
            mainsidediv = item.parentElement.parentElement.parentElement;
        }
    } }
    var allaelements = mainsidediv.querySelectorAll("div"); if(allaelements?.length>0){ for(var item of allaelements){  
        var t = item.textContent.trim();
        if(t === 'Company'){
            console.log('yes company found');
            copy('Company')
        }
        if(t === 'Private'){
            console.log('yes private found');
            copy('Private')
        }
    } }
    {x: 128, y: 934}x: 128y: 934[[Prototype]]: Object
    {x: 829, y: 750}

    var allaelements = document.querySelectorAll("button"); if(allaelements?.length>0){ for(var item of allaelements){var t = item.getAttribute("data-id");if(t?.trim() === "100479513"){ console.log("yes button found");console.log(item.parentElement);}} }
    window.scrollTo(0, 404);
    const element = document.getElementById("navin");
    element.scrollTop = 0;


    function GetScreenCordinates(obj) {
        var p = {};
        p.x = obj.offsetLeft;
        p.y = obj.offsetTop;
        while (obj.offsetParent) {
            p.x = p.x + obj.offsetParent.offsetLeft;
            p.y = p.y + obj.offsetParent.offsetTop;
            if (obj == document.getElementsByTagName("body")[0]) {
                break;
            }
            else {
                obj = obj.offsetParent;
            }
        }
        return p;
    }

    // Get the element you want to get the position of
const myElement = document.getElementById('my-element');

// Get the position of the element relative to the viewport
const rect = myElement.getBoundingClientRect();

// Get the scroll position of the page
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

// Calculate the position of the element on the screen
const elementTop = rect.top + scrollTop;
const elementLeft = rect.left + scrollLeft;

// Log the position of the element to the console
console.log('Element position: ' + elementLeft + ',' + elementTop);

8,8
{ x: 17, y: 122 }
{ x: 64, y: 170 }

var myElement = '';   var allaelements = document.querySelectorAll("button"); if(allaelements?.length>0){ for(var item of allaelements){var t = item.getAttribute("data-id");if(t?.trim() === "100439549"){  myElement = item.parentElement; var allSpan = myElement.querySelectorAll("span"); for(var itemnext of allSpan){ if(itemnext?.textContent?.trim() === 'VIEW PHONE NUMBER'){ console.log("yes button found"); copy("yes button found"); console.log(itemnext); const rect = myElement.getBoundingClientRect();  const scrollTop = window.pageYOffset || document.documentElement.scrollTop; const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; const elementTop = rect.top + scrollTop; const elementLeft = rect.left + scrollLeft; console.log('Element position: ' + elementLeft + ',' + elementTop); window.scrollTo(0, elementTop);} }}} }

const rect = myElement.getBoundingClientRect();

// Get the scroll position of the page
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

// Calculate the position of the element on the screen
const elementTop = rect.top + scrollTop;
const elementLeft = rect.left + scrollLeft;

// Log the position of the element to the console
console.log('Element position: ' + elementLeft + ',' + elementTop);
window.scrollTo(0, elementTop);

Element position: 59,8.5
{ x: 67, y: 122 }
x diff 8
y diff 113.5

var allaelements = document.querySelectorAll("div"); if(allaelements?.length>0){ for(var item of allaelements){  
    var t = item.textContent.trim();
    if(t === 'Price'){
        console.log('yes price found');
        console.log(item.parentElement);
        myElement = item.parentElement;
    }
} }
const rect = myElement.getBoundingClientRect();

// Get the scroll position of the page
const x = rect.left + window.scrollX;
const y = rect.top + window.scrollY;

console.log(`Element coordinates: (${x}, ${y})`);

// Log the position of the element to the console
console.log('Element position: ' + elementLeft + ',' + elementTop);
Element position: 812.8000183105469,404.6000061035156
{ x: 874, y: 338 }
x diff 62


var myElement = "";var allaelements = document.querySelectorAll("button"); if(allaelements?.length>0){ for(var item of allaelements){var t = item.getAttribute("data-id");if(t?.trim() === "100439549"){  myElement = item.parentElement; var allSpan = myElement.querySelectorAll("span"); for(var itemnext of allSpan){ if(itemnext?.textContent?.trim() === "VIEW PHONE NUMBER"){ console.log("yes button found"); copy("yes button found"); console.log(itemnext); const rect = myElement.getBoundingClientRect();  const scrollTop = window.pageYOffset || document.documentElement.scrollTop; const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; const elementTop = rect.top + scrollTop; const elementLeft = rect.left + scrollLeft; console.log("Element position: " + elementLeft + "," + elementTop); window.scrollTo(0, elementTop);} }}} }

element.childNodes

console.log(document.getElementById("jsShadowRoot"));
var myElement = document.getElementById("jsShadowRoot"); if(myElement){const rect = myElement.getBoundingClientRect();  const scrollTop = window.pageYOffset || document.documentElement.scrollTop; const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; const elementTop = rect.top + scrollTop; const elementLeft = rect.left + scrollLeft; console.log("Element position: " + elementLeft + "," + elementTop); window.scrollTo(0, elementTop);}

var allaelements = document.querySelectorAll("button"); if(allaelements?.length>0){ for(var item of allaelements){if(item?.textContent.trim().indexOf("Copy To Clipboard") !== -1){ item.click(); }}}

if (allaelements?.length > 0) { for (var item of allaelements) { if (item?.textContent.trim().indexOf("Copy To Clipboard") !== -1) { item.click(); console.log(item); } } }

var allaelements = document.querySelectorAll("button"); if(allaelements?.length>0){ for(var item of allaelements){if(item?.textContent.trim().indexOf("Copy To Clipboard") !== -1){ console.log(item);const rect = item.getBoundingClientRect();  const scrollTop = window.pageYOffset || document.documentElement.scrollTop; const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; const elementTop = rect.top + scrollTop; const elementLeft = rect.left + scrollLeft; console.log("Element position: " + elementLeft + "," + elementTop); window.scrollTo(0, elementTop); }}}

//{ x: 329, y: 102 }

// 	//li attribute style="opacity: 1; transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;" catch

// 		//write a script for button -> span -> textcontent -> Continue Reading ->then click on it
// 	//write a script for button -> span -> textcontent -> Show contact number ->then click on it -- this li inside text is text
// 	var re = /(?:[-+() ]*\d){10,13}/gm; 
// var str = 'Primary contact number 019-982 6833 call me on this\nMy number is +91-983 333 32343\n2nd number +1 (983) 333 32343, call me\nAnother one 983-333-32343\nOne more +91(983)-333-32343 that\'s all\n121 street pin code 421 728 & number is 9833636363';
// var res = str.match(re).map(function(s){return s.trim();});
// console.log(res);

// let str = "My phone number is (123) 456-7890.";

// let phoneRegex = /[(]?([0-9]{3})[)]?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})/g;

// let phoneNumbers = str.match(phoneRegex);

// console.log(phoneNumbers);


// //remove html tags from script
// let str = "<p>This is some <b>bold</b> and <i>italic</i> text.</p>";

// let cleanStr = str.replace(/<[^>]*>/g, "");

// console.log(cleanStr);

// if(continue reading){
// 	then click on it
// }

// if(show contcat)
// click on it

// get div style="max-height:400px"


// // get url from string
// WhatsApp's own link generator: https://wa.me/

// Click to Chat: https://wa.me/number/?text=your_message

// Whatshelp: https://whatshelp.io/widget/

// Chatwith.io: https://www.chatwith.io/whatsapp-link-generator

// Callbell: https://www.callbell.eu/whatsapp-link-generator/

// WhatsLinks: https://whatslinks.com/

// LinkTo: https://linkto.app/whatsapp-link-generator/
// WhatsApp's own link generator: https://wa.me/

// Click to Chat: https://wa.me/number/?text=your_message

// Whatshelp: https://whatshelp.io/widget/

// Callbell: https://www.callbell.eu/whatsapp-link-generator/

// WhatsApp Link Generator Malaysia: https://whatsapplinkgeneratormalaysia.com/

// Tech Arp: https://www.techarp.com/internet/whatsapp-click-to-chat/

// //Wassap
// //wasap.my

// //catch div style="max-height:400px"
// 	//https://firdausjasmi.wasap.my

//li attribute style="opacity: 1; transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;" catch
//continue reading

var allaelements = document.querySelectorAll("span"); if(allaelements?.length>0){ for(var item of allaelements){if(item?.textContent.trim().indexOf("Continue Reading") !== -1){ console.log(item);const rect = item.getBoundingClientRect();  const scrollTop = window.pageYOffset || document.documentElement.scrollTop; const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; const elementTop = rect.top + scrollTop; const elementLeft = rect.left + scrollLeft; console.log("Element position: " + elementLeft + "," + elementTop); window.scrollTo(0, elementTop); }}}


var allaelements = document.querySelectorAll("span"); if(allaelements?.length>0){ for(var item of allaelements){if(item?.textContent.trim().indexOf("Show contact number") !== -1){ console.log(item);const rect = item.getBoundingClientRect();  const scrollTop = window.pageYOffset || document.documentElement.scrollTop; const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; const elementTop = rect.top + scrollTop; const elementLeft = rect.left + scrollLeft; console.log("Element position: " + elementLeft + "," + elementTop); window.scrollTo(0, elementTop); item.parentElement.click();}}}

//click on continue reading
var allaelements = document.querySelectorAll("li"); if(allaelements?.length>0){ for(var item of allaelements){if(item?.textContent.trim().indexOf("Description") !== -1){ var otherul = item.parentElement; var ultosearch = otherul.nextSibling; var allaelementsnext = ultosearch.querySelectorAll("span"); if(allaelementsnext?.length>0){ for(var itemnext of allaelementsnext){ if(itemnext?.textContent.trim().indexOf("Continue Reading") !== -1){ itemnext.parentElement.click(); }}}}}}

//click on show contacts
var allaelements = document.querySelectorAll("li"); if(allaelements?.length>0){ for(var item of allaelements){if(item?.textContent.trim().indexOf("Description") !== -1){ var otherul = item.parentElement; var ultosearch = otherul.nextSibling; var allaelementsnext = ultosearch.querySelectorAll("span"); if(allaelementsnext?.length>0){ for(var itemnext of allaelementsnext){ if(itemnext?.textContent.trim().indexOf("Show contact number") !== -1){ itemnext.parentElement.click(); }}}}}}

//get html inside ul
var allaelements = document.querySelectorAll("li"); if(allaelements?.length>0){ for(var item of allaelements){if(item?.textContent.trim().indexOf("Description") !== -1){ var otherul = item.parentElement; var ultosearch = otherul.nextSibling; const myListHTML = ultosearch.innerHTML; let cleanStr = myListHTML.replace(/<[^>]*>/g, ""); var re = /(?:[-+() ]*\d){10,13}/gm; var res = cleanStr.match(re)?.map(function(s){return s.trim();});console.log("printing res");console.log(res);let phoneRegex = /[(]?([0-9]{3})[)]?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})/g;let phoneNumbers = cleanStr.match(phoneRegex);console.log("printing phoneNumbers");console.log(phoneNumbers); const arr3 = [...res, ...phoneNumbers];const uniqueArr = [...new Set(arr3)];console.log("printing uniqueArr");console.log(uniqueArr); copy(uniqueArr.join(","))}}}

https://raw.githubusercontent.com/kumarnavinrai/qna/main/phonescript.txt

var allaelements = document.querySelectorAll("li"); if(allaelements?.length>0){ for(var item of allaelements){if(item?.textContent.trim().indexOf("Description") !== -1){ var otherul = item.parentElement; var ultosearch = otherul.nextSibling; const myListHTML = ultosearch.innerHTML; var cleanStr = myListHTML.replace(/<[^>]*>/g, ""); copy(cleanStr);}}}


var allaelements = document.querySelectorAll("s"); if(allaelements?.length>0){ for(var item of allaelements){var t = item.getAttribute("data-testid");if(t?.trim() === "next"){ item.click();}} }

var allaelements = document.querySelectorAll("span"); if(allaelements?.length>0){ for(var item of allaelements){if(item?.textContent.trim().indexOf("List-ID: ") !== -1){ var add_id = extractNumbersFromString(item?.textContent.trim()); console.log(add_id.join(","));copy(add_id.join(","));}}}function extractNumbersFromString(str) {return str.match(/\d+/g).map(Number);}


var myElement = "";var allaelements = document.querySelectorAll("button"); if(allaelements?.length>0){ for(var item of allaelements){var t = item.getAttribute("data-id");if(t?.trim() === "100329811"){  myElement = item.parentElement; var allSpan = myElement.querySelectorAll("span"); for(var itemnext of allSpan){ if(itemnext?.textContent?.trim() === "VIEW PHONE NUMBER"){ console.log("yes button found"); copy("yes button found"); console.log(itemnext); const rect = myElement.getBoundingClientRect();  const scrollTop = window.pageYOffset || document.documentElement.scrollTop; const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; const elementTop = rect.top + scrollTop; const elementLeft = rect.left + scrollLeft; console.log("Element position: " + elementLeft + "," + elementTop); window.scrollTo(0, elementTop);} }}} }

var allaelements = document.querySelectorAll("span"); if(allaelements?.length>0){ for(var item of allaelements){if(item?.textContent.trim().indexOf("List-ID: ") !== -1){ var add_id = item?.textContent.trim(); add_id = add_id.replace("List-ID: ",""); add_id = add_id.replace("Report this ad (",""); add_id = add_id.replace(")",""); console.log(add_id.trim());copy(add_id.trim());}}}

List-ID: 



