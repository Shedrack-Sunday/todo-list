(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"body {\r\n    background-color: #f6f6f6;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: #333;\r\n    height: 100vh;\r\n  }\r\n  \r\n  input {\r\n    font-style: oblique;\r\n    border: none;\r\n    padding: 1em;\r\n    font-size: 1em;\r\n  }\r\n  \r\n  ul {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  \r\n  li {\r\n    padding: 1em;\r\n    margin: 0;\r\n    list-style: none;\r\n  }\r\n  \r\n  .title,\r\n  input,\r\n  li {\r\n    border-bottom: lightgray solid 1px;\r\n  }\r\n  \r\n  label {\r\n    margin-left: 0.5em;\r\n  }\r\n  \r\n  .title {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 1em 1em;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n  }\r\n  \r\n  .title > p {\r\n    margin: 0;\r\n  }\r\n  \r\n  .item-element {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  .icon-menu-container {\r\n    padding: 0;\r\n    width: min-content;\r\n    cursor: cell;\r\n  }\r\n  \r\n  .checkbox-container {\r\n    display: flex;\r\n  }\r\n  \r\n  .root {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n    background-color: white;\r\n    box-shadow: 0 5px 20px -5px rgba(0, 0, 0, 0.76);\r\n    -webkit-box-shadow: 0 5px 20px -5px rgba(0, 0, 0, 0.76);\r\n    -moz-box-shadow: 0 5px 20px -5px rgba(0, 0, 0, 0.76);\r\n    width: 26rem;\r\n  }\r\n  \r\n  .container-todo {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n  }\r\n  \r\n  .clear-btn {\r\n    border: none;\r\n    background-color: white;\r\n    cursor: pointer;\r\n    align-self: center;\r\n    margin: 1em;\r\n}\r\n",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),l=0;l<i.length;l++){var d=t(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},380:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(380),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=[{description:"Solve 2 leetcode questions",completed:!0,index:0},{description:"deploy code to production",completed:!1,index:1},{description:"fix Cloudintern code bug",completed:!1,index:2},{description:"Automate CI/CI on jogar project",completed:!0,index:3}];document.querySelector(".root").appendChild(function(){const e=document.createElement("div"),n=document.createElement("button"),t=document.createElement("input"),r=document.createElement("ul");return e.classList.add("container-todo"),t.placeholder="Add to your list...",n.textContent="Clear all completed",n.classList.add("clear-btn"),n.disabled=!0,h.map((e=>(r.appendChild(function(e){let n=!1;const t=document.createElement("li"),r=document.createElement("div");r.classList.add("item-element");const o=document.createElement("div");o.classList.add("checkbox-container");const i=document.createElement("label"),a=document.createElement("div");a.classList.add("icon-menu-container"),document.createElement("div").innerHTML='<i class="fas fa-trash-alt"></i>',a.innerHTML='<i class="fas fa-ellipsis-v"></i>';const c=document.createElement("input");return c.type="checkbox",c.id=`check${e.index}`,i.htmlFor=`check${e.index}`,i.innerText=e.description,i.addEventListener("click",(()=>{n=!n,i.style.textDecoration=!0===n?"line-through":"none"})),c.addEventListener("click",(()=>{c.checked?i.style.textDecoration="line-through":i.style.textDecoration="none"})),o.append(c,i),r.append(o,a),t.appendChild(r),t}(e)),"done"))),e.append(t,r,n),e}())})()})();