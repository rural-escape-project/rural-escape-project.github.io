import{s as D,a as A,e as g,t as H,z as G,f as p,d as B,c as _,b as E,m as I,h as a,A as T,x as R,i as S,j as s,B as N,n as Z,C as z}from"../chunks/scheduler.ye4a-eJd.js";import{S as U,i as J}from"../chunks/index.BQjGaPDQ.js";import{s as K,p as O,L as Q}from"../chunks/i18n-svelte.CkdvdraI.js";const V=""+new URL("../assets/404.D1ZeZ6c-.webp",import.meta.url).href;function W(r){var x;let h,o,e,n,c=(r[0].status??"404")+"",L,C,f,d=(r[0].status===404?r[1].Page404NotFound():(x=r[0].error)==null?void 0:x.message)+"",P,k,l,j,q,i,v=r[1].Page404BackHome()+"",w;return document.title="404 | "+K.title,{c(){h=A(),o=g("main"),e=g("article"),n=g("h1"),L=H(c),C=A(),f=g("p"),P=H(d),k=A(),l=g("img"),q=A(),i=g("a"),w=H(v),this.h()},l(t){G("svelte-uqtufk",document.head).forEach(p),h=B(t),o=_(t,"MAIN",{});var b=E(o);e=_(b,"ARTICLE",{itemscope:!0,itemtype:!0,class:!0});var m=E(e);n=_(m,"H1",{class:!0});var y=E(n);L=I(y,c),y.forEach(p),C=B(m),f=_(m,"P",{class:!0});var F=E(f);P=I(F,d),F.forEach(p),k=B(m),l=_(m,"IMG",{draggable:!0,class:!0,src:!0,alt:!0}),q=B(m),i=_(m,"A",{href:!0,class:!0,target:!0});var M=E(i);w=I(M,v),M.forEach(p),m.forEach(p),b.forEach(p),this.h()},h(){a(n,"class","text-6xl"),a(f,"class","text-lg"),a(l,"draggable","false"),a(l,"class","select-none max-w-lg w-full h-auto"),T(l.src,j=V)||a(l,"src",j),a(l,"alt","404.webp"),R(l,"hidden",r[0].status!==404),a(i,"href","/"),a(i,"class","btn btn-ghost underline text-lg !p4"),a(i,"target","_self"),a(e,"itemscope",""),a(e,"itemtype","https://schema.org/BlogPosting"),a(e,"class","pt-[4rem] relative flex flex-col items-center gap-4 justify-center")},m(t,u){S(t,h,u),S(t,o,u),s(o,e),s(e,n),s(n,L),s(e,C),s(e,f),s(f,P),s(e,k),s(e,l),s(e,q),s(e,i),s(i,w)},p(t,[u]){var b;u&1&&c!==(c=(t[0].status??"404")+"")&&N(L,c),u&3&&d!==(d=(t[0].status===404?t[1].Page404NotFound():(b=t[0].error)==null?void 0:b.message)+"")&&N(P,d),u&1&&R(l,"hidden",t[0].status!==404),u&2&&v!==(v=t[1].Page404BackHome()+"")&&N(w,v)},i:Z,o:Z,d(t){t&&(p(h),p(o))}}}function X(r,h,o){let e,n;return z(r,O,c=>o(0,e=c)),z(r,Q,c=>o(1,n=c)),[e,n]}class te extends U{constructor(h){super(),J(this,h,X,W,D,{})}}export{te as component};
