!function(r){var e={};function n(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=r,n.c=e,n.d=function(t,o,r){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(o,t){if(1&t&&(o=n(o)),8&t)return o;if(4&t&&"object"==typeof o&&o&&o.__esModule)return o;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:o}),2&t&&"string"!=typeof o)for(var e in o)n.d(r,e,function(t){return o[t]}.bind(null,e));return r},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=2)}([function(t,o,r){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var c=function(t){return document.querySelectorAll(t)};o.es=c,o.on_=function(r,o,e,n){if(void 0===o&&(o=""),void 0===e&&(e={}),void 0===n&&(n=-1),-1===r.constructor.toString().indexOf("Array")&&""!==o)-1<n?c(r)[n].addEventListener(o,e):Array.from(c(r),function(t){return t.addEventListener(o,e)});else for(var t=function(o,t){void 0===r[o][3]&&(r[o][3]=-1),-1<n?c(r[o][0])[r[o][3]].addEventListener(r[o][1],r[o][2]):Array.from(c(r[o][0]),function(t){return t.addEventListener(r[o][1],r[o][2])})},i=0,u=r.length;i<u;i++)t(i)},o.css_=function(r,o,e,t){if(void 0===o&&(o=""),void 0===e&&(e=-1),void 0===t&&(t=""),"GET"===t.toUpperCase()&&-1<e)return c(r)[e].style[o];if(-1===r.constructor.toString().indexOf("Array")&&""!==o)-1<e?Object.assign(c(r)[e].style,o):Array.from(c(r),function(t){Object.assign(t.style,o)});else for(var n=function(o,t){void 0===r[o][2]&&(r[o][2]=-1),-1<e?Object.assign(c(r[o][0])[r[o][2]].style,r[o][1]):Array.from(c(r[o][0]),function(t){Object.assign(t.style,r[o][1])})},i=0,u=r.length;i<u;i++)n(i)},o.html_=function(r,o,e){if(void 0===o&&(o=""),void 0===e&&(e=-1),"GET"===o.toUpperCase()&&-1<e)return c(r)[e].innerHTML;if(-1===r.constructor.toString().indexOf("Array")&&""!==o)-1<e?c(r)[e].innerHTML=o:Array.from(c(r),function(t){t.innerHTML=o});else for(var t=function(o,t){void 0===r[o][2]&&(r[o][2]=-1),-1<e?c(r[o][0])[r[o][2]].innerHTML=r[o][1]:Array.from(c(r[o][0]),function(t){t.innerHTML=r[o][1]})},n=0,i=r.length;n<i;n++)t(n)},o.attr_=function(r,o,e,t){if(void 0===o&&(o=""),void 0===e&&(e=-1),void 0===t&&(t=""),"GET"===t.toUpperCase()&&-1<e)return c(r)[e].getAttribute(o);if(-1===r.constructor.toString().indexOf("Array")&&""!==o)-1<e?Object.assign(c(r)[e].setAttribute,o):Array.from(c(r),function(t){Object.assign(t.setAttribute,o)});else for(var n=function(o,t){void 0===r[o][2]&&(r[o][2]=-1),-1<e?Object.assign(c(r[o][0])[r[o][2]].setAttribute,r[o][1]):Array.from(c(r[o][0]),function(t){Object.assign(t.setAttribute,r[o][1])})},i=0,u=r.length;i<u;i++)n(i)}},,function(t,o,r){var e=0,n=0,i=new Date,u=r(0),c=u.on_,f=u.css_,s=u.html_,a=u.attr_,d=function(t){0<t?(f([["body",{background:"#333"}],["#toNight",{transform:"scale(0)"}],["#toLight",{transform:"scale(1)"}],["#about, #support",{color:"#eee"}],["#mode",{color:"#fff"}]]),a("#shadow feFuncA",{slope:".5"}),s("#mode","dark mode")):(f([["body",{background:"#fff"}],["#toNight",{transform:"scale(1)"}],["#toLight",{transform:"scale(0)"}],["#about, #support",{color:"#222"}],["#mode",{color:"#111"}]]),a("#shadow feFuncA",{slope:".25"}),s("#mode","light mode"))};e=18<=i.getHours()||i.getHours()<=8?1:0,setInterval(function(){1!==n&&(e=18<=i.getHours()||i.getHours()<=8?1:0)},1e3),c([["#toNight","click",function(){n=18<=i.getHours()||i.getHours()<=8?1:0,d(e=1)}],["#toLight","click",function(){n=i.getHours()<18&&8<i.getHours()?1:0,d(e=0)}],["#about","mouseover",function(){f("#about",{color:"#222"})}],["#about","mouseout",function(){e="rgb(255, 255, 255)"===f("body","background-color",0,"GET")?0:1,f("#about",0<e?{color:"#fff"}:{color:"#222"})}],["#support","mouseover",function(){f("#support",{color:"#222"})}],["#support","mouseout",function(){e="rgb(255, 255, 255)"===f("body","background-color",0,"GET")?0:1,f("#support",0<e?{color:"#fff"}:{color:"#222"})}]]),d(e);var l,g=navigator.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];"Chrome"===g[1]&&null!=(l=navigator.userAgent.match(/\b(Edge)\/(\d+)/))&&(g=l),"Edge"===g[1]?s("#brand p:last-of-type","ATTENTION, DOES NOT WORK IN "+g[1].toUpperCase()+" !!!"):/trident/i.test(g[1])?s("#brand p:last-of-type","ATTENTION, DOES NOT WORK IN IE !!!"):f("#brand p:last-of-type",{opacity:0,animation:"none"})}]);