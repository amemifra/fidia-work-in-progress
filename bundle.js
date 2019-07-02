var app=function(){"use strict";function t(){}const n=t=>t;function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let c="undefined"!=typeof window?()=>window.performance.now():()=>Date.now(),u=t=>requestAnimationFrame(t);const a=new Set;let l,f=!1;function d(){a.forEach(t=>{t[0](c())||(a.delete(t),t[1]())}),(f=a.size>0)&&u(d)}function p(t){let n;return f||(f=!0,u(d)),{promise:new Promise(e=>{a.add(n=[t,e])}),abort(){a.delete(n)}}}function h(t,n){t.appendChild(n)}function $(t,n,e){t.insertBefore(n,e||null)}function m(t){t.parentNode.removeChild(t)}function v(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function g(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function b(){return w(" ")}function x(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}let _,E=0,O={};function R(t,n){t.style.animation=(t.style.animation||"").split(", ").filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")).join(", "),n&&!--E&&u(()=>{if(E)return;let t=l.cssRules.length;for(;t--;)l.deleteRule(t);O={}})}function k(t){_=t}function S(t){(function(){if(!_)throw new Error("Function called outside component initialization");return _})().$$.on_mount.push(t)}const z=[],I=[],N=[],C=[],P=Promise.resolve();let j,A=!1;function F(t){N.push(t)}function D(){const t=new Set;do{for(;z.length;){const t=z.shift();k(t),W(t.$$)}for(;I.length;)I.pop()();for(;N.length;){const n=N.pop();t.has(n)||(n(),t.add(n))}}while(z.length);for(;C.length;)C.pop()();A=!1}function W(t){t.fragment&&(t.update(t.dirty),r(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach(F))}function G(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const K=new Set;let L;function q(t,n){t&&t.i&&(K.delete(t),t.i(n))}function M(e,o,r){let s,u,a=o(e,r),f=!1,d=0;function h(){s&&R(e,s)}function $(){const{delay:o=0,duration:r=300,easing:i=n,tick:$=t,css:m}=a;m&&(s=function(t,n,e,o,r,i,s,c=0){const u=16.666/o;let a="{\n";for(let t=0;t<=1;t+=u){const o=n+(e-n)*i(t);a+=100*t+`%{${s(o,1-o)}}\n`}const f=a+`100% {${s(e,1-e)}}\n}`,d=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(f)}_${c}`;if(!O[d]){if(!l){const t=g("style");document.head.appendChild(t),l=t.sheet}O[d]=!0,l.insertRule(`@keyframes ${d} ${f}`,l.cssRules.length)}const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${d} ${o}ms linear ${r}ms 1 both`,E+=1,d}(e,0,1,r,o,i,m,d++)),$(0,1);const v=c()+o,y=v+r;u&&u.abort(),f=!0,F(()=>G(e,!0,"start")),u=p(t=>{if(f){if(t>=y)return $(1,0),G(e,!0,"end"),h(),f=!1;if(t>=v){const n=i((t-v)/r);$(n,1-n)}}return f})}let m=!1;return{start(){m||(R(e),i(a)?(a=a(),(j||(j=Promise.resolve()).then(()=>{j=null}),j).then($)):$())},invalidate(){m=!1},end(){f&&(h(),f=!1)}}}function T(t,n,o){const{fragment:s,on_mount:c,on_destroy:u,after_render:a}=t.$$;s.m(n,o),F(()=>{const n=c.map(e).filter(i);u?u.push(...n):r(n),t.$$.on_mount=[]}),a.forEach(F)}function B(t,n){t.$$.fragment&&(r(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function H(t,n){t.$$.dirty||(z.push(t),A||(A=!0,P.then(D)),t.$$.dirty=o()),t.$$.dirty[n]=!0}function J(n,e,i,s,c,u){const a=_;k(n);const l=e.props||{},f=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(a?a.$$.context:[]),callbacks:o(),dirty:null};let d=!1;var p;f.ctx=i?i(n,l,(t,e)=>{f.ctx&&c(f.ctx[t],f.ctx[t]=e)&&(f.bound[t]&&f.bound[t](e),d&&H(n,t))}):l,f.update(),d=!0,r(f.before_render),f.fragment=s(f.ctx),e.target&&(e.hydrate?f.fragment.l((p=e.target,Array.from(p.childNodes))):f.fragment.c(),e.intro&&q(n.$$.fragment),T(n,e.target,e.anchor),D()),k(a)}class Q{$destroy(){B(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function U(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function V(t){return--t*t*t*t*t+1}function X(t,{delay:n=0,duration:e=400}){const o=+getComputedStyle(t).opacity;return{delay:n,duration:e,css:t=>`opacity: ${t*o}`}}function Y(t,{delay:n=0,speed:e,duration:o,easing:r=U}){const i=t.getTotalLength();return void 0===o?o=void 0===e?800:i/e:"function"==typeof o&&(o=o(i)),{delay:n,duration:o,easing:r,css:(t,n)=>`stroke-dasharray: ${t*i} ${n*i}`}}function Z(t,n,e){const o=Object.create(t);return o.char=n[e],o.i=e,o}function tt(n){for(var e,o,r,i,s,c=[],u=0;u<"WORK IN PROGRESS".length;u+=1)c[u]=nt(Z(n,"WORK IN PROGRESS",u));return{c(){e=y("svg"),o=y("polyline"),i=b(),s=g("div");for(var t=0;t<c.length;t+=1)c[t].c();x(o,"points",n.points),x(o,"stroke","var(--second-color-4)"),x(o,"fill","transparent"),x(o,"stroke-width","5"),x(o,"class","svelte-os3ik3"),x(e,"class","svelte-os3ik3"),x(s,"class","centered svelte-os3ik3")},m(t,n){$(t,e,n),h(e,o),$(t,i,n),$(t,s,n);for(var r=0;r<c.length;r+=1)c[r].m(s,null)},p(t,n){t.points&&x(o,"points",n.points)},i(t){r||F(()=>{(r=M(o,Y,{duration:1e3,delay:400,easing:V})).start()});for(var n=0;n<"WORK IN PROGRESS".length;n+=1)q(c[n])},o:t,d(t){t&&(m(e),m(i),m(s)),v(c,t)}}}function nt(n){var e,o,r;return{c(){e=g("span"),o=w(n.char)},m(t,n){$(t,e,n),h(e,o)},p:t,i(t){r||F(()=>{(r=M(e,X,{delay:1e3+150*n.i,duration:800})).start()})},o:t,d(t){t&&m(e)}}}function et(n){var e,o;F(n.onwindowresize);var r=n.visible&&tt(n);return{c(){var t,i,s,c;r&&r.c(),e=w(""),t=window,i="resize",s=n.onwindowresize,t.addEventListener(i,s,c),o=(()=>t.removeEventListener(i,s,c))},m(t,n){r&&r.m(t,n),$(t,e,n)},p(t,n){n.visible?r?(r.p(t,n),q(r,1)):((r=tt(n)).c(),q(r,1),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i(t){q(r)},o:t,d(t){r&&r.d(t),t&&m(e),o()}}}function ot(t,n,e){let o,r=[0,200,250,200,250,100,175,100,175,150],i=0,s="0 200 250 200 250 100 175 100 175 150",c=!1;return S(()=>{e("visible",c=!0)}),t.$$.update=((t={width:1,pnts:1,xOffset:1})=>{t.width&&e("xOffset",o=i/2-175),(t.pnts||t.xOffset)&&e("points",s=r.map((t,n)=>n%2?t:t+o).reduce((t,n)=>t+" "+n.toString(),""))}),{width:i,points:s,visible:c,onwindowresize:function(){i=window.innerWidth,e("width",i)}}}class rt extends Q{constructor(t){super(),J(this,t,ot,et,s,[])}}function it(t,n,e){const o=Object.create(t);return o.char=n[e],o.i=e,o}function st(n){for(var e,o=[],r=0;r<"FIDIΛ".length;r+=1)o[r]=ct(it(n,"FIDIΛ",r));return{c(){e=g("div");for(var t=0;t<o.length;t+=1)o[t].c();x(e,"class","h1 svelte-17i4xzi")},m(t,n){$(t,e,n);for(var r=0;r<o.length;r+=1)o[r].m(e,null)},i(t){for(var n=0;n<"FIDIΛ".length;n+=1)q(o[n])},o:t,d(t){t&&m(e),v(o,t)}}}function ct(n){var e,o,r;return{c(){e=g("span"),o=w(n.char)},m(t,n){$(t,e,n),h(e,o)},p:t,i(t){r||F(()=>{(r=M(e,X,{delay:200+150*n.i,duration:800})).start()})},o:t,d(t){t&&m(e)}}}function ut(t){var n,e,o,r,i=t.visible&&st(t),s=new rt({});return{c(){n=g("div"),i&&i.c(),e=b(),o=g("div"),s.$$.fragment.c(),x(o,"class","wip svelte-17i4xzi"),x(n,"class","app svelte-17i4xzi")},m(t,c){$(t,n,c),i&&i.m(n,null),h(n,e),h(n,o),T(s,o,null),r=!0},p(t,o){o.visible?i?q(i,1):((i=st(o)).c(),q(i,1),i.m(n,e)):i&&(i.d(1),i=null)},i(t){r||(q(i),q(s.$$.fragment,t),r=!0)},o(t){!function(t,n,e){if(t&&t.o){if(K.has(t))return;K.add(t),L.callbacks.push(()=>{K.delete(t),e&&(t.d(1),e())}),t.o(n)}}(s.$$.fragment,t),r=!1},d(t){t&&m(n),i&&i.d(),B(s)}}}function at(t,n,e){let o=!1;return S(()=>{e("visible",o=!0)}),{visible:o}}return new class extends Q{constructor(t){super(),J(this,t,at,ut,s,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
