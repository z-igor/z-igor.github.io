!function(t){var n={};function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(i,r,function(n){return t[n]}.bind(null,r));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=5)}([function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",i=t[3];if(!i)return e;if(n&&"function"==typeof btoa){var r=(s=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),o=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[e].concat(o).concat([r]).join("\n")}var s,a,c;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,i){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(r[s]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);i&&r[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),n.push(c))}},n}},function(t,n){t.exports='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="20px" y="20px" viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve"><rect class="st0" width="7.9" height="20"></rect><rect x="12.1" class="st0" width="7.9" height="20"></rect></svg>'},function(t,n,e){"use strict";var i=e(0),r=e.n(i)()(!1);r.push([t.i,"\n/* http://meyerweb.com/eric/tools/css/reset/ \n * v2.0 | 20110126\n * License: none (public domain)\n * start Reset css\n*/\nhtml {\n  width: 100vw;\n  height: 100vh;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* end Reset css */\n",""]),n.a=r},function(t,n){t.exports='<svg viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 20V0L17 10L0 20Z" fill></path></svg>'},function(t,n){t.exports='<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" fill></rect></svg>'},function(t,n,e){"use strict";e.r(n);e(6);var i=e(1),r=e.n(i),o=e(3),s=e.n(o),a=e(4),c=e.n(a);const l=Vue.component("temp-timer",{props:["timer"],data:()=>({h:0,m:0,s:30,defaultTime:{h:0,m:0,s:45},stop:!1,pause:!1,start:!0,interval:null,startStyle:!1}),computed:{formattedTimer(){return this.h>0?`${this.h}:${this.m}:${this.s}`:this.m>0?`${this.m}:${this.s}`:0===this.m&&0===this.h&&0===this.s?(this.onStop(),`${this.h}:${this.m}:${this.s}`):this.s}},watch:{s:function(t){-1===t&&(this.s=59,this.m-=1)},m:function(t){-1===t&&(this.m=59,this.h-=1)}},methods:{onStart(){this.start=!1,this.startStyle=!0,this.pause=!0,this.stop=!1,this.interval=setInterval(()=>{this.s--},1e3)},onPause(){r.a&&clearInterval(this.interval),this.start=!0,this.startStyle=!1,this.pause=!1,this.stop=!1},onStop(){this.s=this.defaultTime.s,this.m=this.defaultTime.m,this.h=this.defaultTime.h,this.start=!0,this.startStyle=!1,this.pause=!1,this.stop=!0,clearInterval(this.interval)}},template:`\n  <div :class="['timer', {'active': startStyle}]">\n      <p class="result">{{ formattedTimer }}</p>\n      <div class="actions">\n        <button @click="onStart" class="btn start" v-if="!pause">${s.a}</button>\n        <button @click="onPause" class="btn pause" v-else>${r.a}</button>\n        <button @click="onStop" class="btn stop">${c.a}</button>\n      </div>\n  </div>\n  `,mounted(){},destroyed(){clearInterval(this.interval),this.interval=null}}),u=Vue.component("temp-timer-add",{template:'\n  <div class="timer-add" @click="$emit(\'add\')">\n    <p>+</p>\n  </div>\n  '});new Vue({el:"#app",name:"App",data:()=>({timers:[{id:"t0"},{id:"t1"},{id:"t2"}],count:0,isDestroy:null}),methods:{onAddClick(){this.count++,this.timers.push({id:"t"+this.count})}},mounted(){this.count=this.timers.length},destroyed(){this.isDestroy=null},components:{"block-timer":l,"add-block":u}})},function(t,n,e){var i=e(7),r=e(8);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};i(r,o);t.exports=r.locals||{}},function(t,n,e){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),s=[];function a(t){for(var n=-1,e=0;e<s.length;e++)if(s[e].identifier===t){n=e;break}return n}function c(t,n){for(var e={},i=[],r=0;r<t.length;r++){var o=t[r],c=n.base?o[0]+n.base:o[0],l=e[c]||0,u="".concat(c," ").concat(l);e[c]=l+1;var d=a(u),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(s[d].references++,s[d].updater(f)):s.push({identifier:u,updater:v(f,n),references:1}),i.push(u)}return i}function l(t){var n=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var r=e.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(t){n.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(n);else{var s=o(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}return n}var u,d=(u=[],function(t,n){return u[t]=n,u.filter(Boolean).join("\n")});function f(t,n,e,i){var r=e?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=d(n,r);else{var o=document.createTextNode(r),s=t.childNodes;s[n]&&t.removeChild(s[n]),s.length?t.insertBefore(o,s[n]):t.appendChild(o)}}function p(t,n,e){var i=e.css,r=e.media,o=e.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var h=null,m=0;function v(t,n){var e,i,r;if(n.singleton){var o=m++;e=h||(h=l(n)),i=f.bind(null,e,o,!1),r=f.bind(null,e,o,!0)}else e=l(n),i=p.bind(null,e,n),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return i(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;i(t=n)}else r()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var e=c(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<e.length;i++){var r=a(e[i]);s[r].references--}for(var o=c(t,n),l=0;l<e.length;l++){var u=a(e[l]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}e=o}}}},function(t,n,e){"use strict";e.r(n);var i=e(0),r=e.n(i),o=e(2),s=r()(!1);s.i(o.a),s.push([t.i,".btn{border:none;background-color:transparent;color:inherit;font-family:inherit;cursor:pointer;outline:none}.btn:active svg{fill:#fff}body{font-family:Helvetica,sans-serif;background-color:#353638}#app{position:relative}.wrap{display:flex;flex-flow:row wrap;justify-content:space-evenly;align-items:flex-start;align-content:flex-start;margin:75px 106px 35px}.timer-add,.timer{position:relative;display:flex;flex-flow:column nowrap;background-color:dimgray;color:#9e9e9e;max-width:225px;width:225px;flex-basis:30%;height:120px;margin:20px}.timer-add.active,.timer.active{color:#fff}.timer-add.active svg,.timer.active svg{fill:#fff}.timer-add{background-color:dimgray;text-align:center;font-size:4em;line-height:120px;cursor:pointer}.timer-add:hover p{color:#fff}.result,.actions{position:relative;box-sizing:border-box}.result{height:60px;display:flex;justify-content:center;align-items:center;font-size:1.2em;border-bottom:1px solid #9e9e9e}.actions{height:60px;display:flex;justify-content:center;align-items:center}.actions .btn{padding:0 20px}svg{width:20px;fill:#9e9e9e}@media(max-width: 1024px){.wrap{justify-content:space-around}.timer{margin:25px}}@media(max-width: 768px){.wrap{flex-flow:column nowrap;justify-content:center;align-items:center}}",""]),n.default=s}]);