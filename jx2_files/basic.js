function $(objectId) { 
if(document.getElementById && document.getElementById(objectId)) { // W3C DOM 
return document.getElementById(objectId); 
} 
else if (document.all && document.all(objectId)) { // MSIE 4 DOM 
return document.all(objectId); 
} 
else if (document.layers && document.layers[objectId]) { // NN 4 DOM.. note: this won't find nested layers 
return document.layers[objectId]; 
} 
else { 
return false; 
} 
}

function gourl(x){location.href=x;}

//顶部搜索
var nsi=1;
function topover(){
document.getElementById("topdiv").style.display="";
}
function topout(){
document.getElementById("topdiv").style.display="none";
}
function topjconc(x,y){
nsi=x;
document.getElementById("topnwd").innerHTML=y;
topout();
}
function topftj(){
if((document.topf1.topt.value).replace("/\s/","")==""){alert("请输入搜索关键词");document.topf1.topt.focus();return false;}
topf1.action="../search/index.php?admin="+nsi;
}

//下拉菜单
function leftmenuover(){
 document.getElementById("leftmenu").style.display="";
 if(document.getElementById("leftnone")){yhifdis(1);}
}

function leftmenuout(){
 if(!document.getElementById("leftnone")){document.getElementById("leftmenu").style.display="none";}else{yhifdis(0);}
}

function yhmenuover(x){
document.getElementById("yhmenu"+x).className="menu1 menu2";	
document.getElementById("rmenu"+x).style.display="";	
}

function yhmenuout(x){
document.getElementById("yhmenu"+x).className="menu1";	
document.getElementById("rmenu"+x).style.display="none";	
}

//等待
function tjwait(){
document.getElementById("tjbtn").style.display="none";
document.getElementById("tjing").style.display="";	
}

//弹窗
function tangc(x){
if(1==x){document.getElementById("bghui").style.display="";document.getElementById("openw").style.display="";}
else if(0==x){document.getElementById("bghui").style.display="none";document.getElementById("openw").style.display="none";}
var winWidth;
var winHeight;
if (document.body && document.body.clientHeight && document.body.clientWidth)
{
winHeight = document.body.clientHeight;
winWidth = document.body.clientWidth;
}
document.getElementById("bghui").style.width=winWidth+"px";
document.getElementById("bghui").style.height=winHeight+"px";
var isIE=window.XMLHttpRequest?false:true;
var aIsIE={};
window.onload=function(){
if(isIE){
window.onscroll=doIE;
window.onresize=doIE; }
function doIE(){
aIsIE.top=document.documentElement.scrollTop;
aIsIE.left=document.documentElement.scrollLeft;
var width=document.documentElement.clientWidth;
var height=document.documentElement.clientHeight;
var oDiv=document.getElementById("openw");
oDiv.style.top=aIsIE.top+(height-oDiv.offsetHeight)/2+'px';
oDiv.style.left=aIsIE.left+(width-oDiv.offsetWidth)/2+'px';
}
}
}
//登录验证
var xmlHttpses = false;
try {
  xmlHttpses = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
  try {
    xmlHttpses = new ActiveXObject("Microsoft.XMLHTTP");
  } catch (e2) {
    xmlHttpses = false;
  }
}
if (!xmlHttpses && typeof XMLHttpRequest != 'undefined') {
  xmlHttpses = new XMLHttpRequest();
}
function userCheckses(){
    url =document.getElementById("webhttp").innerHTML+"tem/sesCheck.php";
    xmlHttpses.open("get", url, true);
    xmlHttpses.onreadystatechange = updatePageses;
    xmlHttpses.send(null);
	}
function updatePageses() {
  if (xmlHttpses.readyState == 4) {
   response = xmlHttpses.responseText;
   response=response.replace(/[\r\n]/g,'');
   if(response=="0"){document.getElementById("notlogin").style.display="";document.getElementById("yeslogin").style.display="none";return false;}
   else{
   r=response.split(" ");
   document.getElementById("yeslogin").style.display="";
   document.getElementById("notlogin").style.display="none";
   document.getElementById("yesuid").innerHTML=r[0];
   if(r[1]=="yes"){document.getElementById("dontqd").style.display="";document.getElementById("needqd").style.display="none";}
   else{document.getElementById("dontqd").style.display="none";document.getElementById("needqd").style.display="";}
   return false;
   }
  }
}
//回到顶部
function gotoTop(acceleration,stime){acceleration=acceleration||0.1;stime=stime||10;var x1=0;var y1=0;var x2=0;var y2=0;var x3=0;var y3=0;if(document.documentElement){x1=document.documentElement.scrollLeft||0;y1=document.documentElement.scrollTop||0;}
if(document.body){x2=document.body.scrollLeft||0;y2=document.body.scrollTop||0;}
var x3=window.scrollX||0;var y3=window.scrollY||0;var x=Math.max(x1,Math.max(x2,x3));var y=Math.max(y1,Math.max(y2,y3));var speeding=1+ acceleration;window.scrollTo(Math.floor(x/speeding),Math.floor(y/speeding));if(x>0||y>0){var run="gotoTop("+ acceleration+", "+ stime+")";window.setTimeout(run,stime);}}

//头部下拉导航
function lover(x){
document.getElementById("topu1l"+x).className="l"+x+" l"+x+"h";document.getElementById("umenu"+x).style.display="";
}
function lout(x){
document.getElementById("topu1l"+x).className="l"+x;document.getElementById("umenu"+x).style.display="none";
}

//qq客服
function gdqqnover(){
document.getElementById("gdqqn").style.display="none";	
document.getElementById("gdqqh").style.display="";	
}
function gdqqhout(){
document.getElementById("gdqqn").style.display="";	
document.getElementById("gdqqh").style.display="none";	
}
var tips; 
var theTop = 210/*这是默认高度,越大越往下*/; 
var old = theTop;
function initFloatTips() {
tips = document.getElementById('floatTips');
moveTips();
};
function moveTips() {
tt = 50;
if (window.innerHeight) {
pos = window.pageYOffset
}
else if (document.documentElement && document.documentElement.scrollTop) {
pos = document.documentElement.scrollTop
}
else if (document.body) {
pos = document.body.scrollTop;
}
pos = pos - tips.offsetTop + theTop;
pos = tips.offsetTop + pos / 10;
if (pos < theTop) pos = theTop;
if (pos != old) {
tips.style.top = pos + "px";
tt = 10;
}
old = pos;
setTimeout(moveTips, tt);
}
