(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>a});var r=n(81),i=n.n(r),s=n(645),o=n.n(s)()(i());o.push([t.id,"body {\n    font-family: 'PT Sans', sans-serif;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 96px;\n    background-color: #083344;\n    font-weight: 700;\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n}\n.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: #334155;\n    border-radius: 5px;\n}\n.title {\n    color: #a3e635;\n    padding: 7px;\n}\n.grid-item {\n    width: 20px;\n    height: 20px;\n    background-color: black;\n    border: 1px solid white;\n}\n",""]);const a=o},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,i,s){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);r&&o[u[0]]||(void 0!==s&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=s),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),e.push(u))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var s={},o=[],a=0;a<t.length;a++){var c=t[a],l=r.base?c[0]+r.base:c[0],u=s[l]||0,d="".concat(l," ").concat(u);s[l]=u+1;var p=n(d),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var f=i(h,r);r.byIndex=a,e.splice(a,0,{identifier:d,updater:f,references:1})}o.push(d)}return o}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var s=r(t=t||[],i=i||{});return function(t){t=t||[];for(var o=0;o<s.length;o++){var a=n(s[o]);e[a].references--}for(var c=r(t,i),l=0;l<s.length;l++){var u=n(s[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}s=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={id:r,exports:{}};return t[r](s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),i=n.n(r),s=n(569),o=n.n(s),a=n(565),c=n.n(a),l=n(216),u=n.n(l),d=n(589),p=n.n(d),h=n(426),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=u(),e()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;class g{length;hitCount;sunk;static shipTypes={carrier:5,battleship:4,destroyer:3,submarine:3,"patrol boat":2};constructor(t,e=0,n=!1){this.length=g.shipTypes[t],this.hitCount=e,this.sunk=n}hit(){this.isSunk()?this.sunk=!0:this.hitCount+=1}isSunk(){return this.hitCount>=this.length}}const v=g;class m{grid;static shipIndexes={carrier:1,battleship:2,destroyer:3,submarine:4,"patrol boat":5};dimension;static standardSize=10;constructor(t=m.standardSize){this.grid=[...Array(t)].map((()=>Array(t).fill(0))),this.shipList=Array(5).fill(void 0),this.dimension=t}shipOverlaps(t,e,n){if("horizontal"===n){for(let n=0;n<t.length;n+=1)if(0!==this.grid[e[0]][e[1]+n])return!0}else for(let n=0;n<t.length;n+=1)if(0!==this.grid[e[0]+n][e[1]])return!0;return!1}shipOutOfBounds(t,e,n){if("horizontal"===n){if(e[1]+t.length-1>=this.grid[0].length)return!0}else if(e[0]+t.length-1>=this.grid.length)return!0;return!1}shipPlacementIsValid(t,e,n){return!this.shipOutOfBounds(t,e,n)&&!this.shipOverlaps(t,e,n)}placeShip(t,e,n){const r=new v(t);if(!this.shipPlacementIsValid(r,e,n))return!1;if("horizontal"===n)for(let n=0;n<r.length;n+=1)this.grid[e[0]][e[1]+n]=m.shipIndexes[t];else for(let n=0;n<r.length;n+=1)this.grid[e[0]+n][e[1]]=m.shipIndexes[t];return this.shipList[m.shipIndexes[t]-1]=r,!0}receiveAttack(t){const e=this.grid[t[0]][t[1]];e>=1?this.shipList[e-1].hit():this.grid[t[0]][t[1]]=-1}allShipsSunk(){for(let t=0;t<this.shipList.length;t+=1)if(void 0!==this.shipList[t]&&!this.shipList[t].isSunk())return!1;return!0}}const y=m.standardSize;document.querySelectorAll(".grid").forEach((t=>{t.setAttribute("style",`display: grid; grid-template-columns: repeat(${y}, 1fr); grid-template-rows: repeat(${y}, 1fr); grid-gap: 10px;`);for(let e=1;e<=y*y;e+=1){const e=document.createElement("div");e.classList.add("grid-item"),t.appendChild(e)}}))})()})();