import{w as g}from"./entry.DGgNg1Yx.js";import{L as o,d}from"./i18n-svelte.DzOG4PQm.js";import{D as a}from"./scheduler.ye4a-eJd.js";const s="theme",h="dark";function m(){const r=()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",e=()=>!!localStorage.getItem(s)&&localStorage.getItem(s)||r()||h,t=n=>{{switch(n){case"dark":window.document.body.classList.add("dark"),window.document.body.classList.remove("light"),localStorage.setItem(s,"dark");break;case"light":window.document.body.classList.add("light"),window.document.body.classList.remove("dark"),localStorage.setItem(s,"light");break}l(n)}},{subscribe:c,set:l,update:u}=g(e());return{subscribe:c,get:()=>e(),get_color:()=>{switch(e()){case"light":return"white";case"dark":return"black";default:return"#FFFFFF"}},dark:()=>{t("dark")},light:()=>{t("light")},toggle:()=>u(n=>{const i=n==="dark"?"light":"dark";return t(i),i})}}const S=m(),p=r=>{let e=(new Date().getTime()-new Date(r).getTime())/6e4,t=Math.round(e);return t===0?a(o).JustNow():t<60?a(o).MinuteAgo(t):(e=e/60,t=Math.round(e),t<24?a(o).HourAgo(t):(e=e/24,t=Math.round(e),t<30?a(o).DayAgo(t):(e=e/30,t=Math.round(e),t<12?a(o).MonthAgo(t):(e=e/12,t=Math.round(e),a(o).YearAgo(t)))))},b=r=>new Date(r).toLocaleString(d.toPublishedString.locales,d.toPublishedString.options),T=r=>new Date(r).toLocaleString(d.toUpdatedString.locales,d.toUpdatedString.options);export{T as a,b as d,p as l,S as t};
