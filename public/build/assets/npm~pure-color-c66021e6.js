import{g as c}from"./npm~@ckeditor~ckeditor5-build-classic_-5cff4652.js";function f(r){for(var t="#",a=1;a<r.length;a++){var o=r.charAt(a);t+=o+o}return t}function l(r){(r.length===4||r.length===5)&&(r=f(r));var t=[parseInt(r.substring(1,3),16),parseInt(r.substring(3,5),16),parseInt(r.substring(5,7),16)];if(r.length===9){var a=parseFloat((parseInt(r.substring(7,9),16)/255).toFixed(2));t.push(a)}return t}var g=l;const H=c(g);function p(r){var t=r[0],a=r[1],o=r[2],i=Math.min(t,a,o),n=Math.max(t,a,o),u=n-i,s,e,h;return n==0?e=0:e=u/n*1e3/10,n==i?s=0:t==n?s=(a-o)/u:a==n?s=2+(o-t)/u:o==n&&(s=4+(t-a)/u),s=Math.min(s*60,360),s<0&&(s+=360),h=n/255*1e3/10,[s,e,h]}var m=p;const R=c(m);function b(r,t,a){return Math.min(Math.max(r,t),a)}var M=b,x=M;function v(r){var t=Math.round(x(r,0,255)),a=t.toString(16);return a.length==1?"0"+a:a}function T(r){var t=r.length===4?v(r[3]*255):"";return"#"+v(r[0])+v(r[1])+v(r[2])+t}var _=T;const j=c(_);function d(r){var t=r[0]/60,a=r[1]/100,e=r[2]/100,o=Math.floor(t)%6,i=t-Math.floor(t),n=255*e*(1-a),u=255*e*(1-a*i),s=255*e*(1-a*(1-i)),e=255*e;switch(o){case 0:return[e,s,n];case 1:return[u,e,n];case 2:return[n,e,s];case 3:return[n,u,e];case 4:return[s,n,e];case 5:return[e,n,u]}}var I=d;const q=c(I);export{R as a,q as b,H as h,j as r};