"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["profile"],{55240(a,b,c){c.d(b,{k:()=>h});var d=c(76932),e=c(80721),f=c(36071),g=c(98105);async function h(a){await e.C,j(a)}function i(a,b){a.style.visibility=b?"hidden":"";let c=a.getAttribute("data-tab-item");if(c){let d=document.querySelector(`[data-menu-item=${c}]`);d instanceof HTMLElement&&(d.hidden=!b)}}function j(a){let b=a.querySelectorAll(".js-responsive-underlinenav-item"),c=a.querySelector(".js-responsive-underlinenav-overflow"),d=(0,g.oE)(c,a);if(!d)return;let e=!1;for(let f of b){let h=(0,g.oE)(f,a);if(h){let j=h.left+f.offsetWidth>=d.left;i(f,j),e=e||j}}c.style.visibility=e?"":"hidden"}(0,f.N7)(".js-responsive-underlinenav",{constructor:HTMLElement,subscribe:a=>(h(a),(0,d.RB)(window,"resize",()=>j(a)))})},80721(a,b,c){c.d(b,{C:()=>d.C,x:()=>d.x});var d=c(4412)},98249(a,b,c){c.d(b,{D:()=>g,a:()=>f});var d=c(2825),e=c(75662);async function f(a,b,c){let f=new Request(b,c);f.headers.append("X-Requested-With","XMLHttpRequest");let g=await self.fetch(f);if(g.status<200||g.status>=300)throw Error(`HTTP ${g.status}${g.statusText||""}`);return(0,d.t)((0,d.P)(a),g),(0,e.r)(a,await g.text())}function g(a,b,c=1e3,d=[200]){return async function c(e){let f=new Request(a,b);f.headers.append("X-Requested-With","XMLHttpRequest");let g=await self.fetch(f);if(202===g.status)return await new Promise(a=>setTimeout(a,e)),c(1.5*e);if(d.includes(g.status))return g;if(g.status<200||g.status>=300)throw Error(`HTTP ${g.status}${g.statusText||""}`);throw Error(`Unexpected ${g.status} response status from poll endpoint`)}(c)}},9302(a,b,c){c.d(b,{IW:()=>j,Mw:()=>o,"_C":()=>n,lO:()=>m,qA:()=>l,y0:()=>g});let d=[],e=0,f;function g(){return f}function h(){try{return Math.min(Math.max(0,history.length)||0,9007199254740991)}catch(a){return 0}}function i(){return h()-1+e}function j(a){f=a;let b=location.href;d[i()]={url:b,state:f},d.length=h(),window.dispatchEvent(new CustomEvent("statechange",{bubbles:!1,cancelable:!1}))}function k(){return new Date().getTime()}function l(a,b,c){e=0;let d={_id:k(),...a};history.pushState(d,b,c),j(d)}function m(a,b,c){let d={...f,...a};history.replaceState(d,b,c),j(d)}function n(){let a=d[i()-1];if(a)return a.url}function o(){let a=d[i()+1];if(a)return a.url}f=function(){let a={_id:new Date().getTime(),...history.state};return j(a),a}(),window.addEventListener("popstate",function(a){let b=a.state;if(!b|| !b._id&&!b.turbo?.restorationIdentifier)return;let c=b.turbo?.restorationIdentifier,f=d[i()-1]?.state?.turbo?.restorationIdentifier;f===c?e--:e++,j(b)},!0);let p;window.addEventListener("turbo:visit",a=>{a instanceof CustomEvent&&(p=a.detail.action)}),window.addEventListener("turbo:load",()=>{"restore"!==p&&(e=0,m(history.state,"",""))}),window.addEventListener("hashchange",function(){if(h()>d.length){let a={_id:k()};history.replaceState(a,"",location.href),j(a)}},!0),window.addEventListener("pageshow",()=>{d=[],e=0})},2825(a,b,c){function d(a){let b=[...a.querySelectorAll("meta[name=html-safe-nonce]")].map(a=>a.content);if(b.length<1)throw Error("could not find html-safe-nonce on document");return b}c.d(b,{P:()=>d,t:()=>f});let e=class ResponseError extends Error{constructor(a,b){super(`${a} for HTTP ${b.status}`),this.response=b}};function f(a,b,c=!1){let d=b.headers.get("content-type")||"";if(!c&&!d.startsWith("text/html"))throw new e(`expected response with text/html, but was ${d}`,b);if(c&&!(d.startsWith("text/html")||d.startsWith("application/json")))throw new e(`expected response with text/html or application/json, but was ${d}`,b);let f=b.headers.get("x-html-safe");if(f){if(!a.includes(f))throw new e("response X-HTML-Safe nonce did not match",b)}else throw new e("missing X-HTML-Safe nonce",b)}},75662(a,b,c){c.d(b,{r:()=>d});function d(a,b){let c=a.createElement("template");return c.innerHTML=b,a.importNode(c.content,!0)}},29130(a,b,c){var d=c(76006),e=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let f=class SocialAccountEditorElement extends HTMLElement{selectOption(a){this.setChosenSocialIcon(a.currentTarget);let b=this.querySelector("details");b&&(b.open=!1)}recognizeUrl(){let a=this.urlField.value,b=this.findMatchingSocialAccountIconOption(a);b&&this.setChosenSocialIcon(b)}setChosenSocialIcon(a){let b=a.getAttribute("data-provider-key"),c=a.getAttribute("data-provider-title"),d=a.querySelector(".js-social-account-icon");if(!b||!c||!d)return;let e=d.cloneNode(!0),f=e.getAttribute("aria-labelledby");if(f){let g=`${f}_active`,h=e.querySelector("title");h&&(h.id=g,e.setAttribute("aria-labelledby",g))}for(let i of(e.classList.add("mr-n1"),this.iconShown.setAttribute("aria-label",c),this.iconShown.querySelector(".js-social-account-icon")?.replaceWith(e),this.iconField.value=b,this.querySelectorAll('[aria-checked="true"]')))i.removeAttribute("aria-checked");a.setAttribute("aria-checked","true")}findMatchingSocialAccountIconOption(a){for(let b of this.iconOptions)for(let c of b.querySelectorAll("[data-provider-pattern]")){let d=RegExp(c.getAttribute("data-provider-pattern"),"i");if(d.test(a))return b}return null}};e([d.fA],f.prototype,"urlField",void 0),e([d.fA],f.prototype,"iconField",void 0),e([d.fA],f.prototype,"iconShown",void 0),e([d.GO],f.prototype,"iconOptions",void 0),f=e([d.Ih],f)},5742(a,b,c){var d=c(36071),e=c(59753);let f=null,g=null;function h(a){let{item:b,oldIndex:c}=a,{parentNode:d}=b;g=d.children[c+1]}async function i(a){let{oldIndex:b,newIndex:c,item:d}=a;if(b===c)return;let e=d.closest(".js-pinned-items-reorder-form"),h=e.closest(".js-pinned-items-reorder-container"),i=h.querySelector(".js-pinned-items-spinner"),j=h.querySelector(".js-pinned-items-reorder-message"),k=i&&j;k&&(j.textContent="",i.style.display="inline-block"),f.option("disabled",!0);let l=await fetch(e.action,{method:e.method,body:new FormData(e),headers:{"X-Requested-With":"XMLHttpRequest"}});if(!l.ok){k&&(j.textContent=j.getAttribute("data-error-text")||"",i.style.display="none");let m=d.parentNode;g?m.insertBefore(d,g):m.appendChild(d);return}k&&(j.textContent=j.getAttribute("data-success-text")||"",i.style.display="none"),f.option("disabled",!1)}(0,d.N7)(".js-pinned-items-reorder-list",{async add(a){let{Sortable:b}=await Promise.all([c.e("vendors-node_modules_github_sortablejs_Sortable_js"),c.e("app_assets_modules_github_sortable-behavior_ts")]).then(c.bind(c,66884));f=b.create(a,{animation:150,item:".js-pinned-item-list-item",handle:".js-pinned-item-reorder",onUpdate:i,onStart:h,chosenClass:"is-dragging"})}}),(0,e.on)("submit",".js-pinned-items-reorder-form",function(a){a.preventDefault()}),(0,e.on)("click",".js-pinned-item-list-item .js-sortable-button",async function({currentTarget:a}){let{moveWithButton:b}=await Promise.all([c.e("vendors-node_modules_github_sortablejs_Sortable_js"),c.e("app_assets_modules_github_sortable-behavior_ts")]).then(c.bind(c,66884));b(a,a.closest(".js-pinned-item-list-item"),i)})},57801(a,b,c){(0,c(59753).on)("change",".js-profile-editable-pronouns-select",function(){let a=document.querySelector(".js-profile-editable-pronouns-select"),b=document.querySelector(".js-profile-editable-pronouns-custom"),c=b.getAttribute("data-initial-value");"Custom"===a.value?([...a.options].find(a=>a.value===c)?b.value="":b.value=c,b.hidden=!1,b.focus()):(b.value=a.value,b.hidden=!0)})},76932(a,b,c){c.d(b,{RB:()=>d,qC:()=>e,w0:()=>Subscription});class Subscription{constructor(a){this.closed=!1,this.unsubscribe=()=>{a(),this.closed=!0}}}function d(a,b,c,d={capture:!1}){return a.addEventListener(b,c,d),new Subscription(()=>{a.removeEventListener(b,c,d)})}function e(...a){return new Subscription(()=>{for(let b of a)b.unsubscribe()})}},60864(a,b,c){var d,e=c(76006),f=c(59753),g=c(9302),h=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};(0,f.on)("toggle",".js-achievement-card-details",function(a){let b=a.currentTarget,c=b.getAttribute("data-achievement-slug"),d=new URL(window.location.href,window.location.origin),e=new URLSearchParams(d.search);b.hasAttribute("open")&&c?e.set("achievement",c):e.delete("achievement"),d.search=e.toString(),(0,g.qA)(null,"",d.toString())},{capture:!0});let i=((d=class AchievementBadgeFlipElement extends HTMLElement{connectedCallback(){if(this.tierCount<=1||!this.animate)return;let a=this.animate([{transform:"rotateY(0deg)"},{transform:`rotateY(${this.maxRotation}deg)`}],{duration:this.duration,easing:"cubic-bezier(0, 0, 0.25, 1)"});if(this.animations.set(this,a),!this.createTierAnimations()){let b=new MutationObserver((a,b)=>{this.createTierAnimations()&&b.disconnect()});b.observe(this,{childList:!0})}}get duration(){return 500*this.tierCount}get maxRotation(){return 180*this.tierCount}createTierAnimations(){for(let a of this.tiers)this.ensureTierAnimation(a);return this.tiers.length>=this.tierCount}ensureTierAnimation(a){if(this.animations.has(a))return;let b=this.tiers.indexOf(a);if(b<0)return;let c=this.BADGE_SIDE_KEYFRAMES[this.tierCount];if(!c)return;let d=this.tierCount%2==1,e=c.map((a,e)=>{let f=e===b||e===b+1||0===b&&e===this.tierCount,g={offset:a,opacity:f?1:0,easing:"step-start"};if(d&&0===b){let h=e===c.length-1?180:0;g.transform=`rotateY(${h}deg)`}return g}),f=a.animate(e,{duration:this.duration});this.animations.set(a,f)}flip(){for(let a of this.animations.values())if("running"===a.playState)return;for(let b of this.animations.values())b.play()}constructor(...a){super(...a),this.animations=new Map,this.BADGE_SIDE_KEYFRAMES=[[],[0,1],[0,.22,1],[0,.13,.34,1],[0,.09,.22,.42,1],[0,.07,.16,.29,.47,1]],this.tierCount=0}}).attrPrefix="",d);h([e.Lj],i.prototype,"tierCount",void 0),h([e.GO],i.prototype,"tiers",void 0),i=h([e.Ih],i),(0,f.on)("click",".js-new-user-contrib-example",async function(a){let b=document.querySelector(".js-calendar-graph");if(b.classList.contains("sample-graph"))return;b.classList.add("sample-graph");let c=a.currentTarget.getAttribute("data-url"),d=await fetch(c,{headers:{"X-Requested-With":"XMLHttpRequest"}});if(!d.ok){b.classList.remove("sample-graph");return}let e=await d.text(),f=document.createElement("div");f.innerHTML=e;let g=b.querySelector(".js-calendar-graph-svg");g.replaceWith(f.children[0])});var j=c(98249),k=c(36071),l=c(65935),m=c(48542);let n=null,o=document.createElement("div");function p(){let a=document.querySelector(".js-calendar-graph"),b=a.getAttribute("data-url");return new URL(b,window.location.origin)}function q(a){if("key"in a&&"Enter"!==a.key)return;let b=a.currentTarget;if(!((b instanceof HTMLElement||b instanceof SVGElement)&&b.matches("[data-level]")))return;let c=b.closest(".js-calendar-graph"),d=c.getAttribute("data-org"),e=b.getAttribute("data-date"),f=b.classList.contains("active"),g="shiftKey"in a&& !0===a.shiftKey;f?K(J()):G(F(e),g,d)}function r(a,b,{key:c}){let d=a=>a instanceof HTMLTableCellElement&& -1===a.tabIndex?a:void 0,e=(a,b)=>{let c=a?.querySelectorAll(b)??[];return Array.from(c).at(-1)};if(b instanceof HTMLTableCellElement){let f="[data-level]",g=`[data-ix="${b.getAttribute("data-ix")}"]`,h=b.parentElement,i=h?.parentElement;switch(c){case"ArrowLeft":return d(b.previousElementSibling??b);case"ArrowRight":return d(b.nextElementSibling??b);case"ArrowDown":return d(h?.nextElementSibling?.querySelector(g));case"ArrowUp":return d(h?.previousElementSibling?.querySelector(g));case"Home":return d(h?.querySelector(f));case"End":return d(e(h,f));case"PageUp":return d(i?.querySelector(g));case"PageDown":return d(e(i,g))}}}function s(){o&&(o.hidden=!0)}function t(a){let b=a.target;if(!((b instanceof HTMLElement||b instanceof SVGElement)&&b.matches("[data-level]")))return;s(),o.textContent=b.textContent,o.hidden=!1;let c=b.getBoundingClientRect(),d=c.left+window.pageXOffset-o.offsetWidth/2+c.width/2,e=c.bottom+window.pageYOffset-o.offsetHeight-2*c.height,f=document.querySelector(".js-calendar-graph"),g=f.getBoundingClientRect();o.style.top=`${e}px`,u(g,d)?(o.style.left=`${w(c)}px`,o.classList.add("left"),o.classList.remove("right")):v(g,d)?(o.style.left=`${x(c)}px`,o.classList.add("right"),o.classList.remove("left")):(o.style.left=`${d}px`,o.classList.remove("left"),o.classList.remove("right"))}function u(a,b){return a.x>b}function v(a,b){return a.x+a.width<b+o.offsetWidth}function w(a){return a.left+window.pageXOffset-.1*o.offsetWidth+a.width/2}function x(a){return a.left+window.pageXOffset-.9*o.offsetWidth+a.width/2}async function y(a){let b=document.getElementById("js-contribution-activity");if(!b)return;b.classList.add("loading");let c=await (0,j.a)(document,a);b.classList.remove("loading"),b.textContent="",b.append(c)}function z(a,b){let c=new URLSearchParams(a);c.delete("from"),c.delete("to"),c.delete("org");let d=b.fromStr;b.from&&(d=E(b.from,!!b.forceLocalTime)),d&&c.append("from",d);let e=b.toStr;b.to&&(e=E(b.to,!!b.forceLocalTime)),e&&c.append("to",e);let f=b.org;return f&&c.append("org",f),c}async function A(a,b,c){let d=document.querySelector(".js-calendar-graph"),e=d.getAttribute("data-graph-url"),f=new URL(e,window.location.origin),g=z(f.search.slice(1),{from:a,to:b,org:c,forceLocalTime:!0});f.search=g.toString();let h=await (0,j.a)(document,f.toString());document.querySelector(".js-yearly-contributions").replaceWith(h)}function B(a,b){let c=document.querySelector(".js-calendar-graph"),d=c.querySelectorAll("[data-level]");for(let e of d)e.classList.remove("active"),e.hasAttribute("aria-selected")&&e.setAttribute("aria-selected","false");if(c.classList.remove("days-selected"),a||b)for(let f of(c.classList.add("days-selected"),d))g(f)&&(f.classList.add("active"),f.hasAttribute("aria-selected")&&f.setAttribute("aria-selected","true"));function g(c){let d=F(c.getAttribute("data-date")||"").getTime();return a&&b?a.getTime()<=d&&d<=b.getTime():a?d===a.getTime():void 0}}function C(){let a=document.querySelector(".js-calendar-graph"),b=a.querySelectorAll(".active"),c=b[0],d=b[b.length-1],e=c&&c.getAttribute("data-date"),f=d&&d.getAttribute("data-date");return e&&f?{first:e,last:f}:null}function D(a){return`0${a}`.slice(-2)}function E(a,b){return b?`${a.getFullYear()}-${D(a.getMonth()+1)}-${D(a.getDate())}`:`${a.getUTCFullYear()}-${D(a.getUTCMonth()+1)}-${D(a.getUTCDate())}`}function F(a){let[b,c,d]=a.split("-").map(a=>parseInt(a,10));return new Date(Date.UTC(b,c-1,d))}function G(a,b,c){let d,e;if(n&&b){let f=n.getTime(),g=26784e5,h=f-g,i=f+g;[d,e]=a>n?[n,a]:[a,n],d=new Date(Math.max(d.getTime(),h)),e=new Date(Math.min(e.getTime(),i)),n=null}else n=e=d=a;B(d,e);let j=p(),k=z(j.search.slice(1),{from:d,to:e,org:c});k.append("tab","overview"),j.search=k.toString(),y(j.toString())}async function H(a,b){let c=document.getElementById("year-list-container");if(!c)return;b.append("year_list","1"),a.search=b.toString();let d=await (0,j.a)(document,a.toString());c.textContent="",c.append(d)}async function I(a){let b=C(),c=function(){let a=document.querySelector(".js-calendar-graph"),b=a.getAttribute("data-from"),c=a.getAttribute("data-to");return{first:b,last:c}}(),d=new Date(c.first),e=new Date(c.last);if(await A(d,e,a),b){let f=new Date(b.first),g=new Date(b.last);B(f,g)}}function J(){let a=document.querySelector(".js-profile-timeline-year-list .js-year-link.selected");return a.href||""}function K(a){let b=new URL(a,window.location.origin).search,c=new URLSearchParams(b.slice(1)),d=c.get("org"),e=c.get("from"),f=c.get("to"),g=new Date(e),h=new Date(f);A(g,h,d);let i=p(),j=z(i.search.slice(1),{from:g,to:h,org:d});j.append("tab","overview"),i.search=j.toString(),y(i.toString())}function L(a){let b=a.closest(".js-details-container");b&&b.classList.add("open");let c=a.getBoundingClientRect(),d=window.scrollY+c.top-62-10;window.scrollTo(0,d)}async function M(a){let{initializeOverviewGraphContainer:b}=await c.e("app_assets_modules_github_profile_contributions-spider-graph_ts").then(c.bind(c,98711));b(a)}function N(a){if(document.querySelector(".js-profile-editable-area").hidden=a,document.querySelector(".js-profile-editable-names").hidden=a,document.querySelector(".js-profile-editable-form").hidden=!a,document.querySelector(".js-profile-editable-error").textContent="",!a){let b=document.querySelector(".js-profile-editable-pronouns-select"),c=document.querySelector(".js-profile-editable-pronouns-custom");b&&c&&""===c.value&&(b.selectedIndex=0,c.hidden=!0)}}o.classList.add("svg-tip","svg-tip-one-line"),o.style.pointerEvents="none",o.hidden=!0,document.body.appendChild(o),(0,k.N7)(".js-calendar-graph-svg, .js-calendar-graph-table",function(a){let b=a.closest(".js-calendar-graph");for(let c of a.querySelectorAll("[data-level]"))c.addEventListener("mouseover",t),c.addEventListener("mouseleave",s),c.addEventListener("click",q),c.hasAttribute("tabindex")&&(c.addEventListener("focus",t),c.addEventListener("blur",s),c.addEventListener("keypress",q));let d=b.getAttribute("data-from");d&&(n=F(d)),a instanceof HTMLElement&&(0,m.km)(a,{focusInStrategy:"previous",getNextFocusable:r,bindKeys:m.Qw.ArrowAll|m.Qw.HomeAndEnd|m.Qw.PageUpDown,focusOutBehavior:"stop"})}),(0,f.on)("click",".js-org-filter-link",function(a){a.stopPropagation(),a.preventDefault();let b=a.currentTarget,c=b.closest(".js-org-filter-links-container"),d=c.querySelector(".js-org-filter-link.selected"),e=new URL(b.href,window.location.origin),f=new URLSearchParams(e.search.slice(1)),h=f.get("org"),i=function(){let a=C()||function(){let a=new URLSearchParams(window.location.search.slice(1)),b=a.get("from"),c=a.get("to");return b&&c?{first:b,last:c}:null}()||function(){let a=new URL(J(),window.location.origin),b=new URLSearchParams(a.search.slice(1)),c=b.get("from"),d=b.get("to");return c&&d?{first:c,last:d}:null}();return a}(),j=new Date(i.first),k=new Date(i.last);d&&d.classList.remove("selected"),b!==d&&b.classList.add("selected"),I(h);let l=p(),m={org:h,from:null,to:null};f.has("from")&&(m.from=j),f.has("to")&&(m.to=k);let n=z(l.search.slice(1),m);l.search=n.toString(),y(l.toString()),H(l,n),(0,g.qA)(null,"",l.toString())}),(0,f.on)("click",".js-year-link",function(a){a.stopPropagation(),a.preventDefault();let b=a.currentTarget,c=b.closest("ul"),d=c.querySelector(".js-year-link.selected");d.classList.remove("selected"),b.classList.add("selected"),K(b.href),(0,g.qA)(null,"",b.href)}),!function(){let a=window.location.hash;if(!a||0>a.indexOf("#event-"))return;let b=a.slice(1,a.length),c=document.getElementById(b);c&&L(c)}(),window.addEventListener("hashchange",function(a){let b=a.newURL||window.location.href,c=b.slice(b.indexOf("#")+1,b.length),d=document.getElementById(c);d&&(a.stopPropagation(),L(d))}),(0,l.AC)(".js-show-more-timeline-form",async function(a,b){await b.text();let c=document.querySelector(".js-show-more-timeline-form");if(c){let d=c.getAttribute("data-year"),e=document.querySelector(".js-year-link.selected"),f=document.querySelector(`#year-link-${d}`);e.classList.remove("selected"),f.classList.add("selected");let h=a.getAttribute("data-year");if(d!==h){let i=c.getAttribute("data-from"),j=new Date(i),k=c.getAttribute("data-to"),l=new Date(k),m=c.getAttribute("data-org");A(j,l,m)}}document.title=a.getAttribute("data-title")||"",(0,g.qA)(null,"",a.getAttribute("data-url")||"")}),(0,k.N7)(".js-activity-overview-graph-container",a=>{M(a)}),c(57801),(0,f.on)("click",".js-profile-editable-edit-button",function(){(function(){let a=document.querySelector(".js-user-profile-bio").getAttribute("data-bio-text");if("string"!=typeof a)return;let b=document.querySelector(".js-user-profile-bio-edit");b.value=a})(),N(!0)}),(0,f.on)("click",".js-profile-editable-cancel",function(){N(!1)}),(0,l.AC)(".js-profile-editable-form",async(a,b)=>{let c;try{c=await b.html()}catch(d){if(422===d.response.status){let e=document.querySelector(".js-profile-editable-error");e.textContent=d.response.json.message}return}(function(a){let b=document.querySelector(".js-profile-editable-replace");b.replaceWith(a)})(c.html),N(!1)}),c(29130),c(5742),(0,k.N7)(".js-user-profile-sticky-fields.is-stuck",function(){let a=document.querySelector(".js-user-profile-sticky-bar");return{add(){a&&a.classList.add("is-stuck")},remove(){a&&a.classList.remove("is-stuck")}}}),(0,k.N7)(".js-user-profile-follow-button.is-stuck",function(){let a=document.querySelector(".js-user-profile-sticky-bar");return{add(){a&&a.classList.add("is-follow-stuck")},remove(){a&&a.classList.remove("is-follow-stuck")}}});var O=c(55240);function P(a,b){if(b>0){var c;a.textContent=(c=b)>999?`${(c/1e3).toFixed(1)}k`:c.toLocaleString(),a.hidden=!1}else a.remove()}async function Q(a){let b=new URL(a.getAttribute("data-url"),window.location.origin),c=new URLSearchParams(b.search.slice(1)),d=a.querySelector(".js-profile-repository-count"),e=a.querySelector(".js-profile-project-count"),f=a.querySelector(".js-profile-team-count"),g=a.querySelector(".js-profile-member-count");d&&c.append("repo","1"),e&&c.append("project","1"),f&&c.append("team","1"),g&&c.append("member","1"),b.search=c.toString();let h=await fetch(b.toString(),{headers:{"X-Requested-With":"XMLHttpRequest"}});if(!h.ok)return;let i=await h.json(),j=i.data;d&&j.repositories&&P(d,j.repositories.totalCount),e&&j.projects&&P(e,j.projects.totalCount),f&&j.teams&&P(f,j.teams.totalCount),g&&j.members&&P(g,j.members.totalCount),a.classList.contains("js-responsive-underlinenav")&&(0,O.k)(a)}(0,k.N7)(".js-profile-tab-count-container",function(a){Q(a)})},4412(a,b,c){c.d(b,{C:()=>f,x:()=>e});var d=c(86283);let e=d.n4?.readyState==="interactive"||d.n4?.readyState==="complete"?Promise.resolve():new Promise(a=>{d.n4?.addEventListener("DOMContentLoaded",()=>{a()})}),f=d.n4?.readyState==="complete"?Promise.resolve():new Promise(a=>{d.iG?.addEventListener("load",a)})},86283(a,b,c){c.d(b,{Qg:()=>d.Qg,iG:()=>e.iG,jX:()=>e.jX,n4:()=>e.n4,yF:()=>d.yF});var d=c(35647),e=c(73614)},73614(a,b,c){c.d(b,{iG:()=>e,jX:()=>f,n4:()=>d});let d="undefined"==typeof document?void 0:document,e="undefined"==typeof window?void 0:window,f="undefined"==typeof location?{pathname:"",origin:"",search:""}:location},35647(a,b,c){c.d(b,{Qg:()=>f,yF:()=>g});var d=c(73614);let e=void 0===d.n4,f=!e;function g(){return!!e||Boolean(d.n4.querySelector('react-app[data-ssr="true"]'))}}},a=>{var b=b=>a(a.s=b);a.O(0,["vendors-node_modules_github_selector-observer_dist_index_esm_js","vendors-node_modules_primer_behaviors_dist_esm_focus-zone_js","vendors-node_modules_github_remote-form_dist_index_js-node_modules_primer_behaviors_dist_esm_-b34105"],()=>b(60864));var c=a.O()}])
//# sourceMappingURL=profile-be1ddd0f5c60.js.map