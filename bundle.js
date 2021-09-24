(()=>{"use strict";var t={650:(t,n,e)=>{e.d(n,{Z:()=>c});var o=e(81),r=e.n(o),a=e(645),i=e.n(a)()(r());i.push([t.id,"#contact {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n}\n\n#contact-us {\n\tmargin: 10px 0 20px;\n\tfont-size: min(60px, 12vw);\n\tfont-weight: 800;\n\tcolor: white;\n\tanimation: var(--time) move-in;\n}\n\n#contact #info-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tanimation: var(--delay) hidden, var(--time) move-in var(--delay);\n}\n\n.contact-info {\n\tmargin: 2px 0;\n\tpadding: 10px 0;\n\tposition: relative;\n\tcursor: pointer;\n\tuser-select: none;\n\toverflow-wrap: anywhere;\n\tfont-size: 18px;\n\tcolor: var(--text-alt);\n\ttransition: var(--transition);\n}\n\n.contact-info:after {\n\tcontent: '';\n\theight: 4px;\n\twidth: 98%;\n\tposition: absolute;\n\tbottom: 1px;\n\tleft: 1.5%;\n\tborder-radius: 2px;\n\tbackground-color: var(--accent);\n\ttransform: scaleX(0);\n\topacity: 0;\n\ttransition: background-color 0.25s, transform 0.3s, opacity 0.25s;\n}\n\n.contact-info span {\n\tmargin-right: 10px;\n\tvertical-align: bottom;\n\tcolor: var(--text);\n\ttransition: var(--transition);\n}\n\n.contact-info:hover span {\n\tcolor: var(--accent);\n}\n\n.contact-info:hover {\n\tcolor: var(--text);\n\ttransform: translateY(-6px);\n}\n\n.contact-info:hover:after {\n\ttransform: scaleX(1);\n\topacity: 1;\n}\n\n.copy {\n\tpadding: 10px 18px;\n\tposition: absolute;\n\tpointer-events: none;\n\tfont-size: 15px;\n\tfont-weight: 700;\n\tcolor: var(--text);\n\tbackground-color: var(--accent);\n\tbox-shadow: var(--distant-shadow);\n\tanimation: 0.25s grow, 0.5s grow reverse forwards 0.5s;\n}\n\n#contact form {\n\tmargin: 40px 0 10px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tanimation: calc(var(--delay) * 2) hidden, var(--time) move-in calc(var(--delay) * 2);\n}\n\n#contact form p {\n\tfont-size: 22px;\n\tfont-weight: 700;\n\tcolor: var(--text);\n}\n\n#contact form input[type=email] {\n\twidth: 100%;\n\tmax-width: 400px;\n\tmargin: 35px 0 25px;\n\tpadding: 8px 20px;\n\tdisplay: inline-block;\n\tbox-sizing: border-box;\n\ttext-align: center;\n\tfont-size: 18px;\n\tcolor: var(--text-alt);\n\tbackground-color: var(--bg-alt);\n\tborder: 2px solid transparent;\n}\n\n#contact form input[type=email]:hover {\n\tbackground-color: var(--hover);\n}\n\n#contact form input[type=email]:focus {\n\tcolor: var(--text);\n\tbackground-color: var(--hover);\n\tborder-color: var(--accent);\n\tbox-shadow: var(--distant-shadow);\n}\n\n#contact form input[type=submit] {\n\tpadding: 12px 24px;\n\tcursor: pointer;\n\tfont-size: 20px;\n\tfont-weight: 700;\n\tcolor: var(--text);\n\tbackground-color: var(--accent2);\n}\n\n#contact form input[type=submit]:hover {\n\tbox-shadow: 0 10px 20px rgba(197, 30, 85, 0.4);\n\ttransform: scale(1.075) translateY(-2px);\n}\n\n#contact form input[type=submit]:active {\n\ttransform: scale(0.925);\n}\n",""]);const c=i},301:(t,n,e)=>{e.d(n,{Z:()=>c});var o=e(81),r=e.n(o),a=e(645),i=e.n(a)()(r());i.push([t.id,"#home {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n#home #container {\n\tmargin: 10px 0;\n\tmargin-left: 10px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n}\n\n#home #title {\n\tfont-size: min(70px, 12vw);\n\tfont-weight: 800;\n\tcolor: white;\n\tanimation: var(--time) move-in;\n}\n\n#home #title span {\n\tdisplay: inline-block;\n\tcolor: var(--accent);\n\ttransition: transform 0.25s, text-shadow 0.4s;\n}\n\n#home #title span:hover {\n\ttext-shadow: 0 0 35px rgba(71, 41, 206, 0.5);\n\ttransform: scale(1.1);\n}\n\n#home #description {\n\twidth: 60%;\n\tmargin: 30px 0;\n\tfont-size: 20px;\n\tline-height: 35px;\n\tcolor: var(--text-alt);\n\tanimation: var(--delay) hidden, var(--time) move-in var(--delay);\n}\n\n#home #order {\n\tmargin: 10px 0;\n\tpadding: 15px 25px;\n\tcursor: pointer;\n\tfont-size: 24px;\n\tfont-weight: 700;\n\tcolor: var(--text);\n\tbackground-color: var(--accent2);\n\tanimation: calc(var(--delay) * 2) hidden, var(--time) move-in calc(var(--delay) * 2);\n}\n\n#home #order:hover {\n\tbox-shadow: 0 10px 25px rgba(197, 30, 85, 0.4);\n\ttransform: scale(1.075) translateY(-3px);\n}\n\n#home #order:active {\n\ttransform: scale(0.925);\n}\n\n#home img {\n\twidth: 40vw;\n\tmax-width: 550px;\n\tmargin: 40px 0;\n\ttransition: transform 0.3s, filter 0.5s;\n\tanimation: calc(var(--delay) * 2.5) hidden, 1.1s grow calc(var(--delay) * 2.5);\n}\n\n#home img:hover {\n\tfilter: drop-shadow(0 0 12px rgba(255, 200, 0, 0.4));\n\ttransform: scale(1.05);\n}\n\n@media screen and (max-width:1030px) {\n\t#home {\n\t\tflex-direction: column;\n\t}\n\t#home #container {\n\t\tmargin-left: 0;\n\t\talign-items: center;\n\t\ttext-align: center;\n\t}\n\t#home #description {\n\t\twidth: 100%;\n\t}\n\t#home img {\n\t\twidth: 80vw;\n\t}\n}\n",""]);const c=i},83:(t,n,e)=>{e.d(n,{Z:()=>c});var o=e(81),r=e.n(o),a=e(645),i=e.n(a)()(r());i.push([t.id,"#menu {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n\tgrid-gap: 10px;\n}\n\n#menu .food.box {\n\tmargin: 12px;\n\tpadding: 25px 30px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tbackground-color: var(--bg-alt);\n}\n\n#menu .food.box:hover {\n\tbackground-color: var(--hover);\n\tbox-shadow: var(--distant-shadow);\n\ttransform: scale(1.05) translateY(-4px);\n}\n\n#menu .food.box .name {\n\tfont-size: 30px;\n\tfont-weight: 800;\n\tcolor: var(--accent2);\n}\n\n#menu .food.box .description {\n\tmargin: 15px 0;\n\tfont-size: 16px;\n\tline-height: 22px;\n\tcolor: var(--text-alt);\n}\n\n#menu .food.box .price-order {\n\tmax-width: 164px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n\tjustify-content: space-around;\n}\n\n#menu .food.box .price {\n\tmargin: 5px 0;\n\tfont-size: 28px;\n\tfont-weight: 700;\n\tcolor: var(--text);\n}\n\n#menu .food.box .order {\n\tmargin: 5px 15px;\n\tpadding: 10px 22px;\n\tcursor: pointer;\n\tfont-size: 20px;\n\tfont-weight: 700;\n\tcolor: var(--text);\n\tbackground-color: var(--accent);\n}\n\n#menu .food.box .order:hover {\n\tbox-shadow: 0 10px 20px rgba(71, 41, 206, 0.4);\n\ttransform: scale(1.075);\n}\n\n#menu .food.box .order:active {\n\ttransform: scale(0.925);\n}\n",""]);const c=i},426:(t,n,e)=>{e.d(n,{Z:()=>c});var o=e(81),r=e.n(o),a=e(645),i=e.n(a)()(r());i.push([t.id,"* {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\toutline: none;\n\tfont-family: Sen;\n}\n\n:root {\n\t--accent: rgb(71, 41, 206);\n\t--accent2: rgb(197, 30, 85);\n\t--bg: rgb(25, 26, 29);\n\t--bg-alt: rgb(30, 31, 35);\n\t--hover: rgb(35, 36, 40);\n\t--text: rgb(240, 240, 240);\n\t--text-alt: rgb(170, 170, 170);\n\t--radius: 25px;\n\t--lightest: 0.075;\n\t--light: 0.1;\n\t--dark: 0.125;\n\t--darkest: 0.175;\n\t--close-shadow: 0 2px 6px rgba(0, 0, 0, var(--lightest)), 0 8px 14px rgba(0, 0, 0, var(--light));\n\t--distant-shadow: 0 2px 6px rgba(0, 0, 0, var(--dark)), 0 12px 20px rgba(0, 0, 0, var(--darkest));\n\t--transition: color 0.25s, background-color 0.25s, border-color 0.25s, box-shadow 0.25s, transform 0.2s, opacity 0.25s, filter 0.25s;\n\t--time: 0.85s;\n\t--delay: 0.2s;\n}\n\nhtml::-webkit-scrollbar {\n\tdisplay: none;\n}\n\nhtml {\n\t-ms-overflow-style: none;\n\tscrollbar-width: none;\n}\n\nbody {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tmin-height: 100vh;\n\tbackground-color: var(--bg);\n}\n\nheader {\n\tmin-height: 120px;\n\tpadding: 10px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-around;\n\talign-items: center;\n}\n\n.box {\n\tborder-radius: var(--radius);\n\tbox-shadow: var(--close-shadow);\n\ttransition: var(--transition);\n}\n\n#logo {\n\theight: 80px;\n\tmargin: 5px 20px;\n\tpadding: 0 20px;\n\tcursor: pointer;\n\tfilter: invert(0.6);\n\ttransition: transform 0.2s, filter 0.25s;\n\tanimation: 1.5s grow;\n}\n\n#logo:hover {\n\tfilter: invert(1);\n}\n\n#tabs {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n}\n\n.tab {\n\tmargin: 5px 40px;\n\tpadding: 10px;\n\tposition: relative;\n\tcursor: pointer;\n\tuser-select: none;\n\tlist-style: none;\n\ttext-decoration: none;\n\tfont-size: 18px;\n\tfont-weight: 700;\n\tcolor: var(--text-alt);\n\ttransition: var(--transition);\n}\n\n.tab:nth-child(1) {\n\tanimation: 1.2s fade-in;\n}\n.tab:nth-child(2) {\n\tanimation: var(--delay) hidden, 0.6s move-in var(--delay);\n}\n.tab:nth-child(3) {\n\tanimation: calc(var(--delay) * 2) hidden, 0.6s move-in calc(var(--delay) * 2);\n}\n\n.tab:after {\n\tcontent: '';\n\theight: 4px;\n\twidth: 40px;\n\tposition: absolute;\n\tbottom: 1px;\n\tleft: calc(50% - 20px);\n\tdisplay: block;\n\tborder-radius: 2px;\n\tbackground-color: var(--accent2);\n\ttransform: scaleX(0);\n\topacity: 0;\n\ttransition: background-color 0.25s, transform 0.3s, opacity 0.25s;\n}\n\n.tab.selected,\n.tab:hover {\n\tcolor: var(--text);\n\ttransform: translateY(-6px);\n}\n\n.tab:hover:after {\n\ttransform: scaleX(0.8);\n\topacity: 1;\n}\n\n.tab.selected:after{\n\tbackground-color: var(--accent);\n\ttransform: scaleX(1.2);\n\topacity: 1;\n}\n\n#logo:active,\n.tab:active {\n\ttransform: scale(0.85);\n}\n\n#content {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n#content > * {\n\twidth: 1200px;\n\tmax-width: 80vw;\n}\n\nfooter {\n\tmin-height: 120px;\n\tpadding: 10px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n#github {\n\tpadding: 10px 20px;\n\tdisplay: inline-block;\n\tuser-select: none;\n\tfont-size: 20px;\n\ttext-align: center;\n\ttext-decoration: none;\n\tcolor: var(--text);\n\tbackground-color: var(--hover);\n\ttransition: var(--transition);\n\tanimation: calc(var(--delay) * 3) hidden, var(--time) move-in calc(var(--delay) * 3);\n}\n\n#github img {\n\theight: 25px;\n\tmargin-left: 10px;\n\tposition: relative;\n\ttop: -1px;\n\tvertical-align: middle;\n\tfilter: invert(.95);\n}\n\n#github:hover {\n\tbox-shadow: var(--distant-shadow);\n\ttransform: scale(1.1);\n}\n\n@keyframes fade-in {\n\tfrom {\n\t\topacity: 0;\n\t}\n\tto {\n\t\topacity: 1;\n\t}\n}\n\n@keyframes move-in {\n\tfrom {\n\t\ttransform: translateY(70px);\n\t\topacity: 0;\n\t}\n\tto {\n\t\ttransform: translateY(0);\n\t\topacity: 1;\n\t}\n}\n\n@keyframes grow {\n\tfrom {\n\t\ttransform: scale(0.9);\n\t\topacity: 0;\n\t}\n\tto {\n\t\ttransform: scale(1);\n\t\topacity: 1;\n\t}\n}\n\n@keyframes hidden {\n\tfrom, to {\n\t\topacity: 0;\n\t}\n}\n",""]);const c=i},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var n=[];function e(t){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===t){e=o;break}return e}function o(t,o){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],l=o.base?s[0]+o.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var m=e(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var f=r(u,o);o.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=o(t,r),l=0;l<a.length;l++){var d=e(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:t=>{var n={};t.exports=function(t,e){var o=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},921:(t,n,e)=>{t.exports=e.p+"94bd205c92a2e14b81f5.png"},572:(t,n,e)=>{t.exports=e.p+"d78289e1d17e0403f594.png"}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return t[o](a,a.exports,e),a.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),(()=>{var t=e(379),n=e.n(t),o=e(795),r=e.n(o),a=e(569),i=e.n(a),c=e(565),s=e.n(c),l=e(216),d=e.n(l),p=e(589),m=e.n(p),u=e(301),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),n()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;var h=e(921);const x=function(){const t=document.createElement("div"),n=document.createElement("div"),e=document.createElement("p"),o=document.createElement("span"),r=document.createElement("p"),a=document.createElement("button"),i=document.createElement("img");return t.id="home",t.dataset.id=0,n.id="container",e.id="title",e.textContent="Order Juicy & Scrummy Food ",o.textContent="anytime!",e.appendChild(o),r.id="description",r.textContent="Just confirm your order and enjoy our delicious fastest delivery.",a.id="order",a.classList.add("box"),a.textContent="Order Now",a.addEventListener("click",(()=>tabs.childNodes[1].click())),[e,r,a].forEach((t=>n.appendChild(t))),i.src=h,t.appendChild(n),t.appendChild(i),t};var v=e(83),g={};g.styleTagTransform=m(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=d(),n()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals;const b=function(){const t=document.createElement("div"),n=[{name:"Classic",description:"Lettuce, tomato, red onion, pickles, mustard, ketchup, mayo",price:2},{name:"Double Classic",description:"Two flame-grilled beef patties, lettuce, tomato, red onion, pickles, mustard, ketchup, mayo",price:4},{name:"Black Jack",description:"Blackened beef, pepper jack cheese, lettuce, tomato, creole mayo",price:3},{name:"Bacon Cheddar",description:"Cheddar cheese, bacon, lettuce, tomato, red onion, pickles, mustard, ketchup, mayo",price:5},{name:"Southwest BBQ",description:"Cheddar cheese, bacon, onion straws, BBQ sauce, chipotle mayo, lettuce, tomato, pickles",price:8},{name:"Black & Bleu",description:"Blackened beef, crumbled blue cheese, bacon, lettuce, tomato, red onion, mayo",price:6}].map(((t,n)=>function(t,n){const e=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),c=document.createElement("button");return e.classList.add("food","box"),e.style.animation=`${.1*n}s hidden, 0.85s move-in ${.1*n}s`,o.textContent=t.name,o.classList.add("name"),r.textContent=t.description,r.classList.add("description"),a.classList.add("price-order"),i.textContent=`$${t.price}`,i.classList.add("price"),c.textContent="Order",c.classList.add("order","box"),c.addEventListener("click",(()=>tabs.lastElementChild.click())),[i,c].forEach((t=>a.appendChild(t))),[o,r,a].forEach((t=>e.appendChild(t))),e}(t,n)));return t.id="menu",t.dataset.id=1,n.forEach((n=>t.appendChild(n))),t};var y=e(650),w={};function E(t){const n=document.createElement("span"),e=t.target;navigator.clipboard.writeText(e.lastChild.textContent),e.style.filter="blur(2.5px)",n.classList.add("copy","box"),n.textContent="Copied!",document.body.appendChild(n),n.style.top=e.offsetTop+e.offsetHeight/2-n.offsetHeight/2+"px",n.style.left=e.offsetLeft+e.offsetWidth/2-n.offsetWidth/2+"px",setTimeout((()=>{e.style.filter="",n.remove()}),1e3)}function C(t,n){const e=document.createElement("p"),o=document.createElement("span");return o.textContent=n,o.classList.add("material-icons-outlined"),e.textContent=t,e.title="Click to copy",e.classList.add("contact-info"),e.addEventListener("click",E),e.insertBefore(o,e.firstChild),e}w.styleTagTransform=m(),w.setAttributes=s(),w.insert=i().bind(null,"head"),w.domAPI=r(),w.insertStyleElement=d(),n()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals;const k=function(){const t=document.createElement("div"),n=document.createElement("div"),e=document.createElement("div"),o=C("+1-555-4444-333","phone"),r=C("fakemail@burgerstore.com","email"),a=C("160 Broadway, New York, NY 10038, United States","place"),i=function(){const t=document.createElement("form"),n=document.createElement("p"),e=document.createElement("input"),o=document.createElement("input");return n.textContent="Leave us your email to receive exclusive promotions and discount coupons!",e.type="email",e.placeholder="Enter your email address",e.required=!0,o.value="Subscribe",o.type="submit",[e,o].forEach((t=>t.classList.add("box"))),[n,e,o].forEach((n=>t.appendChild(n))),t}();return t.id="contact",t.dataset.id=2,n.id="contact-us",n.textContent="Contact us!",e.id="info-container",[o,r,a].forEach((t=>e.appendChild(t))),[n,e,i].forEach((n=>t.appendChild(n))),t};var L=e(426),T={};T.styleTagTransform=m(),T.setAttributes=s(),T.insert=i().bind(null,"head"),T.domAPI=r(),T.insertStyleElement=d(),n()(L.Z,T),L.Z&&L.Z.locals&&L.Z.locals;var Z=e(572);function j(t){if(t.target!==this)for(const n of this.childNodes)n===t.target?n.classList.add("selected"):n.classList.remove("selected")}function S(t){const n=document.querySelector("#content"),e=[x,b,k];n.firstElementChild?n.firstElementChild.dataset.id!=t&&n.replaceChild(e[t](),n.firstElementChild):n.appendChild(e[t]())}document.body.insertBefore(function(){const t=document.createElement("header"),n=document.createElement("img"),e=document.createElement("ul");return n.id="logo",n.src=Z,e.id="tabs",function(){const t=["Home","Menu","Contact"],n=[];for(let e=0;e<t.length;e++){const o=document.createElement("li");o.textContent=t[e],o.classList.add("tab"),o.addEventListener("click",(()=>S(e))),n.push(o)}return n}().forEach((t=>e.appendChild(t))),e.addEventListener("click",j),e.firstElementChild.click(),n.addEventListener("click",(()=>e.firstElementChild.click())),t.appendChild(n),t.appendChild(e),t}(),document.body.firstElementChild),document.body.appendChild(function(){const t=document.createElement("footer");return t.appendChild(function(){const t=document.createElement("a"),n=document.createElement("img");return t.id="github",t.href="https://github.com/nekusu",t.target="_blank",t.title="Check my GitHub!",t.textContent="nekusu",t.classList.add("box"),n.src="https://pngimg.com/uploads/github/github_PNG80.png",n.alt="GitHub",t.appendChild(n),t}()),t}())})()})();