(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>c});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([e.id,"* {\n    margin: 0;\n  }\n  \n  body {\n    background-color: #2e5253;\n    margin: 0;\n    background-image: url('https://media.istockphoto.com/id/670957540/fr/photo/caf%C3%A9-et-un-croissant.jpg?s=612x612&w=0&k=20&c=eORcVs7y60BNzoWOsKARkQLb19oh-kUHU3l3MstV2PY=');\n   background-size: cover;\n   background-repeat: no-repeat;\n  }\n  \n  #content {\n    \n    margin: 0 auto;\n    max-width: 1000px;\n    min-width: 360px;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n  }\n  \n  p,\n  h1,\n  button {\n    font-family: roboto-regular;\n  }\n  \n  p,\n  h1 {\n    color: rgb(214, 222, 224);\n    padding-bottom: 20px;\n  }\n  \n  p,\n  button {\n    font-size: 1.1em;\n  }\n  \n  p,\n  h1,\n  img {\n    padding-left: 40px;\n    padding-right: 40px;\n    background-size: cover;\n    width: 100%;\n  }\n  \n  h1 {\n    padding-top: 40px;\n  }\n  \n  nav {\n    background-color: #25323b;\n    margin: 0;\n    height: 45px;\n    display: flex;\n    justify-content: center;\n  }\n  \n  button {\n    border-radius: 0;\n    border: none;\n    color: white;\n    background-color: #4a5e6d;\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  \n  button:hover {\n    background-color: #509cb9;\n  }\n h1, ul,li{\n    list-style: none;\n    font-style: italic;\n    align-items: center;\n  }\n  h1{\n    align-items: center;\n    justify-content: center;\n  }",""]);const c=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=r(f,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{function e(){let e=document.getElementById("content");e.innerHTML="";let n=document.createElement("h1");n.textContent="CAFE COFFEE";let t=document.createElement("p");t.textContent="Cafe Cofeee opened on Thanksgiving Day 1990. Chef / Owner Ron Silver began baking pies and selling them to restaurants and his neighbors out of a small kitchen at the corner of Hudson and North Moore St. in Tribeca.Today, NYC’s beloved restaurant and pie shop celebrates 27 years of classic, made from scratch American cooking. .",e.append(n,t)}var n=t(72),o=t.n(n),r=t(825),a=t.n(r),i=t(659),c=t.n(i),s=t(56),d=t.n(s),l=t(540),u=t.n(l),p=t(113),f=t.n(p),m=t(208),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),o()(m.A,h),m.A&&m.A.locals&&m.A.locals,e(),document.getElementById("home-btn").addEventListener("click",(n=>{e()})),document.getElementById("menu-btn").addEventListener("click",(e=>{!function(){let e=document.getElementById("content");e.innerHTML="";let n=document.createElement("h1");n.textContent="Our Menu";let t=document.createElement("p");t.innerHTML="<ul><li > Americano </li><li>Cappuccino</li><li>Espresso </li><li> Latte </li><li>Iced Coffee </li><li>Caramel pudding</li></ul>",e.append(n,t)}()})),document.getElementById("about-btn").addEventListener("click",(e=>{!function(){let e=document.getElementById("content");e.innerHTML="";let n=document.createElement("h1");n.textContent="About Us";let t=document.createElement("p");t.textContent="\n    At Cafe Coffee , we believe the best dishes are the ones that remind you of childhood. A portion of great food should make you feel like you are wrapped in a warm blanket.\n\n    At our location in Boston or online, you will find the best dishes you didn't know you craved: extra-creamy mac and cheese, hot chicken casserole, fried dumplings like your mama makes, and many more.",e.append(n,t)}()}))})()})();