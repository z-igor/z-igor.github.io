!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=(s=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),r=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([o]).join("\n")}var s,a,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);i&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";var i=n(0),o=n.n(i)()(!1);o.push([e.i,"\n/* http://meyerweb.com/eric/tools/css/reset/ \n * v2.0 | 20110126\n * License: none (public domain)\n * start Reset css\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* end Reset css */\n",""]),t.a=o},function(e,t,n){"use strict";var i=n(0),o=n.n(i)()(!1);o.push([e.i,"\n.lds-ring {\n  display: block;\n  height: 100%;\n  position: absolute;\n  top: 100%;\n  left: 50%;\n}\n\n.lds-ring div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 64px;\n  height: 64px;\n  margin: 8px;\n  border: 8px solid #fcf;\n  border-radius: 50%;\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: grey transparent transparent transparent;\n}\n\n.lds-ring div:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n  animation-delay: -0.45s;\n}\n\n.lds-ring div:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s;\n}\n\n.lds-ring div:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n  animation-delay: -0.15s;\n}\n\n@-webkit-keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n",""]),t.a=o},function(e,t,n){var i=n(4),o=n(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);e.exports=o.locals||{}},function(e,t,n){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},i=[],o=0;o<e.length;o++){var r=e[o],l=t.base?r[0]+t.base:r[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var p=a(d),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==p?(s[p].references++,s[p].updater(u)):s.push({identifier:d,updater:m(u,t),references:1}),i.push(d)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,p=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=p(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function h(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,g=0;function m(e,t){var n,i,o;if(t.singleton){var r=g++;n=f||(f=c(t)),i=u.bind(null,n,r,!1),o=u.bind(null,n,r,!0)}else n=c(t),i=h.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=a(n[i]);s[o].references--}for(var r=l(e,t),c=0;c<n.length;c++){var d=a(n[c]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}n=r}}}},function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),r=n(1),s=n(2),a=o()(!1);a.i(r.a),a.i(s.a),a.push([e.i,'body{font-family:"Ubuntu",Tahoma,Helvetica,sans-serif;font-weight:400;background-color:#f2f2f2}#app{position:relative}.wrap{display:flex;flex-flow:row wrap;justify-content:space-between;align-items:center;padding:0 10px}.wrap.hide{display:none}.header{display:flex;flex-flow:row wrap;justify-content:space-between;align-items:center;background-color:#fff;margin:10px 15px;padding:15px;border-radius:5px;box-shadow:inset 0px -1px 3px 1px rgba(0,0,0,.1)}.header-versions a{color:#000;text-decoration:none}.header-versions a:hover{text-decoration:underline}.header-versions span{padding:0 5px;color:silver}.header-contacts{line-height:1.6;font-size:.8em}.header-contacts a{color:#000;text-decoration:none}.header-contacts a:hover{text-decoration:underline}.card{position:relative;width:300px;margin:5px auto;padding:10px;border-radius:5px}.card:hover .bg{top:0;left:0;right:0;bottom:0;background-color:silver;border-radius:10px}.preview{position:relative;margin-bottom:10px;max-height:400px}.preview__img{border-radius:5px;height:200px;overflow:hidden}.img-item{width:100%;transition:all 1s linear 0s;position:relative;top:0}.bg{position:absolute;top:20px;left:20px;right:-5px;bottom:40px;z-index:-1;background-color:#d3d3d3;border-radius:20px 20px 20px 50px;transition:all .2s ease-out}.title{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:flex-start;font-family:"Ubuntu",Tahoma,Helvetica,sans-serif;font-weight:400;font-weight:700;margin-bottom:10px}.title__link{font-size:1.2em;font-weight:800;color:#000;text-decoration:none}.title__link:hover{text-decoration:underline}.title__time{color:#000}.action-menu{position:relative;border-radius:5px 5px 0 0}.action-menu button{font-family:"Ubuntu",Tahoma,Helvetica,sans-serif;font-weight:400;font-weight:700;border:none;background-color:transparent;cursor:pointer}.action-menu_droplist{font-family:"Ubuntu",Tahoma,Helvetica,sans-serif;font-weight:400;position:absolute;right:0;top:16px;max-width:250px;overflow:hidden;background-color:#fff;border-radius:5px 0 5px 5px;z-index:10;display:none}.action-menu_droplist li{padding:4px 0}.action-menu_droplist li:not(:last-child){border-bottom:1px solid silver}.action-menu_droplist a{text-decoration:none;display:block;padding:0 7px;color:#000;font-size:.8em}.action-menu_droplist a:hover{text-decoration:underline}.action-menu:hover{background-color:#fff}.action-menu:hover .action-menu_droplist--toggle{display:block}.content{width:100%;height:50px;background-color:green;font-size:1em}.content-item{color:#fff;font-family:"Exo",sans-serif}.stack{font-family:"Ubuntu",Tahoma,Helvetica,sans-serif;font-weight:400;display:flex;flex-flow:row wrap;justify-content:flex-start;align-items:center;list-style:none;margin:0;padding:0}.stack li{margin:0 5px 5px 0;cursor:default;overflow:hidden}.stack__item{padding:2px 5px;background-color:gray;color:#fff;border-radius:5px;transition:all .1s linear 0s;transform:translate(0, -24px)}.stack--show li:nth-child(1) p{transition-delay:.05s;transform:translate(0, 0);opacity:1}.stack--show li:nth-child(2) p{transition-delay:.1s;transform:translate(0, 0);opacity:1}.stack--show li:nth-child(3) p{transition-delay:.15s;transform:translate(0, 0);opacity:1}.stack--show li:nth-child(4) p{transition-delay:.2s;transform:translate(0, 0);opacity:1}.stack--show li:nth-child(5) p{transition-delay:.25s;transform:translate(0, 0);opacity:1}.stack--show li:nth-child(6) p{transition-delay:.3s;transform:translate(0, 0);opacity:1}.stack--show li:nth-child(7) p{transition-delay:.35s;transform:translate(0, 0);opacity:1}.stack--show li:nth-child(8) p{transition-delay:.4s;transform:translate(0, 0);opacity:1}.stack--show li:nth-child(9) p{transition-delay:.45s;transform:translate(0, 0);opacity:1}.stack--show li:nth-child(10) p{transition-delay:.5s;transform:translate(0, 0);opacity:1}.stack--hide li:nth-child(1) p{transition-delay:.05s;opacity:0;transform:translate(0, -24px)}.stack--hide li:nth-child(2) p{transition-delay:.1s;opacity:0;transform:translate(0, -24px)}.stack--hide li:nth-child(3) p{transition-delay:.15s;opacity:0;transform:translate(0, -24px)}.stack--hide li:nth-child(4) p{transition-delay:.2s;opacity:0;transform:translate(0, -24px)}.stack--hide li:nth-child(5) p{transition-delay:.25s;opacity:0;transform:translate(0, -24px)}.stack--hide li:nth-child(6) p{transition-delay:.3s;opacity:0;transform:translate(0, -24px)}.stack--hide li:nth-child(7) p{transition-delay:.35s;opacity:0;transform:translate(0, -24px)}.stack--hide li:nth-child(8) p{transition-delay:.4s;opacity:0;transform:translate(0, -24px)}.stack--hide li:nth-child(9) p{transition-delay:.45s;opacity:0;transform:translate(0, -24px)}.stack--hide li:nth-child(10) p{transition-delay:.5s;opacity:0;transform:translate(0, -24px)}',""]),t.default=a},function(e,t,n){"use strict";n.r(t);const i=[{id:"p0",priority:1,title:"Алексеич бригадир",description:"Пет-проект",source:"https://z-igor.github.io/foreman_gh-ps/#/",cover:"../../works/alexeich_b/demo.png",coverBig:"",offUrl:"",stack:["React","Redux","Router","HTML","CSS","JS"],links:[{github:"https://github.com/z-igor/foreman_gh-ps/"},{inVision:"https://spathochy920970.invisionapp.com/public/prototype/sketvy4v1000l8e01llkrrp94"}]},{id:"p1",priority:2,title:"Mini constructor",description:"This mini constructor was developed via native javascript for view of first look",source:"../../works/njs0_mini-constructor/index.html",cover:"../../works/njs0_mini-constructor/mini-constructor.jpg",coverBig:"",offUrl:"https://vk.com/doc2000002202_440831900?hash=d587464e78ed55cf9f&dl=4b5e0dfee2ac6c566e",stack:["HTML","CSS","JS"],links:[{github:"https://github.com/z-igor/z-igor.github.io/tree/master/works/njs0_mini-constructor"}]},{id:"p2",priority:3,title:"Creative+",description:"Today’s neat little web design template is Creative+ – A minimal blog design layout. This clean and minimal design is ready to take straight into WordPress or your CMS of choice. Download this free PSD Blog template web design psd and get blogging!",source:"../../works/creative_plus/index.html",cover:"../../works/creative_plus/this_300.jpg",coverOrig:"../../works/creative_plus/creative_orig.png",offUrl:"http://blazrobar.com/free-psd-website-templates/creative-a-free-psd-blog-template-web-design/",stack:["HTML","CSS","JS"],links:[{github:"https://github.com/z-igor/z-igor.github.io/tree/master/works/creative_plus"}]},{id:"p3",priority:3,title:"Dsgn",description:"DSGN - Free .PSD Template",source:"../../works/dsgn/index.html",cover:"../../works/dsgn/this_300.jpg",coverOrig:"../../works/dsgn/dsgn_orig_3000-7600.jpg",offUrl:"http://theuncreativelab.com/portfolio/dsgn-free-psd-template/",stack:["HTML","CSS","JS"],links:[{github:"https://github.com/z-igor/z-igor.github.io/tree/master/works/dsgn"}]},{id:"p4",priority:3,title:"Gift shop",description:"Giftshop is a, you’ve guessed it, template for gift shops. Flat and modern design will ensure your products are showcased in a unique way.",source:"../../works/gift_shop/index.htm",cover:"../../works/gift_shop/this_300.jpg",coverOrig:"../../works/gift_shop/gift_shop_1140.jpg",offUrl:"https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/Giftshop_Free_PSD_eCommerce_Template.png",stack:["HTML","CSS","JS"],links:[{github:"https://github.com/z-igor/z-igor.github.io/tree/master/works/gift_shop"}]},{id:"p5",priority:3,title:"Golden",description:"A clean, stylish, one page Bootstrap portfolio theme perfect for your agency or small business.",source:"../../works/golden_theme/index.html",cover:"../../works/golden_theme/this_300.jpg",coverOrig:"../../works/golden_theme/golden_theme_orig.jpg",offUrl:"https://startbootstrap.com/template-overviews/agency/",stack:["HTML","CSS","JS"],links:[{github:"https://github.com/z-igor/z-igor.github.io/tree/master/works/golden_theme"}]},{id:"p6",priority:3,title:"Wise advice 1C",description:"Известная и признанная консалтинговая компания, которая вносит ощутимый вклад в развитие цивилизованного и эффективного бизнес-сообщества",source:"../../works/WiseAdvice/index.html",cover:"../../works/WiseAdvice/wiseAdwice.jpg",coverOrig:"",offUrl:"https://wiseadvice.ru/o-kompanii/",stack:["HTML","CSS","JS"],links:[{github:"https://github.com/z-igor/z-igor.github.io/tree/master/works/WiseAdvice"}]},{id:"p7",priority:3,title:"Business Template Design",description:"Included in the download is the complete design for a homepage including sections for featured content, screenshots, screencasts, various features, newsletter signup and much more – everything you would need to start building a full-on corporate website",source:"../../works/redux/index.html",cover:"../../works/redux/this_300.jpg",coverOrig:"../works/redux/redux_orig.jpg",offUrl:"http://www.premiumpixels.com/freebies/business-website-template-design/",stack:["HTML","CSS","JS"],links:[{github:"https://github.com/z-igor/z-igor.github.io/tree/master/works/redux"}]},{id:"p8",priority:3,title:"Treehouse (PSD Template)",description:"Today’s very cool and sleek download is from our kind friends over at <a href='http://freebiesxpress.com/'>http://freebiesxpress.com/</a>. This bright and spacious design suits startup companies or even ecommerce websites.",source:"../../works/tree_house/index.html",cover:"../../works/tree_house/this_300.jpg",coverOrig:"../works/redux/redux_orig.jpg",offUrl:"http://blazrobar.com/free-psd-website-templates/treehouse-website-psd-template/",stack:["HTML","CSS","JS"],links:[{github:"https://github.com/z-igor/z-igor.github.io/tree/master/works/tree_house"}]},{id:"p9",priority:3,title:"TwoBytes (PSD Template)",description:"TwoBytes – Free PSD Website Template. Meet TwoBytes – A free minimal PSD website template. Free to use for just about anything.",source:"../../works/two_bytes/index.html",cover:"../../works/two_bytes/this_300.jpg",coverOrig:"../../works/two_bytes/two_bytes_orig.jpg",offUrl:"http://blazrobar.com/free-psd-website-templates/twobytes-free-psd-website-template/",stack:["HTML","CSS","JS"],links:[{github:"https://github.com/z-igor/z-igor.github.io/tree/master/works/two_bytes"}]}];n(3);const o=document.querySelector(".wrap");try{Vue.config.devtools=!0,o.classList.remove("hide")}catch(e){throw o.classList.add("hide"),new Error(e.message)}new Vue({el:"#app",name:"App",data:()=>({data:i.map(e=>({...e,hover:!1,stylesImg:{}})),preloader:!0,isDestroy:null}),methods:{onMouseOver(e,t){let n=e.target,i=null;t.hover=!0,"img-item"===n.className&&(n.height>=990&&(i=6),n.height<=790&&(i=4),n.height<=590&&(i=3),n.height<=290&&(i=1),t.stylesImg={transitionDuration:i+"s",transform:`translate(0, -${n.height-200}px)`})},onMouseLeave(e,t){let n=e.target;t.hover=!1,"card"===n.className&&(t.stylesImg={transitionDuration:"1s",transform:"translate(0, 0)"})}},mounted(){window.onload=e=>{this.preloader=!1}},destroyed(){this.isDestroy=null}})}]);