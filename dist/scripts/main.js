"use strict";!function(){function e(e,t,n){return{label:t,fill:!1,lineTension:.1,backgroundColor:n,borderColor:n,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:n,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:n,pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:e,spanGaps:!1}}var t=document.getElementById("popularity"),n={PRI:"rgba(255,24,32,1)",PAN:"rgba(6,51,142,1)",PRD:"rgba(255,203,1,1)",PT:"rgba(218,37,29,1)",MORENA:"rgba(97,2,0,1)"};$.ajax({url:"http://10.40.60.191:3030/v1/api/weeks",dataType:"json",type:"GET",success:function(i){for(var r=moment("20170323","YYYYMMDD"),a=[],l={datasets:[]},o=0;o<9;o++)a.push(r.add(1,"w").format("DD/MM/YY"));for(var s=0;s<i.length;s++)l.datasets.push(e(i[s].data,i[s].candidate,n[i[s].party]));l.labels=a;new Chart(t,{type:"line",data:l,options:{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})},error:function(e){}})}(),jQuery(document).ready(function(e){function t(e,t,n){var i=d(e.eventsWrapper),a=Number(e.timelineWrapper.css("width").replace("px",""));"next"==n?r(e,i-a+w,a-t):r(e,i+a-w)}function n(e,t,n){var r=e.eventsContent.find(".selected");if(("next"==n?r.next():r.prev()).length>0){var l=e.eventsWrapper.find(".selected"),o="next"==n?l.parent("li").next("li").children("a"):l.parent("li").prev("li").children("a");a(o,e.fillingLine,t),s(o,e.eventsContent),o.addClass("selected"),l.removeClass("selected"),p(o),i(n,o,e)}}function i(e,t,n){var i=window.getComputedStyle(t.get(0),null),a=Number(i.getPropertyValue("left").replace("px","")),l=Number(n.timelineWrapper.css("width").replace("px","")),o=Number(n.eventsWrapper.css("width").replace("px","")),s=d(n.eventsWrapper);("next"==e&&a>l-s||"prev"==e&&a<-s)&&r(n,l/2-a,l-o)}function r(e,t,n){var i=e.eventsWrapper.get(0);t=t>0?0:t,t=void 0!==n&&t<n?n:t,f(i,"translateX",t+"px"),0==t?e.timelineNavigation.find(".prev").addClass("inactive"):e.timelineNavigation.find(".prev").removeClass("inactive"),t==n?e.timelineNavigation.find(".next").addClass("inactive"):e.timelineNavigation.find(".next").removeClass("inactive")}function a(e,t,n){var i=window.getComputedStyle(e.get(0),null),r=i.getPropertyValue("left"),a=i.getPropertyValue("width");r=Number(r.replace("px",""))+Number(a.replace("px",""))/2;var l=r/n;f(t.get(0),"scaleX",l)}function l(e,t){for(var n=0;n<e.timelineDates.length;n++){var i=v(e.timelineDates[0],e.timelineDates[n]),r=Math.round(i/e.eventsMinLapse)+2;e.timelineEvents.eq(n).css("left",r*t+"px")}}function o(e,t){var n=v(e.timelineDates[0],e.timelineDates[e.timelineDates.length-1]),r=n/e.eventsMinLapse,r=Math.round(r)+4,l=r*t;return e.eventsWrapper.css("width",l+"px"),a(e.eventsWrapper.find("a.selected"),e.fillingLine,l),i("next",e.eventsWrapper.find("a.selected"),e),l}function s(e,t){var n=e.data("date"),i=t.find(".selected"),r=t.find('[data-date="'+n+'"]'),a=r.height();if(r.index()>i.index())var l="selected enter-right",o="leave-left";else var l="selected enter-left",o="leave-right";r.attr("class",l),i.attr("class",o).one("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){i.removeClass("leave-right leave-left"),r.removeClass("enter-left enter-right")}),t.css("height",a+"px")}function p(e){e.parent("li").prevAll("li").children("a").addClass("older-event").end().end().nextAll("li").children("a").removeClass("older-event")}function d(e){var t=window.getComputedStyle(e.get(0),null),n=t.getPropertyValue("-webkit-transform")||t.getPropertyValue("-moz-transform")||t.getPropertyValue("-ms-transform")||t.getPropertyValue("-o-transform")||t.getPropertyValue("transform");if(n.indexOf("(")>=0){var n=n.split("(")[1];n=n.split(")")[0],n=n.split(",");var i=n[4]}else var i=0;return Number(i)}function f(e,t,n){e.style["-webkit-transform"]=t+"("+n+")",e.style["-moz-transform"]=t+"("+n+")",e.style["-ms-transform"]=t+"("+n+")",e.style["-o-transform"]=t+"("+n+")",e.style.transform=t+"("+n+")"}function c(t){var n=[];return t.each(function(){var t=e(this),i=t.data("date").split("T");if(i.length>1)var r=i[0].split("/"),a=i[1].split(":");else if(i[0].indexOf(":")>=0)var r=["2000","0","0"],a=i[0].split(":");else var r=i[0].split("/"),a=["0","0"];var l=new Date(r[2],r[1]-1,r[0],a[0],a[1]);n.push(l)}),n}function v(e,t){return Math.round(t-e)}function u(e){for(var t=[],n=1;n<e.length;n++){var i=v(e[n-1],e[n]);t.push(i)}return Math.min.apply(null,t)}function m(e){for(var t=e.offsetTop,n=e.offsetLeft,i=e.offsetWidth,r=e.offsetHeight;e.offsetParent;)e=e.offsetParent,t+=e.offsetTop,n+=e.offsetLeft;return t<window.pageYOffset+window.innerHeight&&n<window.pageXOffset+window.innerWidth&&t+r>window.pageYOffset&&n+i>window.pageXOffset}function g(){return window.getComputedStyle(document.querySelector(".cd-horizontal-timeline"),"::before").getPropertyValue("content").replace(/'/g,"").replace(/"/g,"")}var h=e(".cd-horizontal-timeline"),w=60;h.length>0&&function(i){i.each(function(){var i=e(this),r={};r.timelineWrapper=i.find(".events-wrapper"),r.eventsWrapper=r.timelineWrapper.children(".events"),r.fillingLine=r.eventsWrapper.children(".filling-line"),r.timelineEvents=r.eventsWrapper.find("a"),r.timelineDates=c(r.timelineEvents),r.eventsMinLapse=u(r.timelineDates),r.timelineNavigation=i.find(".cd-timeline-navigation"),r.eventsContent=i.children(".events-content"),l(r,w);var d=o(r,w);i.addClass("loaded"),r.timelineNavigation.on("click",".next",function(e){e.preventDefault(),t(r,d,"next")}),r.timelineNavigation.on("click",".prev",function(e){e.preventDefault(),t(r,d,"prev")}),r.eventsWrapper.on("click","a",function(t){t.preventDefault(),r.timelineEvents.removeClass("selected"),e(this).addClass("selected"),p(e(this)),a(e(this),r.fillingLine,d),s(e(this),r.eventsContent)}),r.eventsContent.on("swipeleft",function(){"mobile"==g()&&n(r,d,"next")}),r.eventsContent.on("swiperight",function(){"mobile"==g()&&n(r,d,"prev")}),e(document).keyup(function(e){"37"==e.which&&m(i.get(0))?n(r,d,"prev"):"39"==e.which&&m(i.get(0))&&n(r,d,"next")})})}(h)}),$(document).ready(function(){$.ajax({url:"http://10.40.60.191:3030/v1/api/candidates",dataType:"json",type:"GET",success:function(e){for(var t=$("#profile-template").html(),n=Handlebars.compile(t),i=0;i<e.length;i++)i<3?$("#profile-3").append(n(e[i])):$("#profile-2").append(n(e[i]))}}),$.ajax({url:"http://10.40.60.191:3030/v1/api/places",dataType:"json",type:"GET",success:function(e){for(var t=$("#places-template").html(),n=Handlebars.compile(t),i=0;i<e.length;i++)0==i&&(e[i].class="selected"),e[i]["PRD-margin"]=60*(e[i].PRD-1),e[i]["PRI-margin"]=60*(e[i].PRI-1),e[i]["PT-margin"]=60*(e[i].PT-1),e[i]["MORENA-margin"]=60*(e[i].MORENA-1),e[i]["PAN-margin"]=60*(e[i].PAN-1),e[i].date=moment(e[i].date).format("DD/MM/YYYY"),$("#places").append(n(e[i]))},error:function(e){}})});