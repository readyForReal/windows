!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){document.addEventListener("DOMContentLoaded",()=>{"use strict";let e=n(1),t=n(2),o=n(3),l=n(4),r=n(5);e(),t(),o(),l(),r()})},function(e,t){e.exports=(()=>{let e=document.querySelectorAll(".phone_link"),t=document.querySelector(".popup"),n=document.querySelector(".header_btn"),o=document.querySelector(".popup_engineer"),l=document.querySelectorAll(".popup_close");popupToggle=((e,t)=>{event&&event.preventDefault(),e.style.display="block",document.querySelector("html").style.overflow="hidden",e.addEventListener("click",()=>{event.target==e&&(e.style.display="none",document.querySelector("html").style.overflow="visible")}),t.addEventListener("click",()=>{e.style.display="none",document.querySelector("html").style.overflow="visible"})}),e[0].addEventListener("click",()=>{popupToggle(t,l[0])}),e[1].addEventListener("click",()=>{popupToggle(t,l[0])}),n.addEventListener("click",()=>{popupToggle(o,l[1])}),func=(()=>{popupToggle(t,l[0])}),setTimeout(func,6e4)})},function(e,t){e.exports=(()=>{let e=document.querySelector(".glazing_slider"),t=document.querySelectorAll(".glazing_block a"),n=document.querySelectorAll(".glazing_block"),o=document.querySelectorAll(".tab_content"),l=document.querySelector(".decoration_slider"),r=document.querySelectorAll(".decoration_item div"),c=document.querySelectorAll(".decoration_item"),u=document.querySelectorAll(".row")[8].children,i=(e,t,n,o)=>{for(let l=e;l<t.length;l++)t[l].style.display="none",n[l].classList.remove(o)};i(1,o,t,"active"),i(1,u,r,"after_click"),showTabContent=((e,t,n,o)=>{"none"==t[e].style.display&&(t[e].style.display="block",n[e].classList.add(o))}),toggleTabs=((e,t,n,o,l)=>{let r=event.target;if(r&&r.classList.contains(e)||r&&r.parentNode.classList.contains(e)||r&&r.parentNode.parentNode.classList.contains(e))for(let e=0;e<t.length;e++)if(r==t[e]||r.parentNode==t[e]||r.parentNode.parentNode==t[e]){i(0,n,o,l),showTabContent(e,n,o,l);break}}),e.addEventListener("click",()=>{toggleTabs("glazing_block",n,o,t,"active")}),l.addEventListener("click",()=>{toggleTabs("decoration_item",c,u,r,"after_click")})})},function(e,t){e.exports=(()=>{const e=e=>{let t=Date.parse(e)-Date.parse(new Date),n=Math.floor(t/1e3%60),o=Math.floor(t/1e3/60%60),l=Math.floor(t/36e5%24);return{total:t,days:Math.floor(t/36e5/24),hours:l,minutes:o,seconds:n}};((t,n)=>{let o=document.getElementById(t),l=o.querySelector(".days"),r=o.querySelector(".hours"),c=o.querySelector(".minutes"),u=o.querySelector(".seconds"),i=setInterval(function(){let t=e(n);t.days<10&&(t.days="0"+t.days),l.textContent=t.days,t.hours<10&&(t.hours="0"+t.hours),r.textContent=t.hours,t.minutes<10&&(t.minutes="0"+t.minutes),c.textContent=t.minutes,t.seconds<10&&(t.seconds="0"+t.seconds),u.textContent=t.seconds,t.total<=0&&(clearInterval(i),l.textContent="00",r.textContent="00",c.textContent="00",u.textContent="00")},1e3)})("timer","2019-07-04")})},function(e,t){e.exports=(()=>{let e=document.querySelector(".gallery"),t=document.querySelector(".gallery").children,n=document.querySelector(".popup_gallery"),o=document.querySelector(".box");e.addEventListener("click",function(e){e.preventDefault(),document.querySelector("html").style.overflow="hidden";let l=e.target;for(let e=0;e<t.length+1;e++)l.parentNode.parentNode==t[e-1]&&(n.style.display="block",o.src=`img/our_works/big_img/${e}.png`)}),n.addEventListener("click",function(e){e.target!=o&&(n.style.display="none",document.querySelector("html").style.overflow="visible")})})},function(e,t){e.exports=(()=>{let e=document.querySelectorAll("input[name=user_phone]");for(let t=0;t<e.length;t++)e[t].addEventListener("input",function(){e[t].value=e[t].value.match(/[\+0-9]+/gi)});let t={loading:"Loading...",success:"Thank you, we will be in touch soon!",failure:"Something went wrong..."},n=document.querySelectorAll(".form");function o(e){e.preventDefault();let n=this.getElementsByTagName("input"),o=document.createElement("div");this.appendChild(o);let l=new FormData(this);(()=>new Promise((e,t)=>{let n=new XMLHttpRequest;if(n.open("POST","server.php"),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.onreadystatechange=(()=>{n.readyState<4?e():4==n.readyState&&(200==n.status&&n.status<300?e():t())}),this==h){l.forEach(function(e,t){q[t]=e});let e=JSON.stringify(q);n.send(e)}else{let e={};l.forEach(function(t,n){e[n]=t});let t=JSON.stringify(e);n.send(t)}}))().then(()=>o.innerHTML=t.loading).then(()=>{setTimeout(()=>{o.innerHTML=t.success},2e3),setTimeout(()=>{o.innerHTML=""},4e3)}).catch(()=>o.innerHTML=t.failture).then(()=>{for(let e=0;e<n.length;e++)n[e].value=""})}for(let e=0;e<n.length-1;e++)n[e].addEventListener("submit",o);let l=document.querySelectorAll(".glazing_price_btn"),r=document.querySelector(".popup_calc"),c=document.querySelector(".popup_calc_close"),u=document.querySelectorAll(".balcon_icons img"),i=document.querySelectorAll(".big_img img"),d=document.querySelector(".popup_calc_button"),a=document.querySelectorAll(".popup_calc input"),s=document.querySelector(".popup_calc_profile"),p=document.querySelector(".popup_calc_profile_close"),y=document.querySelector(".popup_calc_profile_button"),m=document.getElementById("view_type"),f=document.querySelector(".popup_calc_end"),g=document.querySelector(".popup_calc_end_close"),h=document.querySelectorAll(".form")[8],v=document.querySelectorAll(".popup_form .form")[2],S=v.querySelectorAll("input"),b=v.querySelectorAll("button")[0],q={};for(let e=0;e<a.length;e++)a[e].addEventListener("input",function(){a[e].value=a[e].value.match(/[\+0-9]+/gi)}),a[e].addEventListener("change",()=>{(a[e].value<1||a[e].value.startsWith(0))&&(a[e].value="")});const _=()=>{q={};for(let e=0;e<a.length;e++)a[e].value="";w(0),x(0),m.selectedIndex="0",L.checked=!1,E.checked=!1;for(let e=0;e<S.length;e++)S[e].value="";console.log("obj and inputs are clean")},k=(e,t)=>{event&&event.preventDefault(),e.style.display="block",document.querySelector("html").style.overflow="hidden",e.addEventListener("click",()=>{event.target==e&&(e.style.display="none",document.querySelector("html").style.overflow="visible",_())}),t.addEventListener("click",()=>{e.style.display="none",document.querySelector("html").style.overflow="visible",_()})};for(let e=0;e<l.length;e++)l[e].addEventListener("click",()=>{k(r,c)});d.addEventListener("click",function(){q.width=document.getElementById("width").value,q.height=document.getElementById("height").value,q.frame&&q.width&&q.height?(r.style.display="none",k(s,p)):console.log("not all data recieved")});let L=document.querySelectorAll(".checkbox")[0],E=document.querySelectorAll(".checkbox")[1];L.addEventListener("change",e=>{L.checked?E.disabled=!0:(L.disabled=!1,E.disabled=!1),e.stopImmediatePropagation()}),E.addEventListener("change",e=>{E.checked?L.disabled=!0:(L.disabled=!1,E.disabled=!1),e.stopImmediatePropagation()}),y.addEventListener("click",()=>{q.type=m.options[m.selectedIndex].text,q.coldBox=L.checked,q.warmBox=E.checked,q.coldBox||q.warmBox?(s.style.display="none",k(f,g)):console.log("no boxes checked")}),b.addEventListener("click",()=>{""!=S[0].value&&""!=S[1].value?h.addEventListener("submit",o):console.log("fill out both fields")});const w=e=>{for(let t=e;t<i.length;t++)i[t].style.display="none",u[t].style.transform="",i[t].style.transform=""};w(1);const x=e=>{"none"==i[e].style.display&&(i[e].style.display="block",i[e].style.transform="translateX(50%)")};for(let e=0;e<u.length;e++)u[e].addEventListener("click",function(t){t.preventDefault();let n=t.target;q.frame=n.parentNode.classList.value,w(0),x(e),u[e].style.transform="scale(1.25)"})})}]);