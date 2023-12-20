/*!
   JW Player version 8.26.4
   Copyright (c) 2022, JW Player, All Rights Reserved
   This source code and its use and distribution is subject to the terms
   and conditions of the applicable license agreement.
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.26.4/notice.txt
*/
"use strict";(self.webpackChunkjwplayer=self.webpackChunkjwplayer||[]).push([[347],{2776:function(e,t,r){r.r(t);var n=r(1776),a=r(7477),i=/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/,s=/^-?\d+$/,u=/\r\n|\n/,o=/^NOTE($|[ \t])/,c=/^[^\sa-zA-Z-]+/,l=/:/,f=/\s/,h=/^\s+/,g=/-->/,d=/^WEBVTT([ \t].*)?$/,p=function(){return{decode:function(e){if(!e)return"";if("string"!=typeof e)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}},b=function(e,t,r){this.window=e,this.state="INITIAL",this.buffer="",this.decoder=t||new p,this.syncCueParsing=r,this.regionList=[],this.maxCueBatch=1e3},v=function(){this.values=Object.create(null)};v.prototype={set:function(e,t){this.get(e)||""===t||(this.values[e]=t)},get:function(e,t,r){return r?this.has(e)?this.values[e]:t[r]:this.has(e)?this.values[e]:t},has:function(e){return e in this.values},alt:function(e,t,r){for(var n=0;n<r.length;++n)if(t===r[n]){this.set(e,t);break}},integer:function(e,t){s.test(t)&&this.set(e,parseInt(t,10))},percent:function(e,t){return(t=parseFloat(t))>=0&&t<=100&&(this.set(e,t),!0)}};var E=new a.Z(0,0,0),T="middle"===E.align?"middle":"center",m=function(e,t,r){var n=e,a=function(){var t=function(e){var t=function(e,t,r,n){return 3600*(0|e)+60*(0|t)+(0|r)+(0|n)/1e3},r=e.match(i);return r?r[3]?t(r[1],r[2],r[3].replace(":",""),r[4]):r[1]>59?t(r[1],r[2],0,r[4]):t(0,r[1],r[2],r[4]):null}(e);if(null===t)throw new Error("Malformed timestamp: "+n);return e=e.replace(c,""),t},s=function(){e=e.replace(h,"")};if(s(),t.startTime=a(),s(),"--\x3e"!==e.substr(0,3))throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): "+n);e=e.substr(3),s(),t.endTime=a(),s(),function(e,t){var n=new v;!function(e,t,r,n){for(var a=n?e.split(n):[e],i=0;i<=a.length;i+=1)if("string"==typeof a[i]){var s=a[i].split(r);2===s.length&&t(s[0],s[1])}}(e,(function(e,t){switch(e){case"region":for(var a=r.length-1;a>=0;a--)if(r[a].id===t){n.set(e,r[a].region);break}break;case"vertical":n.alt(e,t,["rl","lr"]);break;case"line":var i=t.split(","),s=i[0];n.integer(e,s),n.percent(e,s)&&n.set("snapToLines",!1),n.alt(e,s,["auto"]),2===i.length&&n.alt("lineAlign",i[1],["start",T,"end"]);break;case"position":var u=t.split(",");n.percent(e,u[0]),2===u.length&&n.alt("positionAlign",u[1],["start",T,"end","line-left","line-right","auto"]);break;case"size":n.percent(e,t);break;case"align":n.alt(e,t,["start",T,"end","left","right"])}}),l,f),t.region=n.get("region",null),t.vertical=n.get("vertical","");var a=n.get("line","auto");"auto"===a&&-1===E.line&&(a=-1),t.line=a,t.lineAlign=n.get("lineAlign","start"),t.snapToLines=n.get("snapToLines",!0),t.size=n.get("size",100),t.align=n.get("align",T);var i=n.get("position","auto");"auto"===i&&50===E.position&&(i="start"===t.align||"left"===t.align?0:"end"===t.align||"right"===t.align?100:50),t.position=i}(e,t)};b.prototype={parse:function(e,t){var r=this;e&&(r.buffer+=r.decoder.decode(e,{stream:!0}));var i,s=function(){for(var e=r.buffer,t=0;t<e.length&&"\r"!==e[t]&&"\n"!==e[t];)++t;var n=e.substr(0,t);return"\r"===e[t]&&++t,"\n"===e[t]&&++t,r.buffer=e.substr(t),n},c=function(){"CUETEXT"===r.state&&r.cue&&r.oncue&&r.oncue(r.cue),r.cue=null,r.state="INITIAL"===r.state?"BADWEBVTT":"BADCUE"};try{if("INITIAL"===r.state){if(!u.test(r.buffer))return this;var f=(i=s()).match(d);if(!f||!f[0])throw new Error("Malformed WebVTT signature.");r.state="HEADER"}}catch(e){return c(),this}var h=!1,p=0;!function e(){try{for(;r.buffer&&(p<=r.maxCueBatch||r.syncCueParsing);){if(!u.test(r.buffer))return r.flush(),this;switch(h?h=!1:i=s(),r.state){case"HEADER":l.test(i)||i||(r.state="ID");break;case"NOTE":i||(r.state="ID");break;case"ID":if(o.test(i)){r.state="NOTE";break}if(!i)break;if(r.cue=new a.Z(0,0,""),r.state="CUE",!g.test(i)){r.cue.id=i;break}case"CUE":try{m(i,r.cue,r.regionList)}catch(e){r.cue=null,r.state="BADCUE";break}r.state="CUETEXT";break;case"CUETEXT":var f=g.test(i);if((!i||f)&&(h=!0)){r.oncue&&(p+=1,r.oncue(r.cue)),r.cue=null,r.state="ID";break}r.cue.text&&(r.cue.text+="\n"),r.cue.text+=i;break;case"BADCUE":i||(r.state="ID")}}if(p=0,r.buffer)(0,n.U)(e);else if(!t)return r.flush(),this}catch(e){return c(),this}}()},flush:function(){var e=this;if(e.buffer+=e.decoder.decode(),(e.cue||"HEADER"===e.state)&&(e.buffer+="\n\n",e.parse(void 0,!0)),"INITIAL"===e.state)throw new Error("Malformed WebVTT signature.");return e.onflush&&e.onflush(),this}},t.default=b}}]);