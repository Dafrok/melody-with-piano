import{r as c,o as l,c as u,a as i,b as x,t as d,d as w,e as S,F as D,f as L}from"./vendor.13406682.js";const N=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};N();var b="assets/s-melody.caa06d75.png",O="assets/s-piano.0e397176.png";const V={class:"clock"},A=i("img",{class:"melody",src:b},null,-1),C=i("img",{class:"piano",src:O},null,-1),E={class:"days"},F=i("span",{class:"small"},"Days",-1),I={class:"time"},M={setup(p){const s=new Date;s.setFullYear(2021),s.setMonth(8),s.setDate(28),s.setHours(21),s.setMinutes(0),s.setSeconds(0),s.setMilliseconds(0);function n(){const m=Date.now()-s,_=parseInt(m/1e3,10),y=_%60,h=(_-y)/60,v=h%60,g=(h-v)/60,k=g%24;return{days:((g-k)/24).toString(),hours:k.toString().padStart(2,"0"),minutes:v.toString().padStart(2,"0"),seconds:y.toString().padStart(2,"0")}}const o=n(),e=c(o.days),t=c(o.hours),r=c(o.minutes),f=c(o.seconds);return setInterval(()=>{const a=n();e.value=a.days,t.value=a.hours,r.value=a.minutes,f.value=a.seconds},1e3),(a,m)=>(l(),u("div",V,[A,C,i("time",E,[x(d(e.value),1),F]),i("time",I,d(t.value)+":"+d(r.value)+":"+d(f.value),1)]))}};const j={key:0},B={key:1,style:{"font-size":"16px"}},K={setup(p){const s=c(0);async function n(){const t=await(await fetch("https://api.github.com/repos/Dafrok/melody-with-piano/issues/1")).json();t.state==="open"?s.value=1:t.state==="closed"&&(s.value=2)}n();async function o(){confirm("Are you sure to kill his love in certain?")&&confirm("He is still love you.Do you insist?")&&confirm("Really?")&&(await fetch("https://melodic.dafrok.top/api/killmylove",{method:"POST",body:"kill my love"})).text()==="killed"&&(s.value=2)}return(e,t)=>(l(),u(D,null,[s.value===1?(l(),u("main",j,[w(M),i("div",{class:"kill",onClick:o},"KILL LOVE")])):S("",!0),s.value===2?(l(),u("div",B," 404 Error: Can't found his love. ")):S("",!0)],64))}};L(K).mount("#app");
